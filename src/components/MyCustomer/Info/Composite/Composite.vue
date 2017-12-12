<template>
  <div>

    <div class="info">
      <p>原始体重: 75KG</p>
      <p>已减重: <span>2.6KG</span></p>
      <p>今日体重: 72.4KG</p>
    </div>

    <ul class="w-list">
      <li>
          <p>
              <img src="../../../../assets/images/c.png" />
              <span>今天</span>
          </p>
          <p>
              <span class="red">未报<i class="red"></i></span>
          </p>
          <router-link to="/MyCustomer/Composite/detail" v-if="false">
              <img src="../../../../assets/images/other/right.png" />
          </router-link>
      </li>
      <li>
          <p>
              <img src="../../../../assets/images/c.png" />
              <span>昨天</span>
          </p>
          <p>
              <span class="gray">体重72.4KG</span>
              <i class="green">-0.8KG</i>
          </p>
          <router-link to="/MyCustomer/Composite/detail" v-if="true">
              <img src="../../../../assets/images/other/right.png" />
          </router-link>
      </li>

      <li>
          <p>
              <img src="../../../../assets/images/c.png" />
              <span>2017年11月10日</span>
          </p>
          <p>
              <span class="gray">体重172.4KG</span>
              <i class="red">+10.08KG</i>
          </p>
          <router-link to="/MyCustomer/Composite/detail" v-if="true">
              <img src="../../../../assets/images/other/right.png" />
          </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  i{
    margin-left:0.1rem;
    font-size:0.28rem;
  }

  .info{
    height:1.2rem;
    background: #F4F5F7;
    display: flex;

    p{
      flex:1;
      text-align: center;
      line-height:1.2rem;
      font-size:0.28rem;
      color:$grayColor;
    }

    p:nth-child(2){
      color:$color;
      position: relative;
      top:-0.02rem;
      span{
        font-size:rem(0.18);
      }
    }
  };

  .w-list li{

    p{
      width:42vw;
      
    }

    p:nth-child(2){
      width:45vw;
    }

    a{
      width:3vw;
      position: relative;
      top:0.04rem;
    }

  }
</style>

