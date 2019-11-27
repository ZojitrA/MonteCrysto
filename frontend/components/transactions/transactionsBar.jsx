import React from 'react';
import axios from 'axios';

class StockSideBar extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser} = this.props;

    this.state = {
      transactionType: 'buy',
      shareDifference: null,
      sharePrice: 0,
      estimateTotal: 0,
      currentBuyingPower: currentUser.funds_usd,

    };

    this.handleTransactionSubmit = this.handleTransactionSubmit.bind(this);
    this.calcSharesOwned = this.calcSharesOwned.bind(this)
  }

  handleTransactionSubmit(e) {
    e.preventDefault();
    const { shareDifference, sharePrice, transactionType } = this.state;
    const { currentUser, createTransaction, ticker, allStocks } = this.props;
    const sign = transactionType === 'buy' ? 1 : -1;

    const stock_id = allStocks[ticker].id

    const transaction = {
      user_id: currentUser.id,
      quantity: shareDifference * sign,
      buy_price: sharePrice,
      stock_id: stock_id,
      ticker: ticker
    };

    const totalPrice = sharePrice * shareDifference * sign;

    createTransaction(transaction).then(data => {
      this.props.updateUser({user: {id: currentUser.id, funds_usd: currentUser.funds_usd - totalPrice}});
    });
  }



  handleTab(e, transactionType) {
    e.preventDefault();

    this.setState({ transactionType });
  }

  calcMarketPrice(ticker) {

    const url = `https://min-api.cryptocompare.com/data/price?fsym=${ticker}&tsyms=USD&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;


    axios.get(url)
    .then( data => {


      this.setState({ sharePrice: data.data.USD });
    });

    }


  setPriceInterval(){
    this.priceIntervalId = setInterval(()=>this.calcMarketPrice(this.props.ticker), 2000);
  }

  clearPriceInterval(){
    clearInterval(this.priceIntervalId);
  }
  componentWillUnmount() {

    this.clearPriceInterval();
  }


  calcSharesOwned() {
    if(this.props.shares){
      return this.props.shares[this.props.ticker];

    }
    return "Transacting"
  }

  componentDidMount() {
    this.calcMarketPrice(this.props.ticker)
    this.setPriceInterval()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.ticker !== this.props.ticker)
    this.calcMarketPrice(this.props.ticker);
    this.clearPriceInterval()
    this.setPriceInterval()

  }
  renderAssets() {
    const buyingPower = this.props.currentUser.funds_usd;
    return this.state.transactionType === 'buy' ? `${"$" + buyingPower} Buying Power Available` : `${this.calcSharesOwned()} Coins in Wallet`;
  }

  renderSellButton() {
    if (this.calcSharesOwned() > 0) {
      return (
        <button type="button" onClick={e => this.handleTab(e, 'sell')} className={this.setClassName('sell')} style={this.state.transactionType === 'sell' ? {color: "#f45531"} : {color: "black"}}>
          Sell
          {' '}
          {this.props.ticker}
        </button>
      );
    }
  }

  renderErrors() {
    const { errors } = this.props;
    return (
      <div className="tx-error-container">
        <ul>
          {errors.map((error, i) => (
            <li key={`${i}`} className="tx-error-list-item">
              <i className="fas fa-exclamation-circle" />
              {' '}
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  setClassName(type) {
    const { transactionType } = this.state;
    return `interval-btn${transactionType === type ? '-active-button' : ''}`;
  }

  update(field) {
    if (field === 'shareDifference') {
      return (e) => {
        const input = e.currentTarget.value === '' ? '' : e.currentTarget.value;
        this.setState({ [field]: parseInt(input) });
      };
    }
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { sharePrice, shareDifference, transactionType } = this.state;
    const { ticker, currentUser } = this.props;
    const marketPrice = this.state.sharePrice
    const transactionTotal =  isNaN(sharePrice * shareDifference) || sharePrice * shareDifference === 0 ? "" : sharePrice * shareDifference;
    const buyingPower = currentUser.funds_usd;
    if (!buyingPower) return null;
    this.calcSharesOwned();

    return (
      <div className="stock-sidebar-container">
        <div className="stock-sidebar">
          <header>
            <button onClick={e => this.handleTab(e, 'buy')} className={this.setClassName('buy')}>
              Buy
              {' '}
              {ticker}
            </button>
            {this.renderSellButton()}
          </header>
          <form onSubmit={this.handleTransactionSubmit} className="stock-sidebar-form">
            <div className="sidebar-output">
              <div className="stock-sidebar-shares sidebar-label">
                <label htmlFor="share-input">Coins</label>
                <input
                  type="number"
                  value={shareDifference ? shareDifference : ''}
                  id="share-input"
                  onChange={this.update('shareDifference')}
                />
              </div>
              <div className="stock-sidebar-price sidebar-label">
                <span>Market Price</span>
                <span className="sidebar-output-label">{marketPrice}</span>
              </div>
              <div className="stock-sidebar-cost sidebar-label">
                <span>Estimated Cost</span>
                <span className="sidebar-output-label">{transactionTotal}</span>
              </div>
            </div>
            {this.renderErrors()}
            <div className="submit-btn-container">
              <input
                type="submit"
                value={transactionType === 'sell' ? 'Submit Sell' : 'Submit Buy'}
                className="submit-order-btn"   style={transactionType === 'sell' ? {backgroundColor: " #f45531"} : {backgroundColor: "#21ce99"}}
              />
            </div>
            <div className="buying-power-container">
              <span>
                {' '}
                  {this.renderAssets()}
                {' '}
              </span>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default StockSideBar;
