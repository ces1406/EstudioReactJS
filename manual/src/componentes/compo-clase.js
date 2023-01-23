import React from "react";

class ComponenteClase
 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nombre:'vacio',
            apellido:null
        }
    }
    setNombre(p){
        this.setState({nombre:p.toUpperCase()})
    }
    render(){
        return(
            <>
                <h1>Nombre: {this.state.nombre}</h1>
                <p>count:{this.props.children.count}</p>
                <h2>Apellido: {this.state.apellido}</h2>
            </>
        )
    }
} 

export {ComponenteClase}