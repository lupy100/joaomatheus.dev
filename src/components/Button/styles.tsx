import styled from '@emotion/styled'
import { IButtonProps } from '.'

export const StyledButton = styled.button<IButtonProps>((props) => ({
  background: props.theme.color[props.color],
  borderRadius: '6px',
  padding: '0 8px',
  fontWeight: 600,
  cursor: 'pointer',
  minHeight: '44px',
  border: 0,
  color: 'white',
  // @todo: adicionar uma cor light
  // transition: 'background-color 0.1s ease 0s',
}))
