// /// **/
// * PHP Email Form Validation - v3.7
// * URL: https://bootstrapmade.com/php-email-form/
// * Author: BootstrapMade.com
// */
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!');
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error);
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       if( response.ok ) {
//         return response.text();
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();

const thename = document.getElementById('thename');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('submit-form');
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const subject_error = document.getElementById("subject_error");
const message_error = document.getElementById("message_error");

form.addEventListener ('submit',(e)=>
{ 
    var email_check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (thename.value === '' || thename.value===null)


    {
        e.preventDefault();
        name_error.innerHTML= "Name is required";
    }
    else
    {
        name_error.innerHTML= "";
    }

    if (!email.value.match(email_check))   
    {    
        e.preventDefault();
        email_error.innerHTML= "Valid email is required";
    }
    else
    {
        email_error.innerHTML= "";
    }

    if (subject.value.length<=0)
    {
        e.preventDefault();
        subject_error.innerHTML="Subject is required required";
    }
    else
    {
        subject_error.innerHTML= "";
    }

    if (message.value.length<=0)
    {   e.preventDefault();
        message_error.innerHTML="Subject is required required";
    }
    else
    {
        message_error.innerHTML= "";
    }

    if(name_error.innerHTML == "" && email_error.innerHTML == "" && subject_error.innerHTML == "" && message_error.innerHTML=="" )
    {
        console.log("hi");
        //$("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxSnrKa1xMw42XHM0ZUEpAULwvlOVMNZHugTmUGXE-Y2qLqvbnk7ViCDHp4bxYh96qR/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
       // })
    }
    

})

