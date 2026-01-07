const MARKET_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd";

const marketItems = document.querySelector(".market");

function loadMarket() {
  fetch(MARKET_API)
    .then((response) => response.json())
    .then((data) => {
      const binanceCoinPrice = data.binancecoin.usd;
      const bitcoinPrice = data.bitcoin.usd;
      const ethereumPrice = data.ethereum.usd;
      const tetherPrice = data.tether.usd;

      marketItems.innerHTML = `
        <div class="market-item">
          <span class="market-item-title">BNB/USD</span>
          <span class="market-item-money positive">$${binanceCoinPrice}</span>
        </div>
        <div class="market-item">
          <span class="market-item-title">BTC/USD</span>
          <span class="market-item-money positive">$${bitcoinPrice}</span>
        </div>
        <div class="market-item">
          <span class="market-item-title">ETH/USD</span>
          <span class="market-item-money positive">$${ethereumPrice}</span>
        </div>
        <div class="market-item">
          <span class="market-item-title">USDT/USD</span>
          <span class="market-item-money positive">$${tetherPrice}</span>
        </div>
      `;
    })
    .catch((err) => console.error(err));
}

loadMarket();            
setInterval(loadMarket, 10000);