import React from "react";
 
class Reloj extends React.Component{
    constructor(props){
        console.log('->Reloj->constructor() ');
        super(props);
        this.state = { hora:'',minutos:'',segundos:''}
    }
    componentDidMount(){
        console.log('->Reloj->componentDidMount() ');
        this.timerId = setInterval(this.tick,30000)
    }
    tick = ()=>{ 
        const hora = new Date()
        this.setState((est,props)=>{return{hora:hora.getHours(),minutos:hora.getMinutes(),segundos:hora.getSeconds()}});
        console.log('->Reloj->tick(): state=',JSON.stringify(this.state))
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
                <Hor hora={this.state.hora}></Hor>
                <Min minuto={this.state.minutos}></Min>
                <Seg segundo={this.state.segundos}></Seg>
                <br/>
                <br/>
            </>
        )
    }
}

class Hor extends React.Component{
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

// Clase Min ejemplo de practicas equivocadas
class Min extends React.Component{
    constructor(props){
        super(props);
        this.state={
            minuto: props.minuto // de esta manera nunca se va a reflejar en el estado "minuto" un cambio
                                 // en el estado de reloj ( porque acá no hay un setState() ? )
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
    componentDidMount(){
        console.log('->Seg->componentDidMount()-this.state: '+JSON.stringify(this.state));
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('->Seg->componentDidUpdate()-prevProps: '+JSON.stringify(prevProps));
        console.log('->Seg->componentDidUpdate()-prevState: '+JSON.stringify(prevState));
        console.log('->Seg->componentDidUpdate()-this.props: '+JSON.stringify(this.props));
        console.log('->Seg->componentDidUpdate()-this.state: '+JSON.stringify(this.state));
        console.log('->Seg->componentDidUpdate()-snapshot: '+JSON.stringify(snapshot));
    }
   
    static getDerivedStateFromProps(props,state){        
        console.log('->Seg->getDerivedStateFromProps()-props '+JSON.stringify(props));
        console.log('->Seg->getDerivedStateFromProps()-state '+JSON.stringify(state));
        // El metodo debe retornar un objeto que actualiza el estado o NULL
        return {segundos:props.segundo}
    }
    shouldComponentUpdate(nextProps,nextState){
        // El metodo debe retornar true (por defecto, se renderiza el cambio o lo que sea que gatillo
        // el cambio) o false(se ignora el cambio y no se renderiza)
        console.log('->Seg->shouldComponentUpdate()-nextState '+JSON.stringify(nextState));
        console.log('->Seg->shouldComponentUpdate()-nextProps '+JSON.stringify(nextProps));
        return true;
    }
    render(){
        console.log('->Seg->render() '+this.state.segundos);
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