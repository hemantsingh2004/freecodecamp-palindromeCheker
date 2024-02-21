const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function palindrome(str){
    var l = 0;
    var h = str.length;
    var newstr="";
    
    for(var i=0; i<h ; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            newstr += str[i];
        }else if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')){
            newstr += str[i].toUpperCase();
        }
    }
    h = newstr.length - 1;

    while(h>l){
        console.log(newstr[l] + " " + newstr[h]);
        if(newstr[l] === newstr[h]){
            h--;
            l++;
        }else{
            return false;
        }
    }
    return true;    
}


checkButton.addEventListener("click", () => {
    const str = textInput.value;
    const rslt = palindrome(str);

    result.classList.add("hide");

    if(str===""){
        alert("Please input a value");
        return;
    }

    if(rslt){
        document.querySelector("#result h3").innerText = str + " is a palindrome";
    } else {
        document.querySelector("#result h3").innerText = str + " is not a palindrome";
    }
    result.classList.remove("hide");
});