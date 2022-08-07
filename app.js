
let  resultApp = document.getElementById("result");
resultApp = addEventListener("click", function(){
    let text;
    let rollNumber = document.getElementById("roll-number").value;
    if (rollNumber == 1){
        text = "Congratulation! You are great!"
    } else if ( rollNumber == 2){
        text = "Nice Result, But you can do better."
    } else if ( rollNumber == 3){
        text = "Number Three is not bad."
    }
    else if(rollNumber >= 4){
        text = "Nice! But I hope you will try your level best in future."
    }
    document.getElementById("view-result").innerText = text;
    console.log(text);

})

