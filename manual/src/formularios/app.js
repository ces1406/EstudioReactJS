import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.campoA = React.createRef();
        this.state = {
            campoB:'',
            campoC:'valor x defecto'
        }
    }
    manejaSubmit =(e)=>{
        e.preventDefault();
        console.log('campoA: '+this.campoA.current.value);
        console.log('campoB: '+this.state.campoB);
        console.log('campoC: '+this.state.campoC);
    }
    manejaCambio =(e)=>{
        switch(e.target.name){
            case 'campob':
                this.setState((estado,props)=>{return {campoB:e.target.value}});
            break;
            case 'campoc':
                this.setState((estado,props)=>{return {campoC:e.target.value}});
            break;
            default:
            break;
        }
    }
    render(){
        return(
            <form onSubmit={this.manejaSubmit}>

                <label>campoA:</label>
                <input type="text" ref={this.campoA} name="camporef" />
                <br/>

                <label>campoB:</label>
                <input type="text" value={this.state.campoB} onChange={this.manejaCambio} name="campob" />
                <br/>

                <label>campoC:</label>
                <input type="text" value={this.state.campoC} onChange={this.manejaCambio} name="campoc" />
                <br/>

                <input type="submit" value="ENVIAR" />
            </form>
        )
    }
}