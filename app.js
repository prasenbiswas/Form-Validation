let userName = document.getElementById('userName');
let email = document.getElementById('email');
let number = document.getElementById('number');
let dob = document.getElementById('dob');
let genderVal = document.getElementById('genderVal');
let male = document.getElementById('male');
let female = document.getElementById('female');
let submit = document.getElementById('submit');
let validuserName = false;
let validemail = false;
let validnumber = false;
let validdob = false;
let validgenderVal = false;

// ------------- validation for userName --------------

userName.addEventListener('blur', ()=>{
    let regexName = /^[a-zA-Z]([0-9a-zA-Z]){2,15}$/;
    let nameStr = userName.value;
    if(regexName.test(nameStr)){
        userName.classList.remove('is-invalid')
        validuserName = true;
    }
    else{
        userName.classList.add('is-invalid')
    }
});


// ------------- validation for email ------------

email.addEventListener('blur', ()=>{
    let regexEmail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let emailStr = email.value;
    if(regexEmail.test(emailStr)){
        email.classList.remove('is-invalid')
        validemail = true;
    }
    else{
        email.classList.add('is-invalid')
    }
})

// -------------- validation for mobile number ----------------

number.addEventListener('blur', ()=>{
    let regexnum = /^[0-9]{10}$/;
    let numStr = number.value;
    if(regexnum.test(numStr)){
        number.classList.remove('is-invalid')
        validnumber = true;
    }
    else{
        number.classList.add('is-invalid')
    }
})


// ------------------- Submit Button Click Event -------------------------------------------------------------------

submit.addEventListener('click', ()=>{
    // e.preventDefault();
    

    if(validuserName==true && validemail==true && validnumber==true){
        userName.classList.remove('is-invalid');
        email.classList.remove('is-invalid')
        number.classList.remove('is-invalid');
        
    }
    else{
        email.classList.add('is-invalid')
        number.classList.add('is-invalid')
        userName.classList.add('is-invalid')
    }


    // ------------------- section start for local storage ---------------------------
                       
        //  --------------------all value of input section--------------
                      
        let userNameval = document.getElementById('userName').value;
        let emailval = document.getElementById('email').value;
        let numberval = document.getElementById('number').value;
        let dobval = document.getElementById('dob').value;
        
        
        
        // --------------------- local storage set data --------------------------------------
        
        let arr =[userNameval,emailval,numberval,dobval]
        // localStorage.setItem('allValue' , JSON.stringify(arr));
        // localStorage.setItem('localUserName', userNameval);
        // localStorage.setItem('localEmail' , emailval);
        // localStorage.setItem('localNumber' , numberval);
        // localStorage.setItem('localDob' , dobval);
    
    
      
    // -------------------- local storage get data section --------------------------
    
    
    
    // let arrValue = JSON.parse(localStorage.getItem('allValue'))
        // let localUserName = localStorage.getItem('localUserName');
        // console.log(localUserName);
        // let localEmail = localStorage.getItem('localEmail');
        // console.log(localEmail);
        // let localNumber = localStorage.getItem('localNumber');
        // console.log(localNumber);
        // let localDob = localStorage.getItem('localDob');
        // console.log(localDob);
    
    // --------------------------------- if condition for radio button and store the data ----------------------------- 
    
    
           //  ------------in section we concatinate 2 array a or b and arr array---------------------------
    
        let maleVal = document.getElementById('male').checked;
        let femaleVal = document.getElementById('female').checked;
        if(maleVal==true){
            let man = 'male';
            let a = [man]
        var gender = a[0];
        var finalValue = arr.concat(a);
        localStorage.setItem('allValue' , JSON.stringify(finalValue))
        var finalStore = JSON.parse(localStorage.getItem('allValue'))
        console.log(finalStore);
        } 
        else{
        let women = "female";
        let b = [women];
        gender = b[0];
        var finalValue = arr.concat(b);
        localStorage.setItem('allValue' , JSON.stringify(finalValue))
        var finalStore = JSON.parse(localStorage.getItem('allValue'))
        console.log(finalStore);
      }
      
    // ------------------------------------- create Table for show output --------------------------------------
    document.getElementById("myform").reset();

    getTable();
})
  function getTable(){
    let table =document.getElementById('table');
    table.classList.remove('d-none')
    var finalStore = JSON.parse(localStorage.getItem('allValue'))
              document.getElementById('tbody').innerHTML += `
        <tr>
          <td>${finalStore[0]}</td>
          <td>${finalStore[1]}</td>
          <td>${finalStore[2]}</td>
          <td>${finalStore[3]}</td>
          <td>${finalStore[4]}</td>
        </tr>
    `  
    }
