// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [
      {
        id: 0,
        imgUrl: '../../images/source/index/img_0.jpg'
      },{
        id: 1,
        imgUrl: '../../images/source/index/img_1.jpg'
      },{
        id: 2,
        imgUrl: '../../images/source/index/img_2.jpg'
      } 
    ],
    navList_1:[
      {
        id: 0,
        url: '/pages/grade/grade',
        imgUrl: '../../images/source/forum/grade.png',
        name: '成绩查询',
      },{
        id: 1,
        url: '/pages/analyze/analyze',
        imgUrl: '../../images/source/forum/analyze.png',
        name: '考情分析',
      },{
        id: 2,
        url: '/pages/heart/heart',
        imgUrl: '../../images/source/forum/heart.png',
        name: '心理树洞',
      }
    ],
    navList_2:[
      {
        id: 0,
        url: '/pages/game/game',
        imgUrl: '../../images/source/forum/compitition.png',
        name: '竞赛通知',
      },{
        id: 1,
        url: '/pages/rank/rank',
        imgUrl: '../../images/source/forum/rank.png',
        name: '竞赛成绩',
      },{
        id: 2,
        url: '/pages/book/book',
        imgUrl: '../../images/source/forum/book.png',
        name: '技能证书',
      }
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, //是否自动切换
    circular: true, //是否采用衔接滑动
    vertical: false, //滑动方向是否为纵向
    interval: 3000, //自动切换时间间隔
    duration: 100, //滑动动画时长
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