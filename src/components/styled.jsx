import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eef1ffe5;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Div = styled.div`
    width: 26%;
    height: 72vh;
    border-radius: 15px;
    border: 2px solid black;
    background-color: #ffffff4c;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const P = styled.div`
    width: 88%;
    height: 5vh;
    font-size: 17px;
    display:flex ;
    align-items: center;
    /* padding-left: 40px; */
`
export const Box = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
`
export const Button = styled.button`
    width: 25%;
    height: 4vh;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #1014eb;
    margin-left: 30px;
    font-size: 10px;
    color: #1014eb;
    cursor: pointer;
    &:active { background-color: lime; }
`
export const Cards = styled.div`
    width: 90%;
    /* height: ; */
    height: ${({height}) => height ? height : '39vh'};
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    /* align-items: center; */
`
export const Input = styled.input`
    width: 91%;
    padding: 18px;
    border-radius: 5px;
    border: 2px solid #6461612f;
`
export const Cards2 = styled.div`
    width: 91%;
    height: 17vh;
    display: flex;
    justify-content:space-around;
    flex-direction: column;
`
export const Select = styled.select` 
    width: 55%;
    height: 5vh;
    border-radius: 5px;
    border: 2px solid #6461612f;
    color: #575353ce;
    font-size: 15px;
`