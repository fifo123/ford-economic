import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        background-color: var(--white);
    }

    *, button, input{
        border: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root{
        --darkblue: #003478;
        --regularblue: #074A99;
        --lightblue: #C2D4EA;
        --lightlblue: #E2F0FF;
        --white: #FFFFFF;
        --darkgreen: #0C712E;
        --green: #10BE4B;
        --darkred: #F21717;
        --red: #FF4141;
        --yellow: #E7E984;
        --orange: #EF7531;
    }
`;
