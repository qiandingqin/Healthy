<template>
    <div>
        <ul class="w-list">
            <li>
                <p><span>张晓丽的</span><i>18258415478</i></p>
                <p><router-link to="/Apply/Detail"><span>详情 </span></router-link></p>
            </li>
            <li>
                <p><span>王晓兰</span><i>18258415478</i></p>
                <p><router-link to="/Apply/Detail"><span>详情 </span></router-link></p>
            </li>
            <li>
                <p><span>李星</span><i>18258415478</i></p>
                <p><router-link to="/Apply/Detail"><span>详情 </span></router-link></p>
            </li>
            <li>
                <p><span>无烟</span><i>18258415478</i></p>
                <p><router-link to="/Apply/Detail"><span>详情 </span></router-link></p>
            </li>
            <li>
                <p><span>王丽华</span><i>18258415478</i></p>
                <p><router-link to="/Apply/Detail"><span>详情 </span></router-link></p>
            </li>
        </ul>
        <NavFooter :active="1"></NavFooter>
    </div>
</template>

<script>
import NavFooter from '@/components/Template/Nav';
export default {
  name : 'Apply',
  components: {
      NavFooter
  }
}
</script>

<style lang="scss" scoped>
ul.w-list li{
    padding-left:0.52rem;
    padding-right:0.52rem;

    p{
      width:40%;
    }

    p:nth-child(1){
        width:60%;
        span{
            font-size:0.32rem;
            display: inline-block;
            width:1.3rem;
        }

        i{
            font-size:0.28rem;
            color:$grayColor;
            margin-left:0.2rem;
        }
    }

    p:nth-child(2) {
        a{
            width:40%;
        }
        span{color:$color;}
    }
}

</style>



