// Use constraints to ask for a video-only MediaStream: 
var constraints = {
    audio: false,
    video: true
};
// low res video constraints
var qvgaConstraints = {
    audio: false,
    video: {
        mandatory: {
            maxWidth: 320,
            maxHeight: 240
        }
    }
};

var video = document.querySelector('video');
var btnStartRecording = document.querySelector('#btn-start');
// local stream definition
var stream;
// success callback
function successCallback(gotStream) {
    // make stream available to the console
    window.stream = gotStream;
    // Attach the returned stream to the <video> element in the HTML page 
    video.src = window.URL.createObjectURL(stream);
    // play video
    video.play();
}
// error callback
function errorCallback(error) {
    console.log('navigator.mediaDevices.getUserMedia:', error);
}

function getMedia(constraints) {
    if (!!stream) {
        video.src = null;
        stream.stop();
    }
    navigator.mediaDevices.getUserMedia(constraints).then(successCallback)["catch"](errorCallback);
}

btnStartRecording.addEventListener('click', function(){
   getMedia(qvgaConstraints);
});