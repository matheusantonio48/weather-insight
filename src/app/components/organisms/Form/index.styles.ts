import theme from '@/theme/theme';
import styled from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: inherit;
  top: 0;
  right: ${(props) => (props.isVisible ? '0' : '100%')};
  z-index: 10;
  transition: all 0.7s ease;

  @media (min-width: ${theme.breakpoint.md}px) {
    padding: 2rem 1rem;
  }

  & .button-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    & .close-button {
      border: none;
      width: 2rem;
      background-color: transparent;
      & img {
        width: 100%;
      }
    }
    & .close-button:hover {
      cursor: pointer;
      border: none;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  & input[type='text'] {
    width: 100%;
    color: ${theme.colors.secondary};
    background: none;
    border: 1px solid ${theme.colors.secondary};
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: ${theme.typography.variants.body1.fontSize};
    padding: 1rem;
    margin-bottom: 1rem;
  }
  & input:focus {
    outline: none;
  }

  & .form-button {
    width: 100%;
    border: none;
    background-color: ${theme.colors.accent2};
    color: ${theme.colors.primary};
    padding: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
  }
  & .form-button:hover {
    cursor: pointer;
  }
`;

export const Error = styled.div`
  color: ${theme.colors.secondary};
  text-align: center;
  margin-bottom: 1rem;
`;
