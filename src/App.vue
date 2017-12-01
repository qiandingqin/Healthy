<template>
  <div id="app">
    <transition :name="transname" mode="in-out">

      <keep-alive include="Info">
        <router-view class="rootDiv" />
      </keep-alive>

    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      transname : 'slide-in',
    };
  },
  watch : {
    "$route"(){
      this.transname = this.$router.forwardStatus?'slide-in':'slide-out';
      this.$router.forwardStatus = false;
    }
  }
}
</script>

<style lang="scss">

  @import './assets/css/style.scss';

  //进栈出栈持续时间
  $duration:0.15s;
  //进栈出栈动画方式
  $animationMode:forwards ease-out;

  #app{
    height:100%;
  }
  /*全局视图，高度为window高度 - 底部高度*/
  .rootDiv {
    width: 100%;
    min-height:calc(100% - 1.1rem);
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom:1.1rem;
    background: #FFF;
  }

  /*路由过渡动画*/
  //进
  .slide-in-enter-active{animation: In 0.3s $animationMode;}
  //出
  .slide-out-leave-active{animation: Out 0.3s $animationMode;z-index: 2;}

  @keyframes In {
    0%{
      transform: translateX(100%)
    }
    100%{
      transform: translateX(0%)
    }
  }

  @keyframes Out {
    0%{
      transform: translateX(0%);
      opacity: 1;
    }
    100%{
      transform: translateX(100%);
      opacity: 1;
    }
  }
</style>
