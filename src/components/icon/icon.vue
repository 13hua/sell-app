<template>
  <span class="icon" :class="[classMap[item], classIconMap[iconIndex]]"></span>
</template>

<script>
  export default {
    props: {
      item: {
        type: Number
      },
      iconIndex: {
        type: String
      }
    },
    data() {
      return {};
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
      this.classIconMap = ['icon1', 'icon2', 'icon3', 'icon4'];
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../../common/scss/mixin.scss';

  .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }

  .icon1 {
    margin-right: 6px;
    @include icon(1);
  }

  .icon2 {
    margin-right: 6px;
    @include icon(2);
  }

  .icon3 {
    margin-right: 6px;
    @include icon(3);
  }

  .icon4 {
    margin-right: 6px;
    @include icon(4);
  }
</style>
