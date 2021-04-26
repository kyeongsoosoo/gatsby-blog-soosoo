import { createGlobalStyle } from 'styled-components';
import { style_reset } from './reset';

//classList에 light 와 dark를 넣어주는 방식으로 다크모드 구현.
const GlobalStyle = createGlobalStyle`

    ${style_reset}

    :root {
        --test-title: #96fac3;
        --test-border: 1px solid black;
    }

    body{
        font-family : 'Noto Sans KR','roboto mono', 'muli', sans-serif;
    }


    body.light{

    }

    body.dark{

    }

`;

export default GlobalStyle;
