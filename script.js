function send(tk,shd,txt){
var form = new FormData();
form.append("chat_id", shd);
form.append("text", txt);
var settings = {
  "url": "https://api.telegram.org/bot"+tk+"/sendmessage",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};
$.ajax(settings)
}

function run(){
var i;
var fr = $("#for").val();
var tok = $("#tok").val();
var id = $("#uid").val();
if(fr == "" || fr == null){
	alert("title: you dunk-1!\nmsg: wheres the num for loop??");
	return false;
}
if(id == "" || id == null){
	alert("title: you dunk-2!\nmsg: wheres the target id??");
	return false;
}
if(tok == "" || tok == null){
	alert("title: you dunk-3!\nmsg: wheres the token??");
	return false;
}
for (i = 0; i < fr; i++) {
  send(tok,id,"spam boy here :)\n~#@L_DEVv");
  $("#message").html(i + 1);
} 
}
function sleepit( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){/* by @laganty */} 
}