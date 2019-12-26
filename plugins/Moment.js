import Vue from 'vue'
// var Moment = require('vue-moment'); 
// require('vue-moment/locale/ar-sa')
// moment.locale('ar-sa');


const moment = require('moment')
require('moment/locale/ar')
 
Vue.use(require('vue-moment'), {
    moment
})

// console.log(Vue.moment().locale()) 
