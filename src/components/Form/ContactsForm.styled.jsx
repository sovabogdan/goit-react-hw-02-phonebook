import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
flex-direction: column;
width: 600px;
margin-left: auto;
margin-right: auto;
text-align: center;
margin-bottom:25px;
`
export const Label = styled.label`
    font-size: 25px;
    margin-bottom:10px;
    font-weight: bold;
    color:#BC8F8F;
`
export const ContactInput = styled.input`
    width: 300px;
    margin-bottom:20px;
align-self: center;
`

export const AddButton = styled.button`
    width: 100px;
    align-self: center;
    cursor: pointer;
    border-radius: 5px;
    background-color:#DEB887;
    color: #8B4513;
    :hover,:focus{
        background-color:#800000;
        color: #F5DEB3;
    }
`