import { ComponenteClase } from "./compo-clase";
import { CompoFunc } from "./compo-fun";
import React from "react";

export const App = ()=>{
    return (
        <>
            <ComponenteClase>
                <p>HOLIS</p>
                <p>totis</p>
            </ComponenteClase>
            <hr></hr>
            <CompoFunc nombre={'pirulin'}>
                <p>SSHOLIS</p>
                <p>SStotis</p>
            </CompoFunc>
        </>
    )
}