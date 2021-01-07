function start() {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET","https://adilayyoob.github.io/json-test/rollno_info.json");
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		enter(ourData);
	}
	ourRequest.send();
}
function enter(d) {
	var rollNo = document.frm1.rollNo.value;
	var regNo = document.frm1.regNo.value;
	regNo= regNo.toUpperCase();
	for (var i = 0; i<51; i++) {
		if(regNo.localeCompare(d[i].regno)===0 || rollNo==d[i].rollno)
		{
			document.getElementById("name").innerHTML= d[i].name;
			document.getElementById("rollNo1").innerHTML= d[i].rollno;
			document.getElementById("regNo1").innerHTML= d[i].regno;
			break;
		}
		else
		{
			document.getElementById("name").innerHTML= "NOT FOUND";
			document.getElementById("rollNo1").innerHTML= " ";
			document.getElementById("regNo1").innerHTML= " ";
		}
		
	}

}