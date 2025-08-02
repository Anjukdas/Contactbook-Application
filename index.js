const container = document.getElementById('user-container');

async function getdata() {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();

  data.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';

    // Profile image using pravatar
    const img = document.createElement('img');
    img.src = 'https://i.pravatar.cc/150?u=' + user.email;
    img.alt = 'Profile Photo';

    const fname = document.createElement('h2');
    fname.textContent = user.name.firstname;

    const lname = document.createElement('h3');
    lname.textContent = user.name.lastname;

    const phone = document.createElement('p');
    phone.innerHTML = `<strong>Phone:</strong> ${user.phone}`;

    const city = document.createElement('p');
    city.innerHTML = `<strong>City:</strong> ${user.address.city}`;

    const email = document.createElement('p');
    email.innerHTML = `<strong>Email:</strong> ${user.email}`;

    card.appendChild(img);
    card.appendChild(fname);
    card.appendChild(lname);
    card.appendChild(phone);
    card.appendChild(city);
    card.appendChild(email);

    // Click effect
    card.addEventListener('click', () => {
      card.classList.add('clicked');
      setTimeout(() => card.classList.remove('clicked'), 400);
    });

    container.appendChild(card);
  });
}

getdata();

