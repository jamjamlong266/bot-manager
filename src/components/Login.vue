<template>
  <div class="hello">
    <Form v-title="Bitcouns"/>
    <Form v-title="Bitcouns"/>
    <Form v-title="Bitcouns"/>
    <Form v-title="Bitcouns"/>
    <Form v-title="Bitcouns"/>
  </div>
</template>

<script>
import Form from './Form/Form'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'This is login'
    }
  },
  components: {
    Form
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

.hello {
    width:100%;
    display:flex;
    flex-direction: row;
}
</style>
