let myArray = []
function addPerson(event) {
  event.preventDefault()
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let username = document.getElementById("username").value
  let password1 = document.getElementById('password1').value

  if (!name || !email || !password || !username || !password1) {
    alert("Please fill in all the fields")
    return
  }
  const person = {
    name,
    email,
    password,
    username,
    password1
  }

  if (password != password1){
    alert('Password does not match')
    return false
}

//email exists already
// if (localStorage.getItem('email')){
//   alert('User already exist')
//     return false;


  alert("The registration is successful")
  // myArray.push(person)
  document.forms[0].reset()
  console.log("added", person)
  myArray = localStorage.getItem("email")
  console.log("myArray", JSON.parse(myArray))
  myArray = myArray ? JSON.parse(myArray) : []
  myArray.push(person)
  console.log(myArray)
  localStorage.setItem("email", JSON.stringify(myArray))
  window.location.href= 'login.html'
}

let foodDetails = []

const divs = document.querySelectorAll(".check")

divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    let n = event.target

    var siblings = (n) => [...n.parentElement.children].filter((c) => c != n)
    var sibs = siblings(n)
    let a = sibs[0].classList[1]
    let b = sibs[1].classList[1]

    let obj = {}
    let name = document.getElementsByClassName(a)[0]
    let price = document.getElementsByClassName(b)[0]
    obj["name"] = name.innerHTML
    obj["price"] = price.innerHTML
    foodDetails.push(obj)
    console.log(foodDetails)
    localStorage.setItem('price',JSON.stringify(obj))
    
  })
)
var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

// function checkOut () {
//   let items = 
let loginForm = document.getElementById("frmLogin")
let loginSubmit = document.getElementById("btnSignIn")
let getUser = JSON.parse(localStorage.getItem('email'))

loginSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  let email = loginForm.email.value
  let password = loginForm.password.value
  if (email === getUser[1] && password === getUser[2]) {
    alert("You have successfully logged in.")
    window.location.href = "recipe!3.html"
    
}else {
  alert('username or password is incorrect')
}


})

// function login(){
//   //let email = document.getElementById("email").value
//   let password = document.getElementById("password").value
//   let getUser = JSON.parse(localStorage.getItem('email'))

//   if (!getUser){
//       return false;
//   } 
//   if (password != getUser[2]){
//     alert("The email or password is incorrect")
//       return false;
//   }
//   alert('log in successful')
//   window.location.href='recipe!.html'
// }

// function loginUser(event){
//   event.preventDefault()
//   let user_name_email=login()
//   if(user_name_email){
//       alert('Log in successful')
//       window.location.href = "dashboard.html"
//       return
//   }
//   return
// }


// function returnPrice() {
  //  let amount = document.getElementById('price').value
  //  for (amount in foodDetails){

//     amount += amount
//   }

// }

// class PickFood {
//   constructor(foodName,price) {
//     this.foodName = foodName
//     this.price = price

//   }
// }

//   if (checked) {
//     localStorage.storage.setItem(email.stringify(price))
//   }
//   window.location.href = '#'
// }

// function checkOut(event){
//   event.preventDefault()
