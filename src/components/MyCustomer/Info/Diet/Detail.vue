<template>
  <div class="detailRootBox">
      <div class="detailBox">

        <ul>
          <li class="list">
            <h4>早餐</h4>
            <p>葱油饼: 面粉 15克,葱花、鸡粉、盐、芝麻适量;南瓜鸡蛋煎饼: 南瓜 350 克,面粉100克,糯米粉50克,鸡蛋2个,水约150毫升,生姜、葱适量;</p>            
            <img src="/src/assets/images/other/timg.jpg" />
            <img src="/src/assets/images/other/timg.jpg" />
            <img src="/src/assets/images/other/timg.jpg" />
          </li>

          <li class="list">
            <h4>中餐</h4>
            <p>葱油饼: 面粉 15克,葱花、鸡粉、盐、芝麻适量;南瓜鸡蛋煎饼: 南瓜 350 克,面粉100克,糯米粉50克,鸡蛋2个,水约150毫升,生姜、葱适量;</p>
            <img src="/src/assets/images/other/timg.jpg" />
            <img src="/src/assets/images/other/timg.jpg" />
            <img src="/src/assets/images/other/timg.jpg" />
          </li>

          <li class="list">
            <h4>晚餐</h4>
            <p>葱油饼: 面粉 15克,葱花、鸡粉、盐、芝麻适量;南瓜鸡蛋煎饼: 南瓜 350 克,面粉100克,糯米粉50克,鸡蛋2个,水约150毫升,生姜、葱适量;</p>            
            <img src="/src/assets/images/other/timg.jpg" />
            <img src="/src/assets/images/other/timg.jpg" />
            <img src="/src/assets/images/other/timg.jpg" />
          </li>
        </ul>

      </div>
  </div>
</template>

<style scoped lang="scss">

  .detailRootBox{
    background: #F0F1F3;
  }

  .detailBox{
    background: #FFF;
    li.list{
      padding:0.5rem 0.6rem 0.6rem;
      border-bottom: 0.22rem solid #F0F1F3;

      h4{
        font-size:0.32rem;
        color:$color;
        font-weight: 500;
      }

      p{
        font-size:0.28rem;
        line-height:0.4rem;
        margin:0.38rem 0;
      }

      img{
        width:2rem;
        height: 2rem;
        margin-right:0.1rem;
        margin-bottom:0.1rem;
      }

      img:nth-child(3n+2){
        margin-right: 0;
      }
    }
  }
</style>

