import React, { useState, useEffect } from 'react'

import './App.css'

import ShowLaps from './ShowLaps'
import ShowTime from './ShowTime'
import Button from './Button'

function App() {
  const [numLaps, setNumLaps] = useState(0)
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let timer = null
    
    if(running){
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000)
    }

    return () => {
      if(timer){
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumLaps(numLaps + 1)
  }

  const decrement = () => {
    if(numLaps > 0){
      setNumLaps(numLaps - 1)
    }
  }

  const reset = () => {
    setNumLaps(0)
    setTime(0)
  }

  return (
    <div className='container'>
      <div className='title-app'>
        <h2>LAP-COUNTER</h2>
      </div>
      <div className='body-app'>
        <ShowLaps laps={ numLaps } />
        <div className='btn-laps'>
          <Button className='btn-plus' text='+' onClick={ increment } />
          <Button className='btn-less' text='-' onClick={ decrement } />
        </div>
        {
          numLaps > 0 &&
          <ShowTime time={ Math.round(time / numLaps) } />
        }
        <div className='btn-options'>
          <Button className='btn-start' text={ running ? 'PAUSE' : 'START' } onClick={ toggleRunning } />
          <Button className='btn-restart' text='RESTART' onClick={ reset } />
        </div>
      </div>
    </div>
  )
}

export default App
