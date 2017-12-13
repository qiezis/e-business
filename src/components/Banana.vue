<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <h2>Banana</h2>
    <button v-on:click="addOne">addOne</button>
    <button v-on:click="minusOne">minusOne</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      price: 5
    }
  },
  methods:{
    addOne(){
      this.$store.commit('plusPrice',this.price)
    },
    minusOne(){
      this.$store.commit('reducePrice',this.price)
    }
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
</style>
