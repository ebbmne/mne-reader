<template>
  <div class="location-setting-wrapper">
    <div class="location-wrapper">
      <div class="sign">
        <span class="icon-back"></span>
      </div>
      <div class="range-wrapper">
          <input class="range" 
            type="range" 
            min="0" max="100" step="1" 
            @change="onRangeChange($event.target.value)"
            @input="onRangeInput($event.target.value)"
            :value="currentPercentage"
            ref="range"
          />
      </div>
      <div class="sign">
        <span class="icon-forward"></span>
      </div>
    </div>
    <div class="chapter-name-wrapper">
      {{ bookAvailable ? "章节1 随心所愿的百货商场(" + currentPercentage + "%)" : "加载中..." }}
    </div>
  </div>
</template>

<script>
import bookMixin from '../../BookMixin.js';
export default {
  mixins: [bookMixin],
  data() {
    return {
      currentPercentage: 0
    }
  },
  methods: {
    onRangeChange(value) {
      this.setLocationPercentage(value);
    },
    onRangeInput(value) {
      this.showPercentage(value);
      this.showCFI(value);
    },
    showPercentage(value) {
      this.currentPercentage = value;
      const rangeDOM = this.$refs.range;
      rangeDOM.style.backgroundSize = `${value}% 100%`;
    },
    showCFI(value) {
      const cfi = this.currentBook.locations.cfiFromPercentage(value / 100);
      this.currentBook.rendition.display(cfi);
    }
  },
  mounted() {
    this.showPercentage(this.locationPercentage);
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';

.location-setting-wrapper {
  width: 100%;
  height: px2rem(80);
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: px2rem(12);
  box-shadow: px2rem(0) px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.2);
  .location-wrapper {
    flex: 7;
    display: flex;
    .sign {
      flex: 1;
      height: 100%;
      @include center;
      font-weight: bold;
      font-size: px2rem(18);
    }
    .range-wrapper {
      flex: 8;
      height: 100%;
      @include center;
      .range {
        width: 98%;
        height: px2rem(2);
        -webkit-appearance: none;
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: px2rem(16);
          height: px2rem(16);
          border-radius: px2rem(8);
          position: relative;
          left: 100;
          display: flex;
          justify-content: left;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  .chapter-name-wrapper {
    flex: 3;
    text-align: center;
  }

}
</style>