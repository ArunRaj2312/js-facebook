var fname=document.getElementById("fname");
var sname=document.getElementById("sname");
var phone=document.getElementById("num");
var pass=document.getElementById("pass");
var date=document.getElementById("date");
var mon=document.getElementById("mon");
var year=document.getElementById("year");
var gender=document.getElementsByName("gender");
var facebook=[];
var obj={};

var btn=document.getElementById("btn");
btn.addEventListener("click",function(){

    if(fname.value==""){
        fname.style.border="1px solid red";
        document.getElementById("fname-error").style.display="flex";
    }
    else{
        fname.style.border="1px solid gray";
        document.getElementById("fname-error").style.display="none";
    }
    if(sname.value==""){
        sname.style.border="1px solid red";
        document.getElementById("sname-error").style.display="flex";
    }
    else{
        sname.style.border="1px solid gray";
        document.getElementById("sname-error").style.display="none";
    }
    if(phone.value==""){
        phone.style.border="1px solid red";
        document.getElementById("phone-error").style.display="flex";
    }
    else{
        phone.style.border="1px solid gray";
        document.getElementById("phone-error").style.display="none";
    }
    if(pass.value==""){
        pass.style.border="1px solid red";
        document.getElementById("pass-error").style.display="flex";
    }
    else{
        pass.style.border="1px solid gray";
        document.getElementById("pass-error").style.display="none";
    }
    if(date.innerText==""){
        date.style.border="1px solid red";
    }
    if(mon.innerText==""){
        mon.style.border="1px solid red";
    }
    if(year.innerText==""){
        year.style.border="1px solid red";
    }
    if(date.value=="" || mon.value=="" || year.value==""){
        document.getElementById("date-error").style.display="flex";
    }
    if(male.value=="" && female.value=="" && others.value==""){
        document.getElementById("gen-error").style.display="flex";
    }
    else{
        document.getElementById("gen-error").style.display="none";
    }
    obj={fname:fname.value,sname:sname.value,phone:phone.value,password:pass.value,date:date.innerText,month:mon.innerText,year:year.innerText,gender:gender.value}
    facebook[facebook.length]=obj;
    localStorage.setItem("facebook",JSON.stringify(facebook));
    if(fname.value!="" && sname.value!="" && phone.value!="" && pass.value!="" && date.value=="" || mon.value=="" || year.value==""){
        
    }
});