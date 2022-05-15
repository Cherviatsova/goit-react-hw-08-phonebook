import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  height: 76px;
  width: 100%;
  border-bottom: 2px solid rgb(206, 195, 131);
  color: white;
  
  z-index: 100;
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(206, 195, 131),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 24px 24px;
  width: 600px;
 
  
`;

export const Main = styled.main`
  display: flex;
  padding-top: 80px;
  min-height: 100vh;
  background-color: #f1f1c6;
`;
