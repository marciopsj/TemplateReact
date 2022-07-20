import { createGlobalStyle } from 'styled-components';

import Bg1 from "../assets/bg1.png";
import Bg2 from "../assets/bg2.png";


const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body, #root {
        height: 100%;
    }

    body {
        background: url(${Bg2}) no-repeat 1010px, url(${Bg1}) no-repeat 931px;
        background-size: cover;
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;

    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }


`

export default globalStyle;


