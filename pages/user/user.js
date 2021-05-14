// pages/user/user.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pp: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pp = wx.getStorageSync('pp')
    this.setData({
      pp: pp
    })
    app.http.user().then((res) => {
      console.log(res);
    })
  },
  sc() {
    wx.navigateTo({
      url: '/pages/collect/collect',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  t() {
    wx.navigateTo({
      url: '/pages/feedback/feedback',
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