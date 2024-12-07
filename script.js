// Simple in-memory storage for user registration (for demo purposes)
let users = [];

const registerUser=()=> {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const accountNumber = document.getElementById("accountNumber").value;

    if (email && password && accountNumber) {
        users.push({ email, password, accountNumber });
        alert("Registration successful!");
        clearAuthFields();
    } else {
        alert("Please fill out all fields.");
    }
}

const loginUser=()=> {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Login successful!");
        document.getElementById("auth").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Invalid email or password.");
    }
}

//creating content preview

const planet = document.getElementById("planet");
planet.addEventListener("click", function() {
  clearContent();
  this.innerHTML = "<p>Earth is our home planet. Scientists believe Earth and its moon formed around the same time as the rest of the solar system. They think that was about 4.5 billion years ago. Earth is the fifth-largest planet in the solar system.</p>";
});

const stars = document.getElementById("stars");
stars.addEventListener("click", function() {
  clearContent();
  this.innerHTML = "<p>Stars are born in nebulas, clouds of gas and dust in space, where gravity pulls them together and makes them hot and dense.</p>";
});

const solar = document.getElementById("solar");
solar.addEventListener("click", function() {
  clearContent();
  this.innerHTML = "<p>The solar system is the region of space that is dominated by the sun and the objects that travel around it. The solar system includes eight planets, dwarf planets, moons, asteroids, comets, and other objects.</p>";
});

const galaxy = document.getElementById("galaxy");
galaxy.addEventListener("click", function() {
  clearContent();
  this.innerHTML = "<p>A galaxy is a massive collection of stars, gas, and dust held together by gravity. Galaxies come in many shapes and sizes. Some are flat, like a pancake, and others are spiral, like a pinwheel. Our galaxy is called the Milky Way.</p>";
});

const blackhole = document.getElementById("blackhole");
blackhole.addEventListener("click", function() {
  clearContent();
  this.innerHTML = "<p>A black hole is a region of space where gravity is so strong that nothing, not even light, can escape. Black holes are formed when a star collapses under its own gravity.</p>";
});

function clearContent() {
  planet.innerHTML = "Planet";
  stars.innerHTML = "Stars";
  solar.innerHTML = "Solars";
  galaxy.innerHTML = "Glaxy";
  blackhole.innerHTML = "Blackhole";
}

const clearAuthFields=()=> {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("accountNumber").value = "";
}



function deleteAccount() {
    alert("Account deleted successfully.");
    document.getElementById("auth").style.display = "block";
    document.getElementById("mainContent").style.display = "none";
}

//diconary search
function searchDictionary() { const searchQuery = document.getElementById('searchInput').value; alert('You searched for: ' + searchQuery + '.Sorry, we will update it.');
}
//pay for consulting
function payForConsulting() { alert("If you want to consult with our experts, you have to pay $10"); }

//join for teachers
function applyAsTeacher(){alert("Mail your CV. We will contact you soon.")}