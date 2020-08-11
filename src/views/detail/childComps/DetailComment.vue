<template>
  <div class="detail-comment">
    <h3>评价<b>({{goodsCommentNum}})</b><span>更多</span></h3>
    <div class="comment-list">
      <div class="comment-item" v-for="(item, index) in goodsComments" :key="index">
        <div class="comment-user">
          <img :src="item.user.avatar">
          <span>{{item.user.uname}}</span>
        </div>
        <div class="comment-text">
          <p>{{item.content}}</p>
          <h4><span v-for="subItem in item.extraInfo">{{subItem}}</span></h4>
          <h5><span>{{item.created | showDate}}</span><span>{{item.style}}</span></h5>
        </div>
        <div class="comment-reply" v-if="item.explain">
          <p>{{item.explain}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils";

export default {
  name: 'DetailComment',
  props: {
    goodsCommentNum: {
      type: Number
    },
    goodsComments: {
      type: Array
    }
  },
  filters: {
    showDate(value){
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd');
    }
  }
}
</script>

<style>
.detail-comment{display:inline-block;padding:1rem;width:calc(100% - 2rem);border-top:.5rem solid #f2f2f2;}
.detail-comment h3{font-weight:bold;color:#000;}
.detail-comment h3 b{color:#f2270c;margin-left:4px;}
.detail-comment h3 span{float:right;font-size:12px;color:#666;font-weight:normal;}
.comment-list{width:100%;display:inline-block;margin-top:12px;}
.comment-user img{width:24px;height:24px;border-radius:50%;overflow:hidden;float:left;}
.comment-user span{font-size:12px;color:#333;margin:5px 0 0 8px;}
.comment-text{width:calc(100% - 32px);margin-left:32px;}
.comment-text p{font-size:13px;margin:.5rem 0;color:#000}
.comment-text h4{font-size:12px;margin-bottom:.5rem;color:#f27036}
.comment-text h4 span{margin-right:1rem;}
.comment-text h5{font-size:12px;}
.comment-text h5 span{margin-right:1rem;}
.comment-reply{width:calc(100% - 48px);margin-left:32px;font-size:12px;margin-top:.5rem;position:relative;background-color:#f0f0f0;padding:8px;border-radius:5px;}
.comment-reply::before{content:"";width:0;height:0;position:absolute;top:-10px;left:8%;border:5px solid #f0f0f0;border-color:transparent transparent #f0f0f0;}
</style>