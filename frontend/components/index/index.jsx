import React from 'react';
import IndexItemizer from './indexItemizer';
import EveryPageNav from '../everyPageNav';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickers: [], assets: [], stocks: {}};
  }

  componentWillMount(){
    this.props.getAllStocks().then(data => {
      this.setState({stocks: data});
    } );
  }

  componentDidMount() {

  }


  componentDidUpdate(){
  }


  render () {

    return (
      <div className="index-page">
        <EveryPageNav page="index" currentUser={this.props.currentUser} logout={this.props.logout}/>
        <ul className="Index">
          <IndexItemizer history={this.props.history} title={Crypto} stocks={this.props.stocks}/>
        </ul>
      </div>

    );
  }
}
// <Itemizer history={this.props.history} title={"Assets"} tickers={this.state.assets}/>

export default Index;
