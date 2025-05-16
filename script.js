function validatePassword(role) {
  const passField = document.getElementById(`${role}-pass`);
  const errorField = document.getElementById(`${role}-error`);

  if (passField.value.length < 8) {
    errorField.textContent = "Password must be at least 8 characters.";
    return false;
  }

  // Redirect after successful login
  window.location.href = `${role}-dashboard.html`;
  return false; // prevent actual form submission
}
