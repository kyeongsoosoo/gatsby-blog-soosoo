import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../Element/Title';
import { flexCenter } from '../../style/styleUtil';
import ThemeToggler from '../ThemeToggler';
import menuIcon from '../../assets/menu.svg';
import SideModal from '../SideModal';
import { useModalUpdate } from '../../context/ModalContext';

export default function Header() {

  
  const setModalOpen = useModalUpdate();

  return (
    <>
      <HeaderWrapper>
        <HeaderLeftBox>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
          <Link to="/">
            <Title isColor={true}>Soo Blog</Title>
          </Link>
        </HeaderLeftBox>
        <HeaderRightBox>
          <ThemeToggler />
          <HeaderRightMenu src={menuIcon} onClick={setModalOpen}/>
        </HeaderRightBox>
      </HeaderWrapper>
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
`;