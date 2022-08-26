import React from 'react'
import { Button } from '~/components'
import { SomeComp } from './styles'

const Home: React.FC = () => {
  return (
    <div>
      <SomeComp size='24px'>Componente</SomeComp>
      <Button color='white' onClick={() => alert('Apenas um teste')}>
        Teste
      </Button>
    </div>
  )
}

export default Home
