import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import IntroBubble from '../IntroBubble'
import P from '../../Element/P'
import { useModalUpdate } from '../../context/ModalContext'

function Menu() {

    const setModalUpdate = useModalUpdate();

    return (
        <MenuWrapper>
            <MenuTop>
                <MenuCloseBtn onClick={setModalUpdate}>X</MenuCloseBtn>
            </MenuTop>
            <MenuIntroBox>
                <IntroBubble/>
            </MenuIntroBox>
            <MenuContent>
                <Link to='/'>
                    <P isGray={true}>Home</P>
                </Link>
            </MenuContent>
            <MenuContent>
                <Link to='/about'>
                    <P isGray={true}>About</P>
                </Link>
            </MenuContent>
            <MenuContent>

            </MenuContent>
        </MenuWrapper>
    )
}

const MenuWrapper = styled.ul`
    width: 100%;
`;

const MenuTop = styled.li`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 3px 10px;
    width: 100%;
`;

const MenuCloseBtn = styled.button`
    font-size: 20px;
`;

const MenuIntroBox = styled.li`
    width: 100%;
    margin: 20px auto;
`;

const MenuContent = styled.li`
    width: 100%;
    padding: 10px 10px;

`;

export default Menu
