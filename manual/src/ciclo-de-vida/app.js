import React from "react";

class Reloj extends React.Component{
    constructor(props){
        console.log('->Reloj->constructor() ');
        super(props);
        this.state = { hora:'',minutos:'',segundos:''}
    }
    componentDidMount(){
        console.log('->Reloj->componentDidMount() ');
        this.timerId = setInterval(this.tick,20000)
    }
    tick = ()=>{ 
        const hora = new Date()
        this.setState((est,props)=>{return{hora:hora.getHours(),minutos:hora.getMinutes(),segundos:hora.getSeconds()}})
    }
    componentWillUnmount(){
        console.log('->Reloj->componentWillUnmount() ');
        clearInterval(this.timerId)
    }

    render(){
        console.log('->Reloj->render() ');
        return(
            <>
                <h1>RELOJ</h1>
                <Hour hora={3}></Hour>
                <Min minuto={this.state.minutos}></Min>
                <Seg segundo={this.state.segundos}></Seg>
                <br/>
                <br/>
            </>
        )
    }
}

class Hour extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hora: props.hora
        }
    }
    render(){
        //console.log('->Hora->render() '+this.state.hora);        
        return(
            <>
                <h3>HORA: {this.props.hora}</h3>
                <button>clear hora</button>
            </>
        )
    }
}

class Min extends React.Component{
    constructor(props){
        super(props);
        this.state={
            minuto: props.minuto
        }
    }
    render(){
        return(
            <>
                <h3>MINUTO: {this.state.minuto}</h3>
                <button>clear minutos</button>
            </>
        )
    }
}

class Seg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            segundos: props.segundo
        }
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('->Seg->componentDidUpdate() '+JSON.stringify(prevProps));
        console.log('->Seg->componentDidUpdate() '+JSON.stringify(prevState));
        console.log('->Seg->componentDidUpdate() '+JSON.stringify(snapshot));
        //this.setState({segundo:this.props.segundo})
        //return {segundos:prevProps.segundo}
    }
   
    static getDerivedStateFromProps(props,state){        
        console.log('->Seg->getDerived()-props '+JSON.stringify(props));
        console.log('->Seg->getDerived()-state '+JSON.stringify(state));
        return {segundos:props.segundo}
    }
    render(){
        //console.log('->Seg->render() '+this.state.segundo);
        return(
            <>
                <h3>SEGUNDO: {this.state.segundos}</h3>
                <button>clear segundos</button>
            </>
        )
    }
}

const App = (props)=>{ return(<Reloj />) }

export default App;