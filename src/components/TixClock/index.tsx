import { FunctionComponent, useEffect, useState } from 'react'
import { Led, StyledTime, Wrapper, Column } from './styles'

const TixClock: FunctionComponent = () => {
  const [currentHours, setCurrentHours] = useState('00:00')
  useEffect(() => {
    setInterval(() => {
      const today = new Date(),
        hours = today.getHours(),
        min = today.getMinutes()
      setCurrentHours(`${hours}:${min}`)
    }, 1000)
  }, [])

  return (
    <StyledTime dateTime='10:37'>
      <Wrapper>
        <Column className='column-1'>
          <Led active />
          <Led />
          <Led />
        </Column>
        <Column className='column-2'>
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
          <Led />
        </Column>
        <Column className='column-3'>
          <Led />
          <Led />
          <Led active />
          <Led />
          <Led active />
          <Led active />
        </Column>
        <Column className='column-4'>
          <Led />
          <Led active />
          <Led active />
          <Led active />
          <Led active />
          <Led />
          <Led active />
          <Led active />
          <Led active />
        </Column>
      </Wrapper>
    </StyledTime>
  )
}

export default TixClock
