import styled from 'styled-components';

export const StyledContainer = styled.main`
    min-height: 100vh;
    width: 100%;
    background: rgb(255, 220, 248);
    background: radial-gradient(circle at 0% 60%, rgba(255, 220, 248, 1) 0%, rgba(255, 255, 255, 1) 35%, rgba(225, 243, 243, 1) 58%);

    div.content {
    height: 94vh;
    width: 100%;
    display: flex;
    & > div {
      margin-top: 18vh;
      flex: 1;
      z-index: 3;
    }
  }
`