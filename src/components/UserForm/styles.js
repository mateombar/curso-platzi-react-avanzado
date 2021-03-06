import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 80px;
`
export const Paragraph = styled.p`
    text-align: center;
    margin-top: 10px;
    padding: 16px 32px;
    font-size: 15px;
    & button{
    font-size: 15px;
        color: #ff0080;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 0;
    }
`
export const Form = styled.form`
    padding: 16px 32px;
`
export const Input = styled.input`
    border:none;
    border-bottom: 1px solid #dbdbdb;
    outline: none;
    margin-bottom: 8px;
    padding: 8px 10px;
    display: block;
    width: 100%;
    &:focus{
        border:none;
        box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.63);
    }
`

export const Title = styled.h2`
    color: #ff0080;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 8px 32px;
    text-align: center;
    margin: 0;
`
export const Text = styled.h4`
    color: #8e8e8e;
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    padding: 4px 32px;
    text-align: center;
`