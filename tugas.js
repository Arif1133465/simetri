function login() {
    // Define predefined username and password
    const correctUsername = "Ariff";
    const correctPassword = "123456789";
  
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the input matches the predefined values
    if (username === correctUsername && password === correctPassword) {
      window.alert("Berhasil").style.color = "green";
      window.alert("berhasil").textContent = "Login successful!";
    } else {
      window.alert("gagal").style.color = "bluesky";
      window.alert("gagal").textContent = "Incorrect username or password.";
      const errorMessage = document.getElementById("gagal");
      errorMessage.style.display = "block"; // Tampilkan pesan error
    }
  }