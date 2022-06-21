
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA1cwWE1YvLjf5JeHJAFnVJz_CuoIJVVXs",
      authDomain: "project-c94-b3477.firebaseapp.com",
      projectId: "project-c94-b3477",
      storageBucket: "project-c94-b3477.appspot.com",
      messagingSenderId: "168264090294",
      appId: "1:168264090294:web:c9ef3a49259d5e1a3d1c17"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
