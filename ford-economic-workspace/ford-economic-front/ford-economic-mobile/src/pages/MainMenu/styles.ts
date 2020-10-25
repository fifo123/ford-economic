import styled from 'styled-components';

//HD = Header
//LB = Label (actually is a div)
//IM = Imagem
//BT = Botões

export const MainMenuGrid = styled.div`
    display: grid;
   
    grid-template-columns: auto;
    grid-template-rows: 75px auto 90px auto 234px auto 220px;

    grid-template-areas:
        'HD'
        'EF'
        'LB'
        'EK'
        'IM'
        'EB'
        'BT';

    width: 100%;
    height: 100vh;

    background-color: var(--lightlblue);
`;
