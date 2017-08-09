// Initialize Firebase
var config = {
  apiKey: "AIzaSyAILHaE7GdOa-TZyVckWLiLFznzXh9Vegc",
  authDomain: "webslide-fire.firebaseapp.com",
  databaseURL: "https://webslide-fire.firebaseio.com",
  projectId: "webslide-fire",
  storageBucket: "",
  messagingSenderId: "50246543476"
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
