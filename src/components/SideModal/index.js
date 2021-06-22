import React from 'react'
import styled, { css } from 'styled-components'

function SideModal({visible = false,children}) {
    return (
        <>
            <ModalOverlay visible={visible}/>
            <ModalWrapper visible={visible}>
                <ModalInner visible={visible}>
                    {children}
                </ModalInner>
            </ModalWrapper>
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
    width: 300px;
    height: 100vh;
    transfrom: translateX(-300px);
    right: 0;
    padding: 40px 20px;

    ${({visible}) => visible && css`
        animation: slidein 0.5s ease-out;
    `}
    
    @keyframes slidein {
        from {
            transform: translateX(300px);
        }
        to {
            transform: translateX(0);
        }
    }
`;



export default SideModal
