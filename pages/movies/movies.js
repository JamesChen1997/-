// pages/movies/movies.js
let appDatas = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      movieDatas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let movieDetailArry = appDatas.movieDetailArry
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      success:(datas)=>{
        let {subjects} = datas.data
          this.setData({
            movieDatas:subjects,
          })
           appDatas.data.movieDetailArry=subjects
      }
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