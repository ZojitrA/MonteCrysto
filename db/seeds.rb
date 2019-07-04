# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Watchlist.destroy_all
WatchlistStockJoin.destroy_all
Transaction.destroy_all
User.destroy_all
PortfolioHistory.destroy_all
Portfolio.destroy_all
User.create([{
    email:"mclovin@mclovin.com",
    password: "startrek",
    first_name: "Mc",
    last_name: "Lovin",
    funds_usd: 0
  }
  ])

Stock.destroy_all
Stock.create([

    {
    name: "Bitcoin",
    ticker: "BTC"
    },

    {
    name: "Ethereum",
    ticker: "ETH"
    },

    {
    name: "RIPPLE",
    ticker: "XRP"
    },

    {
    name: "LiteCoin",
    ticker: "LTC"
    },

    {
    name: "Bitcoin Cash",
    ticker: "BCH"
    },

    {
    name: "EOS",
    ticker: "EOS"
    },

    {
    name: "Binance Coin",
    ticker: "BNB"
    },

    {
    name: "Bitcoin SV",
    ticker: "BSV"
    },

    {
    name: "Tether",
    ticker: "USDT"
    },

    {
    name: "Cardano",
    ticker: "ADA"
    },

    {
    name: "TRON",
    ticker: "TRX"
    },

    {
    name: "Stellar",
    ticker: "XLM"
    },

    {
    name: "UNUS SED LEO",
    ticker: "LEO"
    },

    {
    name: "Monero",
    ticker: "XMR"
    },

    {
    name: "Dash",
    ticker: "DASH"
    },

    {
    name: "Chainlink",
    ticker: "LINK"
    },

    {
    name: "NEO",
    ticker: "NEO"
    },
    {
    name: "IOTA",
    ticker: "MIOTA"
    },

    {
    name: "Cosmos",
    ticker: "ATOM"
    },

    {
    name: "Ethereum Classic",
    ticker: "ETC"
    },

    {
    name: "NEM",
    ticker: "XEM"
    },

    {
    name: "Ontology",
    ticker: "ONT"
    },

    {
    name: "Zcash",
    ticker: "ZEC"
    },

    {
    name: "Maker",
    ticker: "MKR"
    },

    {
    name: "Tezos",
    ticker: "XTZ"
    },

    {
    name: "Qtum",
    ticker: "QTUM"
    },

    {
    name: "Bitcoin Gold",
    ticker: "BTG"
    },

    {
    name: "VeChain",
    ticker: "VET"
    },

    {
    name: "Crypto.com Chain",
    ticker: "CRO"
    },

    {
    name: "Basic Attention Token",
    ticker: "BAT"
    },

    {
    name: "Dogecoin",
    ticker: "DOGE"
    },

    {
    name: "USD Coin",
    ticker: "USDC"
    },

    {
    name: "OmiseGO",
    ticker: "OMG"
    },

    {
    name: "BitTorrent",
    ticker: "BTT"
    },

    {
    name: "Decred",
    ticker: "DCR"
    },

    {
    name: "V Systems",
    ticker: "VSYS"
    },

    {
    name: "Holo",
    ticker: "HOT"
    },

    {
    name: "Aurora",
    ticker: "AOA"
    },

    {
    name: "Bitcoin Diamond",
    ticker: "BCD"
    },

    {
    name: "Lisk",
    ticker: "LSK"
    },

    {
    name: "TrueUSD",
    ticker: "TUSD"
    },

    {
    name: "HyperCash",
    ticker: "HC"
    },

    {
    name: "Ravencoin",
    ticker: "RVN"
    },

    {
    name: "Huobi Token",
    ticker: "HT"
    },

    {
    name: "Pundi X",
    ticker: "NPXS"
    },

    {
    name: "Egretia",
    ticker: "EGT"
    },

    {
    name: "HedgeTrade",
    ticker: "HEDG"
    },

    {
    name: "Waves",
    ticker: "WAVES"
    },

    {
    name: "0x",
    ticker: "ZRX"
    },

    {
    name: "Augur",
    ticker: "REP"
    },

    {
    name: "Oubitica",
    ticker: "QBIT"
    },

    {
    name: "Nano",
    ticker: "NANO"
    },

    {
    name: "BitShares",
    ticker: "BTS"
    },

    {
    name: "Bytecoin",
    ticker: "BCN"
    },

    {
    name: "MonaCoin",
    ticker: "MONA"
    },

    {
    name: "Bytom",
    ticker: "BTM"
    },

    {
    name: "Komodo",
    ticker: "KMD"
    },

    {
    name: "Paxos Standard",
    ticker: "PAX"
    },

    {
    name: "IOST",
    ticker: "IOST"
    },

    {
    name: "Zilliqa",
    ticker: "ZIL"
    },

    {
    name: "ICON",
    ticker: "ICX"
    },

    {
    name: "ThoreCoin",
    ticker: "THR"
    },

    {
    name: "DigiByte",
    ticker: "DGB"
    },

    {
    name: "KuCoin Shares",
    ticker: "KCS"
    },

    {
    name: "Energi",
    ticker: "NRG"
    },

    {
    name: "Siacoin",
    ticker: "SC"
    },

    {
    name: "Metaverse ETP",
    ticker: "ETP"
    },

    {
    name: "ABBC Coin",
    ticker: "ABBC"
    },

    {
    name: "Aeternity",
    ticker: "AE"
    },

    {
    name: "GXChain",
    ticker: "GXC"
    },

    {
    name: "Verge",
    ticker: "XVG"
    },

    {
    name: "Mixin",
    ticker: "XIN"
    },

    {
    name: "Steem",
    ticker: "STEEM"
    },

    {
    name: "Ardor",
    ticker: "ARDR"
    },

    {
    name: "Dent",
    ticker: "DENT"
    },

    {
    name: "Insight Chain",
    ticker: "INB"
    },

    {
    name: "VestChain",
    ticker: "VEST"
    },

    {
    name: "THETA",
    ticker: "THETA"
    },

    {
    name: "aelf",
    ticker: "ELF"
    },

    {
    name: "Lambda",
    ticker: "LAMB"
    },

    {
    name: "MaidSafeCoin",
    ticker: "MAID"
    },

    {
    name: "Enjin Coin",
    ticker: "ENJ"
    },

    {
    name: "Status",
    ticker: "SNT"
    },

    {
    name: "Crypto.com",
    ticker: "MCO"
    },

    {
    name: "Nash Exchange",
    ticker: "NEX"
    },

    {
    name: "Golem",
    ticker: "GNT"
    },

    {
    name: "Zcoin",
    ticker: "XZC"
    },

    {
    name: "EDUCare",
    ticker: "EKT"
    },

    {
    name: "Dai",
    ticker: "DAI"
    },

    {
    name: "Stratis",
    ticker: "STRAT"
    },

    {
    name: "Quant",
    ticker: "QNT"
    },

    {
    name: "SOLVE",
    ticker: "SOLVE"
    },

    {
    name: "WAX",
    ticker: "WAX"
    },

    {
    name: "ELA",
    ticker: "Elastos"
    },

    {
    name: "Maximine Coin",
    ticker: "MXM"
    },

    {
    name: "Nebulas",
    ticker: "NAS"
    },

    {
    name: "Project Pai",
    ticker: "PAI"
    },

    {
    name: "Santiment Network Token",
    ticker: "SAN"
    },

    {
    name: "Grin",
    ticker: "GRIN"
    },

    {
    name: "Nexo",
    ticker: "NEXO"
    },

    {
    name: "AdEx",
    ticker: "ADX"
    },

    ])
