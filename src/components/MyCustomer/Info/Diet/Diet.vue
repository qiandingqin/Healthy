<template>
  <div class="dietBox">
      <ul class="w-list">
        <li>
            <p>
                <img src="../../../../assets/images/r.png" />
                <span>今天</span>
            </p>
            <p>
                <span class="red">未报</span>
            </p>
            <router-link to="/MyCustomer/Diet/detail" v-if="false">
                <img src="../../../../assets/images/other/right.png" />
            </router-link>
        </li>
        <li>
            <p>
                <img src="../../../../assets/images/r.png" />
                <span>昨天</span>
            </p>
            <p>
                <span class="gray">已报</span>
            </p>
            <router-link to="/MyCustomer/Diet/detail" v-if="true">
                <img src="../../../../assets/images/other/right.png" />
            </router-link>
        </li>
        <li>
            <p>
                <img src="../../../../assets/images/r.png" />
                <span>前天</span>
            </p>
            <p>
                <span class="gray">已报</span>
            </p>
            <router-link to="/MyCustomer/Diet/detail" v-if="true">
                <img src="../../../../assets/images/other/right.png" />
            </router-link>
        </li>
        <li>
            <p>
                <img src="../../../../assets/images/r.png" />
                <span>2017年11月10日</span>
            </p>
            <p>
                <span class="gray">已报</span>
            </p>
            <router-link to="/MyCustomer/Diet/detail" v-if="true">
                <img src="../../../../assets/images/other/right.png" />
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .dietBox .w-list li {

    P:nth-child(1){
      width:60%;
    }

    P:nth-child(2){
      width:20%;
    }

  }
</style>


