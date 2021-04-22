var firebaseConfig = {
    apiKey: "AIzaSyDJHhRvrT61xX7idAacIV0dIRnbJnL67t4",
    authDomain: "kwitterwebapp-ac82a.firebaseapp.com",
    databaseURL: "https://kwitterwebapp-ac82a-default-rtdb.firebaseio.com",
    projectId: "kwitterwebapp-ac82a",
    storageBucket: "kwitterwebapp-ac82a.appspot.com",
    messagingSenderId: "312577833010",
    appId: "1:312577833010:web:d20ad7b08f0868c8b6e42b"
  };
  
firebase.initializeApp(firebaseConfig);

function update(){
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome  "+user_name+" !";
}

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey  =childSnapshot.key; 
 Room_names = childKey;      
//Start code  
console.log("Room Name - "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
console.log(row);
document.getElementById("output").innerHTML += row;
//End code      
});
});
}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}