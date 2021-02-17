// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Fi/rebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyC1xxyU-vKXLXPBITw44jSsDIPSzHfAsN4",
  authDomain: "comfecoapp-68a9c.firebaseapp.com",
  databaseURL: 'https://comfecoapp-68a9c.firebaseio.com',
  projectId: "comfecoapp-68a9c",
  storageBucket: "comfecoapp-68a9c.appspot.com",
  messagingSenderId: "809504707203",
  appId: "1:809504707203:web:aa725934dc14b3acc941b6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here
  const notificationTitle = payload.notificationTitle;
  const notificationOptions = {
    body: payload.body,
    icon: './assets/icons/android-icon-36x36.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});