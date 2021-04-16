import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAl4pmcb0XNSM4g_uxBPBYW7smTBkWyBGk",
    authDomain: "vue-2do.firebaseapp.com",
    databaseURL: "https://vue-2do-default-rtdb.firebaseio.com",
    projectId: "vue-2do",
    storageBucket: "vue-2do.appspot.com",
    messagingSenderId: "812679881002",
    appId: "1:812679881002:web:62eecd6310f544a3ff7e53",
    measurementId: "G-GQF704EG0J"
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database();