import React from "react";

class ComponenteClase extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nombre:'vacio',
            apellido:null
        }
    }
    componentDidMount(){
        this.setNombre('juan')
    }
    setNombre(p){
        this.setState({nombre:p.toUpperCase()})
    }
    render(){
        return(
            <>
                <hr/>
                <h1>COMPONENTE CLASE</h1>
                <h5>this.state.nombre: {this.state.nombre}</h5>
                <h5>this.state.apellido: {this.state.apellido}</h5>
                <h5>this.props.children.count:{this.props.children.count}</h5>
                <h4>this.props.children:</h4>{this.props.children}
                <h5>this.props.prop1:{this.props.prop1}</h5>
                <h5>this.props.prop2:{this.props.prop2}</h5>
                <hr/>
            </>
        )
    }
} 
ComponenteClase.defaultProps ={
    prop1:'prop1 x default',
    prop2:'prop2 x default'
}

export {ComponenteClase}