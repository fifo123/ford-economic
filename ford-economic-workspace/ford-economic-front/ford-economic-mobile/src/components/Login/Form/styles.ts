import styled from "styled-components";

export const Container = styled.div`
    grid-area: FR;

    display: flex;

    flex-direction: column;
    align-items: center;

    background-color: var(--lightblue);
    border-radius: 20px 20px 0px 0px;

    padding-top: 59px;
`;

export const IdInput = styled.input`
    height: 59px;
    width: 258px;
    background-color: var(--lightlblue);
    opacity: 100%;
    border: 0px;
    border-radius: 5px;
    margin-bottom: 46px;
    padding-left: 18px;
    ::placeholder{
        color: #9BAFC8;
    }
`;

export const SenhaInput = styled.input`
    height: 59px;
    width: 258px;
    background-color: var(--lightlblue);
    opacity: 100%;
    border: 0px;
    border-radius: 5px;
    margin-bottom: 46px;
    padding-left: 18px;
    ::placeholder{
        color: #9BAFC8;
    }
`;

export const ButtonForm = styled.button`
    height: 59px;
    width: 258px;
    background-color: var(--darkblue);
    opacity: 100%;
    border: 0px;
    border-radius: 7px;
    color: var(--white);
    font-size: 14px;
    margin-bottom: 10px;
`;

export const LabelForm = styled.label`
    color: var(--regularblue);
    font-size: 12px;
    text-decoration: underline;
    margin-bottom:36px;
`

export const FooterForm = styled.label`
    color: #A4B0DD;
    font-size: 10px;
`