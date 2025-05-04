const firstname = document.getElementById('firstname')
const lastname = document.getElementById('secondname')
const phone = document.getElementById('phonespan')
const city = document.getElementById('cityspan')
const email = document.getElementById('emailspan')

async function getdata() {
    const response = await fetch('https://fakestoreapi.com/users?authuser=2')
    const data = await response.json();
    console.log(data)
    firstname.innerHTML = data[1].name.firstname;
    lastname.innerHTML = data[1].name.lastname;
    phone.innerHTML = data[1].name.phone;
    city.innerHTML = data[1].name.cityspan;
    email.innerHTML = data[1].name.emailspan;


    
}
getdata();