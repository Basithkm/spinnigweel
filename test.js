
// function test(){

//     const a = ['pen', 'book', 'scale', 'eraser', 'textbook', 'computer', 'smartphone', 'tablet'];
//     console.log(a)

// // Generate a random index within the array's length
// const randomIndex = Math.floor(Math.random() * (a.length - 1)) + 1;

// // Access the element at the random index
// const randomElement = a[randomIndex];

// console.log(randomElement);

// }



function test(){

    var elements = document.getElementsByClassName("important");
    var inputValue = parseInt(elements[0].value);


    var span1 = document.getElementsByClassName("span1");
    var spanValue1 = span1[0].innerHTML;

    var span2 = document.getElementsByClassName("span2");
    var spanValue2 = span2[0].innerHTML;

    var span3 = document.getElementsByClassName("span3");
    var spanValue3 = span3[0].innerHTML;

    var span4 = document.getElementsByClassName("span4");
    var spanValue4 = span4[0].innerHTML;

    var span5 = document.getElementsByClassName("span5");
    var spanValue5 = span5[0].innerHTML;

    var span6 = document.getElementsByClassName("span6");
    var spanValue6 = span6[0].innerHTML;

    var span7 = document.getElementsByClassName("span7");
    var spanValue7 = span7[0].innerHTML;

    var span8 = document.getElementsByClassName("span8");
    var spanValue8 = span8[0].innerHTML;


    var spanValuesArray = [];
    spanValuesArray.push(spanValue1);
    spanValuesArray.push(spanValue2);
    spanValuesArray.push(spanValue3);
    spanValuesArray.push(spanValue4);
    spanValuesArray.push(spanValue5);
    spanValuesArray.push(spanValue6);
    spanValuesArray.push(spanValue7);
    spanValuesArray.push(spanValue8);
    
    const randomIndex = Math.floor(Math.random() * (spanValuesArray.length - inputValue)) + inputValue;

    const randomElement = spanValuesArray[randomIndex];

    console.log("spanValuesArray");
    console.log(spanValuesArray);

    console.log("randomElement");
    console.log(randomElement);

    

}
1

