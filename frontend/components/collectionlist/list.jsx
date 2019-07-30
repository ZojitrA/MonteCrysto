import React from 'react';
import Itemizer from './list_itemizer';
import PortfolioItemizer from './portfolio_itemizer';


class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickers: [], assets: [], stocks: {}};
  }

  componentWillMount(){
    this.props.getAllShares(this.props.user_id);
    this.props.getAllStocks().then(data => {
      this.setState({stocks: data});
    } );
  }

  componentDidMount() {
    this.props.getWatchlists(this.props.user_id).then(data => {

      let stuff = this.props.watchlist
      let ticks = [];
      for (var i = 0; i < stuff.stocks.length; i++) {
        ticks.push(stuff.stocks[i].ticker)
      }
      this.setState({tickers: ticks})
      }
    )
  }


  componentDidUpdate(){
  }


  render () {
    return (

        <ul className="landing-watchlist">
          <PortfolioItemizer history={this.props.history} title={"Wallet"} tickers={this.state.tickers} stocks={this.props.stocks} shares={this.props.shares}/>
          <br/>
        <Itemizer history={this.props.history} title={"Watchlist"} tickers={this.state.tickers}/>
        </ul>

    );
  }
}
// <Itemizer history={this.props.history} title={"Assets"} tickers={this.state.assets}/>

export default Collection;
