import { ButtonHTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  rounded?: boolean;
  bold?: boolean;
  marginRight?: boolean;
  searchButton?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

const SIZE_STYLES = {
  small: (theme: DefaultTheme) => `
    padding: 0.4rem 0.6rem;
    font-size: ${theme.typography.variants.body1.fontSize};
  `,
  medium: (theme: DefaultTheme) => `
    padding: 0.6rem 0.8rem;
    font-size: ${theme.typography.variants.body2.fontSize};
  `,
  large: (theme: DefaultTheme) => `
    padding: 0.8rem 1.2rem;
    font-size: ${theme.typography.variants.body3.fontSize};
  `,
};

const getColorStyles = (theme: DefaultTheme, isSelected?: boolean, color?: 'primary' | 'secondary' | 'accent' | 'dark') => {
  if (isSelected) {
    return {
      backgroundColor: theme.colors.primary,
      color: theme.colors.dark,
    };
  }

  const colorMapping: Record<string, { backgroundColor: string; color: string }> = {
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.primary,
    },
    accent: {
      backgroundColor: theme.colors.accent,
      color: theme.colors.primary,
    },
    dark: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.primary,
    },
    default: {
      backgroundColor: theme.colors.interactive,
      color: theme.colors.primary,
    },
  };

  return colorMapping[color ?? 'default'];
};

const getSizeStyles = (size: 'small' | 'medium' | 'large' | undefined, theme: DefaultTheme) => SIZE_STYLES[size ?? 'medium'](theme);

export const Button = styled.button<ButtonProps>`
  border: none;
  ${({ theme, isSelected, color }) => {
    const colorStyles = getColorStyles(theme, isSelected, color);
    return `
      background-color: ${colorStyles.backgroundColor};
      color: ${colorStyles.color};
    `;
  }}
  box-shadow: 2px 3px 3px 1px ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.variants.body1.fontWeight};
  ${({ size, theme }) => getSizeStyles(size, theme)}

  &:hover {
    cursor: pointer;
  }

  ${({ rounded }) =>
    rounded &&
    `
    border-radius: 50%;
  `}

  ${({ bold, theme }) =>
    bold &&
    `
    font-weight: ${theme.typography.variants.heading3.fontWeight};
  `}

  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: 10px;
  `}

  ${({ searchButton, theme }) =>
    searchButton &&
    `
    letter-spacing: 0.5px;
    font-family: ${theme.typography.fontFamily.primary};
  `}
`;

export default Button;
