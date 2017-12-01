<template>
  <div>
      <div class="headerNav">
        <p :class="{'borderActive':active == 0}" @click="active = 0">配餐历史</p>
        <p :class="{'borderActive':active == 1}" @click="active = 1">饮食日报</p>
        <p :class="{'borderActive':active == 2}" @click="active = 2">综合日报</p>
      </div>
      <!--组件-->
      <HistoryPage v-show="active == 0"></HistoryPage>
      <Diet v-show="active == 1"></Diet>
      <Composite v-show="active == 2"></Composite>
  </div>
</template>

<script>
import HistoryPage from '@/components/MyCustomer/Info/History/History';
import Diet from '@/components/MyCustomer/Info/Diet/Diet';
import Composite from '@/components/MyCustomer/Info/Composite/Composite';
export default {
  name : 'Info',
  components: {
    HistoryPage,Diet,Composite
  },
  data(){
    return {
      active : 0
    };
  }
}
</script>

<style scoped lang="scss">

  .headerNav{
    display: flex;
    height:0.7rem;

    p{
      flex: 1;
      border-bottom: 1px solid $borderColor;
      border-right:1px solid $borderColor;
      line-height:0.7rem;
      text-align: center;
      color:$color;
      font-size:rem(0.14);
    }

    p:nth-last-child(1){
      border-right:none;
    }

  }

</style>


