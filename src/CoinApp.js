import React,{Component} from 'react';
import Coin from './Coin';



class CoinApp extends Component {

    constructor(props) {
        super(props);
        this.state = {img:"",result:"",headCount:0,tailCount:0}
        this.flip = this.flip.bind(this);
    }

    flip() {
    const result = Math.floor(Math.random()* 2);
    if(result === 0){
        let newCount = this.state.headCount +1;
       this.setState({
        img:"./head.jpg",
        result:"head",
        headCount:newCount
       }) 
    }
    else {
        let newCount = this.state.tailCount +1;
        this.setState({
            img:"./tail.jpg",
            result:"tail",
            tailCount:newCount
           }) 
    }
    }

    render(){
        return(
            <div>
                <h1>Let's Flip a Coin</h1>
                <Coin img={this.state.img} alt={this.state.result} />
                <button onClick={this.flip}>Flip Coin</button>
                <p>Head Count:{this.state.headCount} & Tail Count:{this.state.tailCount}</p>
            </div>
        )
    }
}

export default CoinApp;