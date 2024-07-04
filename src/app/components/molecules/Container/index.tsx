import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    flex-direction: row;
  }
`;

export default Container;
