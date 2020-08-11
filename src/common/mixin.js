export const backTopMinxin = {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    backTopClick(){
      console.log('混入方式使用BackTop')
      // 1.scroll回到顶部
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)

      // 2.封装scroll,调用Scroll.vue中的scrollTo()方法
      this.$refs.scroll.scrollTo(0, 0 ,500)
    },
    // contentScroll 不能混入
    // contentScroll(position){
    //   // 判断是否显示返回顶部
    //   // console.log(position);
    //   this.isShow = -(position.y) > BACKTOP_DISTANCE
    // },
  },
}