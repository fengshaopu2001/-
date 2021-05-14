// pages/order/order.js
var time=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["全部", "待付款", "代发货", "退款/退货"],
    index: 0,
    index1: 0,
    list1: [],
    time1:{}
  },
  d(e) {
    console.log(e);
    var index1 = e.currentTarget.dataset.index
    console.log(index1);
    this.setData({
      index1: index1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dd = wx.getStorageSync('zon')
    console.log(dd);

   var a= dd.map(v=>v.upd_time)
var tim=0
a.forEach((item)=>{
  console.log(item);
   tim=time.formatTimeTwo(item,'Y/M/D h:m:s')
})
    
    this.setData({
      list1: dd,
      time1:tim
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