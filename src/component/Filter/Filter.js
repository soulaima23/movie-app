import React from 'react'

const Filter = ({handleChange,title}) => {
  return (
    <div className='col-md-4'>
      <label> search</label>
      <input type="text" onChange={handleChange}title={title}></input>
    </div>
  )
}

export default Filter