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

function loginUser(event){
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let userdetails = JSON.parse(localStorage.getItem('email'));

    if (password == userdetails[0].password && email === userdetails[0].email) {
      window.location.href = "recipe!.html"
    } else if (password !== userdetails[0].password || email !== userdetails[0].email){
      window.location.href = "signup.html"  
  }
} 


