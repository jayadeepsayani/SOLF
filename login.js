
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwY6v-wuFUC13tgxQvfpkSvO9jl_yXU9o",
    authDomain: "hackathonparttwo.firebaseapp.com",
    projectId: "hackathonparttwo",
    storageBucket: "hackathonparttwo.appspot.com",
    messagingSenderId: "988019245037",
    appId: "1:988019245037:web:465661bd67475a877cb1e4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

// Event listener for login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  // Retrieve user input values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Sign in user with provided email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        console.log('User signed in!');
        window.location.href = "home.html";
      } 
    })
    .catch((error) => {
      console.log(error);
    });
});
