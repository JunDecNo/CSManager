// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList_1:[
      {
        id: 0,
        url: '/pages/grade/grade',
        imgUrl: '../../images/source/index/grade.png',
        name: '成绩查询',
      },{
        id: 1,
        url: '/pages/sport/sport',
        imgUrl: '../../images/source/index/sport.png',
        name: '体测计算',
      },{
        id: 2,
        url: '/pages/heart/heart',
        imgUrl: '../../images/source/index/tree.png',
        name: '心理树洞',
      },{
        id: 3,
        url: '/pages/credit/credit',
        imgUrl: '../../images/source/index/credit.png',
        name: '学分查询',
      }
    ],
    navList_2:[
      {
        id: 0,
        url: '/pages/douc/douc',
        imgUrl: '../../images/source/index/twoc.png',
        name: '第二课堂',
      },{
        id: 1,
        url: '/pages/card/card',
        imgUrl: '../../images/source/index/card.png',
        name: '核酸记录',
      },{
        id: 2,
        url: '/pages/back/back',
        imgUrl: '../../images/source/index/advice.png',
        name: '意见反馈',
      },{
        id: 3,
        url: '/pages/kyan/kyan',
        imgUrl: '../../images/source/index/kyan.png',
        name: '考研就业',
      }
    ],
    navList_3:[
      {
        id: 0,
        url: '/pages/collection/collection',
        imgUrl: '../../images/source/index/collection.png',
        name: '疫情打卡',
      },{
        id: 1,
        url: '/pages/dang/dang',
        imgUrl: '../../images/source/index/dang.png',
        name: '党史教育',
      },{
        id: 2,
        url: '/pages/class/class',
        imgUrl: '../../images/source/index/position.png',
        name: '班级任职',
      },{
        id: 3,
        url: '/pages/dorm/dorm',
        imgUrl: '../../images/source/index/dorm.png',
        name: '宿舍评分',
      }
    ],
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

  }
})