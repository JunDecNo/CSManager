// pages/wenti/wenti.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "竞赛达人",
        isActive: true,
      },
      {
        id: 1,
        value: "创业先锋",
        isActive: false,
      },
      {
        id: 2,
        value: "志愿标兵",
        isActive: false,
      },
      {
        id: 3,
        value: "文艺新星",
        isActive: false,
      },
    ],
    bannerList_0: [
      {
        id: 0,
        imgUrl: "../../images/source/index/img_0.jpg",
      },
      {
        id: 1,
        imgUrl: "../../images/source/index/img_1.jpg",
      },
      {
        id: 2,
        imgUrl: "../../images/source/index/img_2.jpg",
      },
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
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
  handleItemChange(e) {
    // 1.获取被点击的标题索引
    const { index } = e.detail;
    // 2.修改源数组
    let { tabs } = this.data;
    tabs.forEach((v, i) =>
      i === index ? (v.isActive = true) : (v.isActive = false)
    );
    // 3.赋值到data中
    this.setData({
      tabs,
    });
  },
});
