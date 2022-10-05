// pages/sport/sport.js
//导入sport.js
import { calculate } from '../../utils/sports.js'
Page({

  /**
   * Page initial data
   */
  data: {
    pickerList:['大一','大二','大三','大四'],
    sex:true,
    index:0,
    height: '单位：米',
    weight: '单位：公斤',
    lung: '单位：毫升',
    five: '单位：秒',
    jump: '单位：厘米',
    sit: '单位：厘米',
    run: '单位：秒',
    push: '单位：个',
  },
  onLoad(options) {
    var that = this;
    wx.getStorage({
      key: 'sport',
      success (res) {
        var initData=res.data;
        that.setData({
          sex:initData.sex,
          index:initData.index,
          height: initData.height,
          weight: initData.weight,
          lung: initData.lung,
          five: initData.five,
          jump: initData.jump,
          sit: initData.sit,
          run: initData.run,
          push: initData.push,
        })
      }
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  changeSex:function(e){
    if(e.detail.value=='male'){
      this.setData({
        sex:true
      })
    }
    else{
      this.setData({
        sex:false
      })
    }
  },
  calGrade:function(){
    //异常数据处理
    if(this.data.height=='单位：米'||this.data.weight=='单位：公斤'||this.data.lung=='单位：毫升'||this.data.five=='单位：秒'||this.data.jump=='单位：厘米'||this.data.sit=='单位：厘米'||this.data.run=='单位：秒'||this.data.push=='单位：个'){
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      })
      return;
    }else if(this.data.height<1.2||this.data.height>2.5){
      wx.showToast({
        title: '身高异常',
        icon: 'none',
        duration: 2000
      })
      return;
    }else if(this.data.weight<30||this.data.weight>200){
      wx.showToast({
        title: '体重异常',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    var grade,data = this.data,sex;
    if(data.sex)sex='boy';
    else sex='girl';
    grade = calculate(sex,data.pickerList[data.index],data.height,data.weight,data.lung,data.five,data.jump,data.sit,data.run,data.push);
    grade = grade.toFixed(2);
    wx.showModal({
      title: '提示',
      content: '您的成绩为：'+grade,
      showCancel:false,
    });
  },
  save:function(){
    // 保存成绩
    wx.setStorageSync('sport', this.data);
    wx.setStorage({
      key: 'sport',
      data: this.data,
      success() {
        // 保存成功
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  inputHeight(e){
    if(e.detail.value!=''){
      this.setData({
        height:e.detail.value
      })
    }else {
      this.setData({
        height:'单位：米'
      })
    }
  },
  inputWeight(e){
    if(e.detail.value!=''){
      this.setData({
        weight:e.detail.value
      })
    }else {
      this.setData({
        weight:'单位：公斤'
      })
    }
  },
  inputLung(e){
    if(e.detail.value!=''){
      this.setData({
        lung:e.detail.value
      })
    }else {
      this.setData({
        lung:'单位：毫升'
      })
    }
  },
  inputFive(e){
    if(e.detail.value!=''){
      this.setData({
        five:e.detail.value
      })
    }else {
      this.setData({
        five:'单位：秒'
      })
    }
  },
  inputJump(e){
    if(e.detail.value!=''){
      this.setData({
        jump:e.detail.value
      })
    }else {
      this.setData({
        jump:'单位：厘米'
      })
    }
  },
  inputSit(e){
    if(e.detail.value!=''){
      this.setData({
        sit:e.detail.value
      })
    }else {
      this.setData({
        sit:'单位：厘米'
      })
    }
  },
  inputRun(e){
    if(e.detail.value!=''){
      this.setData({
        run:e.detail.value
      })
    }else {
      this.setData({
        run:'单位：秒'
      })
    }
  },
  inputPush(e){
    if(e.detail.value!=''){
      this.setData({
        push:e.detail.value
      })
    }else {
      this.setData({
        push:'单位：个'
      })
    }
  },
})