// pages/auth/auth.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindgetuserinfo(e) {  //获取用户信息
    console.log(e);
    var a = e.detail
    var encryptedData = a.encryptedData
    var iv = a.iv
    var rawData = a.rawData
    var signature = a.signature
    wx.login({ //用微信小程序里面的登录组件
      timeout: 1000, //超时时间
      success(res) { //登录成功获取接口获取token
        var code = res.code
        //  app.http.log(code,encryptedData,iv,rawData,signature).then((res)=>{
        //    console.log(res);
        //  })
        var token =Math.random()
        console.log(token);
        wx.setStorageSync('token', token)
 
        wx.showToast({
          title: '登录成功',
        })
        
        wx.navigateTo({
          url: '/pages/pay/pay',
        })

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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