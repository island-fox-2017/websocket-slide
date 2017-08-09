// Initialize Firebase
var config = {
  apiKey: "AIzaSyDoLOFayWcvZmPwcszDdN8PUwFFHJ2Uq-0",
  authDomain: "websocket-slide-7a674.firebaseapp.com",
  databaseURL: "https://websocket-slide-7a674.firebaseio.com",
  projectId: "websocket-slide-7a674",
  storageBucket: "websocket-slide-7a674.appspot.com",
  messagingSenderId: "734749687408"
};
firebase.initializeApp(config);

var database = firebase.database();

function writeURLHash(hash) {
  database.ref('slide-urls/').set({
    hash: hash
  });
  console.log('success');
}

var listenURL = database.ref('slide-urls/hash/');
listenURL.on('value', function(url) {
  var data = url.val();
  window.location.hash = data;
});

$(window).on('hashchange', function(){
  writeURLHash(window.location.hash)
});
