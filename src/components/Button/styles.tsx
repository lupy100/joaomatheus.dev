import styled from '@emotion/styled'
import { IButtonProps } from '.'

export const StyledButton = styled.button<IButtonProps>((props) => ({
  color: props.color,
}))
