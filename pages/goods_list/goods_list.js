// pages/goods_list/goods_list.js
var app = new getApp
import {
  re
} from '../../request/c.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zh: [{
        id: 0,
        value: '综合',
        che: false
      },
      {
        id: 1,
        value: '销量',
        che: false
      },
      {
        id: 2,
        value: '价格',
        che: false
      },
    ],
    list: [],
    q: {
      query:[],
      cid: 0,
      pagenum: 1,
      pagesize: 6,
    },
    index: 0,
    id: 0,
    list1: [],
    id1:0


  },


hhh(e){
    console.log(e);
    var id=e.currentTarget.dataset.item.cat_id
    console.log(id);
    wx.navigateTo({
      url: '/pages/goods_detail/goods_detail?id='+id,
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var id = options.id
    console.log(id);

    wx.showLoading({
      title: '刷新中...',
    })

    app.http.p(id,this.data.q.pagenum,this.data.q.pagesize).then((res)=>{
      console.log(res);
      var g=res.data.message.goods
      this.setData({
        list:g
      })
            wx.hideLoading();
        // 3. 停止下拉刷新，在需要刷新结束时调用该api，否则，页面将会保持下拉状态、不会回弹。
        wx.stopPullDownRefresh();

    })

    // wx.request({
    //   url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=${id}&pagenum=${this.data.q.pagenum}$pagesize=${this.data.q.pagesize}&query=${this.data.q.query}` ,
    //   data: {},
    //   method: "get",
    //   success: ((res) => {
    //   // var pagenum=res.data.message.pagenum
    //   // var total=res.data.message.total
    //     wx.hideLoading();
    //     // 3. 停止下拉刷新，在需要刷新结束时调用该api，否则，页面将会保持下拉状态、不会回弹。
    //     wx.stopPullDownRefresh();
    //     console.log(res);
    //     var g = res.data.message.goods
    //     console.log(g);
    //     this.setData({
    //       list: g,
    //     })


    //   })

    // })

  },

  u(e) {
    // console.log(e);
    var id = e.currentTarget.dataset.index
    console.log(id);

    this.setData({
      id: id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})