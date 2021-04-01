// Document is ready
$(document).ready(function () { 
     
    // Validate first name
        $('#fnmsg').hide();    
        let firstnameError = true;
        $('#firstname').keyup(function () {
            validateFirstname();
        });
          
        function validateFirstname() {
          let firstnameValue = $('#firstname').val();
          if (firstnameValue.length == '') {
          $('#fnmsg').show();
              firstnameError = false;
              return false;
          } 
          else {
              $('#fnmsg').hide();
          }
        }

        // Validate second name
        $('#lnmsg').hide();   
         
        let lastnameError = true;
        $('#lastname').keyup(function () {               
             validateLastname();
            });
              
        function validateLastname() {
          let lastnameValue = $('#lastname').val();
              if (lastnameValue.length == '') {
              $('#lnmsg').show();
                  lastnameError = false;
                  return false;
              } 
              else {
                  $('#lnmsg').hide();
              }
        }
      
       // Validate Email
        // $('#emailmsg').hide();
        // let emailError = true;
        // const email =  document.getElementById('email');
        //   email.addEventListener('blur', ()=>{
        //    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        //    let s = email.value;
        //    if(regex.test(s)){
        //       email.classList.remove(
        //             'is-invalid');
        //       emailError = true;
        //     }
        //     else{
        //         email.classList.add(
        //               'is-invalid');
        //         emailError = false;
        //     }
        // })

        // Validate Address
        $('#addmsg').hide();    
        let addressError = true;
        $('#add1').keyup(function () {               
             validateAddress();
            });
              
        function validateAddress() {
          let addressValue = $('#add1').val();
              if (addressValue.length == '') {
              $('#addmsg').show();
                  addressError = false;
                  return false;
              } 
              else {
                  $('#addmsg').hide();
              }
        }
        //validate city
        $('#citymsg').hide();    
        let cityError = true;
        $('#city').keyup(function () {               
             validateCity();
            });
              
        function validateCity() {
          let cityValue = $('#city').val();
              if (cityValue.length == '') {
              $('#citymsg').show();
                  cityError = false;
                  return false;
              } 
              else {
                  $('#citymsg').hide();
              }
        }
        //validate country
        $('#cmsg').hide();    
        let countryError = true;
        $('#country').keyup(function () {               
             validateCountry();
            });
              
        function validateCountry() {
          let countryValue = $('#country').val();
              if (countryValue.length == '') {
              $('#cmsg').show();
                  countryError = false;
                  return false;
              } 
              else {
                  $('#cmsg').hide();
              }
        }


           //validate state
           $('#smsg').hide();    
           let stateError = true;
           $('#state').keyup(function () {               
                validateState();
               });
                 
           function validateState() {
             let stateValue = $('#state').val();
                 if (stateValue.length == '') {
                 $('#smsg').show();
                     stateError = false;
                     return false;
                 } 
                 else {
                     $('#smsg').hide();
                 }
           }

              //validate Zip
              $('#zipmsg').hide();    
              let zipError = true;
              $('#zip').keyup(function () {               
                   validateZip();
                  });
                    
              function validateZip() {
                let zipValue = $('#zip').val();
                    if (zipValue.length == '') {
                    $('#zipmsg').show();
                        zipError = false;
                        return false;
                    } 
                    else {
                        $('#zipmsg').hide();
                    }
              }
            //   //file validate.
              $('#filemsg').hide();
              $('#imgPreview').hide();
              let fileError = true;
              $('#file').change(function() {
                  validateFile();

              });

              function validateFile(){
                  let fileInput = ('input[type=file]').files[0];
                  let filePath = fileInput.value;
                  //allowing file path
                  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                  if (!allowedExtensions.exec(filePath)) {
                    alert('Invalid file type must be jpg,jpeg,png,gif');
                    fileInput.value = '';
                    fileError = false;
                    return false;
                } 
                //image preview
                if (fileInput) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        console.log(e.target.result);
                        $('imgPreview').show();
                         $('#imgPreview').attr('src', e.target.result);
                         
                    };
                      
                    reader.readAsDataURL(fileInput);
                }
                else {
                    $('#filemsg').show();
                    fileError = false;
                    return false;
                }
              }
          
    // Submitt button
        $('#submitbtn').click(function () {
            validateFirstname();
            validateLastname();
            validateAddress();
            validateCity();
            validateCountry();
            validateState();
            validateZip();
            validateFile();
            // validateFile();
            if ((firstnameError == true) && 
                (lastnameError == true) && 
                (addressError == true) && 
                (cityError == true) &&
                (countryError == true) &&
                (stateError == true) && 
                (zipError == true) && (fileError == true) ) {
                return true;
            } else {
                return false;
            }
        });
    });