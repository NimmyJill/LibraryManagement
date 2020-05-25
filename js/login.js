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
    const usernameValue=username.value.trim();
    const pswdValue=pswd.value.trim();
    

    
    
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


function isPswd(pswd){
    return /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})$/.test(pswd)
}




