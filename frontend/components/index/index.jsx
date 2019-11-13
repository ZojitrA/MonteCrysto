import React from 'react';
import IndexItemizer from './indexItemizer';
import EveryPageNav from '../navs/everyPageNav';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickers: [], assets: [], stocks: {},
      name_up: false,
      symbol_up: true,
      price_up: false,
      today_up: false,
      cap_up: false,
      active: "symbol"
    };
  }

  componentWillMount(){





  }

  componentDidMount() {
    this.props.getAllStocksData(Object.keys(this.props.stocks))
    this.dataInterval = setInterval(()=>(this.props.getAllStocksData(this.props.stocks)),10000)
  }


  componentDidUpdate(){

  }

  componentWillUnmount(){
    clearInterval(this.dataInterval)
  }


  render () {

    let nameArrow, symbolArrow, priceArrow, todayArrow, capArrow;
    let nameClass, symbolClass, priceClass, todayClass, capClass;

    if (this.state.active === "name"){
      if (this.state.name_up){
        nameArrow = (<span className="uparrow">&#9650;</span>);
      }else{
        nameArrow = (<span className="downarrow">&#9660;</span>);
      }
      nameClass = "index-active";
    }else{
      nameClass = "";
    }

    if (this.state.active === "symbol"){
      if (this.state.symbol_up){
        symbolArrow = (<span className="uparrow">&#9650;</span>);
      }else{
        symbolArrow = (<span className="downarrow">&#9660;</span>);
      }
      symbolClass = "index-active";
    }else{
      symbolClass = "";
    }

    if (this.state.active === "price"){
      if (this.state.price_up){
        priceArrow = (<span className="uparrow">&#9650;</span>);
      }else{
        priceArrow = (<span className="downarrow">&#9660;</span>);
      }
      priceClass = "index-active";
    }
    if (this.state.active === "today"){
      if (this.state.today_up){
        todayArrow = (<span className="uparrow">&#9650;</span>);
      }else{
        todayArrow = (<span className="downarrow">&#9660;</span>);
      }
      todayClass = "index-active";
    }else{
      todayClass = "";
    }
    if (this.state.active === "cap"){
      if (this.state.cap_up){
        capArrow = (<span className="uparrow">&#9650;</span>);
      }else{
        capArrow = (<span className="downarrow">&#9660;</span>);
      }
      capClass = "index-active";
    }else{
      capClass = "";
    }

    return (
      <div className="stock-show-page">
        <EveryPageNav page="index" currentUser={this.props.currentUser} logout={this.props.logout}/>
          <div className="info-top">
        <div className="main-wrapper">
              <div className="stock-index">
            <div className="stock-index-list">
              <h1>Global Coins Index</h1>
              <p>{Object.keys(this.props.stocks).length} Cryptocurrencies</p>
              <ul className="stock-index-list-header">


                <li className={symbolClass} onClick={() => {
                    this.setState({symbol_up: !this.state.symbol_up, active: "symbol"})
                    this.arrangeStocksAscending("symbol",!this.state.symbol_up);
                  }}>Symbol {symbolArrow}</li>

                <li className={nameClass} onClick={() => {
                    this.setState({name_up: !this.state.name_up, active: "name"})
                    this.arrangeStocksAscending("name",!this.state.name_up);
                  }}>Name {nameArrow}</li>

                <li className={priceClass} onClick={() => {
                    this.setState({price_up: !this.state.price_up, active: "price"})
                    this.arrangeStocksAscending("PRICE",!this.state.price_up,true);
                  }}>Price {priceArrow}</li>

                <li className={todayClass} onClick={() => {
                    this.setState({today_up: !this.state.today_up, active: "today"})
                    this.arrangeStocksAscending("CHANGEPCT24HOUR",!this.state.today_up,true);
                  }}>Today {todayArrow}</li>

                <li className={capClass} onClick={() => {
                    this.setState({cap_up: !this.state.cap_up, active: "cap"})
                    this.arrangeStocksAscending("MKTCAP",!this.state.cap_up,true);
                  }}>MarketCap {capArrow}</li>

              </ul>
              <IndexItemizer history={this.props.history} title={Crypto} stocks={this.props.stocks}/>
            </div>
          </div>
          </div>

          </div>
      </div>

    );
  }
}
// <Itemizer history={this.props.history} title={"Assets"} tickers={this.state.assets}/>

export default Index;
