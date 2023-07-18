function myfunction() {

	var bTags = document.getElementsByTagName('b');
	var valuesArray = []; 
	for (var i = 0; i < bTags.length; i++) {
		valuesArray.push(bTags[i].textContent);
	  }

	  console.log(valuesArray); 

	var x = 1024;
	var y = 9999;
	var deg = Math.floor(Math.random() * (x - y)) + y; 
	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
		// var valueList = ["Gaming","Homework","Sport","Sleep","Eat","Rest","Talk","Work",];
		var valueList = [valuesArray[0],valuesArray[1],valuesArray[2],valuesArray[3],valuesArray[4],valuesArray[5],valuesArray[6],valuesArray[7]];
	
		var getValue = valueList[Math.floor(Math.random() * valueList.length)];

		alert(getValue); 

		
	}, 5000);
}
