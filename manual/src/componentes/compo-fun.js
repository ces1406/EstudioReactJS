import React from "react";

const CompoFunc = (props)=>{
    return(
        <>
            <hr/>
            <h1>COMPONENTE FUNCIONAL</h1>
            <h5>PROP: {props.nombre}</h5>
            <h5>props.children:</h5>
            {props.children}
            <hr/>
        </>
    )
}

export {CompoFunc}