import styled from '@emotion/styled'

interface StyledComponentProps {
  size: string
}

export const SomeComp = styled.div<StyledComponentProps>((props) => ({
  color: 'hotpink',
  fontSize: props.size,
}))
