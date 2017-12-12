<template>
  <div>
    <!--footer-->
    <nav class="footer">
      <p :class="{'borderActive':active == 0}" @click="openView(0)">
        <img src="../../assets/images/33.png" v-if="active == 0">
        <img src="../../assets/images/333.png" v-else>
        <span :style="active==0?'':'color:#44464A'">我的客户</span>
      </p>
      <p :class="{'borderActive':active == 1}" @click="openView(1)">
        <img src="../../assets/images/44.png" v-if="active == 1">
        <img src="../../assets/images/444.png" v-else>
        <span :style="active==1?'':'color:#44464A'">申请用户</span>
      </p>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Nav',
    props: ['active'],
    methods:{
        openView(active){
            if(active){
                this.$router.push('/Apply');
            }else if(this.$router.history.current.fullPath != '/'){
                this.$router.back();
            };
        }
    }
}
</script>

<style lang="scss" scoped>
/*导航*/
  #app nav{
    width:100%;
    height:1.1rem;
    position: fixed;
    left:0;
    bottom:0;
    display: flex;
    background: #FFF;

    p{
      flex: 1;
      text-align: center;
      padding-top:rem(0.06);
      border-top:1px solid $borderColor;
      border-right:1px solid $borderColor;
    }

    p:nth-last-child(1){
      border-right: none;
    }

    p img{
      display: block;
      width:0.42rem;
      height:0.42rem;
      margin:0 auto rem(0.03);
    }

    p span{
      font-size:rem(0.14);
      color:$color;
    }

  }
</style>


