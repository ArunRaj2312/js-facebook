var date=new Date();
var hour=date.getHours();
var min=date.getMinutes();
var n;
if(hour<12){
    n="AM";
    
}
else{
    hour=hour-12;
    n="PM";
}
var btn=document.getElementById("btn");
btn.addEventListener("click",function(e){
    e.preventDefault();
    var post=document.getElementById("post").value;
    if(post==''){
       document.getElementById("demo").innerText="you don't fill the box";
    }
    else{
        var posters=document.querySelector(".posters");
        var div=document.createElement("div");
        div.classList.add("post-container")
        posters.appendChild(div);

        var div4=document.createElement("div");
        div4.classList.add("user");
        div.appendChild(div4);

        var div5=document.createElement("div");
        div5.classList.add("user-icon");
        div4.appendChild(div5);

        var img=document.createElement("img");
        img.src="user.png";
        div5.appendChild(img);

        var div6=document.createElement("div");
        div6.classList.add("user-name");
        div4.appendChild(div6);

        var name=document.createElement("p");
        name.innerText="Arun Raj";
        div6.appendChild(name);

        var cont=document.createElement("p");
        cont.setAttribute("id","val");
        cont.innerText=post;
        div.appendChild(cont);
        
        var div1=document.createElement("div");
        div1.setAttribute("id","time");
        div.appendChild(div1);
        
        var div2=document.createElement("div");
        div1.appendChild(div2);

        var edit=document.createElement("i");
        edit.classList.add("bi-pencil-square");
        edit.setAttribute("onclick","edit(this)");
        div2.appendChild(edit);
        
        var del=document.createElement("i");
        del.classList.add("bi-trash-fill");
        del.setAttribute("onclick","delet(this)")
        div2.appendChild(del);

        var div3=document.createElement("div");
        div1.appendChild(div3);

        var timing=document.createElement("p");
        timing.innerText=hour+":"+min+n;
        div3.appendChild(timing);
        clean();
    }
});
function edit(e){
    document.getElementById("post").value=e.parentNode.parentNode.previousElementSibling.innerText;
    e.parentNode.parentNode.parentNode.remove();
}
function delet(e) {
    e.parentNode.parentNode.parentNode.remove();
}
function clean(){
    document.getElementById("post").value='';
}