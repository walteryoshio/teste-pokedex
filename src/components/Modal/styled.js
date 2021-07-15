import styled from "styled-components";


export const ModalWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: rgba(0,0,0,0.35);
` 

export const ModalContainer = styled.div`
    min-width: 400px;
    height: 90%;
    background: linear-gradient(90deg, rgba(68,234,124,1) 0%, rgba(56,249,214,1) 100%);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow-y:scroll ;
    ::-webkit-scrollbar {
        width: 0px;
    }
    &:after{
        content: "";
        background-color: #f7f9fc;
        width: 100%;
        height: 125%;
        position: absolute;
        bottom: 0;
        border-radius: 30px 30px 0px 0px;
        top: 25%
    }
    div{
        z-index: 2;
    }
    
    @media (max-width: 450px) {
        min-width: 100%;
        height: 100%;
        border-radius: 0;
        &:after{
        content: "";
        border-radius:30px 30px 0px 0px ;
    }
    }
`
export const ModalClose = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    left: 0;
    div{
        background-color: #e4e9f2;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 10px;
        margin-top: 10px;
        border: 2px solid #8f9bb3;
        cursor: pointer
    }
`
export const ModalImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    div{
        background-color: #f7f9fc;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 5px solid #00d68f;
        margin-top: 30px;
        position: relative;
        cursor:pointer
    }img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`
export const Pokebola = styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        bottom: 5%;
        cursor: pointer;
        z-index: 10;
        img{
            height: 150px;
            width: 150px;
        }
`
export const Text = styled.div`
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        h2{
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            text-transform: uppercase;
        }
        span{
            margin-left: 15px;
            cursor: pointer;
        }
`
export const ModalNameInput = styled.div`
        margin-top: 15px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        div{
            margin-bottom: 0;
            box-shadow: 5px 8px 14px 0px #8f9bb3;
            input{
                &:active{
                    border-color: black;
                }
                &:focus{
                    border-color: black;
                }
            }
        }
        button{
            margin-left: 10px;
            height: 45px;
            width: 45px;
            border: none;
            box-shadow: 5px 8px 14px 0px #8f9bb3;
            cursor: pointer;
            img{
                height: 15px;
                width: 15px;
            }
        }
`
export const status = styled.div`
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #00000038;
            padding: 1rem 3rem;
            &:last-child{
            border-right: none;
            }
            h3{
                font-size: 12px;
                line-height: 24px;
                font-weight: 600;
            }
            h2{
                font-size: 18px;
                font-weight: 600;
                line-height: 24px;
            }
        }
        
`
export const titulo = styled.span`
        text-transform: uppercase;
        font-size: 15px;
        margin-top: 3rem;
        text-align: center;
        font-weight: 600;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:before{
            content: '';
            border-top: 1px solid #00000038;
            width: 100%;
            height: 1px;
            margin-right: 15px;
        }
        &:after{
            content: '';
            border-top: 1px solid #00000038;
            width: 100%;
            height: 1px;
            margin-left: 15px;
        }
`
export const Skills = styled.div`
        display: flex;
        margin-top: 3rem;
        justify-content: center;
        span{
            display: flex;
            justify-content: center;
            width: 15px;
        }
        h3{
            font-weight: 600;
            font-size: 15px;
            text-transform: uppercase;
        }
`
