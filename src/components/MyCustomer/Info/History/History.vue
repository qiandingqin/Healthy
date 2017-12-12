<template>
  <div class="HistoryBox">
      <ul class="w-list">
        <li v-for="(i,index) in 20">
            <p>
                <img src="../../../../assets/images/f.png" />
                <span>今天 {{index}}</span>
            </p>
            <router-link to="" >
              <img src="../../../../assets/images/other/up.png" @click="showPanel(index)" v-if="showIndex == index"/>
              <img src="../../../../assets/images/other/down.png" @click="showPanel(index)" v-else />
            </router-link>
            <div class="clearfix"></div>
            <div class="w-list-content">
              士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的士大夫大师傅似的
            </div>
        </li>
    </ul>

    <div class="buttonBox">
      <button class="release releaseBtn">
        <router-link to="/MyCustomer/History/Release">发布食谱</router-link>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name : 'History',
  data(){
    return {
      showIndex : null
    };
  },
  methods : {
    showPanel(index){
      let lis = document.querySelectorAll('.w-list li');
      lis.forEach(item => {
        item.classList.remove('showPanel');
      });

      if(this.showIndex == index){
        this.showIndex = null;
        lis[index].classList.remove('showPanel');
      }else{
        this.showIndex = index;
        lis[index].classList.add('showPanel');
      };
      
    }
  }
}
</script>

<style scoped lang="scss">
  .HistoryBox{
    position: relative;
    padding-bottom:0.74rem;
  }
  .showPanel{
    height: auto !important;
  }

  .buttonBox{
    position: fixed;
    width:100%;
    height:calc(0.72rem + 0.92rem);
    bottom:0;
    left:0;
    background: #FFF;
  }

  .release{
    position: absolute;
    left:50%;
    top:0;
    margin-left:-3.1rem;
    
    a{
      display: block;
      width: 100%;
      height: 100%;
      line-height:0.92rem;
      color:#FFF;
      font-size:0.32rem;
    }
  }
</style>


