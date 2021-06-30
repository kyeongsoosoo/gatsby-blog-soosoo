import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../style/styleUtil';

function Footer() {
    return (
        <FooterWrapper>	
            <FooterBox>
             &copy;김경수
            </FooterBox>
            <FooterBox>
             Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </FooterBox>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    width: 100%;
    height:10vh;
    border-top: var(--footer-border-top);
    ${flexCenter}
    flex-direction: column;
`;

const FooterBox = styled.div`
`;


export default Footer
