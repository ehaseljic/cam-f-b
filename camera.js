// Grab elements, create settings, etc.
var video = document.getElementById('video');
var cameraSwitch = document.getElementById('switch-camera');

let shouldFaceUser = true;
let stream = null;
let defaults = { video:true };

let supports = navigator.mediaDevices.getSupportedConstraints();
if( supports['facingMode.environment'] === true ) {
  cameraSwitch.style.display = 'block';
}

function capture(){
  defaults.video = { facingMode: shouldFaceUser ? 'user' : 'environment' }
// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia(defaults).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

}

cameraSwitch.addEventListener('click', function(){
  if( stream == null ) return
  // we need to flip, stop everything
  stream.getTracks().forEach(t => {
    t.stop();
  });
  // toggle / flip
  shouldFaceUser = !shouldFaceUser;
  capture();
})

capture();
 // Elements for taking the snapshot
 var canvas = document.getElementById('canvas');
 var context = canvas.getContext('2d');
 var video = document.getElementById('video');

 /*
 var video_width = video.offsetWidth;
var video_height = video.offsetHeight;

var ratio = video_width / video_height;

var target_width; 
var target_height;
var y_of_video = 0;
var x_of_video = 0

if ( video_width > video_height ){
  target_width = canvas.width;
  target_height = canvas.width / ratio;  
  y_of_video = (canvas.height - target_height) ;
}else{
  target_width = video.height;
  target_height = canvas.height / ratio;
  
  x_of_video = (canvas.width - target_width) ;
}*/

 
 // Trigger photo take
 

 document.getElementById("snap").addEventListener("click", function() {
     video.style.display = "none";
     document.getElementById('container-circle').style.display="none";
     document.getElementById('container-button').style.display="none";
     cameraSwitch.style.display = "none";
     //context.drawImage(video, 0, 0);
    
     //context.drawImage(video, x_of_video, y_of_video, target_width, target_height);

     context.drawImage(video, 0,0, canvas.width, canvas.height);

    
        //setTimeout( function(){
        //window.location.href= "loadingScreen.html"}, 2000);
      
 });


