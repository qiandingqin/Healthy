<template>
  <div>
      <ul class="w-list">
        <li>
            <p><span>体重</span></p>
            <p><span class="gray">72KG </span></p>
        </li>
        <li>
            <p><span>腰围</span></p>
            <p><span class="gray">96CM </span></p>
        </li>
        <li style="border-bottom:none;">
            <p><span>运动量</span></p>
        </li>
    </ul>
      
    <img class="dataImg" src="../../../../assets/images/other/b.jpg" />

  </div>
</template>

<style scoped lang="scss">
  ul.w-list li{
    padding-left:0.52rem;
    padding-right:0.52rem;

    p{
      width:50%;
    }

    span{
      font-size:0.32rem;
    }
  }

  //448 * 794
  .dataImg{
    width:4.48rem;
    height:7.94rem;
    margin:0.32rem auto;
    display:block;
  }
</style>

