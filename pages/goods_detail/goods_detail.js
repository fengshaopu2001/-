// pages/goods_detail/goods_detail.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    list1: [],
    f: false,
    list2: []
  },
  pp() {
    var a = this.data.f
    a = !a //先让初始值为相反的让实现切换

    var p = wx.getStorageSync('pp') || []  //获取本地存储的值是数组
    console.log(p);
    var index = p.findIndex(v => v.goods_id === this.data.list1.goods_id) //用findIndex方法获取到下标
   // 如果没有的话就添加进去如果有的话就删除
    console.log(index);
    if (index == -1) {
      p.push(this.data.list1)
      wx.showToast({
        title: '收藏成功',
      })
      wx.navigateTo({
        url: '/pages/collect/collect',
      })
    } else {
      p.splice(index, 1)
      wx.showToast({
        title: '取消收藏',
      })
    }
    wx.setStorageSync('pp', p)
    this.setData({
      f: a
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var id = options.id
    app.http.f3(id).then((res) => {

      var a = res.data.message.pics
      var b = res.data.message
      console.log(a);
      console.log(b);
      this.setData({
        list: a,
        list1: b
      })
    })
  },
  //加入购物车
  gwc(e) {
    var k = wx.getStorageSync("k") || []
    var index = k.findIndex(v => v.goods_id === this.data.list1.goods_id)
    console.log(index);

    if (index == -1) {
      this.data.list1.num = 1,
        this.data.list1.che = true
      k.push(this.data.list1)

    } else {
      k[index].num++
      console.log(k[index].num++);
    }

    wx.setStorageSync('k', k)

    this.onReady()
    wx.showToast({
      title: '添加成功',
    })

  },
  //加入购物车

  //图片预览

  d(e) {
    console.log(e);
    var x = e.currentTarget.dataset.index
    console.log(x);
    var b = this.data.list.map(v => v.pics_big)
    console.log(b);

    wx.previewImage({
      current: b[x], // 当前显示图片的http链接
      urls: b // 需要预览的图片http链接列表
    })
  },
  //图片预览

  op() {

    wx.switchTab({
      url: '/pages/cart/cart',
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