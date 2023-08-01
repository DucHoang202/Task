 var nm = document.getElementById('nm');
 var pw = document.getElementById('pw');
 var addr = document.getElementById('nom');

 var input = document.getElementsByTagName('input');
 var login = document.getElementById('rgstr_btn');
 var form = document.querySelector('form');

 function store() {
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('nom', nom.value);
 }

    form.onsubmit = ()=>{
        alert('Register successfully!');
    }
    



