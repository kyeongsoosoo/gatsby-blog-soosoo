import { createGlobalStyle } from 'styled-components';
import { style_reset } from './reset';

//classList에 light 와 dark를 넣어주는 방식으로 다크모드 구현.
const GlobalStyle = createGlobalStyle`

    ${style_reset}

    :root {
        --title-color: #96fac3;
        --title-weight: 700;
        --title-size: 42px;

        --typo1-weight: 700;
        --typo1-size: 28px;

        --typo2-weight: 400;
        --typo2-size: 18px;

        --header-width: 100%;
        --header-height: 7vh;
        --header-padding: 30px 30px;
        --header-margin-bottom: 50px;
        --header-border-bottom: 1px solid gray;

        --theme-toggler-width: 150px;
        --theme-toggler-height: 60px;

        --bb-width: 200px;
        --bb-height: 300px;
        --bb-border-radius: 15px;

        --category-block-width: 200px;
        --category-block-min-height: 500px;
        --category-border-radius: 15px;
        
        
        
    }

    body{
        font-family : 'Noto Sans KR','roboto mono', 'muli', sans-serif;

        
    }

    body.light{
        --main-gradient-background-color:#7ee8fa;
        --main-gradient-background-image:linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);


        --title-color: #00958C;

        --bb-background-color: #96FAC3;
        --category-background-color: #96FAC3;

        --item-background-color: white;
        
        --tag-background-color: #96FAC3;

        background-color: rgb(248,249,250);

        --pagination-background-color: #6B64D6;
        --pagination-background-color-disabled: #BEB8FD;
    }

    body.dark{

        --main-gradient-background-color: #9fa4c4;
        --main-gradient-background-image:linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);

        --title-color: #96FAC3;

        --bb-background-color: #CAFCDC;
        --category-background-color: #CAFCDC;

        --item-background-color: #282D35;

        --tag-background-color: #CAFCDC;

        --pagination-background-color: #BEB8FD;
        --pagination-background-color-disabled: #EAE7FE;

        background-color: #101521;
        color: white;
    }




`;

export default GlobalStyle;
