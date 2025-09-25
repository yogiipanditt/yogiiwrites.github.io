// Login Form (Basic, without Firebase)
const loginForm = document.getElementById('loginForm');
const notesSection = document.getElementById('notesSection');
const adminSection = document.getElementById('adminSection');
const loginMsg = document.getElementById('loginMsg');

loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Admin credentials
  if(email === "yogeshsharmaa4081@gmail.com" && password === "yogesh@4081"){
    loginMsg.textContent = "Admin Logged in!";
    loginMsg.style.color = "green";
    adminSection.style.display = "block";
    notesSection.style.display = "none";
  } else {
    loginMsg.textContent = "User Logged in!";
    loginMsg.style.color = "green";
    notesSection.style.display = "block";
    adminSection.style.display = "none";
  }
});
