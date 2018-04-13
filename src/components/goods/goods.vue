<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" :key="item.id" class="menu-item">
          <span class="text">
            <!--<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>-->
            <v-icon v-show="item.type>0" :item="item.type" iconIndex="3"></v-icon>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
  import icon from 'components/icon/icon';

  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
        }
      });
    },
    components: {
      'v-icon': icon
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    width: 100%;
    bottom: 46px;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
      }
    }
    .foods-wrapper {
      flex: 1;
    }
  }
</style>
