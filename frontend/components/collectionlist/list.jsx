import React from 'react';
import Itemizer from './list_itemizer';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickers: [], assets: [] };
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
    console.log(this.state.tickers)
  }


  render () {
    return (

        <ul className="landing-watchlist">
          <Itemizer history={this.props.history} title={"Watchlist"} tickers={this.state.tickers}/>
        </ul>

    );
  }
}
// <Itemizer history={this.props.history} title={"Assets"} tickers={this.state.assets}/>

export default Collection;
