export enum Breakpoints {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

const breakpoint = {
  [Breakpoints.XXL]: 1360,
  [Breakpoints.XL]: 1200,
  [Breakpoints.LG]: 992,
  [Breakpoints.MD]: 768,
  [Breakpoints.SM]: 480,
  [Breakpoints.XS]: 0,
};

export const spacing = {
  spacing4xs: '8px',
  spacing3xs: '16px',
  spacing2xs: '24px',
  spacingXs: '32px',
  spacingSm: '40px',
  spacingMd: '48px',
  spacingLg: '56px',
  spacingXl: '64px',
  spacing2xl: '72px',
  spacing3xl: '80px',
  spacing4xl: '84px',
  spacing5xl: '120px',
  spacing6xl: '160px',
};

const fontSize = {
  textXs: '0.75rem', // 12px
  textSm: '0.875rem', // 14px
  textMd: '1rem', // 16px
  textLg: '1.125rem', // 18px
  textXl: '1.375rem', // 22px
  text2xl: '1.5rem', // 24px
  text3xl: '2rem', // 32px
  text4xl: '3rem', // 48px
  text5xl: '4rem', // 64px
};

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const lineHeight = {
  textXs: '1rem', // 16px
  textSm: '1.125rem', // 18px
  textMd: '1.1875rem', // 19px
  textLg: '1.25rem', // 20px
  textXl: '1.375rem', // 22px
  text2xl: '1.5rem', // 24px
  text3xl: '1.625rem', // 26px
  text4xl: '1.75rem', // 28px
  text5xl: '1.8125rem', // 29px
  text6xl: '1.9375rem', // 31px
  text7xl: '2rem', // 32px
  text8xl: '2.25rem', // 36px
  text9xl: '2.5rem', // 40px
  text10xl: '2.625rem', // 42px
  text11xl: '2.75rem', // 44px
  text12xl: '3rem', // 48px
  text13xl: '3.5rem', // 56px
  text14xl: '4rem', // 64px
};

const typography = {
  fontFamily: {
    primary: 'Raleway, sans-serif',
    secondary: 'Black Ops One, sans-serif',
  },
  variants: {
    heading: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text14xl,
      fontSize: fontSize.text5xl,
    },
    heading1: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text12xl,
      fontSize: fontSize.text4xl,
    },
    heading2: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text7xl,
      fontSize: fontSize.text3xl,
    },
    heading3: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.text10xl,
      fontSize: fontSize.text3xl,
    },
    heading4: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.text8xl,
      fontSize: fontSize.textXl,
    },
    heading5: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text10xl,
      fontSize: fontSize.text3xl,
    },
    heading6: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.text6xl,
      fontSize: fontSize.text2xl,
    },
    heading7: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text6xl,
      fontSize: fontSize.text2xl,
    },
    body1: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.text3xl,
      fontSize: fontSize.textMd,
    },
    body2: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.textXl,
      fontSize: fontSize.textSm,
    },
    body3: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.text3xl,
      fontSize: fontSize.textMd,
    },
    body4: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.textMd,
      fontSize: fontSize.textXs,
    },
    body5: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text8xl,
      fontSize: fontSize.textXl,
    },
    body6: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text5xl,
      fontSize: fontSize.textLg,
    },
    body7: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.text3xl,
      fontSize: fontSize.textMd,
    },
  },
} as const;

const theme = {
  colors: {
    primary: '#E7E7EB', // Principal para texto
    secondary: '#A09FB1', // Secundário para texto
    accent: '#FFEC65', // Acento
    accent2: '#3C47E9', // Elementos de interação
    accent3: '#6E707A', // Foco
    background: '#100E1D', // Fundo principal
    gray: '#1C1C28', // Cinza escuro
    active: '#1E213A', // Fundo secundário
    interactive: '#3C47E9', // Botão e elemento de interação
    hover: '#585676', // Hover
    focus: '#6E707A', // Foco
    disable: '#888888', // Desabilitado (mantido)
    dark: '#282828', // Escuro (mantido)
  },
  background: {
    primary: '#100E1D', // Fundo principal
    secondary: '#1E213A', // Fundo secundário
    dark: '#080808', // Muito escuro (mantido)
    gray: '#1C1C28', // Cinza escuro
    lightGray: '#3C47E9', // Cinza claro
  },
  typography,
  breakpoint,
  spacing,
};

export type Theme = typeof theme;
export type FontFamily = keyof typeof typography.fontFamily;
export type Variant = keyof typeof typography.variants;
export type Color = keyof Theme['colors'];
export type Background = keyof Theme['background'];
export type Align = 'left' | 'center' | 'right';
export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'ul' | 'li';

export default theme;
