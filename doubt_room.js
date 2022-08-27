
   var firebaseConfig = {
      apiKey: "AIzaSyCv_8-XCRnaVY3HHCFCoRH7PzHfaZ4ciEA",
      authDomain: "c97capstone.firebaseapp.com",
      databaseURL: "https://c97capstone-default-rtdb.firebaseio.com",
      projectId: "c97capstone",
      storageBucket: "c97capstone.appspot.com",
      messagingSenderId: "226339283497",
      appId: "1:226339283497:web:c7a19c33fcaef6c2777238",
      measurementId: "G-K1N105951Q"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function Addroom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
 purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "doubt_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "doubt_page.html"
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
