<template>
  <div>

    <ul class="w-list">
        <li>
            <p>
                <span>张晓丽</span>
            </p>
            <p>
                <span class="red">未配餐 <i class="red">未报</i></span>
            </p>
            <router-link to="/MyCustomer">
                <img src="../../assets/images/other/right.png" />
            </router-link>
        </li>
        <li>
            <p>
                <span>张晓丽</span>
            </p>
            <p>
                <span class="gray">未配餐 <i class="red">未报</i></span>
            </p>
             <router-link to="">
                <img src="../../assets/images/other/right.png" />
            </router-link>
        </li>
        <li>
            <p>
                <span>张晓丽</span>
            </p>
            <p>
                <span class="gray">已配餐 <i class="gray">已报</i></span>
            </p>
             <router-link to="">
                <img src="../../assets/images/other/right.png" />
            </router-link>
        </li>
    </ul>

    <NavFooter  :active="0"></NavFooter>

    <router-view class="rootDiv" />

  </div>
</template>

<script>
import NavFooter from '@/components/Template/Nav';
export default {
    name:'MyCoustomer',
    components: {NavFooter}
}
</script>

<style scoped lang="scss">
    
</style>


