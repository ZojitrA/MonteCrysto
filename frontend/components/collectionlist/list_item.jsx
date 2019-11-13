import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LinearGradient} from 'recharts';
import Radium from 'radium';
import ReactLoading from 'react-loading';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null, prevprice: null, price: null};

    this.handleClick = this.handleClick.bind(this);
    this.getChart = this.getChart.bind(this);
    this.getPrice = this.getPrice.bind(this);
    }

  componentDidMount() {
    this.getPrice();
    this.getChart();
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
      const price = data.data.USD ? data.data.USD.toFixed(3) : data.data.USD ;
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


  getChart(){

    const url = `https://min-api.cryptocompare.com/data/histohour?fsym=${this.props.ticker ? this.props.ticker : "BTC"}&tsym=USD&limit=24&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`

    // `https://api.iextrading.com/1.0/stock/${this.props.ticker}/chart/1y?chartInterval=20`;

    // `https://www.alphavantage.co/query?${this.state.func}&symbol=${this.state.symb}${this.state.interval}&apikey=ZRQW53GP2UJEJ1UK`

    axios.get(url)
    .then( chartdata => {

      // const keyz = Object.keys(data[this.state.datakey])
      const data = chartdata.data.Data ? chartdata.data.Data.map(datum => {
       // if(this.state.timeframe === "1D")
       return{
         time: datum.time,
         price: datum.open
       };
     }) : [];
      this.setState({
        data: data,
      });
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
  const data = this.state.data;
  let stroke;
  let priceColor;
if(data && data[0].price > data[data.length-1].price){
  stroke = '#f45531';
} else{
  stroke = '#21ce99';
}


if(this.state.prevprice && this.state.price > this.state.prevprice){
  priceColor = '#21ce99';
}
if(this.state.prevprice && this.state.price < this.state.prevprice){
  priceColor = '#f45531';
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
if(!data || !this.state.price){
  return(
       <div className="loader-container">
         <div className="loader">
           <ReactLoading type="spinningBubbles" color="#21ce99" height={76} width={76} />
         </div>
       </div>
     );
   }
  return(
    <div className="watchlist-item">
      <ul>
        <li style={{ color: stroke, fontWeight: 600, opacity: .7}} className="watchlist-ticker" onClick={this.handleClick}>{this.props.ticker}</li>
        <li style={priceColor ? {color: priceColor} : {color: "lightgray"}}>{this.state.price}</li>
        <br/>
        <br/>
      </ul>
      <LineChart width={50} height={30} data={data}>
        <XAxis dataKey="time" domain={['dataMin', 'dataMax']} hide={true}/>
        <YAxis datakey="price"  hide={true} />
        <Line dot={false} type='monotone' dataKey='price' stroke={stroke} strokeWidth={1} yAxisId={0} />
      </LineChart>
    </div>
  );



}
}


export default Radium(Item);
