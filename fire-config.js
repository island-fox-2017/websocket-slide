var config = {
    apiKey: "AIzaSyBK5-G6Q61IaCA5Yc6WeL39kgpL0wAIUFo",
    authDomain: "slider-9c25d.firebaseapp.com",
    databaseURL: "https://slider-9c25d.firebaseio.com",
    projectId: "slider-9c25d",
    storageBucket: "slider-9c25d.appspot.com",
    messagingSenderId: "335582984567"
  };
  firebase.initializeApp(config);
  
  
  var database = firebase.database();
  
  function writeDataSlider(data){
    database.ref('slider/').set({
      dataSlider: data
    });
    console.log(data);
  }
  
  var starCountRef = database.ref('slider/data/');
  starCountRef.on('value', function(snapshot){
    console.log(snapshot);
    var dataSnap = snapshot.val();
    window.location.dataSlider = dataSnap
  })
  
  $(window).on('datachange',  () =>  {
    writeDataSlider(window.location.dataSlider)
  })
  
