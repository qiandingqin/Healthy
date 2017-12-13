// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource';
import wx from 'weixin-js-sdk';

Vue.config.productionTip = false;

/*配置 Vue Http请求插件 */
Vue.use(resource);

//获取JS-SDK配置
// Vue.http.get('/test',)

//   .then(response => {

//     return response.json();

//   },err => {

//     console.log(err,123);

//   }).then(data => {

//     /*配置微信 JS-SDK */
//     wx.config({
//       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      
//       appId: data.appID, // 必填，公众号的唯一标识

//       timestamp: data.time, // 必填，生成签名的时间戳

//       nonceStr: data.nonceStr, // 必填，生成签名的随机串

//       signature: data.signature,// 必填，签名，见附录1

//       jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//     });

//     wx.ready(() => {
//       /* eslint-disable no-new */
//       new Vue({
//         el: '#app',
//         router,
//         template: '<App/>',
//         components: { App }
//       });

//     });

//   });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});