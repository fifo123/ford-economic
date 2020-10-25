import styled from "styled-components";

export const Container = styled.div`
    grid-area: HD;

    display: flex;

    flex-direction: column;
    align-items: center;

    width: 100%;
    background-color: var(--darkblue);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;


//LG = logo; NM = nome; MN = menu
export const GridHeader = styled.div`
    display: grid;
   
    grid-template-columns: 133px auto 42px;
    grid-template-rows: 75px;

    grid-template-areas:
        'LG NM MN';       
    
    width:100%;
`;

export const LogoHeader = styled.div`
    grid-area: LG;

    display: flex;

    flex-direction: column;
    align-items: center;

    padding-top: 11px;
    padding-left:12px;

`;

export const TextHeader = styled.div`
    grid-area: NM;
    
    display: flex;
    
    flex-direction: column;
    align-items: center;
    
    font-size: 36px;
    color: var(--white);
    font-family: 'Mr Dafoe';
    padding: 11px;
`;

export const MenuHeader = styled.div`
    grid-area: MN;

    display: flex;

    flex-direction: column;
    align-items: center;
    padding-right: 4px;
    padding-top: 21px;
`;