// function myData(){
//  let userEmail= document.getElementById("email").value
//  let userPassword=document.getElementById("password").value
//  console.log(userEmail);
//  console.log(userPassword);



// let correctEmail="zainbrohi000@gmail.com"
// let CorrectAPassword="12345"

// if (userEmail===correctEmail && userPassword===CorrectAPassword) {
//     alert("successfully Login")
    
// }else{
//     alert("Login Failed Incorrect Email And Password")
// }


// }

function myData(){
let userEmail= document.getElementById("email").value
let userPassword= document.getElementById("password").value
console.log(userEmail);
console.log(userPassword);



let correctEmail="zainbrohi000@gmail.com"
let CorrectAPassword="12345"

if(userEmail===correctEmail && userPassword===CorrectAPassword){
    location.href = "signin.html"
 

}else{
    alert("Login Failed Incorect Email And Password")
}


}