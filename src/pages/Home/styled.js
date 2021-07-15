import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: linear-gradient(150deg, rgba(67,233,123,1) 0%, rgba(56,249,214,1) 100%);
  width: 100%;
  min-height: 100vh;
  max-height: 100% ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  overflow-y: hidden;

  img{
      margin-bottom: 2rem;
  }

  button{
      box-shadow: 0px 14px 16px 2px #0000003b;
      padding: 1.2rem 3rem;
      span{
          font-weight: 600;
          letter-spacing:1px;
      }
  }
`;
