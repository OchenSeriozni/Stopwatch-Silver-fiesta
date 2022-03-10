let d;
let startTime= new Date;
let lastTime=new Date;
let pauseTime=new Date;
pauseTime.setHours(0,0,0,0);
lastTime.setHours(0,0,0,0);
startTime.setHours(0,0,0,0);


const start =()=>{
    let t = document.querySelector('time');
    t.timeNow =new Date;
    t.timeNow.setHours(t.timeNow.getHours()-lastTime.getHours(),t.timeNow.getMinutes()-lastTime.getMinutes(),t.timeNow.getSeconds()-lastTime.getSeconds(),t.timeNow.getMilliseconds()-lastTime.getMilliseconds());
    console.log(`t.timeNow -${t.timeNow}`)
    startTime= new Date;
    console.log(`startTime -${startTime}`)
    t.updateTime = timeDifference => t.innerHTML = new Date(timeDifference).toISOString().split(/T|\./)[1]
    d = setInterval(() => t.updateTime(new Date - t.timeNow), 10);
};

const restart =()=> {
    clearInterval(d);
    pauseTime.setHours(0,0,0,0);
    lastTime.setHours(0,0,0,0);
    startTime.setHours(0,0,0,0);
    document.getElementById("defaultTime").innerHTML = "00:00:00";
  }

const pause =()=>{
    let p = document.querySelector('para1');
    clearInterval(d);
    pauseTime=new Date;
    lastTime.setHours((pauseTime.getHours()+lastTime.getHours())-startTime.getHours(),(pauseTime.getMinutes()+lastTime.getMinutes())-startTime.getMinutes(),(pauseTime.getSeconds()+lastTime.getSeconds())-startTime.getSeconds(),(pauseTime.getMilliseconds()+lastTime.getMilliseconds())-startTime.getMilliseconds());
    console.log(lastTime);
    p.updateTime = timeDifference => p.innerHTML = new Date(timeDifference).toISOString().split(/T|\./)[1]
    p.updateTime(p.pauseTime);
}

console.log(pauseTime);


/*
startTime.setHours(t.timeNow.getHours()-pauseTime.getHours(),t.timeNow.getMinutes()-pauseTime.getMinutes(),t.timeNow.getSeconds()-pauseTime.getSeconds(),t.timeNow.getMilliseconds()-pauseTime.getMilliseconds());
*/