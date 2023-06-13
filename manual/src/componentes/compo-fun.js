import React from "react";

const CompoFuncA = (props)=>{
    return(
        <>
            <hr/>
            <h1>COMPONENTE FUNCIONAL A</h1>
            <h5>PROP: {props.nombre}</h5>
            <h5>props.children:</h5>
            {props.children}
            <hr/>
        </>
    )
}

function CompoFuncB (props){
    return(
        <>
            <hr/>
            <h1>COMPONENTE FUNCIONAL B</h1>
            <h5>PROP: {props.nombre}</h5>
            <h5>props.children:</h5>
            {props.children}
            <hr/>
        </>
    )
}

const CompoFuncC = (props)=>{
    return(
        <>
            <hr/>
            <h1>COMPONENTE FUNCIONAL C</h1>
            <h5>PROP: {props.nombre}</h5>
            <h5>props.children:</h5>
            {props.children}
            <hr/>
        </>
    )
}

export {CompoFuncA, CompoFuncB, CompoFuncC}