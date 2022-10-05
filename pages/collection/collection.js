// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    healthindex: null,
    index: null,
    region: ['安徽省', '芜湖市', '弋江区'],
    picker: ['在校', '居家', '在实习或工作单位','其他'],
    healthpicker: ['健康', '异常（有头疼、咳嗽、乏力等情况）', '发热', '居家隔离', '医学集中隔离', '因病就诊或住院治疗', '接触过疑似或确诊病例', '疑似病例或确诊病例', '其他'],
    buttontype: 'cu-btn block bg-blue margin-tb-sm lg',
    buttontext: '提交',
    disabled: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },

  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },

  HealthPickerChange(e) {
    console.log(e);
    this.setData({
      healthindex: e.detail.value
    })
  },

  collection(e) {
    console.log(e);
    wx.showModal({
      title: '提示',
      content: '确认提交？',
      success :(res)=> {
        if (res.confirm) {
          this.setData({
            buttontext: '已提交',
            buttontype: 'cu-btn block line-blue margin-tb-sm lg',
            disabled: true,
            buttoncolor: 'gray'
          })
        } else if (res.cancel) {
        }
      }
    })
  }
})