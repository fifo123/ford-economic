import styled from "styled-components";

export const Container = styled.div`
    grid-area: HD;

    display: flex;

    flex-direction: column;
    align-items: center;

    padding-top:11px;
`;


//LG = logo; NM = nome; MN = menu
export const GridHeader = styled.div`
    display: grid;
   
    grid-template-columns: 133px auto 42px;
    grid-template-rows: 75px;

    grid-template-areas:
        'LG NM MN';       

    background-color: var(--darkblue);
`;

export const LogoHeader = styled.img`
    grid-area: LG;

    display: flex;

    flex-direction: column;
    align-items: right;
`;

export const TextHeader = styled.label`
    grid-area: NM;
    
    display: flex;
    
    flex-direction: column;
    align-items: center;
    
    font-size: 36px;
    color: var(--white);
    font-family: 'Mr Dafoe';
`;

export const MenuHeader = styled.img`
    grid-area: MN;

    display: flex;

    flex-direction: column;
    align-items: left;
`;