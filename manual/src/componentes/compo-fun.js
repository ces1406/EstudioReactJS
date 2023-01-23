import React from "react";

const CompoFunc = (props)=>{
    return(
        <>
            <h1>Soy un componente funcional con prop: {props.nombre}</h1>
            {props.children}
        </>
    )
}

export {CompoFunc}