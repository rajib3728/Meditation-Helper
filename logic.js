function openworkpage() {
    window.open("work.html");
    window.close("index.html");
}
function openhome() {
    window.open("index.html");
    window.close("work.html");
}
function openlevel(){
     window.open("work.html");
    window.close("index.html");
    window.close("page1.html");
    window.close("page2.html"); 
    window.close("page3.html");
    window.close("page4.html");
    window.close("page5.html");
    
}
function page1() {
    window.open("page1.html");
    window.close("work.html");
    window.close("index.html");
}
function page2() {
    window.open("page2.html");
    window.close("work.html");
    window.close("index.html");
}
function page3() {
    window.open("page3.html");
    window.close("work.html");
    window.close("index.html");
   
}
function page4() {
    window.open("page4.html");
    window.close("work.html");
    window.close("index.html");
}
function page5() {
    window.open("page5.html");
    window.close("work.html");
    window.close("index.html");
}

function startmeditation1()
{

    const audio1 = document.getElementById("myaudio1");
    document.getElementById("textstatus").innerHTML="Audio Status:Playing";
    audio1.play();
    var x=(audio1.duration-120)*100;//convert to milliseconds
   

    setTimeout(() => {
        audio1.pause();
        document.getElementById("textstatus").innerHTML="Audio Status:Ended";
        document.getElementsByClassName("button4")[0].style.display = "block";
    }, x); //

}


//page 2

function startmeditation2()
{

    const audio1 = document.getElementById("myaudio2");
    document.getElementById("textstatus").innerHTML="Audio Status:Playing";
    audio1.play();
    var x=(audio1.duration-120)*100;//convert to milliseconds
   

    setTimeout(() => {
        audio1.pause();
        document.getElementById("textstatus").innerHTML="Audio Status:Ended";
        document.getElementsByClassName("button4")[0].style.display = "block";
    }, x); //

}

//page 3


function startmeditation3()
{

    const audio1 = document.getElementById("myaudio3");
    document.getElementById("textstatus").innerHTML="Audio Status:Playing";
    audio1.play();
    var x=(audio1.duration-120)*100;//convert to milliseconds
   

    setTimeout(() => {
        audio1.pause();
        document.getElementById("textstatus").innerHTML="Audio Status:Ended";
        document.getElementsByClassName("button4")[0].style.display = "block";
    }, x); //

}


//page 4
function startmeditation4()
{

    const audio1 = document.getElementById("myaudio4");
    document.getElementById("textstatus").innerHTML="Audio Status:Playing";
    audio1.play();
    var x=(audio1.duration-120)*1000;//convert to milliseconds
   

    setTimeout(() => {
        audio1.pause();
        document.getElementById("textstatus").innerHTML="Audio Status:Ended";
        document.getElementsByClassName("button4")[0].style.display = "block";
    }, x); //

}


//page 5

function startmeditation5()
{

    const audio1 = document.getElementById("myaudio5");
    document.getElementById("textstatus").innerHTML="Audio Status:Playing";
    audio1.play();
    var x=(audio1.duration-120)*100;//convert to milliseconds
   

    setTimeout(() => {
        audio1.pause();
        document.getElementById("textstatus").innerHTML="Audio Status:Ended";
        document.getElementsByClassName("button4")[0].style.display = "block";
    }, x); //

}

