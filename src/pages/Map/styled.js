import styled, { keyframes } from "styled-components";

import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
  background-position: center;
`;
export const AshWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    div{
      display: flex;
      flex-direction:column;
      cursor: pointer;
    }
`;

const FadeInAnimation = keyframes`  
  from { opacity: 0; transform: translateY(50%)  }
  to { opacity: 1; transform: translateY(0%);}
`;

export const image = styled.img`
    animation-name: ${props => props.opacity ? FadeInAnimation : ''  };
    animation-duration: 0.5s;
    opacity: ${props => props.opacity};
`