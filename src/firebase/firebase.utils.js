import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBcfXlfwhOm4kRw8nneEMrazUQLvN0QBYA',
	authDomain: 'crwn-db-78970.firebaseapp.com',
	databaseURL: 'https://crwn-db-78970.firebaseio.com',
	projectId: 'crwn-db-78970',
	storageBucket: 'crwn-db-78970.appspot.com',
	messagingSenderId: '495184617981',
	appId: '1:495184617981:web:44a63effd4a9ca826b7994',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
