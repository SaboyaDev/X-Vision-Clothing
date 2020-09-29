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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
