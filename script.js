//your JS code here. If required.
const p = document.getElementById("timer");

// p.innerText = new Date().toLocaleString();
    //    OR

function getTime(){
    const time = new Date();
    let dayString = `${time.getMonth()+1}/${time.getDate()}/${time.getFullYear()}`;
    // console.log(dayString)

    let hour = time.getHours();
    let timeString="";

    if(hour >=12)
    {
        if(hour === 12)
        {
            timeString = `${hour}:${time.getMinutes()}:${time.getSeconds()} PM`;
        }
        else
        {
            hour -= 12;
            timeString = `${hour}:${time.getMinutes()}:${time.getSeconds()} PM`;
        }
    }
    else
    {
        timeString = `${hour}:${time.getMinutes()}:${time.getSeconds()} AM`;
    }
    // console.log(timeString)
    return dayString +", "+ timeString;
}

function timer()
{
    p.innerText = getTime();
}

setInterval(timer, 1000);    // function call at every second