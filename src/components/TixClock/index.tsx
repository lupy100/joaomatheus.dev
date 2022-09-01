import { FunctionComponent, Key, useEffect, useState } from 'react'
import { TIX_CLOCK } from './constants'
import { IColumn, ITixClock } from './models'
import { Led, StyledTime, Wrapper, StyledColumn } from './styles'

const TixClock: FunctionComponent = () => {
  const [tixClock, setTixClock] = useState(TIX_CLOCK)
  const [currentHours, setCurrentHours] = useState('00:00')

  setInterval(() => {
    const today = new Date(),
      hours = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds()
    setCurrentHours(`${hours}:${min}:${sec}`)
  }, 1000)

  useEffect(() => {
    console.log('tio')
    updateTime()
  }, [currentHours])

  const updateTime = () => {
    teste({ aaaaa: 5, tamanhoArary: 9 })
    console.log(tixClock)
    // setTixClock(aux)
  }

  const teste = ({ aaaaa, tamanhoArary }) => {
    const aux = TIX_CLOCK
    aux['column-2'].leds = Array.from({ length: tamanhoArary }, () => false)

    for (let index = 0; index < aaaaa; index++) {
      const randomNumber = parseInt(Math.random() * (tamanhoArary - 0) + 0)
      aux['column-2'].leds[randomNumber] = true
    }
    aux['column-2'].color = 'pink'
    setTixClock(aux)
  }

  // const clearLeds = () => TIX_CLOCK

  function Column({ columnName }: IColumn) {
    const { leds, color } = tixClock[columnName as keyof ITixClock]

    const listItems = leds.map((led: boolean, key: Key) => (
      <Led key={key} active={led} color={color} />
    ))
    return <StyledColumn className={columnName}>{listItems}</StyledColumn>
  }

  return (
    <>
      {currentHours}
      <StyledTime dateTime='10:37'>
        <Wrapper>
          <Column columnName='column-1' />
          <Column columnName='column-2' />
          <Column columnName='column-3' />
          <Column columnName='column-4' />
        </Wrapper>
      </StyledTime>
    </>
  )
}

export default TixClock
