importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAouuOAcK4IYzXdFrpUK-fK87ww2Jo0nwU",
    authDomain: "sainvektor209.firebaseapp.com",
    databaseURL: "https://sainvektor209.firebaseio.com",
    projectId: "sainvektor209",
    storageBucket: "sainvektor209.appspot.com",
    messagingSenderId: "408328516564",
    appId: "1:408328516564:web:77949a9ca3bd1d57979c41",
    measurementId: "G-8Y9REGVE4B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Sain Vektor';
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});