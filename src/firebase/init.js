import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "***",
    authDomain: "smoothies-recipes-vuejs-demo.firebaseapp.com",
    databaseURL: "https://smoothies-recipes-vuejs-demo.firebaseio.com",
    projectId: "smoothies-recipes-vuejs-demo",
    storageBucket: "smoothies-recipes-vuejs-demo.appspot.com",
    messagingSenderId: "***",
    appId: "***",
    measurementId: "***"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()