import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAcBdG6zDUUDC7fbYd8t076JzzFdLk9ol4",
    authDomain: "smoothies-recipes-vuejs-demo.firebaseapp.com",
    databaseURL: "https://smoothies-recipes-vuejs-demo.firebaseio.com",
    projectId: "smoothies-recipes-vuejs-demo",
    storageBucket: "smoothies-recipes-vuejs-demo.appspot.com",
    messagingSenderId: "684554921411",
    appId: "1:684554921411:web:410111c4220ba8107a8976",
    measurementId: "G-FS30BE0QTN"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()