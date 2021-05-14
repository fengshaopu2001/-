// pages/search/search.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    list: [],
    s: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  input() {

    app.http.fg(this.data.value).then((res) => {
      console.log(res);
      var a = res.data.message
      this.setData({
        list: a
      })
    })
  },
  d(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index
    var id = this.data.list[index].goods_id
    var arr = wx.getStorageSync('arr') || []

    arr.push(this.data.list[index].goods_name)
    wx.setStorageSync('arr', arr)

    wx.navigateTo({
      url: '/pages/goods_detail/goods_detail?id=' + id,
    })
  },

  qx() {
    wx.navigateBack({ //返回上一页
      delta: 1,
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