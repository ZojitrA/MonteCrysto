import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';
import Radium from 'radium';
import ReactLoading from 'react-loading';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null, prevprice: null, price: null};

    this.handleClick = this.handleClick.bind(this);
    this.getPrice = this.getPrice.bind(this);
    }

  componentDidMount() {
    this.getPrice();
    this.intervalId = setInterval(this.getPrice, 500);

  }
  //
  componentWillUnmount() {
    // clear out this.intervalId
    clearInterval(this.intervalId);
  }


  getPrice(){

    const url = `https://min-api.cryptocompare.com/data/price?fsym=${this.props.ticker}&tsyms=USD&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`
    axios.get(url)
    .then( data => {

      // const keyz = Object.keys(data[this.state.datakey])
      const price = data.data.USD.toFixed(3);
      // const prevPrice = this.state.price;
      // this.setState({
      //   prevprice: prevPrice,
      //   price: price,
      // });

      this.setState((prevState, props) => ({
        prevprice: prevState.price,
        price: price
}));
    });

  }





      // componentDidUpdate(prevProps){
      //
      //   if(prevProps.timeframe !== this.props.timeframe){
      //     this.getStuff();
      //   }
      // }
    handleClick() {
        this.props.history.push(`/stock/${this.props.ticker}`);
    }

render(){

  let priceColor;


if(this.state.prevprice && this.state.price > this.state.prevprice){
  priceColor = "green";
}
if(this.state.prevprice && this.state.price < this.state.prevprice){
  priceColor = "red";
}

// let className
// if(data && data[data.length-1].price > data[data.length-2].price){
//   className = "splash-watchlist-price-red"
// }
// return(
//   <div>
//     <LineChart
//     width={650}
//     height={200}
//     data={data}
//     margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
//   >
//     <XAxis dataKey="time" domain={['dataMin', 'dataMax']} hide={true}/>
//     <Tooltip content={this.rendertooltip}/>
// <YAxis datakey="price" domain={['dataMin', 'dataMax']} hide={true} />
//     <Line dot={false} type="linear" dataKey="price" stroke={stroke} yAxisId={0}/>
//   </LineChart>
// </div>
// );
// }
if(!this.state.price){
  return(
       <div className="loader-container">
         <div className="loader">
           <ReactLoading type="spinningBubbles" color="#21ce99" height={76} width={76} />
         </div>
       </div>
     );
   }
  return(
    <div className="portfolio-item">
      <ul>
        <li style={{':hover' : { color: priceColor, fontWeight: 600}}} className="watchlist-ticker" onClick={this.handleClick}>{this.props.quantity} {this.props.ticker}</li>

        <br/>
        <br/>
      </ul>
      <li>{(parseFloat(this.state.price) * this.props.quantity).toFixed(2)}</li>

    </div>
  );



}
}


export default Radium(PortfolioItem);
