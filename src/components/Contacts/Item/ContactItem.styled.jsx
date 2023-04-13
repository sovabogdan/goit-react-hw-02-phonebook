import styled from 'styled-components';

export const Item = styled.li`
width:400px;
align-self: center;
margin-left:auto;
margin-right: auto;
border: 2px solid #BC8F8F;
border-radius:10px;

:not(:last-child){
    margin-bottom:10px;
}
padding: 15px;
`
export const Info = styled.p`
    font-size:20px;
    color: #8B4513;
`
export const DeleteButton = styled.button`
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