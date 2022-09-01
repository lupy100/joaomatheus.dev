import styled from '@emotion/styled'
import wood from '~/assets/light-wood-planks.jpg'
interface ILedProps {
  active?: boolean
  color: string
}

const proportion = 30

const widthBase = `${proportion}px`
const marginBase = `${proportion / 10}px`

export const StyledTime = styled.time({
  display: 'flex',
  width: 'fit-content',
  padding: widthBase,
  backgroundColor: '#f6e5d4',
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

export const Led = styled.div<ILedProps>(({ active, color }) => ({
  width: widthBase,
  height: widthBase,
  background: active ? color : 'white',
  borderRadius: `calc(${widthBase} / 5)`,
}))

export const StyledColumn = styled.div({
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
      '&:nth-of-type(-n+6)': {
        marginBottom: marginBase,
      },
      '&:not(&:nth-of-type(3n))': {
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
      '&:nth-of-type(-n+4)': {
        marginBottom: marginBase,
      },
      '&:not(&:nth-of-type(2n))': {
        marginRight: marginBase,
      },
    },
  },
})
