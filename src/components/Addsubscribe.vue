<template>
  <div class="hello">
    <p>ADD SUBSCRIBE</p>
    <div4>
      <span>Please select the indicator  :</span>
      <form action="">
        <input type="radio"  name="Indicator" value="MACD"> MACD<br>
        <input type="radio" name="Indicator" value="RSI"> RSI<br>
        <input type="radio" name="Indicator" value="SMA"> SMA<br>
        <input type="radio" name="Indicator" value="EMA"> EMA<br>
      </form>
    </div4>
    <div2>
      <label1>Please select your exchange market :</label1>
      <select>
        <option value="COINEX">COINEX</option>
        <option value="BINANCE">BINANCE</option>
        <option value="JONVI">JONVI</option>
      </select>
    </div2>
    
    <div3>
      <label2>Please select your trading pair :</label2>
      <select>
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="BCHUSDT">BCH/USDT</option>
        <option value="JEUSDT">JE/USDT</option>
        <option value="ETHUSDT">ETH/USDT</option>
        <option value="LTCUSDT">LTC/USDT</option>
        <option value="ETHBTC">ETH/BTC</option>
        <option value="LTCBTC">LTC/BTC</option>
        <option value="BCHBTC">BCH/BTC</option>
        <option value="JEBTC">JE/BTC</option>
        <option value="JEeMYR">JE/eMYR</option>
        <option value="BTCeMYR">BTC/eMYR</option>
        <option value="BCHeMYR">BCH/eMYR</option>
        <option value="ETHeMYR">ETH/eMYR</option>
        <option value="USDTeMYR">USDT/eMYR</option>
        </select>
    </div3>
    <form action="#/signup" method="get">
      <button type="submit" >ADD</button>
    </form>
    
    
  </div>
</template>

<script>


export default {
  name: 'Addsubscribe',
  data () {
    return {
      
    }
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
label1 {
  margin-right: 30px;
}
label2 {
  margin-right: 73px;
}
select {
  margin-left: 10px;
  margin-bottom: 20px;
}
div2 {
  margin-left: 10px;
  text-align: left;
  display: block;
}
div3 {
  margin-left: 10px;
  text-align: left;
  display: block;
  margin-bottom: 40px;
}
input {
  margin-bottom: 10px;
}
div4 {
  margin-left: 10px;
  margin-bottom: 10px;
  text-align: left;
  display: flex;
  }
  span {
    margin-right: 110px;
  }
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 6px 2px;
  border-radius: 50%;
}
p {
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
}

</style>