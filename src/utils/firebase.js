import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDS81Pjmia-v69MDdZ8xoMnd-Bmy7kOAcQ',
  authDomain: 'chat-50893.firebaseapp.com',
  databaseURL: 'https://chat-50893.firebaseio.com',
  projectId: 'chat-50893',
  storageBucket: 'chat-50893.appspot.com',
  messagingSenderId: '1077028176580',
  appId: '1:1077028176580:web:c55448dc543021cc70bf91',
};

export default firebase.initializeApp(firebaseConfig);
