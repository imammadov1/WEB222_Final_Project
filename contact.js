function hideOrdNum(value){
    let input= document.querySelector('#ordNumber');
    let label = document.querySelector('label[for=ordNumber]');
    if(value==="Order Problem"){
        input.style.display="";
        label.style.display="";
        input.required = true;
    }else{
        input.style.display="none";
        label.style.display="none";
        input.required = false;
    }
}
window.onload=function(){
    let reasons=[...document.querySelectorAll("input[name=reason]")];
    for(let i=0; i<reasons.length; i++){
        reasons[i].oninput=function(event){
            hideOrdNum(event.target.value);
        };
    }
}