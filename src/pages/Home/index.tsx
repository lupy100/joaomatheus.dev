import React from 'react'
import TixClock from '~/components/TixClock'

const Home: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <TixClock />

      <iframe
        style={{ marginTop: '50px' }}
        width='500'
        height='315'
        src='https://www.youtube.com/embed/G0A23LQb1Po'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  )
}

export default Home
