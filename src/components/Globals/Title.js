import React from 'react'

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col text-venter mb-3">
        <h1 className="title display-4 text-capitalize font-weight-bold">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default Title
