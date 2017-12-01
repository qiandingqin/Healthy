import Vue from 'vue';
import Router from 'vue-router';
//一级
import MyCustomer from '@/components/MyCustomer/MyCustomer';
//二级
import Info from '@/components/MyCustomer/Info';

import Apply from '@/components/Apply/Apply';
//二级
import ApplyDetail from '@/components/Apply/Detail';
//三级
import Release from '@/components/MyCustomer/Info/History/Release';
import DietDetail from '@/components/MyCustomer/Info/Diet/detail';
import CompositeDetail from '@/components/MyCustomer/Info/Composite/detail';

Vue.use(Router);

let routerPush = Router.prototype.push;

//为Router 对象重写后退
Router.prototype.push = function(a,b,c){
  //设置状态为前进
  this.forwardStatus = true;
  //调用原方法
  routerPush.call(this,a,b,c);
};
export default new Router({
  mode:'history',
  routes: [
    //入口
    {
      path: '/',
      name: 'Index',
      component: MyCustomer
    },
    {
      path: '/MyCustomer',
      name: 'Info',
      component: Info,
      meta: { keepAlive: true }
    },
    {
      path: '/MyCustomer/History/Release',
      name: 'Release',
      component: Release
    },
    {
      path: '/MyCustomer/Diet/detail',
      name: 'DietDetail',
      component: DietDetail
    },
    {
      path: '/MyCustomer/Composite/detail',
      name: 'CompositeDetail',
      component: CompositeDetail
    },
    //申请用户
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/Apply/Detail',
      name: 'ApplyDetail',
      component: ApplyDetail
    }
  ]
})
