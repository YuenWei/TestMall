<template>
  <div class="goods-params">
    <div class="goods-params-item">
      <h3>{{params.info.key}}</h3>
      <table>
        <tr v-for="item in params.info.set">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="goods-params-item">
      <h3 >{{params.rule.key}}</h3>
      <h3 class="tip">{{params.rule.desc}}</h3>
      <table v-for="table in params.rule.tables">
        <tr v-for="tr in table" >
          <td v-for="td in tr">{{td}}</td>
        </tr>
      </table>
      <img v-for="item in params.info.images" :src="item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props: {
    params: {
      type: Object
    },
  }
}
</script>

<style>
.goods-params{width:calc(100% - 2rem);float:left;padding:1rem;border-top:.5rem solid #f2f2f2;}
.goods-params-item{margin-top:.5rem;}
.goods-params-item img{width:100%;}
.goods-params h3{color:#333;font-weight:bold;margin-top:1rem;margin-bottom:.5rem;}
.goods-params h3.tip{color:#FF6E16;margin:.5rem 0;font-size:13px;}
table{width:100%;}
table tr td{padding:3px;font-size:12px;}
table tr td:first-child{width:40px;font-weight:bold;color:#666;text-align:right;white-space:nowrap;}
</style>