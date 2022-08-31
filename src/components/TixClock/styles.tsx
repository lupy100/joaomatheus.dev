import styled from '@emotion/styled'
import { media } from '~/config/breakpoints'
import wood from '~/assets/light-wood-planks.jpg'
interface ILedProps {
  active?: boolean
}
const proportion = 30

const widthBase = `${proportion}px`
const marginBase = `${proportion / 10}px`

export const StyledTime = styled.time({
  display: 'flex',
  width: 'fit-content',
  padding: widthBase,
  backgroundImage: `url(${wood})`,
  backgroundSize: 'cover',
  borderRadius: widthBase,
})

export const Wrapper = styled.div({
  width: '100%',
  height: '100%',
  background: 'black',
  borderRadius: `calc(${widthBase} / 3)`,
  padding: widthBase,
  color: 'white',
  display: 'flex',
})

export const Led = styled.div<ILedProps>(({ theme, active }) => ({
  width: widthBase,
  height: widthBase,
  background: active ? theme.color.primary : 'white',
  borderRadius: `calc(${widthBase} / 5)`,
  [media.tablet]: {
    background: active ? theme.color.secondary : 'white',
  },
}))

export const Column = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  '&.column-1': {
    flexDirection: 'column',
    marginRight: widthBase,
    [String(Led)]: {
      '&:not(:last-child)': {
        marginBottom: marginBase,
      },
    },
  },
  '&.column-2, &.column-4': {
    width: `calc(${widthBase} * 3 + ${marginBase} * 2)`,
    [String(Led)]: {
      '&:nth-child(-n+6)': {
        marginBottom: marginBase,
      },
      '&:not(:nth-child(3n))': {
        marginRight: marginBase,
      },
    },
  },
  '&.column-2': {
    marginRight: widthBase,
  },
  '&.column-3': {
    width: `calc(${widthBase} * 2 + ${marginBase})`,
    marginRight: widthBase,
    [String(Led)]: {
      '&:nth-child(-n+4)': {
        marginBottom: marginBase,
      },
      '&:not(:nth-child(2n))': {
        marginRight: marginBase,
      },
    },
  },
})
