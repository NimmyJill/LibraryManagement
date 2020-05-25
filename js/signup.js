

const form=document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const mob=document.getElementById('mob');
const username=document.getElementById('username');
const pswd=document.getElementById('pswd');
const cpswd=document.getElementById('cpswd');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     checkInputs();
//     var validation = true;

// });

function checkInputs(){
    //get th evalues from the inputs
    const nameValue=name.value.trim();
    const emailValue=email.value.trim();
    const mobValue=mob.value.trim();
    const usernameValue=username.value.trim();
    const pswdValue=pswd.value.trim();
    const cpswdValue=cpswd.value.trim();

    if(nameValue===''){
        //show error
        //add error class
        setErrorFor(name, 'Name cannot be blank');
        validation = false;}
        else{
        //add success class
        setSuccessFor(name);
    }
    if(emailValue===''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
        validation = false;}
        else if(!isEmail(emailValue)){
            setErrorFor(email, 'Email is not valid');  
            validation = false;}
            else        {
        //add success class
        setSuccessFor(email);
    }
    if(mobValue===''){
        //show error
        //add error class
        setErrorFor(mob, 'Mobile number cannot be blank');
        validation = false;}
        else if(!isMob(mobValue)){
            setErrorFor(mob, 'Mobile number is not valid');  
            validation = false;}
            else{
        //add success class
        setSuccessFor(mob);
    }
    if(usernameValue===''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
        var validation = false;}
        else{
        //add success class
        setSuccessFor(username);
    }
    if(pswdValue===''){
        //show error
        //add error class
        setErrorFor(pswd, 'Password cannot be blank');
        validation = false;}
        else if(!isPswd(pswdValue)){
            setErrorFor(pswd, 'Password is not valid');  
            validation = false;}
            else{
        //add success class
        setSuccessFor(pswd);
    }
    if(cpswdValue===''){
        //show error
        //add error class
        setErrorFor(cpswd, 'This field cannot be blank');
        validation = false;}
        else if(pswdValue!=cpswdValue){
            setErrorFor(cpswd, 'Password does not match');  
            validation = false;}
            else{
        //add success class
        setSuccessFor(cpswd);
    }

    return validation; 

}

function setErrorFor(input, message){
    const formControl= input.parentElement; //.form-control
    const small= formControl.querySelector('small');

    //add error message inside small tag
    small.innerText=message;

    //add error class
    formControl.className='form-control error';
}

function setSuccessFor(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
    
}

function isEmail(email){
    return /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/.test(email)
}
function isMob(mob){
    return /^\+?([6-9]{1})([\d]{2})[\-.\s]?([\d]{3})[\-.\s]?([\d]{4})$/.test(mob)
}
function isPswd(pswd){
    return /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})$/.test(pswd)
}



// For password strength

pswd.addEventListener('keyup', function(){
    strength();
})
function strength(){
    var val=document.getElementById('pswd').value;
    var status=document.getElementById('length');
    var counter=0;

    if(val!=''){
        if(val.length<=3)
        counter=1;
        if(val.length>3 && val.length<=6)
        counter=2;
        if(val.length>=8)
        counter=3;

        if(counter==1){
            status.innerHTML="Too WEAK";
            status.style.backgroundColor="red";
            status.style.color="white"

        }
        if(counter==2){
            status.innerHTML="WEAK";
            status.style.backgroundColor="orange";
            status.style.color="white"

        }
        if(counter==3){
            status.innerHTML="STRONG";
            status.style.backgroundColor="green";
            status.style.color="white"

        }

        
    }
}

    
   








    
   






