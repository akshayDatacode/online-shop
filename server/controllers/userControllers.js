"use strict";
const { validationResult } = require("express-validator");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HttpResponse = require("../models/http-response");
const User = require('../models/userModel')

//signup==========================================================================

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpResponse('Invalid inputs passed, please check your data.', 422)
    );
  }
  console.log("req.body", req.body)
  const { name, email, password, address, gender, phone, userType } = req.body;

  // checking if user already exists
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpResponse(
      'Signing up failed, Something went wrong while checking existing user',
      500
    );
    return res.status(500).json({ response: error });
  }
  if (existingUser) {
    const error = new HttpResponse(
      'User exists already, please login instead.',
      422
    );
    return res.status(422).json({ response: error });
  }

  //creating a hashed password and saving the user into mongo.
  let hashedPassword;
  try {
    hashedPassword = await bycrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpResponse("Hashing Failed ..", 500)
    return res.status(500).json({ response: error });
  }
  var createdUser;

  createdUser = new User({
    email,
    password: hashedPassword,
    name,
    address, gender, phone, userType
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.log(err)
    const error = new HttpResponse(
      err,
      500
    );
    return res.status(500).json({ response: error })
  }
  //generating JWT TOKEN- DO NOT TOUCH
  let token;
  try {
    token = jwt.sign(
      { _id: createdUser._id, email: createdUser.email, userType: createdUser.userType },
      "this is www.datacode.in private key",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpResponse(
      "Token generation failed, Login not done",
      500
    );
    return res.status(500).json({ response: error });
  }

  res.status(201).json({
    id: createdUser.id,
    email: createdUser.email,
    name: createdUser.name,
    token: token,
  });
};

//===========================================================================

// LOGIN FUNCTION
exports.login = async (req, res) => {
  const { email, password } = req.body;

  //trying to find if user email exists.
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpResponse(
      "Something went wrong while checking user email",
      500
    );
    return res.status(500).json({ response: error });
  }
  if (!existingUser) {
    const error = new HttpResponse(
      "Invalid credentials, could not log you in.",
      401
    );
    return res.status(401).json({ response: error });
  }
  let isValidPassword;
  try {
    isValidPassword = await bycrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpResponse(
      "Something went wrong while comparing passwords",
      500
    );
    return res.status(500).json({ response: error });
  }

  if (!isValidPassword) {
    const error = new HttpResponse("Wrong password entered", 401);
    return res.status(401).json({ response: error });
  }

  //generating JWT TOKEN- DO NOT TOUCH
  let token;
  try {
    token = jwt.sign(
      { _id: existingUser._id, email: existingUser.email, userType: existingUser.userType },
      "this is www.datacode.in private key",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpResponse(
      "Token generation failed, Login not done",
      500
    );
    return res.status(500).json({ response: error });
  }
  res.status(201).json({
    userId: existingUser.userId,
    email: existingUser.email,
    userType: existingUser.userType,
    token: token,
  });

  res.send({
    userId: existingUser.userId,
    email: existingUser.email,
    userType: existingUser.userType,
    token: token,
  });
};