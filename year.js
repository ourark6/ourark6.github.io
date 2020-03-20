function renderTime(){
   // Date
    var mydate = new Date();
    var year = mydate.getYear();
    if(year < 1000) {
        year +=1900
    }//Date End

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" "+year+";
    myClock.innerText = "" "+year+";

    setTimeout("renderTime()" , 1000);
}
renderTime();