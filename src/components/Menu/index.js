import React from 'react'
import styled from 'styled-components'

function Menu() {
    return (
        <MenuWrapper>
            <MenuContent>Hi</MenuContent>
            <MenuContent>Hi</MenuContent>
            <MenuContent>Hi</MenuContent>
        </MenuWrapper>
    )
}

const MenuWrapper = styled.ul`
    width: 100%;
`;

const MenuContent = styled.li`
    width: 100%;
    height: 50px;
`;

export default Menu
