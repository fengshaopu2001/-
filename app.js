// app.js
var http=require("./request/c")
App({
  onLaunch() {
    var tokentime = wx.getStorageSync('tokentime');//过期时间
    let newTime = Date.parse(new Date());// 当前时间
    var token = wx.getStorageSync('token');
    if (!token)
    {
      return;
    }
    if (newTime > tokentime) {
      var newTokenTime = 24 * 3600 * 10;//过期时间10天
      wx.request({
        url: this.globalData.userUrl + 'api/auth/refresh?token='+token+'',
        method: "GET",
        success: function (res) {
          if (!res.data.message)
          {
            wx.setStorageSync('token', res.data.data.token);
            wx.setStorageSync('tokentime', Date.parse(new Date() + newTokenTime));
          }

          var token2 = wx.getStorageSync('token');

          console.log('新token', token2); 


        }
      });
    }

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  http:http
})
