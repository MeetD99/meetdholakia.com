import React from 'react'

const Projects = () => {
  return (
    <div className='h-screen w-[100vw]'>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
    />
    </div>
  )
}

export default Projects