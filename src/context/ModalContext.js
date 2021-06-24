import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext(null);
const ModalUpdateContext = createContext(null);
const ModalAnimationContext = createContext(null);

function ModalProvider({children}) {

    const [isModalOpen, setOpen] = useState(false);

    const handleModalClick = () => {
        setOpen( modalState => !modalState);
      }

    return (
        <ModalContext.Provider value={isModalOpen}>
            <ModalUpdateContext.Provider value = {handleModalClick}>
                {/* <ModalAnimationContext value = {modalAnimate} > */}
                    {children}
                {/* </ModalAnimationContext> */}
            </ModalUpdateContext.Provider>
        </ModalContext.Provider>
    )
}

export function useModalState(){
    return useContext(ModalContext);
}

export function useModalUpdate() {

    return useContext(ModalUpdateContext);
}

export default ModalProvider
