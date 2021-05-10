// pages/home/home.js
var app=new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  img:[],
  fl:[],
  lc:[]
  },

a(){
// console.log("a");
wx.navigateTo({
  url: '/pages/search/search',
})
},
tt(){
wx.switchTab({
  url: '/pages/category/category',
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
            //  wx.request({
            //    url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
            //    data:{},
            //    method:"get",
            //    success:((res)=>{
            //       console.log(res);
            //       var a=res.data.message
            //       console.log(a);
            //       this.setData({
            //         img:a
            //       })
            //    })
            //  })
            app.http.gg().then((res)=>{
              console.log(res);
              var a=res.data.message
              this.setData({
                img:a
              })
            })
            app.http.ggg().then((res)=>{
              console.log(res);
              var b=res.data.message
              this.setData({
                fl:b
              })
            })
            app.http.h().then((res)=>{
              console.log(res);
              var c=res.data.message
              this.setData({
                lc:c
              })
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