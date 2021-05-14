// pages/category/category.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ffl: [],
    index: 0,
    index1: 0,
    b: [],
    c: []
  },
  t(e) {
    console.log(e);
    var id = e.currentTarget.dataset.item.cat_id
    console.log(id);
    wx.navigateTo({
      url: `/pages/goods_list/goods_list?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '分类加载',
    })
    app.http.fl().then((res) => {
      console.log(res);
      var a = res.data.message
      console.log(a);

      var b = a[0].children
      wx.hideLoading()
      console.log(b);
      this.setData({
        ffl: a,
        b: b
      })
    })


  },

  d(e) {
    var index = e.currentTarget.dataset.index
    var c = this.data.ffl[index].children
    console.log(c);
    this.setData({
      index1: index,
      c: c
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data.ffl);
  },
 ddd(){
          wx.navigateTo({
            url: '/pages/search/search',
          })
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