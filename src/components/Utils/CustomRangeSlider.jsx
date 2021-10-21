import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const CustomRangeSlider = () => {
  const [volume, setVolume] = useState()

  const handleOnChange = (value) => {
    setVolume(value)
  }

  return (
    <Slider
      value={volume}
      orientation="horizontal" //vertical
      onChange={(e) => handleOnChange(e)}
    />
  )
}

export default CustomRangeSlider