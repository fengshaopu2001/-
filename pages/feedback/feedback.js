// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    i:[
      "体验问题",
      "商品、商家投诉"
    ],
    index:0,
    index1:0
  },
  xq() {
    // https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html 选择图片
    wx.chooseImage({
      count: 1,
      success: ((res) => {
        var a = res.tempFilePaths
        this.setData({
          img: [...a]
        })
        console.log(this.data.img);
      })
    })
  },
  tt(e){
     console.log(e);
     var index1=e.currentTarget.dataset.index
     this.setData({
       index1:index1
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