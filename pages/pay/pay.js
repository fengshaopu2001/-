// pages/pay/pay.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tt: {},
    zon: 0,
    z: [],
    num:0,
    num1:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tt = wx.getStorageSync('address')
    var z = wx.getStorageSync('zon')
    this.setData({
      tt: tt,
      zon: options.id,
      z: z
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
var num=0
var num1=0
this.data.z.forEach((item)=>{
  num += item.num * item.goods_price
  num1+=item.num
})
this.setData({
  num:num,
  num1:num1
})
  },
  zhi() {
    var token = wx.getStorageSync('token')
    console.log(token);
    var zon=this.data.zon
    console.log(zon);
    if (!token) { //没有token值就让他去登录
      wx.navigateTo({
        url: '/pages/auth/auth',
      })
    } else {
      // console.log("再说"); //先创建订单 然后预支付 发起微信支付 然后查看订单
        //  app.http.dd().then((res)=>{
        //    console.log(res);
        //  })   

         wx.navigateTo({
           url: '/pages/order/order?id='+zon,
         })


    }

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