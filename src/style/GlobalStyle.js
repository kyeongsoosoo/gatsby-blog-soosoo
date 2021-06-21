import { createGlobalStyle } from 'styled-components';
import { MediaBreakPoint } from '../constants/constants';
import { style_reset } from './reset';

//classList에 light 와 dark를 넣어주는 방식으로 다크모드 구현.
const GlobalStyle = createGlobalStyle`

    ${style_reset}

    :root {
        --header-space-height: 80px;



        --title-color: #96fac3;
        --title-weight: 700;
        --title-size: 42px;

        @media only screen and (max-width: ${`${MediaBreakPoint.sm}`}) {
            --title-size: 30px;
          }

        --tag-weight: 700;
        --tag-size: 14px;


        --typo1-weight: 700;
        --typo1-size: 28px;

        --typo2-weight: 400;
        --typo2-size: 18px;

        --toc-active-level1-size: 20px;
        --toc-active-level1-color: #66a80f;
        --toc-active-level1-weight: 700;
        
        --toc-active-level2-size: 16px;
        --toc-active-level2-color: #a9e34b;
        --toc-active-level2-weight: 600;
        
        --toc-active-level3-size: 12px;
        --toc-active-level3-color: #d8f5a2;
        --toc-active-level3-weight: 500;
        


        --header-width: 100%;
        --header-height: 7vh;
        --header-padding: 10px 15px;
        --header-margin-bottom: 20px;
        --header-border-bottom: 1px solid gray;

        --theme-toggler-width: 120px;
        --theme-toggler-height: 60px;

        --bb-width: 200px;
        --bb-height: 300px;
        --bb-border-radius: 15px;

        --category-block-width: 200px;
        --category-block-height: 500px;
        --category-block-min-height: 500px;
        --category-border-radius: 15px;
        --category-padding : 30px 10px;
        
        --white-space-height: 30px;
        --white-space-width: 30px;
        
    }

    body{
        font-family : 'Noto Sans KR','roboto mono', 'muli', sans-serif;

        
    }

    body.light{
        --main-gradient-background-color:#7ee8fa;
        --main-gradient-background-image:linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);

        --toggler-background-color: linear-gradient(aqua, skyblue);

        --post-title-color: black;

        --tag-color: white;

        --title-color: #00958C;

        --bb-background-color: #96FAC3;
        --category-background-color: #BEB8FD;

        --item-background-color: white;
        
        --tag-background-color: #96FAC3;
        --tag-background-color-selected:#007478; 

        background-color: rgb(248,249,250);

        --pagination-background-color: #6B64D6;
        --pagination-background-color-disabled: #BEB8FD;

        --floating-webkit-box-shadow: 0px 1px 9px 2px rgba(99,91,99,1);
        --floating-moz-box-shadow: 0px 1px 9px 2px rgba(99,91,99,1);
        --floating-box-shadow:0px 1px 9px 2px rgba(99,91,99,1);

        --template-background-color: white;

        --home-main-border-bottom: 2px solid black;

       

        --p-color: black;
    }

    body.dark{

        --main-gradient-background-color: #9fa4c4;
        --main-gradient-background-image:linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);

        --post-title-color: white;

        --toggler-background-color: linear-gradient(midnightblue, rebeccapurple);

        --tag-color: black;

        --title-color: #96FAC3;

        --bb-background-color: #CAFCDC;
        --category-background-color: #CAFCDC;

        --item-background-color: #282D35;

        --tag-background-color: #EAE7FE;
        --tag-background-color-selected: #ADA6FB;

        --pagination-background-color: #BEB8FD;
        --pagination-background-color-disabled: #EAE7FE;

        --floating-webkit-box-shadow: 0px 1px 9px 3px rgba(214,214,214,0.67);
        --floating-moz-box-shadow: 0px 1px 9px 3px rgba(214,214,214,0.67);
        --floating-box-shadow: 0px 1px 9px 3px rgba(214,214,214,0.67);

        --template-background-color: #2b333f;

        --home-main-border-bottom: 2px solid white;

        --p-color: white;


        background-color: #101521;
        color: white;
    }




`;

export default GlobalStyle;
