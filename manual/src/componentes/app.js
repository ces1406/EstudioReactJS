import { ComponenteClase } from "./compo-clase";
import { CompoFuncA, CompoFuncB, CompoFuncC } from "./compo-fun";
import React from "react";

export const App = ()=>{
    return (
        <>
            <ComponenteClase prop1={'propiedad seteada'}>
                <p>HOLIS</p>
                <p>totis</p>
            </ComponenteClase>
            <hr></hr>
            <CompoFuncA nombre={'-componente funcional A-'}>
                <h6>children uno</h6>
                <h6>children dos</h6>
            </CompoFuncA>
            <hr></hr>
            <CompoFuncB nombre={'-componente funcional B-'}>
                <h6>children uno</h6>
                <h6>children dos</h6>
            </CompoFuncB>
            <CompoFuncC nombre={'-componente funcional C-'}>
                <h6>children uno</h6>
                <h6>children dos</h6>
            </CompoFuncC>
        </>
    )
}