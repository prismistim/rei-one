showTime = () => {
  let nowTime = new Date()
  let dispNowDate = `${nowTime.getFullYear()} - ${nowTime.getMonth() + 1} - ${nowTime.getDate()}`
  let dispNowTime = `${("0" + nowTime.getHours()).slice(-2)} 
                    : ${("0" + nowTime.getMinutes()).slice(-2)} 
                    : ${("0" + nowTime.getSeconds()).slice(-2)} 
                    . ${("00" + nowTime.getMilliseconds()).slice(-3)}`
  document.getElementById('nowdate').innerHTML = dispNowDate
  document.getElementById('nowtime').innerHTML = dispNowTime

  let remainTime = new Date('2019/04/30 23:58:17') - nowTime

  if(remainTime >= 0){
    let remainHour = ("0" + Math.floor(remainTime / 3600000)).slice(-2)
    let remainMinute = ("0" + Math.floor((remainTime - remainHour * 3600000) / 60000)).slice(-2)
    let remainSecond =  ("0" + Math.round((remainTime - remainHour * 3600000 - remainMinute * 60000) / 1000)).slice(-2)
    let remainMSecond = ("00" + Math.round(remainTime - remainHour * 3600000 - remainMinute * 60000)).slice(-3)

    if(remainHour <= 0 && remainMinute <= 0 && remainSecond <= 0 && remainMSecond <= 5){
      document.getElementById('bombtime').innerHTML = "PLAY"
    }else{
      document.getElementById('bombtime').innerHTML = `${remainHour} : ${remainMinute} : ${remainSecond} . ${remainMSecond}`
    }
  }
}

showTime()
setInterval('showTime()', 5)
