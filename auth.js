
function loginAnonymously() {
  firebase.auth().signInAnonymously()
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}
