// Handle sign-up form submission
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  fetch("/register", {
    // Make sure this matches your Express route
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/login"; // Redirect to login after successful registration
      } else {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
    })
    .catch((error) => {
      console.error("Registration error:", error);
      alert(error.message); // Alert user of error
    });

  signinForm.classList.add("pulse");
  setTimeout(() => signinForm.classList.remove("pulse"), 500);
});

// Handle login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  fetch("/login", {
    // Make sure this matches your Express route
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/home"; // Redirect to home after successful login
      } else {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert(error.message); // Alert user of error
    });

  loginForm.classList.add("pulse");
  setTimeout(() => loginForm.classList.remove("pulse"), 500);
});
