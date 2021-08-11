//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBhvJ0aajIS4iela9mtexZgzG0yR7QQyZY",
    authDomain: "practice-3675c.firebaseapp.com",
    databaseURL: "https://practice-3675c-default-rtdb.firebaseio.com",
    projectId: "practice-3675c",
    storageBucket: "practice-3675c.appspot.com",
    messagingSenderId: "1026600936807",
    appId: "1:1026600936807:web:7cc0aaeafc3dc037067bc2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name.").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) { //
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
            document.getElementById("output").innerHTML += row;
        });
    });
}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "Kwitter.html";
}