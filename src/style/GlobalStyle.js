import { createGlobalStyle } from 'styled-components';
import { style_reset } from './reset';

//classList에 light 와 dark를 넣어주는 방식으로 다크모드 구현.
const GlobalStyle = createGlobalStyle`

    ${style_reset}

    :root {
  
        --title-color: #96fac3;
        --title-weight: 700;
        --title-size: 42px;

        --header-width: 100%;
        --header-height: 7vh;
        --header-padding: 30px 30px;
        --header-border-bottom: 1px solid gray;

        --theme-toggler-width: 150px;
        --theme-toggler-height: 60px;
        
    }

    body{
        font-family : 'Noto Sans KR','roboto mono', 'muli', sans-serif;
    }

    body.light{
        --main-gradient-background-color:#7ee8fa;
        --main-gradient-background-image:linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);


        --title-color: #00958C;
    }

    body.dark{

        --main-gradient-background-color: #9fa4c4;
        --main-gradient-background-image:linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);

        --title-color: #96FAC3;

        background-color: #101521;
    }




`;

export default GlobalStyle;
