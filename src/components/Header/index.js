import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Title from '../../Element/Title';
import { flexCenter } from '../../style/styleUtil';
import ThemeToggler from '../ThemeToggler';
import menuIcon from '../../assets/menu.svg';
import SideModal from '../SideModal';
import { useModalUpdate } from '../../context/ModalContext';
import { MediaBreakPoint } from '../../constants/constants';
import { toFit } from '../../utils/RAF';

export default function Header() {

  
  const setModalOpen = useModalUpdate();

  const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    };
};

  const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        console.log(pageYOffset)
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset > 30 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    const throttleScroll = toFit(handleScroll);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);

  return (
    <>
   {!hide && <HeaderWrapper>
        <HeaderLeftBox>
        
          <Link to="/">
            <Title isColor={true}>Soo Blog</Title>
          </Link>
        </HeaderLeftBox>
        <HeaderRightBox>
          <HeaderRightToggler>
            <ThemeToggler />
          </HeaderRightToggler>
          <HeaderRightMenu src={menuIcon} onClick={setModalOpen}/>
        </HeaderRightBox>
      </HeaderWrapper>}
      <SideModal>
        <ThemeToggler/>
      </SideModal>
    </>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--header-width);

  padding: var(--header-padding);
  

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 50;
`;

const HeaderLeftBox = styled.div`
  --left-box-width: 300px;
  --left-box-height: 200px;

  ${flexCenter}

`;

const HeaderRightBox = styled.div`
  --right-box-width: 200px;
  --right-box-height: 200px;
  --right-box-margin-top: 10px;

  ${flexCenter}
`;

const HeaderRightMenu = styled.img`
  width: 50px;
  height: 50px;

  @media only screen and (min-width: ${`${MediaBreakPoint.sm}`}) {
    display: none;
  }
`;

const HeaderRightToggler = styled.div`
  @media only screen and (max-width: ${`${MediaBreakPoint.sm}`}) {
  display: none;
}
`;