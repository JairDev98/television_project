import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext, useState, ReactNode } from 'react';

interface ModalProps{
    urlTitle: string;
    image:string;
}

interface ModalProviderProps{
    children: ReactNode;
}

interface ModalContextData{
    modalValues: ModalProps;
    readModalValues: ({urlTitle, image}:ModalProps) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);


export function ModalContextProvider({children}:ModalProviderProps){
    const[modalValues,setModalValues]=useState<ModalProps>({urlTitle:'Rede_Tupi', image:''});

    function readModalValues({urlTitle, image}:ModalProps){
        setModalValues({urlTitle, image});
    }

    return(
        <ModalContext.Provider value={{modalValues, readModalValues}}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal(){
    const context = useContext(ModalContext);
    return context;
}