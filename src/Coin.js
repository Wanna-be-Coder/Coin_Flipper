import React,{Component} from 'react';




class Coin extends Component {

    render(){
        return(
            <div >
                <img src={this.props.img} alt={this.props.result} style={{height:"300px",width:"300px"}}/>
            </div>
        )
    }
}

export default Coin;