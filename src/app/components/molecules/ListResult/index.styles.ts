import theme from '@/theme/theme';
import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 1rem;
  color: ${theme.colors.primary};
  transition: all 0.5s ease;
  margin-bottom: 1rem;
  position: relative;
  border: 1px solid transparent;

  &::after {
    content: '';
    display: none;
    width: 16px;
    height: 16px;
    background-image: url('/img/right-arrow.svg');
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    transition: all 0.5s ease;
  }

  &:hover {
    border: 1px solid ${theme.colors.secondary};
    cursor: pointer;

    &::after {
      display: block;
    }
  }
`;
