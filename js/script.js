AOS.init();

const myform = document.querySelector(".contact-form");
const nameform = document.querySelector(".form-name");
const email = document.querySelector(".form-email");
const message = document.querySelector(".form-message");
const submitButton = document.querySelector(".subbtn");

console.log(myform);
console.log(nameform);
console.log(email);
console.log(message);

myform.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log("submit");
   if (nameform.value == "" || email.value == "" || message.value == "") {
   } else {
      submitButton.innerText = "Thank You For Submitting!";
      submitButton.id = 'secondbut'
      nameform.value = ""
      email.value = ""
      message.value = ""
      
   }
});
