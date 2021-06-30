import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useModalState, useModalUpdate } from '../../context/ModalContext';
import Menu from '../Menu';

function SideModal({children}) {

    const modalState = useModalState();
    const setModalOpen = useModalUpdate();


    return (
        <>
            <ModalOverlay visible={modalState} />
            <ModalWrapper visible={modalState} onClick={setModalOpen}>
            </ModalWrapper>
            <ModalInner visible={modalState} >
                <Menu/>
                {children}
            </ModalInner>
        </>
    )
}

const ModalWrapper = styled.div`
    display: ${({visible}) => visible ? 'block' : 'none'};
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    width: 100vw;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
`;

const ModalOverlay = styled.div`
    display: ${({visible}) => visible ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    
    z-index: 999;
`;

const ModalInner = styled.div`
    position: fixed;
    background-color: #fff;
    width: 250px;
    height: 100%;
    top: 0;
    right: 0;
    padding: 40px 20px;
    transform: translateX(300px);
    z-index: 1000;
    transition: all 1s;
    

    ${({visible}) => visible ? css`
        transform: translateX(0px);
    ` : css`
        transform: translateX(300px); `
}

`;



export default SideModal
