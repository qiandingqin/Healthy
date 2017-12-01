<template>
  <div>
      <div class="releaseBox">
        <p class="gray">情况说明</p>
        <textarea></textarea>
        <button class="releaseBtn">发布食谱</button>
      </div>
  </div>
</template>

<script>
export default {
  name : 'Release'
}
</script>

<style scoped lang="scss">
  .rootDiv{
    height: 100%;
  }

  .releaseBox{
    padding:0.3rem;

    p{
      margin-bottom:0.24rem;
      font-size:0.28rem;
    }

    textarea{
      width:calc(100% - 0.4rem);
      height:calc(2.72rem - 0.4rem);
      resize: none;
      outline: none;
      border: 1px solid #CECFD0;
      background: #F1F2F4;
      border-radius: 6px;
      padding:0.2rem;
    }

    button{
      margin-top:0.32rem;
    }
  }
</style>


