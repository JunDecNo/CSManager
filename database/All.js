//获取数据
import {userinfo} from './userinfo'
import {grade} from './grade'
import {gradeSort} from './gradeSort'
function getSubjectName(subject){
  var result=null;
  subject=parseInt(subject);
  switch (subject) {
    case 2:result='高等数学（Ⅰ）';break;
    case 3:result='线性代数';break;
    case 4:result='程序设计基础';break;
    case 5:result='程序设计基础实验';break;
    case 6:result='思想道德修养与法律基础';break;
    case 7:result='形势与政策（Ⅰ）';break;
    case 8:result='军政训练课（含军事理论课）';break;
    case 9:result='大学生职业生涯与发展规划';break;
    case 10:result='大学英语（Ⅰ）';break;
    case 11:result='大学体育（Ⅰ）';break;
    case 12:result='计算机科学导论';break;
    case 13:result='高等数学(II)';break;
    case 14:result='马克思主义基本原理概论';break;
    case 15:result='大学生心理健康教育';break;
    case 16:result='形势与政策（Ⅱ）';break;
    case 17:result='大学英语（Ⅱ）';break;
    case 18:result='大学体育（Ⅱ）';break;
    case 19:result='模拟电路与数字电路';break;
    case 20:result='模拟电路与数字电路实验';break;
    case 21:result='离散数学';break;
    case 22:result='面向对象程序设计实验';break;
    case 23:result='面向对象程序设计';break;
    case 24:result='数据结构实验';break;
    case 25:result='专业见习';break;
    case 26:result='中国近现代史纲要';break;
    case 27:result='大学英语（Ⅲ）';break;
    case 28:result='大学体育（Ⅲ）';break;
    case 29:result='计算机组成原理';break;
    case 30:result='计算机组成原理实验';break;
    case 31:result='程序设计实践';break;
    case 32:result='概率论与数理统计';break;
    case 33:result='数据结构';break;
    case 34:result='大学物理';break;
    case 35:result='"形势与政策（Ⅲ）';break;
    case 36:result='操作系统*';break;
    case 37:result='操作系统实验';break;
    case 38:result='大学体育（Ⅳ）';break;
    case 39:result='大学英语（Ⅳ）';break;
    case 40:result='毛泽东思想和中国特色社会主义理论体系概论';break;
    case 41:result='嵌入式系统';break;
    case 42:result='嵌入式系统实验';break;
    case 43:result='算法分析与设计*';break;
    case 44:result='算法分析与设计实验';break;
    case 45:result='习近平新时代中国特色社会主义思想概论';break;
    case 46:result='形势与政策（Ⅳ）';break;
    case 47:result='Python语言程序设计';break;
    case 48:result='计算机图形学';break;
    case 49:result='计算机网络';break;
    case 50:result='计算机网络实验';break;
    case 51:result='经济学原理';break;
    case 52:result='嵌入式系统综合设计';break;
    case 53:result='人机界面设计';break;
    case 54:result='软件工程';break;
    case 55:result='软件工程实验';break;
    case 56:result='数据库原理';break;
    case 57:result='数据库原理实验';break;
    case 58:result='移动应用设计与开发';break;
    case 59:result='专业研习';break;
    case 60:result='大学生创业指导';break;
    case 61:result='形势与政策（Ⅵ）';break;
    case 62:result='编译原理';break;
    case 63:result='编译原理实验';break;
    case 64:result='数字图像处理';break;
    case 65:result='虚拟现实';break;
    case 66:result='人工智能';break;
    case 67:result='机器学习';break;
    case 68:result='管理学原理';break;
    default:break;
  }
  return result;
}
function getGrade(userName,subject){
    var Ugrade = null;
    for(var i=0;i<grade.length;i++){
      if(grade[i][1]==userName){
        Ugrade = grade[i][subject];
        break;
      }
    }
    return Ugrade;
}
function judgeUserInfo(UserName,ID){
  for(var i=0;i<userinfo.length;i++){
    if(userinfo[i]["学号"]==ID){
      if (userinfo[i]["姓名"]==UserName) {
        return true;
      }
    }
  }
  return false;
}
function getRank(userName,subject){
  var rank = null;
  for(var i=0;i<gradeSort.length;i++){
    if(gradeSort[i][1]==userName){
      rank = gradeSort[i][subject];
      break;
    }
  }
  return rank;
}
module.exports = {
  getGrade: getGrade,
  getSubjectName: getSubjectName,
  judgeUserInfo:judgeUserInfo,
  getRank:getRank
}