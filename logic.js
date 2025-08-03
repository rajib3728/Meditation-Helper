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
    window.close("pass.html");
    window.close("work.html");
    window.close("index.html");
}

function login1() {
    window.open("login.html");
    window.close("index.html");
    window.close("page1.html");
    window.close("page2.html"); 
    window.close("page3.html");
    window.close("page4.html");
    window.close("page5.html");

}

function login2() {
        var password = document.getElementById("password").value;
    console.log(password);
    if (password == "") {
        alert("Please enter a password.");
        return;
    }
    else if (password == "sdjlkjsdlf%$^%$sd6598132") {
        page2();
    }
    else if (password == "sdfksdf545^*&656") {
        page3();}
    else if (password == "79798sadsabb2365675") {
        page4();
    }
    else if (password == "sdfjksdf%#$#%#kjhkjhcccf") {
           page5();      
    }

    else {
        alert("Incorrect password. Please try again.");
       
    }
}

function startmeditation1()
{

    const audio1 = document.getElementById("myaudio1");
    document.getElementById("textstatus").innerHTML="Audio Status:Playing";
    audio1.play();
    var x=(audio1.duration-120)*100;//convert to milliseconds
   

    setTimeout(() => {
        audio1.pause();
        alert("Please copy the password to next level from the text below.");
        document.getElementById("textstatus").innerHTML="Audio Status:Ended.Password to next level is: sdjlkjsdlf%$^%$sd6598132";
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
        alert("Please copy the password to next level from the text below.");
        document.getElementById("textstatus").innerHTML="Audio Status:Ended.password to next level is: sdfksdf545^*&656";
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
        alert("Please copy the password to next level from the text below.");
        document.getElementById("textstatus").innerHTML="Audio Status:Ended.password to next level is: 79798sadsabb2365675";
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
        alert("Please copy the password to next level from the text below.");
        document.getElementById("textstatus").innerHTML="Audio Status:Ended.password to next level is: sdfjksdf%#$#%#kjhkjhcccf";
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
        alert("Congratulations! You have completed all levels of meditation. You can now close this page.");
        document.getElementById("textstatus").innerHTML="Audio Status:Ended";
        document.getElementsByClassName("button4")[0].style.display = "block";
    }, x); //

}



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function openDevTool() {
   let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let pass=hours+"xyz"+minutes+"#!";
let inp=document.getElementById("devpass").value;
if (1) {
  document.getElementById("text2").innerHTML="success ";
  document.getElementById("devtable").style.display="flex";
  document.getElementById("devtable").style.backgroundColor="black";

    document.getElementById("devtable").style.color="lime";
    document.getElementById("devtable").style.fontSize="20px";
    document.getElementById("devtable").style.padding="10px";
    document.getElementById("devtable").style.border="2px solid lime";
    
  document.getElementById("dev1").style.display="block";
}
else{
    alert("access denied");
    document.getElementById("text2").innerHTML="access denied";
}
}