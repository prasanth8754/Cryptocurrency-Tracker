import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <div className="c-bg-cont">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        className="main-img"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="border-cont">
        <div className="col-cont-1">
          <p>Coin Type</p>
          <div className="col-cont-2">
            <p className="usd-col-name">USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul className="ul-cont">
          {cryptoList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} cryptoItem={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
