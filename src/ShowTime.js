import React from 'react'

const ShowTime = (props) => {
    const time = props.time
    const minutes = Math.round(time / 60)
    const seconds = time % 60
    const minutesStr = minutes < 10 ? `0${ minutes }` : minutes
    const secondsStr = seconds < 10 ? `0${ seconds }` : seconds
  
    return(
      <div className='time-laps'>
        <h1>{ `${ minutesStr }:${ secondsStr }` }</h1>
        <p>Average time per lap</p>
      </div>
    )
  }

  export default ShowTime
  