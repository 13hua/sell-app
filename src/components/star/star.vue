<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :key="itemClass.id" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';

  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2; /* 向下取整  // 星星的数量 */
        let hasDecimal = score % 1 !== 0; /* 是否有半星 */
        let integer = Math.floor(score); /* 全星数量 */
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../../common/scss/mixin.scss';

  .star {
    font-size: 0;
    .star-item {
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-48 {
      @include star(20px, 22px, 48);
    }
    &.star-36 {
      @include star(15px, 16px, 36);
    }
    &.star-24 {
      @include star(10px, 3px, 24);
    }
  }
</style>
