<template>
  <div class="hello">
    <h1>{{ changeNum }}</h1>
    <h1>{{ getChangeNum }}</h1>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

<script>
import {mapState, Store} from 'vuex'
import {constants} from 'crypto';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      arr: [1,2,3,4,5,6,7,8,9],
      getChangeNum: '1'
    }
  },
  mounted(){
    this.$store.dispatch('hideFoot')
    //console.log(this.showState)
    //console.log(this.changeNum)
    
  },
  methods: {
    add(){
      //console.log('加')
      this.$store.dispatch('getNewNum', 10)
      //this.getChangeNum = this.$store.getters.getChangeNum   //使用getter获取状态值
    },
    subtract(){
      //console.log('减')
      this.$store.dispatch('jian', 10)
    }
  },
  computed: {
      ...mapState({
          showState: state => state.showFoot,
          changeNum: state => state.changeNum
      })
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
