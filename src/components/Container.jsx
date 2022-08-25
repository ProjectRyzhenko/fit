import React from "react"

function Container(props) {
  return (
    <div className={props.display == 'grid' ? `grid ${props.media}` : ''}>
      {props.children}
    </div>
  )
}

export default Container