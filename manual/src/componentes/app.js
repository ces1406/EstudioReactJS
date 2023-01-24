import { ComponenteClase } from "./compo-clase";
import { CompoFunc } from "./compo-fun";
import React from "react";

export const App = ()=>{
    return (
        <>
            <ComponenteClase prop1={'propiedad seteada'}>
                <p>HOLIS</p>
                <p>totis</p>
            </ComponenteClase>
            <hr></hr>
            <CompoFunc nombre={'pirulin'}>
                <h6>children uno</h6>
                <h6>children dos</h6>
            </CompoFunc>
        </>
    )
}