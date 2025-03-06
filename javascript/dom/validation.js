function togglePassword(){
   let labelObj = document.getElementById("labelButton");
   let labelText = labelObj.innerText; 
   let passwordInput = document.getElementById("password");
   if(labelText == "Show"){
       passwordInput.type = "text";
       labelObj.innerText = "Hide";
   }
   else if(labelText == "Hide"){
       passwordInput.type = "password";
       labelObj.innerText = "Show";
   }
}
function validatePassword(){
   let status = true;
   let password = document.getElementById("password").value;
   let passwordError = document.getElementById("passwordError");
   if(password.length == 0){
       status = false;
       passwordError.innerText = "password is required";
   }
   else if(password.length < 6 || password.length > 10){
       status = false;
       passwordError.innerText = "Invalid password | Length must be 6 to 10";
   }
   else
     passwordError.innerText = "";

   return status; 
}
function validateUsername(){
   let status = true;
   let username = document.getElementById("username").value;
   let usernameError = document.getElementById("usernameError");
   if(username.length == 0){
       status = false;
       usernameError.innerText = "username is required";
   }
   else
     usernameError.innerText = "";
   return status;
}
function validateContact(){
   let status = true;
   let contact = document.getElementById("contact").value;
   let contactError = document.getElementById("contactError");
   if(contact.length == 0){
       status = false;
       contactError.innerText = "contact number is required";
   }
   else if(isNaN(contact)){
       status = false;
       contactError.innerText = "Only digits are allowed";
   }
   else if(contact.length != 10){
     status = false;
     contactError.innerText = "Invalid contact number";
   }
   else
    contactError.innerText = "";
   return status; 
}
function validateQualification(){
   let status = true;
   let qualification = document.getElementById("qualification").value;
   let qualificationError = document.getElementById("qualificationError");
   if(qualification == "0"){
       status = false;
       qualificationError.innerText = "select qualication";
   }
   else
    qualificationError.innerText = "";
   return status;
}
function validateFile(){
   let status = true;
   let profile = document.querySelector("#profile");
   let profileError = document.getElementById("profileError");
   if(profile.files[0]){
      let name = profile.files[0].name;
      let dotIndex = name.lastIndexOf(".");
      let fileExtension = name.substring(dotIndex);
      if(fileExtension != ".png"){
       status = false;
       profileError.innerText = "only .png is allowed";
      }
      else
       profileError.innerText = "";
   }
   else{
       status = false;
       profileError.innerText = "select profile pic";
   }
     

   return status;
}
function validateForm(){
   let usernameStatus =  validateUsername();
   let passwordStatus = validatePassword();
   let contactStatus = validateContact();
   let qualicationStatus = validateQualification();
   let fileStatus = validateFile();
   if(usernameStatus && passwordStatus && contactStatus && qualicationStatus && fileStatus)
     return true;
   return false;   
}
