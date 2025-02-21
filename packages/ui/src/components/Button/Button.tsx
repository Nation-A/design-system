import { colors } from '@nation-a/tokens';
import styled from '@emotion/styled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ variant }) => variant === 'primary' ? colors.primary[500] : 'transparent'};
`;

const Button = ({ variant = 'primary', size = 'md', children, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}; 

export default Button;