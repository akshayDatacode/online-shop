import React from 'react'
import Loader from "react-loader-spinner";

const CustomLoader = ({
  color,
  type,
}) => {
  return (
    <div className="row m-0 d-flex justify-content-center">
      <div className="col-12 align-items-center text-center ">
        <Loader
          type={type || "ThreeDots"}
          color={color || "#797676"}
          height={50}
          width={50}
          timeout={1000} //1 secs
        />
      </div>
    </div>
  )
}

export default CustomLoader 