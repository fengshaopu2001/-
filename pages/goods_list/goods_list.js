// pages/goods_list/goods_list.js
var app = new getApp

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

    query: [],
    cid: 0,
    pagenum: 1, //请求页数
    pagesize: 5, //页面几条数据

    index: 0,
    id: 0,
    list1: [],
    id1: 0,
    total: 0,
    t: 0,
    kkk: 0

  },


  hhh(e) {
    console.log(e);
    var id = e.currentTarget.dataset.item.goods_id
    console.log(id);
    wx.navigateTo({
      url: '/pages/goods_detail/goods_detail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '刷新中...',
    })
    console.log(options.id);
    var id = options.id
    this.setData({
      kkk: id
    })
    console.log(this.data.kkk);
    this.gh()
    // app.http.p(options.id, this.data.pagenum, this.data.pagesize, this.data.query).then((res) => {

    //   console.log(res);
    //   var a = res.data.message.goods
    //   var pagenum = res.data.message.pagenum
    //   var total = res.data.message.total
    //   var t=(total/pagenum)
    //   console.log(t);
    //   this.setData({
    //     list: a,
    //     pagenum: pagenum,
    //     total: total
    //   })

    //   wx.hideLoading();
    //   // 3. 停止下拉刷新，在需要刷新结束时调用该api，否则，页面将会保持下拉状态、不会回弹。
    //   wx.stopPullDownRefresh();
    // })

  },

  gh() {
    wx.request({
      url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=${this.data.kkk}&pagenum=${this.data.pagenum}&pagesize=${this.data.pagesize}&query=${this.data.query}`,
      data: {},
      success: ((res) => {
        wx.hideLoading();

        console.log(res);
        var a = res.data.message.goods
        var b = Math.ceil(res.data.message.total / this.data.pagenum)
        console.log(b);
        this.setData({
          list: [...a,...this.data.list],
          t: b
        })
      })

    })
    //   // 3. 停止下拉刷新，在需要刷新结束时调用该api，否则，页面将会保持下拉状态、不会回弹。

  },



  // 点击事件
  u(e) {
    // console.log(e);
    var id = e.currentTarget.dataset.index
    console.log(id);

    this.setData({
      id: id,
    })
  },
  // 点击事件




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
    this.setData({
      list: []
    })
    wx.showLoading({
      title: '加载',
    })
    this.data.pagenum = 1
    this.gh()
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(this.data.t,this.data.pagenum);
    if (this.data.t==this.data.pagenum) {
      wx.showToast({
        title: '没有更多数据了',
      })

       
        return false
    } else {
      wx.showLoading({
        title: '刷新中...',
      })
      this.data.pagenum++
      this.gh()
      console.log(this.data.list);
    }



  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})