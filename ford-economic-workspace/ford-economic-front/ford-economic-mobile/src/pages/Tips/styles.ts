import styled from 'styled-components';

//HD = Header
//LB = Label (actually is a div)
//TP = Tips List (lista de dicas)

export const TipsGrid = styled.div`
    display: grid;
   
    grid-template-columns: auto;
    grid-template-rows: 75px auto 151px;

    grid-template-areas:
        'HD'
        'LB'
        'TP';

    height: 100vh;

    background-color: var(--lightlblue);
`;
