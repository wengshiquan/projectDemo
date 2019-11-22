<template>
  <div class="hello">
    <li v-for="k in data" :key="k.id">
      <h1>{{k.id}}</h1>
      <h2>{{k.name}}</h2>
      <h3>{{k.age}}</h3>
    </li>
    
  </div>
</template>

<script>
import {getTestData} from '@/api/apis.js';

export default {
  name: 'HelloWorld',
  
  data() {
    return {
     data:null
    }
  },
  methods:{
    getTest(){
      getTestData()
      .then((res) =>{
        this.data = res.Data;
        console.log('2200');
        
        console.log(res)
      })
      .catch((err) =>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.getTest();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
