// pages/index.js
Page({
  data: {
      username:'xxx',
      userInfo:{},
      isShow:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.getUserInfo()
  },
  //判断用户是否已经授权以及获取用户信息的函数
  getUserInfo(){
     //判断用户是否已经授权了
     wx.getSetting({
      success:(data)=>{
        console.log("getSetting 接口调用成功的数据",data)
        if(data.authSetting['scope.userInfo']){
        //用户已经授权
        this.setData({
          isShow:false
        })
        }else{
          //用户还没有授权
          this.setData({
            isShow:true
          })
        }
      },
      fail:(data)=>{
        console.log("getSetting 接口调用失败的回调函数执行了")
      }
    })
    //获取用户登陆的信息
    wx.getUserInfo({
      success:(data)=>{
           console.log(data.userInfo)
           this.setData({
            userInfo:data.userInfo
           })
      },
      fail:()=>{
        console.log("获取用户数据失败")
      }
    })
  },
  handelUserInfo(data){//判断用户点击的是允许授权还是拒绝授权
          console.log("用户点击了", data)
          if(data.detail.rawData){//用户点击了确认授权
            this.getUserInfo()
          }
  },
  handelTap(){
    
    wx.navigateTo({
      url: '/pages/list/list',
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