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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}