var pictureSource;
var destinationType;

document.addEventListener("deviceready",onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
    var capturedImage = document.getElementById('capturedImage');
    capturedImage.src = imageData;
}

function onPhotoURISuccess(imageURI) {
    var openedImage = document.getElementById('openedImage');
    openedImage.src = imageURI;
}

function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        saveToPhotoAlbum: true,
        correctOrientation: true
    });
}

function openPhoto() {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: pictureSource.PHOTOLIBRARY
    });
}

function onFail(message) {
    alert('Failed because: ' + message);
}