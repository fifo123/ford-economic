import styled from "styled-components";

export const SensoresGrid = styled.div`
    display: grid;
   
    grid-template-columns: auto;
    grid-template-rows: 75px 90px 20px auto;

    grid-template-areas:
        'HD'
        'LB'
        'LS'
        'CS';

    width: 100%;
    height: 100%;

    text-align:center;
    align-items: center;
    font-size: 13px;
    font-family: 'Roboto Condensed';
    font-weight: lighter;
    background-color: var(--lightlblue);
`;
