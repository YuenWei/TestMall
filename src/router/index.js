//1.导入vue vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Cate = () => import('views/cate/Cate')
const Cart = () => import('views/cart/Cart')
const My = () => import('views/my/My')
const Detail = () => import('views/detail/Detail')

//2.安装插件
Vue.use(VueRouter)

//重复点击tabbar报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//3.导出router  //4.在main.js导入且注册  //5.创建组件，导入组件，注册组件
export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '',
      //name: 'home',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/cate',
      component: Cate,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/my',
      component: My,
    },
    {
      path: '/detail/:id',
      component: Detail,
    },
  ]
})
