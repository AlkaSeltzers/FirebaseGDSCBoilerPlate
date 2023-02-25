document.addEventListener("DOMContentLoaded", function(event) { 

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            document.body.innerHTML = '';
            document.write(`Hello ${user.displayName}`);
            document.write(`<br><button onclick="logout()">Logout</button>`);
        } else {
            document.body.innerHTML = '';
            document.write(`<button onclick="googleLogin()">Log in with Google </button>`);
        }
    });
});

function logout() {
    firebase.auth().signOut();
}
