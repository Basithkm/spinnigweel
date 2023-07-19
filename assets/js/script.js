function myfunction() {


	
	var elements = document.getElementsByClassName("important");
    var inputValue = parseInt(elements[0].value);
	console.log(inputValue)

	
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

		const randomIndex = Math.floor(Math.random() * (valuesArray.length - inputValue)) + inputValue;
    	const randomElement = valuesArray[randomIndex];
		alert(randomElement); 

	}, 5000);
}
