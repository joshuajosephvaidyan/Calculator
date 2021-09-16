function disp(val){
   document.getElementById("result").value+=val;
};

function del(){
    document.getElementById("result").value="";
};

function calc(){
    let x=document.getElementById("result").value;
    try{
         let y=eval(x);
    }
    catch(s){
       alert(s);
    }
    y=eval(x);
    document.getElementById("result").value=y;


}