// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCLdKN8MraEs2en2_1MtjAfdSDxLx10Wtw",
    authDomain: "contactform-5e8ee.firebaseapp.com",
    projectId: "contactform-5e8ee",
    storageBucket: "contactform-5e8ee.appspot.com",
    messagingSenderId: "231404890558",
    appId: "1:231404890558:web:d5e034a2ce08f4a02b71ef",
    measurementId: "G-YDFNWP6KML"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//reference message collection
let messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    saveMessage(name, email, message);
    window.alert("Message sent!");
    document.getElementById("contactForm").reset();

}

//save message func
function saveMessage(name, email, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}