import { createGlobalStyle } from 'styled-components';
import { style_reset } from './reset';

//classList에 light 와 dark를 넣어주는 방식으로 다크모드 구현.
const GlobalStyle = createGlobalStyle`

    ${style_reset}

    :root {
        --title-color: #96fac3;
        --title-weight: 700;
        --title-size: 48px;

        --header-width: 100vw;
        --header-height: 10vh;
        --header-padding: 30px 30px;
        --header-border-bottom: 1px solid gray;

        --theme-toggler-width: 150px;
        --theme-toggler-height: 80px;
        
    }

    body{
        font-family : 'Noto Sans KR','roboto mono', 'muli', sans-serif;
    }

    body.light{
        --title-color: #00958C;
    }

    body.dark{
        --title-color: #96FAC3;
    }




`;

export default GlobalStyle;
