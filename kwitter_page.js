//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).pusuh({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);

                        //End code
                  }
            });
      });
}
getData();