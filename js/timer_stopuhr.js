let isTimerRunning = false;
var sekunden = 0;
var Lsekunden = 0;
var minuten = 0;
var Lminuten = 0;
var stunden = 0;
var Lstunden = 0;


function btnStart()
{
    if(isTimerRunning == false)
    {
        isTimerRunning = true;
        document.getElementById("btnStart").innerHTML = "Start";
        Vinterval = setInterval(updateAnzeige, 1000);
    }
}
function updateAnzeige()
{
    if(parseInt(sekunden)<9)
    {
        sekunden++;
    }
    else if(parseInt(Lsekunden)<6)
    {
        sekunden = 0;
        Lsekunden++;
    }
    else if(parseInt(minuten)<9)
    {
        Lsekunden = 0;
        minuten++;
    }
    else if(parseInt(Lminuten)<6)
    {
        minuten = 0;
        Lminuten++;
    }
    else if(parseInt(stunden)<9)
    {
        Lminuten = 0;
        stunden++;
    }
    else if(parseInt(Lstunden)<6)
    {
        stunden = 0;
        Lstunden++;
    }
    else
    {
        btnReset();
    }
    document.getElementById("ZeitAnzeige").innerHTML = "" + Lstunden + stunden + ":" + Lminuten + minuten + ":" + Lsekunden + sekunden;
}
function btnReset()
{   
    window.clearInterval(Vinterval);
    sekunden = 0;
    Lsekunden = 0;
    minuten = 0;
    Lminuten = 0;
    stunden = 0;
    Lstunden = 0;
    document.getElementById("ZeitAnzeige").innerHTML = "00:00:00";
    isTimerRunning = false;
}
function btnStop()
{
    window.clearInterval(Vinterval);
    if(isTimerRunning==true)
    {
        document.getElementById("btnStart").innerHTML = "Weiter";
    }
    isTimerRunning = false;
}