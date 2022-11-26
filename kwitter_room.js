
var firebaseConfig = {
      apiKey: "AIzaSyCMKAFivuPN9GAMsCZzgZWj7sd0Lf-jGtE",
      authDomain: "kwitterpage-adf67.firebaseapp.com",
      projectId: "kwitterpage-adf67",
      storageBucket: "kwitterpage-adf67.appspot.com",
      messagingSenderId: "453330498479",
      appId: "1:453330498479:web:07a13df6a45d61f7c8b55a",
      measurementId: "G-53K40R2TVE"
    };    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}


      
getData();

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace=("index.html");
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
