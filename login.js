function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can customize the login logic here, e.g., validate against a server-side database
    if (username === "mathewreis" && password === "Mat102509!") {
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("contentContainer").style.display = "block";
    } else {
      alert("Invalid username or password");
    }
  }
  
  function logout() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("contentContainer").style.display = "none";
  }
  