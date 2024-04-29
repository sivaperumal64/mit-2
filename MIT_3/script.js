function validateUsername(username) {
  return username.length >= 4;
}

function validatePassword(password) {
  // Check length
  if (password.length < 6 || password.length > 16) {
      return false;
  }
  
  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
      return false;
  }
  
  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
      return false;
  }
  
  // Check for at least one number
  if (!/\d/.test(password)) {
      return false;
  }
  
  // Check for at least one special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return false;
  }
  
  return true;
}

// Example usage:
let username = "user123";
let password = "Passw0rd!";

if (validateUsername(username)) {
  console.log("Username is valid");
} else {
  console.log("Username must be at least 4 characters long");
}

if (validatePassword(password)) {
  console.log("Password is valid");
} else {
  console.log("Password must be between 6 and 16 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
}
