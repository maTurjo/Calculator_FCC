
var stackArray=[];

function updateDisplay(){
    var string=stackArray.join("");
    $("#display").val(string);
}

$('.number').on("click",(e)=>{
    var numberValue=($(e.target).text());
    var currentOperationalNumber=stackArray[stackArray.length-1];
    console.log(currentOperationalNumber);
    if(currentOperationalNumber==undefined){
        stackArray.push(numberValue);
    }
    else if(currentOperationalNumber!="+" && currentOperationalNumber!="-" && currentOperationalNumber!="*" && currentOperationalNumber!="/"){
        if(numberValue=="." && currentOperationalNumber==".") return;
        if(numberValue=="." && String(currentOperationalNumber).includes(".")) return;
        if(numberValue=="0" && currentOperationalNumber=="0") return;
        let val=stackArray.pop();
        if(numberValue!="." && numberValue!="0"){
            stackArray.push(eval(String(val).concat(numberValue)));
        }else{
            stackArray.push(String(val).concat(numberValue));
        }
    }
    else if(currentOperationalNumber=="+" || currentOperationalNumber=="-" || currentOperationalNumber=="*" || currentOperationalNumber=="/"){
        let val=0;
        if(numberValue!="." && numberValue!="0"){
            stackArray.push(eval(String(val).concat(numberValue)));
        }else{
            stackArray.push(String(val).concat(numberValue));
        }

    }
    updateDisplay();
    
    
})

$('.sign').on("click",(e)=>{
    let signValue=($(e.target).text());
    let lastInsert=stackArray[stackArray.length-1]
    if(true){
    stackArray.push(signValue);
    console.log("pushed");
    }

  updateDisplay();

})

$("#equals").on("click",()=>{
    sanitizeArray()
    var string=stackArray.join("");

   stackArray=[eval(string)];
   updateDisplay();


})

$("#clear").on("click",()=>{
   stackArray=["0"];
  updateDisplay();


})


function sanitizeArray(){

    for(var i=0;i<stackArray.length;i++){
        if(stackArray[i] =="+" || stackArray[i] =="-" || stackArray[i] =="*" || stackArray[i] =="/"){
            if(stackArray[i+1]=="*"||stackArray[i+1]=="/"||stackArray[i+1]=="+"||stackArray[i+1]=="-"){
                if(stackArray[i+2]=="*"||stackArray[i+2]=="/"||stackArray[i+2]=="+"||stackArray[i+2]=="-"){
                    stackArray[i]=""
                }
                else{
                    if(stackArray[i+1]=="-"){

                    }else{
                        stackArray[i]=""

                    }
                    // if(stackArray[i+1]=="-")
                }
            }
        }
    }
    console.log(stackArray);
}

//5*-+5=10
//5*-5=-25