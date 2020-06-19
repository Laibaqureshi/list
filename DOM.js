var button = document.getElementById("enter");
var input= document.getElementById("userinput");
var ul= document.querySelector("ul");

button.addEventListener("click",function(){
	if(input.value.length>0){

		console.log(input.value);
	var li=document.createElement("li");
   li.innerHTML=input.value;
    ul.appendChild(li);
    input.value="";
}
})
input.addEventListener("keypress",function(event){
    console.log(event);

		//console.log(input.value);
	//var li=document.createElement("li");
//}
//})
})