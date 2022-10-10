import React from 'react'

function BlocImage({ img, ...restProps }) {
  return (<img src={img} {...restProps} alt="" />)
}

export default BlocImage