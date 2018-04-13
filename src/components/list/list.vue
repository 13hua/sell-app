<template>
  <div>
    <div class="list">
      我是list {{counter}}
      <button v-on:click="clickButton">button{{counter}}</button>
    </div>
    <div v-if="Flag">
      <div>
        微信号：<input type="text" v-model="wxnum">
      </div>
      <div>
        姓名：<input type="text" v-model="name">
      </div>
      <div>
        电话：<input type="text" v-model="phone">
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'list',
    data: function () {
      return {
        counter: 0,
        Flag: false
      };
    },
    methods: {
      clickButton: function () {
        this.counter += 1;
        this.Flag = !this.Flag;
        this.$emit('clickBtn');
      }
    }
  };
</script>

<style scoped>

</style>
