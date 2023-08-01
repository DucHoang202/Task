 // Name and Password from the register-form
 var nm = document.getElementById('nm');
 var pw = document.getElementById('pw');
 var addr = document.getElementById('nom');

 var input = document.getElementsByTagName('input');
 var login = document.getElementById('log-in');
 var form = document.querySelector('form');
 form.onsubmit = ()=>{return false;}

 
 // storing input from register-form
 function store() {
     localStorage.setItem('nm', nm.value);
     localStorage.setItem('pw', pw.value);
     localStorage.setItem('nom', nom.value);
 }
 
 // check if stored data from register-form is equal to entered data in the   login-form
 function check() {
 
     // stored data from the register-form
     var storedName = localStorage.getItem('nm');
     var storedPw = localStorage.getItem('pw');
     var storedNom = localStorage.getItem('nom');
 
     // entered data from the login-form
     var userName = document.getElementById('userName');
     var userPw = document.getElementById('userPw');
     
     
 
     // check if stored data from register-form is equal to data from login form
 

    login.onclick = ()=>{

        if(userName.value == storedName && userPw.value == storedPw) {
            alert('You are logged in.');
            
            form.onsubmit = ()=>{return ;}
        }else {
            alert('ERROR.');
        }
    }
 }

 