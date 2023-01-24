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
                <h5>this.state.contador: {this.state.contador}</h5>
                <br/>
                <br/>
                <ComponenteHijo funHeredada={this.actualizar} />
            </>
        )
    }
}

class ComponenteHijo extends React.Component{
    render(){
        return(
            <>
                <h4>COMPONENTE HIJO</h4>
                <button onClick={this.props.funHeredada}>INCREMENTAR </button>
            </>
        )
    }
}

const App = (props)=>{ return(<ComponentePadre />) }

export default App;