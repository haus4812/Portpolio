import styled, { css } from "styled-components";

const Button = ({ children, href = "#", variant = "primary" }) => {
  return (
    <StyledButton href={href} $variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  padding: 16px 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 15px;
  font-weight: 700;
  transition: 0.2s ease;

  ${({ theme, $variant }) =>
    $variant === "primary"
      ? css`
          background: ${theme.colors.primary};
          color: #fff;

          &:hover {
            transform: translateY(-1px);
            opacity: 0.95;
          }
        `
      : css`
          background: ${theme.colors.surface};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};

          &:hover {
            background: ${theme.colors.surfaceAlt};
          }
        `}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;
