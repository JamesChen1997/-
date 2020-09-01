// pages/detail/detail.js
let detailArry = require('./list-data')
let appData = getApp()
console.log(appData, typeof appData)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailArry:[],
    isCollection:false,
    index:null,
    isStart:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //获取下标
     let index = options.index
     //更新detailArry的状态值
     this.setData({
      index,
      detailArry:detailArry.list_data[index]
     });
     //根据缓存的数据来判断用户是否收藏过本文章
    let hcData= wx.getStorageSync('isCollection') //同步读取
    if(!hcData){
         wx.setStorageSync('isCollection', {})
    }
    if(hcData[index]){
      //更新状态
      this.setData({
        isCollection:true
      })

    }
    //监听背景音乐的播放
    wx.onBackgroundAudioPlay(() => {
        this.setData({
          isStart:true
        })
         console.log("监听到音乐播放了")
         appData.data.index=index
         appData.data.isPlay=true
    })
    if(appData.data.isPlay && appData.data.index==index){
      this.setData({
        isStart:true
      })
    }
    
    //监听背景音乐的暂停
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isStart:false
      })
      console.log("监听到音乐暂停了")
      appData.data.index=index
      appData.data.isPlay=false
    })
  },
  share(){
      wx.showActionSheet({
        itemList: ['分享到朋友圈','分享到微博','分享到qq空间'],
      })
  },
  showCollection(){
    let isCollection = !this.data.isCollection
        this.setData({
          isCollection
        })
        let title = isCollection?'收藏成功':"取消收藏"
        wx.showToast({
          title,
          icon: 'success',
        })
        //把数据缓存到本地
        //获取文章的下标
        let {index} =this.data
        //读取本地存储里面的数据    原因；考虑第一次的情况
         wx.getStorage({
          key:'isCollection',
          success:(datas)=>{
             let obj =datas.data   //
             console.log(obj)
        obj[index]=isCollection  //isCollection   data中的状态
        wx.setStorage({
            key:'isCollection',
            data:obj,
            success:()=>{
                    console.log("缓存成功")
            }
        })
          }
        })
  },
  isStart(){
     let isStart = !this.data.isStart
     this.setData({
      isStart
     })
     if(isStart){
       let {dataUrl,title,coverImgUrl} = this.data.detailArry.music
      wx.playBackgroundAudio({
        dataUrl,
        title,
        coverImgUrl
      })
     }else{
      wx.pauseBackgroundAudio()
     }
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