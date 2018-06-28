<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <div class="content">
      <keep-alive><router-view :seller="seller"></router-view></keep-alive>
      
    </div>
  </div>
</template>

<script>
import { urlParse } from 'common/js/utils';

import header from 'components/header/header.vue';
import list from 'components/list/list.vue';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      }
    };
  },
  created() {
    this.$http.get('/api/seller?id=' + this.seller.id).then(response => {
      response = response.body;
      if (response.errno === ERR_OK) {
        // this.seller = response.data;
        this.seller = Object.assign({},this.seller,response.data);
        console.log(this.seller.id);
      }
    });
  },
  components: {
    'v-header': header,
    'v-list': list
  },
  methods: {
    clickBtn: function () {
      this.total += 1;
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import './common/scss/mixin.scss';

#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border-bottom: 1px solid rgba(7,17,27,.1);*/
    @include border-bottom-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      text-align: center;
    }
    a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
    }
    .active {
      color: rgb(240, 20, 20);
    }
  }
}
</style>
