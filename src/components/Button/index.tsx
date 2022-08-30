import { FunctionComponent, ReactNode } from 'react'
import { StyledButton } from './styles'

export interface IButtonProps {
  color: 'primary' | 'secondary'
  children?: ReactNode
  onClick: () => void
}

const Button: FunctionComponent<IButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
