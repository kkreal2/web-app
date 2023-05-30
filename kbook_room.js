var firebaseConfig = {
      apiKey: "AIzaSyCfN89_WnGG55FPeVK_Yz-6d4R-ZsC2YBk",
      authDomain: "kwitter-f424e.firebaseapp.com",
      databaseURL: "https://kwitter-f424e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f424e",
      storageBucket: "kwitter-f424e.appspot.com",
      messagingSenderId: "521798994489",
      appId: "1:521798994489:web:f8e032fbf306920debdbe8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
