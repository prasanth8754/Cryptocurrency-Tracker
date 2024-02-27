import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoItem

  return (
    <li className="li-cont">
      <div className="logo-cont">
        <img className="c-logo" src={currencyLogo} alt={currencyName} />
        <p className="li-paras">{currencyName}</p>
      </div>
      <div className="para-cont">
        <p className="li-paras p-1">{usdValue}</p>
        <p className="li-paras">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
