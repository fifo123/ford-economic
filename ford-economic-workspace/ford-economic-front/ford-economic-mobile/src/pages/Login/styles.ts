import styled from 'styled-components';

//LG = Logo
//FR = Form

export const Grid = styled.div`
    display: grid;
   
    grid-template-columns: auto;
    grid-template-rows: auto 406px;

    grid-template-areas:
        'LG'
        'FR';

    height: 100vh;

    background-color: var(--darkblue);
`;
