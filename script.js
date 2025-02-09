// Wait for the DOM to load before executing scripts
document.addEventListener("DOMContentLoaded", function () {

  // Search button functionality
  document.querySelector(".btn").addEventListener("click", function (event) {
      event.preventDefault(); // Prevents default form submission
      let searchValue = document.querySelector(".srch").value.trim();
      if (searchValue === "") {
          alert("Please enter a search term!");
      } else {
          alert("Searching for: " + searchValue);
      }
  });

  // Login button functionality
  document.querySelector(".btnn").addEventListener("click", function (event) {
      event.preventDefault(); // Prevents page reload
      let email = document.querySelector("input[type='email']").value.trim();
      let password = document.querySelector("input[type='password']").value.trim();

      if (email === "" || password === "") {
          alert("Please enter both email and password!");
      } else {
          alert("Login Successful! (This is a demo message)");
      }
  });

  // Highlight active menu item
  let menuItems = document.querySelectorAll(".menu ul li a");
  menuItems.forEach(item => {
      item.addEventListener("click", function () {
          // Remove active class from all items
          menuItems.forEach(link => link.classList.remove("active"));
          // Add active class to clicked item
          this.classList.add("active");
      });
  });

});
