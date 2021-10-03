<template>
<div>
  <div id="app">
    <p v-for="item in items" v-once>{{item}}</p>
    <button @click="btn()">添加</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
      return {
          items: ['Feed a cat', 'Buy milk']
      }
    },
  props: {
    msg: String
  }
}
</script>

