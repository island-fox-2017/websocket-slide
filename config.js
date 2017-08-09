  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnelMfLWZGBNV9iqp86PDaxo0LyaYrKUk",
    authDomain: "websocket-slide-59a42.firebaseapp.com",
    databaseURL: "https://websocket-slide-59a42.firebaseio.com",
    projectId: "websocket-slide-59a42",
    storageBucket: "websocket-slide-59a42.appspot.com",
    messagingSenderId: "380553175163"
  };
  firebase.initializeApp(config);
  
  function writeData(data) {
    firebase.database().ref('test-url/').set({
    hash:data
    });
    console.log('data sukses');
  }
  
  var startData = firebase.database().ref('test-url/hash/');
    startData.on('value', function(url) {
      // console.log(url.val());
      console.log(url);
      var data = url.val()
      window.location.hash = data
  });
  
  $(window).on('hashchange',()=>{
    // console.log(window.location.hash);
    writeData(window.location.hash)
  });