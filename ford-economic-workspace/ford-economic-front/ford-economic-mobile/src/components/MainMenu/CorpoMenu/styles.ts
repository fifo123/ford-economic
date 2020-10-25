import styled from "styled-components";

export const LabelMenu = styled.div`
    grid-area: LB;
    
    display: flex;
    
    justify-content: center;
    align-items: center;
    text-align:center;
    
    font-size: 36px;
    color: var(--darkblue);
    font-family: 'Roboto Condensed';
    font-weight: bold;
`;

export const ImagemDivMenu = styled.div`
    grid-area: IM;

    display: flex;
    
    flex-direction: column;
    align-items: center;
    
    font-size: 36px;
`;

export const ImagemMenu = styled.img`
    width: 327px;
    height: 234px;
    border-radius: 24px;
`;

export const Botoes = styled.div`
    grid-area: BT;

    display: flex;

    justify-content: center;
    align-items: center;
`;
