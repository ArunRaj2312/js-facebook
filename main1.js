var phoneNum=document.getElementById("user");
var logpass=document.getElementById("password")
var newfacebook=JSON.parse(localStorage.getItem("facebook"));
btn=document.getElementById("btn");
btn.addEventListener("click",function(e){
    e.preventDefault();
for(i=0;i<newfacebook.length;i++){
if(newfacebook[i]["phone"]==phoneNum.value && newfacebook[i]["password"]==logpass.value){
    window.location="facebook.html";
}}
for(j=0;j<newfacebook.length;j++){
    if(newfacebook[j]["phone"]!=phoneNum.value || newfacebook[j]["password"]!=logpass.value){
        document.getElementById("demo").innerText="wrong number or password";
    }
}
});