import {request} from "./request"

export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    },
  })
}

// 推荐在另外一个接口，须请求数据
export function getRecommend() {
  return request({
    ulr: '/recommend'
  })
}

// 商品信息杂乱，最好封装到一个数据对象中
export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services =  services;
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class Params{
  constructor(itemParams){
    this.info = itemParams.info;
    this.rule = itemParams.rule
  }
}
