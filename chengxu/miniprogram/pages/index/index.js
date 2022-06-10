// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this; //this在函数内部指向变化,所以需要将全局this指向保存到that中
    wx.request({
      url: 'https://www.zycmars.cn/api/article/queryArticleInfo', //需更换需请求数据的接口
      method: 'get',//请求方式 OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (data) {
        console.log(data)
        that.setData({//请求成功后在此刷新，res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          content:data.data.data,
          //这里模拟数据
         
        })
      },
      fail: function (err) { },//请求失败
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})