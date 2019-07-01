# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Watchlist.destroy_all
WatchlistJoin.destroy_all
Transaction.destroy_all
User.destroy_all
PortfolioHistory.destroy_all
Portfolio.destroy_all
users = User.create!([{
    email:"mclovin@mclovin.com",
    password: "startrek",
    first_name: "Mc",
    last_name: "Lovin",
    funds: 0
  }
  ])

Stock.destroy_all
stocks = Stock.create!([

    {
    name: "Bitcoin",
    symbol: "BTC"
    },

    {
    name: "Ethereum",
    symbol: "ETH"
    },

    {
    name: "RIPPLE",
    symbol: "XRP"
    },

    {
    name: "LiteCoin",
    symbol: "LTC"
    },

    {
    name: "Bitcoin Cash",
    symbol: "BCH"
    },

    {
    name: "EOS",
    symbol: "EOS"
    },

    {
    name: "Binance Coin",
    symbol: "BNB"
    },

    {
    name: "Bitcoin SV",
    symbol: "BSV"
    },

    {
    name: "Tether",
    symbol: "USDT"
    },

    {
    name: "Cardano",
    symbol: "ADA"
    },

    {
    name: "TRON",
    symbol: "TRX"
    },

    {
    name: "Stellar",
    symbol: "XLM"
    },

    {
    name: "UNUS SED LEO",
    symbol: "LEO"
    },

    {
    name: "Monero",
    symbol: "XMR"
    },

    {
    name: "Dash",
    symbol: "DASH"
    },

    {
    name: "Chainlink",
    symbol: "LINK"
    },

    {
    name: "NEO",
    symbol: "NEO"
    },
    {
    name: "IOTA",
    symbol: "MIOTA"
    },

    {
    name: "Cosmos",
    symbol: "ATOM"
    },

    {
    name: "Ethereum Classic",
    symbol: "ETC"
    },

    {
    name: "NEM",
    symbol: "XEM"
    },

    {
    name: "Ontology",
    symbol: "ONT"
    },

    {
    name: "Zcash",
    symbol: "ZEC"
    },

    {
    name: "Maker",
    symbol: "MKR"
    },

    {
    name: "Tezos",
    symbol: "XTZ"
    },

    {
    name: "Qtum",
    symbol: "QTUM"
    },

    {
    name: "Bitcoin Gold",
    symbol: "BTG"
    },

    {
    name: "VeChain",
    symbol: "VET"
    },

    {
    name: "Crypto.com Chain",
    symbol: "CRO"
    },

    {
    name: "Basic Attention Token",
    symbol: "BAT"
    },

    {
    name: "Dogecoin",
    symbol: "DOGE"
    },

    {
    name: "USD Coin",
    symbol: "USDC"
    },

    {
    name: "OmiseGO",
    symbol: "OMG"
    },

    {
    name: "BitTorrent",
    symbol: "BTT"
    },

    {
    name: "Decred",
    symbol: "DCR"
    },

    {
    name: "V Systems",
    symbol: "VSYS"
    },

    {
    name: "Holo",
    symbol: "HOT"
    },

    {
    name: "Aurora",
    symbol: "AOA"
    },

    {
    name: "Bitcoin Diamond",
    symbol: "BCD"
    },

    {
    name: "Lisk",
    symbol: "LSK"
    },

    {
    name: "TrueUSD",
    symbol: "TUSD"
    },

    {
    name: "HyperCash",
    symbol: "HC"
    },

    {
    name: "Ravencoin",
    symbol: "RVN"
    },

    {
    name: "Huobi Token",
    symbol: "HT"
    },

    {
    name: "Pundi X",
    symbol: "NPXS"
    },

    {
    name: "Egretia",
    symbol: "EGT"
    },

    {
    name: "HedgeTrade",
    symbol: "HEDG"
    },

    {
    name: "Waves",
    symbol: "WAVES"
    },

    {
    name: "0x",
    symbol: "ZRX"
    },

    {
    name: "Augur",
    symbol: "REP"
    },

    {
    name: "Oubitica",
    symbol: "QBIT"
    },

    {
    name: "Nano",
    symbol: "NANO"
    },

    {
    name: "BitShares",
    symbol: "BTS"
    },

    {
    name: "Bytecoin",
    symbol: "BCN"
    },

    {
    name: "MonaCoin",
    symbol: "MONA"
    },

    {
    name: "Bytom",
    symbol: "BTM"
    },

    {
    name: "Komodo",
    symbol: "KMD"
    },

    {
    name: "Paxos Standard",
    symbol: "PAX"
    },

    {
    name: "IOST",
    symbol: "IOST"
    },

    {
    name: "Zilliqa",
    symbol: "ZIL"
    },

    {
    name: "ICON",
    symbol: "ICX"
    },

    {
    name: "ThoreCoin",
    symbol: "THR"
    },

    {
    name: "DigiByte",
    symbol: "DGB"
    },

    {
    name: "KuCoin Shares",
    symbol: "KCS"
    },

    {
    name: "Energi",
    symbol: "NRG"
    },

    {
    name: "Siacoin",
    symbol: "SC"
    },

    {
    name: "Metaverse ETP",
    symbol: "ETP"
    },

    {
    name: "ABBC Coin",
    symbol: "ABBC"
    },

    {
    name: "Aeternity",
    symbol: "AE"
    },

    {
    name: "GXChain",
    symbol: "GXC"
    },

    {
    name: "Verge",
    symbol: "XVG"
    },

    {
    name: "Mixin",
    symbol: "XIN"
    },

    {
    name: "Steem",
    symbol: "STEEM"
    },

    {
    name: "Ardor",
    symbol: "ARDR"
    },

    {
    name: "Dent",
    symbol: "DENT"
    },

    {
    name: "Insight Chain",
    symbol: "INB"
    },

    {
    name: "VestChain",
    symbol: "VEST"
    },

    {
    name: "THETA",
    symbol: "THETA"
    },

    {
    name: "aelf",
    symbol: "ELF"
    },

    {
    name: "Lambda",
    symbol: "LAMB"
    },

    {
    name: "MaidSafeCoin",
    symbol: "MAID"
    },

    {
    name: "Enjin Coin",
    symbol: "ENJ"
    },

    {
    name: "Status",
    symbol: "SNT"
    },

    {
    name: "Crypto.com",
    symbol: "MCO"
    },

    {
    name: "Nash Exchange",
    symbol: "NEX"
    },

    {
    name: "Golem",
    symbol: "GNT"
    },

    {
    name: "Zcoin",
    symbol: "XZC"
    },

    {
    name: "EDUCare",
    symbol: "EKT"
    },

    {
    name: "Dai",
    symbol: "DAI"
    },

    {
    name: "Stratis",
    symbol: "STRAT"
    },

    {
    name: "Quant",
    symbol: "QNT"
    },

    {
    name: "SOLVE",
    symbol: "SOLVE"
    },

    {
    name: "WAX",
    symbol: "WAX"
    },

    {
    name: "ELA",
    symbol: "Elastos"
    },

    {
    name: "Maximine Coin",
    symbol: "MXM"
    },

    {
    name: "Nebulas",
    symbol: "NAS"
    },

    {
    name: "Project Pai",
    symbol: "PAI"
    },

    {
    name: "Santiment Network Token",
    symbol: "SAN"
    },

    {
    name: "Grin",
    symbol: "GRIN"
    },

    {
    name: "Nexo",
    symbol: "NEXO"
    },

    {
    name: "AdEx",
    symbol: "ADX"
    },

    ])
