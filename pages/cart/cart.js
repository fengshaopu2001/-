// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    che1: true,
    num: 0,
    address: {},
    ff: {},
    a: [],
    num1:0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideLoading()
    var a = wx.getStorageSync('k')
    console.log(a);
    this.setData({
      list: a
    })
  },
  kk(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index
    console.log(index);
    this.data.list[index].che = !this.data.list[index].che //先改变数据里面的che
    var arr = []
    this.data.list.forEach((a) => {
      if (a.che == true) {
        arr.push(a)
      }
    })
    var b = true
    if (arr.length === this.data.list.length) {
      b = true
    } else {
      b = false
    }
    this.setData({
      che1: b
    })

    this.onReady()

  },

  qx() { //全选
    var arr = []
    this.data.che1 = !this.data.che1 //先改变data数据里面的che
    this.setData({
      che1: this.data.che1
    })

    this.data.list.forEach((a) => {
      console.log(a.che);
      a.che = this.data.che1
    })

    this.setData({
      list: this.data.list
    })
    this.onReady()


  },
  //jian
  jian(e) {

    var index = e.currentTarget.dataset.index
    this.data.list[index].num--

    this.setData({
      list: this.data.list
    })
    this.onReady()
  },
  //jia
  jia(e) {
    var index = e.currentTarget.dataset.index
    this.data.list[index].num++

    this.setData({
      list: this.data.list
    })
    this.onReady()
  },
  //总价


  //收货地址
  qq() {
    wx.chooseAddress({
      success: (result) => {
        var address = result
        address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
        console.log(address);
        this.setData({
          address: address
        })
        wx.setStorageSync("address", address);


      },
      fail(e) {
        console.log(e);
      }

    })
  },

  jiesuan() {
     var a=this.data.address
     if(!a.userName){
       console.log("请选择地址");
       return false
     }else{
       var aa=[]
       this.data.list.forEach((item)=>{
         if(item.che==true){
aa.push(item)
         }
       })
      wx.setStorageSync('zon', aa)
      wx.navigateTo({
        url: '/pages/pay/pay?id=' + this.data.num,
      })
     }
  
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var a = 0;
    var b=0
    var arr = []
    this.data.list.forEach((item) => {
      console.log(item.che);
      if (item.che == true) {
        a += item.num * item.goods_price
        b+=item.num
      }
      this.setData({
        num: a,
        num1:b
      })
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