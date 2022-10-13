"use strict";
const { validationResult } = require("express-validator");
const bycrypt = require("bcryptjs");

const HttpResponse = require("../models/http-response");
const User = require('../models/user')

//signup==========================================================================

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpResponse('Invalid inputs passed, please check your data.', 422)
    );
  }
  console.log(req.body)
  const { name, email, password } = req.body;

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

  res.status(201).json({
    id: createdUser.id,
    email: createdUser.email,
    name: createdUser.name
  });
};