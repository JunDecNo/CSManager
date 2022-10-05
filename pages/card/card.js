// pages/sign/sign.js
import {formatTime} from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signList: [],
    viewBg: 'rgb(161, 161, 161)',
    notice: '核酸采样7天'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'signList',
      success: function (res) {
        // 获取天数
        //before表示核酸的采样时间
        var before = new Date(res.data[0].time);
        before.setDate(before.getDate() + 1);
        before.setHours(0);
        before.setMinutes(0);
        before.setSeconds(0);
        before.setMilliseconds(0);
        var now = new Date();
        var days = (now.getTime() - before.getTime()) / (1000 * 60 * 60 * 24);
        if(before.getTime()>now.getTime()){
          that.setData({
            signList: res.data,
            viewBg: 'rgb(88, 197, 88)',
            notice: '今日核酸已采样'
          })
        }else{
          if(days<1){
            that.setData({
              signList: res.data,
              notice: '核酸采样1天'
            })
          }else{
            that.setData({
              signList: res.data,
              notice: '核酸采样' + days + '天'
            })
          }
        }
      }
    })

    
  },
  addResult(e) {
    if(this.data.viewBg == 'rgb(88, 197, 88)'){
      wx.showToast({
        title: '今日已采样',
        icon: 'success',
      })
      return;
    }
    wx.showModal({
      title: '提示',
      content: '今日核酸已采样？',
      success :(res)=> {
        if (res.confirm) {
          var newarray = [{
            time: formatTime(new Date()),
            address: '安徽省芜湖市'
          }];
          newarray = newarray.concat(this.data.signList)
          this.setData({
            signList: newarray,
            viewBg: 'rgb(88, 197, 88)',
            notice: '今日核酸已采样'
          })
          //保存数据
          wx.setStorage({
            key: 'signList',
            data: newarray,
          });
        }
      }
    })
  },
})



