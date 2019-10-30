var test = document.getElementById("btn");
//test.innerHTML = "書換";

test.addEventListener('click',function(){
    var a = parseFloat(document.getElementById("shin").value);
    var b = parseFloat(document.getElementById("taijyu").value);
    console.log("身長："+a+"m, 体重"+b+"kg");
    if(a <= 0 || b <= 0){
        alert("入力値を確認して下さい！");
    }else{
        alert("BMI:"+(b / Math.pow(a,2))+"\n"+"標準体重："+Math.pow(a,2)*22);
    }
    
},false);

