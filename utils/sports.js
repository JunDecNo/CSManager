// 计算BMI分数
function calculateBMI(sex, height, weight) {
  var bmi = weight / (height * height);
  if (sex == "boy") {
    if (bmi <= 17.8) {
      return 80;
    } else if (bmi <= 23.9) {
      return 100;
    } else if (bmi <= 27.9) {
      return 80;
    } else if (bmi >= 28) {
      return 60;
    }
  }else if(sex== 'girl'){
    if (bmi <= 17.1) {
        return 80;
      } else if (bmi <= 23.9) {
        return 100;
      } else if (bmi <= 27.9) {
        return 80;
      } else if (bmi >= 28) {
        return 60;
      }
  }
}
// 计算肺活量分数
function calculateLung(sex,grade,lung){
  if(sex=='boy'){
    if(grade=='大一'||grade=='大二'){
      if(lung>=5040){
        return 100;
      }else if(lung>=4920){
        return 95;
      }else if(lung>=4800){
        return 90;
      }else if(lung>=4550){
        return 85;
      }else if(lung>=4300){
        return 80;
      }else if(lung>=4180){
        return 78;
      }else if(lung>=4060){
        return 76;
      }else if(lung>=3940){
        return 74;
      }else if(lung>=3820){
        return 72;
      }else if(lung>=3700){
        return 70;
      }else if(lung>=3580){
        return 68;
      }else if(lung>=3460){
        return 66;
      }else if(lung>=3340){
        return 64;
      }else if(lung>=3220){
        return 62;
      }else if(lung>=3100){
        return 60;
      }else if(lung>=2940){
        return 50;
      }else if(lung>=2780){
        return 40;
      }else if(lung>=2620){
        return 30;
      }else if(lung>=2460){
        return 20;
      }else if(lung>=2300){
        return 10;
      }else return 0;        
    }else if(grade=='大三'||grade=='大四'){
      if(lung>=5140){
        return 100;
      }else if(lung>=5020){
        return 95;
      }else if(lung>=4900){
        return 90;
      }else if(lung>=4650){
        return 85;
      }else if(lung>=4400){
        return 80;
      }else if(lung>=4280){
        return 78;
      }else if(lung>=4160){
        return 76;
      }else if(lung>=4040){
        return 74;
      }else if(lung>=3820){
        return 72;
      }else if(lung>=3800){
        return 70;
      }else if(lung>=3680){
        return 68;
      }else if(lung>=3560){
        return 66;
      }else if(lung>=3440){
        return 64;
      }else if(lung>=3320){
        return 62;
      }else if(lung>=3200){
        return 60;
      }else if(lung>=3030){
        return 50;
      }else if(lung>=2860){
        return 40;
      }else if(lung>=2690){
        return 30;
      }else if(lung>=2520){
        return 20;
      }else if(lung>=2350){
        return 10;
      }else return 0;
    }
  }else if(sex=='girl'){
    if(grade=='大一'||grade=='大二'){
      if(lung>=3400){
        return 100;
      }else if(lung>=3350){
        return 95;
      }else if(lung>=3300){
        return 90;
      }else if(lung>=3150){
        return 85;
      }else if(lung>=3000){
        return 80;
      }else if(lung>=2900){
        return 78;
      }else if(lung>=2800){
        return 76;
      }else if(lung>=2700){
        return 74;
      }else if(lung>=2600){
        return 72;
      }else if(lung>=2500){
        return 70;
      }else if(lung>=2400){
        return 68;
      }else if(lung>=2300){
        return 66;
      }else if(lung>=2200){
        return 64;
      }else if(lung>=2100){
        return 62;
      }else if(lung>=2000){
        return 60;
      }else if(lung>=1960){
        return 50;
      }else if(lung>=1920){
        return 40;
      }else if(lung>=1880){
        return 30;
      }else if(lung>=1840){
        return 20;
      }else if(lung>=1800){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(lung>=3450){
        return 100;
      }else if(lung>=3400){
        return 95;
      }else if(lung>=3350){
        return 90;
      }else if(lung>=3200){
        return 85;
      }else if(lung>=3050){
        return 80;
      }else if(lung>=2950){
        return 78;
      }else if(lung>=2850){
        return 76;
      }else if(lung>=2750){
        return 74;
      }else if(lung>=2650){
        return 72;
      }else if(lung>=2550){
        return 70;
      }else if(lung>=2450){
        return 68;
      }else if(lung>=2350){
        return 66;
      }else if(lung>=2250){
        return 64;
      }else if(lung>=2150){
        return 62;
      }else if(lung>=2050){
        return 60;
      }else if(lung>=2010){
        return 50;
      }else if(lung>=1970){
        return 40;
      }else if(lung>=1930){
        return 30;
      }else if(lung>=1890){
        return 20;
      }else if(lung>=1850){
        return 10;
      }else return 0;
    }
  }
}
// 计算50米分数
function calculate50m(sex,grade,time){
  if(sex=='boy'){
    if(grade=='大一'||grade=='大二'){
      if(time<=6.7){
        return 100;
      }else if(time<=6.8){
        return 95;
      }else if(time<=6.9){
        return 90;
      }else if(time<=7){
        return 85;
      }else if(time<=7.1){
        return 80;
      }else if(time<=7.3){
        return 78;
      }else if(time<=7.5){
        return 76;
      }else if(time<=7.7){
        return 74;
      }else if(time<=7.9){
        return 72;
      }else if(time<=8.1){
        return 70;
      }else if(time<=8.3){
        return 68;
      }else if(time<=8.5){
        return 66;
      }else if(time<=8.7){
        return 64;
      }else if(time<=8.9){
        return 62;
      }else if(time<=9.1){
        return 60;
      }else if(time<=9.3){
        return 50;
      }else if(time<=9.5){
        return 40;
      }else if(time<=9.7){
        return 30;
      }else if(time<=9.9){
        return 20;
      }else if(time<=10.1){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time<=6.6){
        return 100;
      }else if(time<=6.7){
        return 95;
      }else if(time<=6.8){
        return 90;
      }else if(time<=6.9){
        return 85;
      }else if(time<=7){
        return 80;
      }else if(time<=7.2){
        return 78;
      }else if(time<=7.4){
        return 76;
      }else if(time<=7.6){
        return 74;
      }else if(time<=7.8){
        return 72;
      }else if(time<=8){
        return 70;
      }else if(time<=8.2){
        return 68;
      }else if(time<=8.4){
        return 66;
      }else if(time<=8.6){
        return 64;
      }else if(time<=8.8){
        return 62;
      }else if(time<=9){
        return 60;
      }else if(time<=9.2){
        return 50;
      }else if(time<=9.4){
        return 40;
      }else if(time<=9.6){
        return 30;
      }else if(time<=9.8){
        return 20;
      }else if(time<=10){
        return 10;
      }else return 0;
    }
  }else if(sex=='girl'){
    if(grade=='大一'||grade=='大二'){
      if(time<=7.5){
        return 100;
      }else if(time<=7.6){
        return 95;
      }else if(time<=7.7){
        return 90;
      }else if(time<=8){
        return 85;
      }else if(time<=8.3){
        return 80;
      }else if(time<=8.5){
        return 78;
      }else if(time<=8.7){
        return 76;
      }else if(time<=8.9){
        return 74;
      }else if(time<=9.1){
        return 72;
      }else if(time<=9.3){
        return 70;
      }else if(time<=9.5){
        return 68;
      }else if(time<=9.7){
        return 66;
      }else if(time<=9.9){
        return 64;
      }else if(time<=10.1){
        return 62;
      }else if(time<=10.3){
        return 60;
      }else if(time<=10.5){
        return 50;
      }else if(time<=10.7){
        return 40;
      }else if(time<=10.9){
        return 30;
      }else if(time<=11.1){
        return 20;
      }else if(time<=11.3){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time<=7.4){
        return 100;
      }else if(time<=7.5){
        return 95;
      }else if(time<=7.6){
        return 90;
      }else if(time<=7.9){
        return 85;
      }else if(time<=8.2){
        return 80;
      }else if(time<=8.4){
        return 78;
      }else if(time<=8.6){
        return 76;
      }else if(time<=8.8){
        return 74;
      }else if(time<=9){
        return 72;
      }else if(time<=9.2){
        return 70;
      }else if(time<=9.4){
        return 68;
      }else if(time<=9.6){
        return 66;
      }else if(time<=9.8){
        return 64;
      }else if(time<=10){
        return 62;
      }else if(time<=10.2){
        return 60;
      }else if(time<=10.4){
        return 50;
      }else if(time<=10.6){
        return 40;
      }else if(time<=10.8){
        return 30;
      }else if(time<=11){
        return 20;
      }else if(time<=11.2){
        return 10;
      }else return 0;
    }
  }
}
// 计算立定跳远分数
function calculateJump(sex,grade,time){
  if(sex=='boy'){
    if(grade=='大一'||grade=='大二'){
      if(time>=273){
        return 100;
      }else if(time>=268){
        return 95;
      }else if(time>=263){
        return 90;
      }else if(time>=256){
        return 85;
      }else if(time>=248){
        return 80;
      }else if(time>=244){
        return 78;
      }else if(time>=240){
        return 76;
      }else if(time>=236){
        return 74;
      }else if(time>=232){
        return 72;
      }else if(time>=228){
        return 70;
      }else if(time>=224){
        return 68;
      }else if(time>=220){
        return 66;
      }else if(time>=216){
        return 64;
      }else if(time>=212){
        return 62;
      }else if(time>=208){
        return 60;
      }else if(time>=203){
        return 50;
      }else if(time>=198){
        return 40;
      }else if(time>=193){
        return 30;
      }else if(time>=188){
        return 20;
      }else if(time>=183){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time>=275){
        return 100;
      }else if(time>=270){
        return 95;
      }else if(time>=265){
        return 90;
      }else if(time>=258){
        return 85;
      }else if(time>=250){
        return 80;
      }else if(time>=246){
        return 78;
      }else if(time>=242){
        return 76;
      }else if(time>=238){
        return 74;
      }else if(time>=234){
        return 72;
      }else if(time>=230){
        return 70;
      }else if(time>=226){
        return 68;
      }else if(time>=222){
        return 66;
      }else if(time>=218){
        return 64;
      }else if(time>=214){
        return 62;
      }else if(time>=210){
        return 60;
      }else if(time>=205){
        return 50;
      }else if(time>=200){
        return 40;
      }else if(time>=195){
        return 30;
      }else if(time>=190){
        return 20;
      }else if(time>=185){
        return 10;
      }else return 0;
    }
  }else if(sex=='girl'){
    if(grade=='大一'||grade=='大二'){
      if(time>=207){
        return 100;
      }else if(time>=201){
        return 95;
      }else if(time>=195){
        return 90;
      }else if(time>=188){
        return 85;
      }else if(time>=181){
        return 80;
      }else if(time>=178){
        return 78;
      }else if(time>=175){
        return 76;
      }else if(time>=172){
        return 74;
      }else if(time>=169){
        return 72;
      }else if(time>=166){
        return 70;
      }else if(time>=163){
        return 68;
      }else if(time>=160){
        return 66;
      }else if(time>=157){
        return 64;
      }else if(time>=154){
        return 62;
      }else if(time>=151){
        return 60;
      }else if(time>=146){
        return 50;
      }else if(time>=141){
        return 40;
      }else if(time>=136){
        return 30;
      }else if(time>=131){
        return 20;
      }else if(time>=126){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time>=208){
        return 100;
      }else if(time>=202){
        return 95;
      }else if(time>=196){
        return 90;
      }else if(time>=189){
        return 85;
      }else if(time>=182){
        return 80;
      }else if(time>=179){
        return 78;
      }else if(time>=176){
        return 76;
      }else if(time>=173){
        return 74;
      }else if(time>=170){
        return 72;
      }else if(time>=167){
        return 70;
      }else if(time>=164){
        return 68;
      }else if(time>=161){
        return 66;
      }else if(time>=158){
        return 64;
      }else if(time>=155){
        return 62;
      }else if(time>=152){
        return 60;
      }else if(time>=147){
        return 50;
      }else if(time>=142){
        return 40;
      }else if(time>=137){
        return 30;
      }else if(time>=132){
        return 20;
      }else if(time>=127){
        return 10;
      }else return 0;
    }
  } 
}
// 计算坐位体前屈分数
function calculateSit(sex,grade,time){
  if(sex=='boy'){
    if(grade=='大一'||grade=='大二'){
      if(time>=24.9){
        return 100;
      }else if(time>=23.1){
        return 95;
      }else if(time>=21.3){
        return 90;
      }else if(time>=19.5){
        return 85;
      }else if(time>=17.7){
        return 80;
      }else if(time>=16.3){
        return 78;
      }else if(time>=14.9){
        return 76;
      }else if(time>=13.5){
        return 74;
      }else if(time>=12.1){
        return 72;
      }else if(time>=10.7){
        return 70;
      }else if(time>=9.3){
        return 68;
      }else if(time>=7.9){
        return 66;
      }else if(time>=6.5){
        return 64;
      }else if(time>=5.1){
        return 62;
      }else if(time>=3.7){
        return 60;
      }else if(time>=2.7){
        return 50;
      }else if(time>=1.7){
        return 40;
      }else if(time>=0.7){
        return 30;
      }else if(time>=-0.3){
        return 20;
      }else if(time>=-1.3){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time>=25.1){
        return 100;
      }else if(time>=23.3){
        return 95;
      }else if(time>=21.5){
        return 90;
      }else if(time>=19.9){
        return 85;
      }else if(time>=18.2){
        return 80;
      }else if(time>=16.8){
        return 78;
      }else if(time>=15.4){
        return 76;
      }else if(time>=14.0){
        return 74;
      }else if(time>=12.6){
        return 72;
      }else if(time>=11.2){
        return 70;
      }else if(time>=9.8){
        return 68;
      }else if(time>=8.4){
        return 66;
      }else if(time>=7.0){
        return 64;
      }else if(time>=5.6){
        return 62;
      }else if(time>=4.2){
        return 60;
      }else if(time>=3.2){
        return 50;
      }else if(time>=2.2){
        return 40;
      }else if(time>=1.2){
        return 30;
      }else if(time>=0.2){
        return 20;
      }else if(time>=-0.8){
        return 10;
      }else return 0;
    }
  }else if(sex=='girl'){
    if(grade=='大一'||grade=='大二'){
      if(time>=25.8){
        return 100;
      }else if(time>=24.0){
        return 95;
      }else if(time>=22.2){
        return 90;
      }else if(time>=20.6){
        return 85;
      }else if(time>=19){
        return 80;
      }else if(time>=17.7){
        return 78;
      }else if(time>=16.4){
        return 76;
      }else if(time>=15.1){
        return 74;
      }else if(time>=13.8){
        return 72;
      }else if(time>=12.5){
        return 70;
      }else if(time>=11.2){
        return 68;
      }else if(time>=9.9){
        return 66;
      }else if(time>=8.6){
        return 64;
      }else if(time>=7.3){
        return 62;
      }else if(time>=6){
        return 60;
      }else if(time>=5.2){
        return 50;
      }else if(time>=4.4){
        return 40;
      }else if(time>=3.6){
        return 30;
      }else if(time>=2.8){
        return 20;
      }else if(time>=2){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time>=26.3){
        return 100;
      }else if(time>=24.4){
        return 95;
      }else if(time>=22.4){
        return 90;
      }else if(time>=21){
        return 85;
      }else if(time>=19.5){
        return 80;
      }else if(time>=18.2){
        return 78;
      }else if(time>=16.9){
        return 76;
      }else if(time>=15.6){
        return 74;
      }else if(time>=14.3){
        return 72;
      }else if(time>=13){
        return 70;
      }else if(time>=11.7){
        return 68;
      }else if(time>=10.4){
        return 66;
      }else if(time>=9.1){
        return 64;
      }else if(time>=7.8){
        return 62;
      }else if(time>=6.5){
        return 60;
      }else if(time>=5.7){
        return 50;
      }else if(time>=4.9){
        return 40;
      }else if(time>=4.1){
        return 30;
      }else if(time>=3.3){
        return 20;
      }else if(time>=2.5){
        return 10;
      }else return 0;
    }
  }
}
// 计算长跑分数
function calculateRun(sex,grade,time){
  if(sex=='boy'){
    if(grade=='大一'||grade=='大二'){
      if(time<=197){
        return 100;
      }else if(time<=202){
        return 95;
      }else if(time<=207){
        return 90;
      }else if(time<=214){
        return 85;
      }else if(time<=222){
        return 80;
      }else if(time<=227){
        return 78;
      }else if(time<=232){
        return 76;
      }else if(time<=237){
        return 74;
      }else if(time<=242){
        return 72;
      }else if(time<=247){
        return 70;
      }else if(time<=252){
        return 68;
      }else if(time<=257){
        return 66;
      }else if(time<=262){
        return 64;
      }else if(time<=267){
        return 62;
      }else if(time<=272){
        return 60;
      }else if(time<=292){
        return 50;
      }else if(time<=312){
        return 40;
      }else if(time<=332){
        return 30;
      }else if(time<=352){
        return 20;
      }else if(time<=372){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time<=195){
        return 100;
      }else if(time<=200){
        return 95;
      }else if(time<=205){
        return 90;
      }else if(time<=212){
        return 85;
      }else if(time<=220){
        return 80;
      }else if(time<=225){
        return 78;
      }else if(time<=230){
        return 76;
      }else if(time<=235){
        return 74;
      }else if(time<=240){
        return 72;
      }else if(time<=245){
        return 70;
      }else if(time<=250){
        return 68;
      }else if(time<=255){
        return 66;
      }else if(time<=260){
        return 64;
      }else if(time<=265){
        return 62;
      }else if(time<=270){
        return 60;
      }else if(time<=290){
        return 50;
      }else if(time<=310){
        return 40;
      }else if(time<=330){
        return 30;
      }else if(time<=350){
        return 20;
      }else if(time<=370){
        return 10;
      }else return 0;
    }
  }else if(sex=='girl'){
    if(grade=='大一'||grade=='大二'){
      if(time<=198){
        return 100;
      }else if(time<=204){
        return 95;
      }else if(time<=210){
        return 90;
      }else if(time<=217){
        return 85;
      }else if(time<=224){
        return 80;
      }else if(time<=229){
        return 78;
      }else if(time<=234){
        return 76;
      }else if(time<=239){
        return 74;
      }else if(time<=244){
        return 72;
      }else if(time<=249){
        return 70;
      }else if(time<=254){
        return 68;
      }else if(time<=259){
        return 66;
      }else if(time<=264){
        return 64;
      }else if(time<=269){
        return 62;
      }else if(time<=274){
        return 60;
      }else if(time<=284){
        return 50;
      }else if(time<=294){
        return 40;
      }else if(time<=304){
        return 30;
      }else if(time<=314){
        return 20;
      }else if(time<=324){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time<=196){
        return 100;
      }else if(time<=202){
        return 95;
      }else if(time<=208){
        return 90;
      }else if(time<=215){
        return 85;
      }else if(time<=222){
        return 80;
      }else if(time<=227){
        return 78;
      }else if(time<=232){
        return 76;
      }else if(time<=237){
        return 74;
      }else if(time<=242){
        return 72;
      }else if(time<=247){
        return 70;
      }else if(time<=252){
        return 68;
      }else if(time<=257){
        return 66;
      }else if(time<=262){
        return 64;
      }else if(time<=267){
        return 62;
      }else if(time<=272){
        return 60;
      }else if(time<=282){
        return 50;
      }else if(time<=292){
        return 40;
      }else if(time<=302){
        return 30;
      }else if(time<=312){
        return 20;
      }else if(time<=322){
        return 10;
      }else return 0;
    }
  }
}
// 计算引体向上和仰卧起坐分数
function calculatePush(sex,grade,time){
  if(sex=='boy'){
    if(grade=='大一'||grade=='大二'){
      if(time>=19){
        return 100;
      }else if(time>=18){
        return 95;
      }else if(time>=17){
        return 90;
      }else if(time>=16){
        return 85;
      }else if(time>=15){
        return 80;
      }else if(time>=14){
        return 76;
      }else if(time>=13){
        return 72;
      }else if(time>=12){
        return 68;
      }else if(time>=11){
        return 64;
      }else if(time>=10){
        return 60;
      }else if(time>=9){
        return 50;
      }else if(time>=8){
        return 40;
      }else if(time>=7){
        return 30;
      }else if(time>=6){
        return 20;
      }else if(time>=5){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time>=20){
        return 100;
      }else if(time>=19){
        return 95;
      }else if(time>=18){
        return 90;
      }else if(time>=17){
        return 85;
      }else if(time>=16){
        return 80;
      }else if(time>=15){
        return 76;
      }else if(time>=14){
        return 72;
      }else if(time>=13){
        return 68;
      }else if(time>=12){
        return 64;
      }else if(time>=11){
        return 60;
      }else if(time>=10){
        return 50;
      }else if(time>=9){
        return 40;
      }else if(time>=8){
        return 30;
      }else if(time>=7){
        return 20;
      }else if(time>=6){
        return 10;
      }else return 0;
    }
  }else if(sex=='girl'){
    if(grade=='大一'||grade=='大二'){
      if(time>=56){
        return 100;
      }else if(time>=54){
        return 95;
      }else if(time>=52){
        return 90;
      }else if(time>=49){
        return 85;
      }else if(time>=46){
        return 80;
      }else if(time>=44){
        return 78;
      }else if(time>=42){
        return 76;
      }else if(time>=40){
        return 74;
      }else if(time>=38){
        return 72;
      }else if(time>=36){
        return 70;
      }else if(time>=34){
        return 68;
      }else if(time>=32){
        return 66;
      }else if(time>=30){
        return 64;
      }else if(time>=28){
        return 62;
      }else if(time>=26){
        return 60;
      }else if(time>=24){
        return 50;
      }else if(time>=22){
        return 40;
      }else if(time>=20){
        return 30;
      }else if(time>=18){
        return 20;
      }else if(time>=16){
        return 10;
      }else return 0;
    }else if(grade=='大三'||grade=='大四'){
      if(time>=57){
        return 100;
      }else if(time>=55){
        return 95;
      }else if(time>=53){
        return 90;
      }else if(time>=50){
        return 85;
      }else if(time>=47){
        return 80;
      }else if(time>=45){
        return 78;
      }else if(time>=43){
        return 76;
      }else if(time>=41){
        return 74;
      }else if(time>=39){
        return 72;
      }else if(time>=37){
        return 70;
      }else if(time>=35){
        return 68;
      }else if(time>=33){
        return 66;
      }else if(time>=31){
        return 64;
      }else if(time>=29){
        return 62;
      }else if(time>=27){
        return 60;
      }else if(time>=25){
        return 50;
      }else if(time>=23){
        return 40;
      }else if(time>=21){
        return 30;
      }else if(time>=19){
        return 20;
      }else if(time>=17){
        return 10;
      }else return 0;
    }
  }
}
// 计算附加分
function calculateAdd(PE_type,number){
  if(PE_type=='引体向上'){
    if(number>10)return 10;
    else if(number>=0) return number;
    else return 0;
  }else if(PE_type=='仰卧起坐'){
    if(number>=13)return 10;
    else if(number>=12)return 9;
    else if(number>=11)return 8;
    else if(number>=10)return 7;
    else if(number>=9)return 6;
    else if(number>=8)return 5;
    else if(number>=7)return 4;
    else if(number>=6)return 3;
    else if(number>=4)return 2;
    else if(number>=2)return 1;
    else return 0;
  }else if(PE_type=='1000米跑'){
    if(number>=35)return 10;
    else if(number>=32)return 9;
    else if(number>=29)return 8;
    else if(number>=26)return 7;
    else if(number>23)return 6;
    else if(number>=20)return 5;
    else if(number>=16)return 4;
    else if(number>=12)return 3;
    else if(number>=8)return 2;
    else if(number>=4)return 1;
    else return 0;
  }else if(PE_type=='800米跑'){
    if(number>=50)return 10;
    else if(number>=45)return 9;
    else if(number>=40)return 8;
    else if(number>=35)return 7;
    else if(number>30)return 6;
    else if(number>=25)return 5;
    else if(number>=20)return 4;
    else if(number>=15)return 3;
    else if(number>=10)return 2;
    else if(number>=5)return 1;
    else return 0;
  }
}
//计算总分
function calculate(sex,grade,height,weight,lung,five,jump,sit,run,push){
  var score=0,add=0;
  score+=calculateBMI(sex,height,weight)*0.15;
  score+=calculateLung(sex,grade,lung)*0.15;
  score+=calculate50m(sex,grade,five)*0.2;
  score+=calculateJump(sex,grade,jump)*0.1;
  score+=calculateSit(sex,grade,sit)*0.1;
  score+=calculateRun(sex,grade,run)*0.2;
  score+=calculatePush(sex,grade,push)*0.1;
  // 计算附加分
  if(sex=='boy'){
    if(grade=='大一'||grade=='大二'){
      add+=calculateAdd('引体向上',push-19);
      add+=calculateAdd('1000米跑',197-run);
    }else if(grade=='大三'||grade=='大四'){
      add+=calculateAdd('引体向上',push-20);
      add+=calculateAdd('1000米跑',195-run);
    }
  }else if(sex=='girl'){
    if(grade=='大一'||grade=='大二'){
      add+=calculateAdd('仰卧起坐',push-56);
      add+=calculateAdd('800米跑',198-run);
    }else if(grade=='大三'||grade=='大四'){
      add+=calculateAdd('仰卧起坐',push-57);
      add+=calculateAdd('800米跑',196-run);
    }
  }
  score+=add;
  if(score>100)score=100;
  return score;
}
// 导出
module.exports = {
  calculate: calculate
}