<template>
  <div class="hello">
      <form action="/action_page.php">
        <span>User ID:</span>  <input type="text" name="User ID" placeholder="Email/Username"><br>
        <span1>Password:</span1> <input type="text" name="Password" placeholder="Password"><br>
                  <input type="submit" value="Log in">
</form>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
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
a {
  color: #42b983;
}

input {
    
}

span {
    padding-right: 50px;
}
span1 {
    padding-right: 33px;
    line-height: 3.0;
}
</style>
