import React from 'react';
import Itemizer from './list_itemizer';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickers: [], assets: [] };
  }

  componentDidMount() {
    this.props.getWatchlists(this.props.user_id)
      .then( data => {


        const titled_watchlists = this.props.watchlist_ids.map(id => {

          let title = data.data.watchlists[id].title;
          let stocks = data.data.watchlists[id].stock_ids.map(id => {
            let ticker = data.data.stocks[id].ticker;
            return(
              ticker
            );
          });
          return({
          title: title,
          stocks: stocks
        });
      });
      for(var i = 0; i < titled_watchlists.length; i++){
        if(titled_watchlists[i].title === "primary_watchlist" && titled_watchlists[i].stocks !== undefined){
          this.setState({tickers: titled_watchlists[i].stocks});
        }
        else if(titled_watchlists[i].title === "portfolio" && titled_watchlists[i].stocks !== undefined){
          this.setState({assets: titled_watchlists[i].stocks});
        }
      }

  });
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
