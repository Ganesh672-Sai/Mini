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
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".header2 .menu2 li"); // Select the list items in the navigation

  navItems.forEach(function(item) {
    item.addEventListener("click", function() {
      const targetId = this.getAttribute("data-section"); // Get the data-section attribute
      const targetSection = document.getElementById(targetId); // Find the corresponding section

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for header height if needed
          behavior: "smooth"
        });
      }
    });
  });
});
