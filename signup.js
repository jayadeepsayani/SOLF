
// Import necessary functions from Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { get, set, ref, getDatabase } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

// Firebase configuration object containing the API keys and project details
const firebaseConfig = {
    apiKey: "AIzaSyCwY6v-wuFUC13tgxQvfpkSvO9jl_yXU9o",
    authDomain: "hackathonparttwo.firebaseapp.com",
    projectId: "hackathonparttwo",
    storageBucket: "hackathonparttwo.appspot.com",
    messagingSenderId: "988019245037",
    appId: "1:988019245037:web:465661bd67475a877cb1e4"
  };
  
// Initialize Firebase app using the provided configuration
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

// Get Firebase Realtime Database instance
const db = getDatabase();

// Get input fields for username, email, and password
const usernameInput = document.querySelector('.username');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

// Add event listener to the signup form
document.querySelector(".signup-form").addEventListener('submit', (e) => {
    e.preventDefault();

    // Get values from input fields
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Create a user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Send email verification
            sendEmailVerification(userCredential.user)
                .then(() => {
                    alert("Account created successfully! Verification email sent.");
                    // Create user data object with username, email, and favorites
                    const userData = {
                        name: username,
                        email: email,
                    };
                    // Update the user profile with the provided username
                    return updateProfile(userCredential.user, {
                        displayName: username
                    });
                    window.location.href = 'home.html';
                })
                .catch((error) => {
                    alert(error.message);
                    // Delete the newly created user if email verification fails
                    userCredential.user.delete()
                        .catch((error) => {
                            console.log("Error deleting user:", error);
                        });
                });
        })
        .catch((error) => {
            alert(error.message);
        });
});
