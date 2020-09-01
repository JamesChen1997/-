// pages/list/list.js
let listArry = require('../list/list-data')
Page({
  data: {
    listArry:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       this.setData({
        listArry:listArry.list_data
       })
  },
  todetail(event){
    //获取当前点击的下标
    let index = event.currentTarget.dataset.index
     wx.navigateTo({
       url: '/pages/detail/detail?index='+index,//把下标传给detail页面
     })
  },
  //点击轮播图去对应的详情页
  swipertodetail(event){
    let index = event.target.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,//把下标传给detail页面
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