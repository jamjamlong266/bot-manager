<template>
  <div class="form-holder">
    <div class="header">
        <h4>Bitcoin</h4>
    </div>

    <div class="input-holder">
        <div class="input-form">
            <p for="">Total amount</p>
            <input type="text" placeholder="name">
        </div>

        <div class="input-form">
            <p for="">Volume</p>
            <input type="text" placeholder="1000">
        </div>

        <div class="input-form">
            <p for="">Buy Price</p>
            <input type="text" placeholder="1000">
        </div>

        <div class="input-form">
            <p for="">Sell Price</p>
            <input type="text" placeholder="1000">
        </div>
    </div>

    <button>Update</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      msg: 'This is Form'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* { margin: 0; padding: 0}

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
a {
  color: #42b983;
}

.form-holder {
    width: 500px;
    height:350px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
}

.header {
    padding:10px;
    box-sizing:border-box;
    background-color:green;
    border-radius: 5px 5px 0 0;
    color:white;
}

.input-holder {
    padding: 20px 30px;
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start
}

.input-holder p {
    width:100px;
    margin: 25px 20px 0 0;
}

.input-holder input {
    width:300px;
    height:30px;
    border-radius: 10px;
    outline:none;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 5px 10px;
    box-sizing: border-box;
}

.input-holder p, .input-holder input {
    display:inline-block;
}

button {
    width:80%;
    height:40px;
    background-color: skyblue;
    outline:none;
    border:none;
    border-radius:20px;
    font-size:20px;
    color:rgba(0,0,0,0.5);
    cursor: pointer;
}
</style>
