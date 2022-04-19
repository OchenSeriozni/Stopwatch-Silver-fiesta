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
    
    t.timeNow.setHours(t.timeNow.getHours()-lastTime.getHours());
    t.timeNow.setMinutes(t.timeNow.getMinutes()-lastTime.getMinutes())
    t.timeNow.setSeconds(t.timeNow.getSeconds()-lastTime.getSeconds())
    t.timeNow.setMilliseconds(t.timeNow.getMilliseconds()-lastTime.getMilliseconds())
    startTime= new Date;
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

    lastTime.setHours((pauseTime.getHours()+lastTime.getHours())-startTime.getHours());
    lastTime.setMinutes((pauseTime.getMinutes()+lastTime.getMinutes())-startTime.getMinutes())
    lastTime.setSeconds((pauseTime.getSeconds()+lastTime.getSeconds())-startTime.getSeconds())
    lastTime.setMilliseconds((pauseTime.getMilliseconds()+lastTime.getMilliseconds())-startTime.getMilliseconds());

    p.updateTime = timeDifference => p.innerHTML = new Date(timeDifference).toISOString().split(/T|\./)[1]
    p.updateTime(p.pauseTime);
}

const button = document.querySelector('button');
button.addEventListener('click',updateButton=>{
    if(button.innerText==='Start'){
        button.textContent='Pause';
        start();
    }
    else if(button.innerText==='Pause'){
        button.textContent='Start';
        pause();
    }
});
const restartButton = document.getElementById('Restart');
restartButton.addEventListener('click',()=>{
    if(restartButton.innerText==='Restart'){
        button.textContent='Start';
        restart();
    }
})