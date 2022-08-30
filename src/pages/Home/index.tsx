import React from 'react'
import { Button } from '~/components'

const Home: React.FC = () => {
  return (
    <div>
      <Button color='primary' onClick={() => alert('Apenas um teste')}>
        Primary
      </Button>
      <Button color='secondary' onClick={() => alert('Apenas um teste')}>
        Secondary
      </Button>
    </div>
  )
}

export default Home
