import React from "react";

class ComponentePadre extends React.Component{
    constructor(props){
        super(props);
        this.state = { contador:0}
    }
    actualizar = ()=>{
        this.setState( (estado,propiedades)=>{ return {contador : estado.contador +1} } )
    }
    render(){
        return(
            <>
                <h2>COMPONENTE PADRE</h2>
                <button onClick={this.actualizar}>INCREMENTAR </button>
                <br/>
                <br/>
                <ComponenteHijo propHeredada={this.state.contador} />
            </>
        )
    }
}

class ComponenteHijo extends React.Component{
    render(){
        return(
            <>
                <h4>COMPONENTE HIJO</h4>
                <p>La propiedad del componente hijo refleja un state del padre, entonces a medida que el componente padre modifique su estado esto será propagado a la propiedad del componente hijo.</p>
                <h6>this.props.propHeredada: {this.props.propHeredada}</h6>
            </>
        )
    }
}

const App = (props)=>{ return(<ComponentePadre />) }

export default App;