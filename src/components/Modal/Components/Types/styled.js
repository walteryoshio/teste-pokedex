import styled from "styled-components";

export const TypesWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 3rem;
        span{
            padding: 10px 35px;
            border-radius: 20px;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 600;
            color: #fff;
        }
        
`

export const container = styled.span`
        background-color: ${props => props.backgroundColor};
`