import React from 'react'
import Fade from 'react-reveal/Fade';//react reveal
import clown from '../img/clown1.jpg'
import magic from '../img/baguette.jpg'
import tiger from '../img/tigre1.jpg'

export default function Performances() {
  return (
    <div className='perf-container'>
      <div>
      <Fade left>
        <img src={clown} alt='clown'>
        </img>
      </Fade>
      </div>
      <div>
      <Fade bottom>
        <img src={magic} alt='magic'>
        </img>
      </Fade>
      </div>
      <div>
      <Fade right>
        <img src={tiger} alt='tiger'>
        </img>
      </Fade>
      </div>
    </div>
  )
}
