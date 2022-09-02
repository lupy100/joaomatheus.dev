import { FunctionComponent, Key, useEffect, useState } from 'react'
import { TIX_CLOCK } from './constants'
import { IColumn, ITixClock } from './models'
import { Led, StyledTime, Wrapper, StyledColumn } from './styles'

const TixClock: FunctionComponent = () => {
  const [tixClock, setTixClock] = useState(TIX_CLOCK)
  const [currentHours, setCurrentHours] = useState('00:00')

  setInterval(() => {
    const today = new Date(),
      hours = ('0' + today.getHours()).slice(-2),
      min = today.getMinutes(),
      sec = today.getSeconds()
    setCurrentHours(`${hours}:${min}:${sec}`)
  }, 1000)

  useEffect(() => {
    updateTime()
  }, [currentHours])

  const updateTime = () => {
    const splitedNumbers = currentHours.replace(/:/g, '').split('')
    console.log(splitedNumbers)
    putLedsTime(parseInt(splitedNumbers[0]), 3, 1)
    putLedsTime(parseInt(splitedNumbers[1]), 9, 2)
    putLedsTime(parseInt(splitedNumbers[2]), 6, 3)
    putLedsTime(parseInt(splitedNumbers[3]), 9, 4)
  }

  const putLedsTime = (currentTimeValue: number, tamanhoArary: number, column: number) => {
    const aux = TIX_CLOCK
    aux[`column-${column}`].leds = Array.from({ length: tamanhoArary }, () => false)

    for (let index = 0; index < currentTimeValue; index++) {
      const randomNumber = Math.floor(Math.random() * (tamanhoArary - 0) + 0)
      aux[`column-${column}`].leds[randomNumber]
        ? (currentTimeValue += 1)
        : (aux[`column-${column}`].leds[randomNumber] = true)
    }
    aux[`column-${column}`].color = 'pink'
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
