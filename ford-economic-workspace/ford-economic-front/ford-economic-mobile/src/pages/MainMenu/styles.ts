import styled from 'styled-components';

//HD = Header
//LB = Label (actually is a div)
//IM = Imagem
//BT = Botões

export const MainMenuGrid = styled.div`
    display: grid;
   
    grid-template-columns: auto;
    grid-template-rows: 75px auto 234px 220px;

    grid-template-areas:
        'HD'
        'LB'
        'IM'
        'BT';

    height: 100vh;

    background-color: var(--lightlblue);
`;
