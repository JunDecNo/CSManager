// pages/grade/grade.js
import {
  getGrade,
  getSubjectName,
  judgeUserInfo,
  getRank,
} from "../../database/All.js";
Page({
  /**
   * Page initial data
   */
  data: {
    pickerList: ["大一", "大二", "大三"],
    index: 0,
    multiArray: [
      ["大一", "大二", "大三"],
      ["上学期", "下学期"],
      [
        "高等数学（Ⅰ）",
        "线性代数",
        "程序设计基础",
        "程序设计基础实验",
        "思想道德修养与法律基础",
        "形势与政策（Ⅰ）",
        "军政训练课（含军事理论课）",
        "大学生职业生涯与发展规划",
        "大学英语（Ⅰ）",
        "大学体育（Ⅰ）",
        "计算机科学导论",
      ],
    ],
    multiIndex: [0, 0, 0],
    userName: "输入你的姓名",
    userID: "输入你的学号",
    subject: "选择科目",
    Salone: true,
    Syear: false,
    result: "成绩显示区域",
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    var userName = wx.getStorageSync("userName");
    var userID = wx.getStorageSync("userID");
    this.setData({
      userName: userName,
      userID: userID,
    });
  },
  changeRange(e) {
    if (e.detail.value == "alone") {
      this.setData({
        Salone: true,
        Syear: false,
      });
    } else {
      this.setData({
        Syear: true,
        Salone: false,
      });
    }
  },
  bindPickerChange(e) {
    this.setData({
      index: parseInt(e.detail.value),
    });
  },
  bindMultiChange: function (e) {
    this.setData({
      multiIndex: e.detail.value,
    });
  },
  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (
      e.detail.column //这里是关键，根据列的不同，改变第三列的值
    ) {
      case 0:
        switch (
          data.multiIndex[0] //根据第一列的不同，改变第三列的值
        ) {
          case 0: //
            data.multiArray[2] = [
              "高等数学（Ⅰ）",
              "线性代数",
              "程序设计基础",
              "程序设计基础实验",
              "思想道德修养与法律基础",
              "形势与政策（Ⅰ）",
              "军政训练课（含军事理论课）",
              "大学生职业生涯与发展规划",
              "大学英语（Ⅰ）",
              "大学体育（Ⅰ）",
              "计算机科学导论",
            ];
            break;
          case 1:
            data.multiArray[2] = [
              "数据结构实验",
              "专业见习",
              "中国近现代史纲要",
              "大学英语（Ⅲ）",
              "大学体育（Ⅲ）",
              "计算机组成原理",
              "计算机组成原理实验",
              "程序设计实践",
              "概率论与数理统计",
              "数据结构",
              "大学物理",
              "形势与政策（Ⅲ）",
            ];
            break;
          case 2:
            data.multiArray[2] = [
              "Python语言程序设计",
              "计算机图形学",
              "计算机网络",
              "计算机网络实验",
              "经济学原理",
              "嵌入式系统综合设计",
              "人机界面设计",
              "软件工程",
              "软件工程实验",
              "数据库原理",
              "数据库原理实验",
              "移动应用设计与开发",
              "专业研习",
            ];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1: //操作第二列
        switch (
          data.multiIndex[0] //根据第一列的值来判断第三列的值
        ) {
          case 0: //第一列的值为0
            switch (data.multiIndex[1]) {
              case 0: //大一上学期
                data.multiArray[2] = [
                  "高等数学（Ⅰ）",
                  "线性代数",
                  "程序设计基础",
                  "程序设计基础实验",
                  "思想道德修养与法律基础",
                  "形势与政策（Ⅰ）",
                  "军政训练课（含军事理论课）",
                  "大学生职业生涯与发展规划",
                  "大学英语（Ⅰ）",
                  "大学体育（Ⅰ）",
                  "计算机科学导论",
                ];
                break;
              case 1: //大一下学期
                data.multiArray[2] = [
                  "高等数学(II)",
                  "马克思主义基本原理概论",
                  "大学生心理健康教育",
                  "形势与政策（Ⅱ）",
                  "大学英语（Ⅱ）",
                  "大学体育（Ⅱ）",
                  "模拟电路与数字电路",
                  "模拟电路与数字电路实验",
                  "离散数学",
                  "面向对象程序设计实验",
                  "面向对象程序设计",
                ];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0: //大二上学期
                data.multiArray[2] = [
                  "数据结构实验",
                  "专业见习",
                  "中国近现代史纲要",
                  "大学英语（Ⅲ）",
                  "大学体育（Ⅲ）",
                  "计算机组成原理",
                  "计算机组成原理实验",
                  "程序设计实践",
                  "概率论与数理统计",
                  "数据结构",
                  "大学物理",
                  "形势与政策（Ⅲ）",
                ];
                break;
              case 1: //大二下学期
                data.multiArray[2] = [
                  "操作系统",
                  "操作系统实验",
                  "大学体育（Ⅳ）",
                  "大学英语（Ⅳ）",
                  "毛泽东思想和中国特色社会主义理论体系概论",
                  "嵌入式系统",
                  "嵌入式系统实验",
                  "算法分析与设计",
                  "算法分析与设计实验",
                  "习近平新时代中国特色社会主义思想概论",
                  "形势与政策（Ⅳ）",
                ];
                break;
            }
            break;
          case 2:
            switch (data.multiIndex[1]) {
              case 0: //大三上学期
                data.multiArray[2] = [
                  "Python语言程序设计",
                  "计算机图形学",
                  "计算机网络",
                  "计算机网络实验",
                  "经济学原理",
                  "嵌入式系统综合设计",
                  "人机界面设计",
                  "软件工程",
                  "软件工程实验",
                  "数据库原理",
                  "数据库原理实验",
                  "移动应用设计与开发",
                  "专业研习",
                ];
                break;
              case 1: //大三下学期
                data.multiArray[2] = [
                  "大学生创业指导",
                  "形势与政策（Ⅵ）",
                  "编译原理",
                  "编译原理实验",
                  "数字图像处理",
                  "虚拟现实",
                  "人工智能",
                  "机器学习",
                  "管理学原理",
                ];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },
  save: function () {
    // 保存成绩
    wx.setStorageSync("userName", this.data.userName);
    wx.setStorageSync("userID", this.data.userID);
    wx.showToast({
      title: "保存成功",
      icon: "success",
      duration: 2000,
    });
  },
  calGrade(e) {
    // 判断用户是否正确
    if (judgeUserInfo(this.data.userName, this.data.userID)) {
      if (this.data.Salone) {
        var index = this.calIndex(this.data.multiIndex);
        var grade = getGrade(this.data.userName, index);
        if (grade == "-" || grade == "") {
          wx.showToast({
            title: "未选择该门课或者未录入成绩",
            icon: "none",
            duration: 2000,
          });
        } else {
          wx.showModal({
            title: "结果",
            content:
              "您的" +
              getSubjectName(index) +
              "成绩是：" +
              grade +
              "分" +
              "\n排名是：" +
              getRank(this.data.userName, index) +
              "名",
            showCancel: false,
          });
        }
      }else{    
        wx.showModal({
          title: "结果",
          content: this.calYear(this.data.index),
          showCancel: false,
        });
      }  
    } else {
      // 提示用户错误
      wx.showToast({
        title: "姓名或学号错误",
        icon: "error",
        duration: 2000,
      });
    }
  },
  calIndex(index) {
    var sum = 0;
    switch (index[0]) {
      case 0:
        switch (index[1]) {
          case 0:
            sum = 0;
            break;
          case 1:
            sum += 11;
            break;
        }
        break;
      case 1:
        switch (index[1]) {
          case 0:
            sum += 22;
            break;
          case 1:
            sum += 34;
            break;
        }
        break;
      case 2:
        switch (index[1]) {
          case 0:
            sum += 45;
            break;
          case 1:
            sum += 58;
            break;
        }
        break;
    }
    sum += index[2];
    return sum + 2;
  },
  calYear(index) {
    var result = "";
    switch(index){
      case 0:
        result="您的大一各项各项成绩如下:\r\n";
        for(var i=2;i<24;i++){
          result+=getSubjectName(i)+":"+getGrade(this.data.userName,i)+"分 排名：第"+getRank(this.data.userName,i)+"名\r\n";
        }
        break;
      case 1:
        result="您的大二各项各项成绩如下:\r\n";
        for(var i=24;i<47;i++){
          result+=getSubjectName(i)+":"+getGrade(this.data.userName,i)+"分 排名：第"+getRank(this.data.userName,i)+"名\r\n";
        }
        break;
      case 2:
        result="您的大三各项各项成绩如下:\r\n";
        for(var i=47;i<69;i++){
          result+=getSubjectName(i)+":"+getGrade(this.data.userName,i)+"分 排名：第"+getRank(this.data.userName,i)+"名\r\n";
        }
        break;
    }
    return result;
  },
  inputUserName(e) {
    this.setData({
      userName: e.detail.value,
    });
  },
  inputUserID(e) {
    this.setData({
      userID: e.detail.value,
    });
  },
});
