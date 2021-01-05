import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const {
	REACT_APP_FIRE_BASE_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_MESSAGING_SENDER_ID,
	REACT_APP_APP_ID
} = process.env

const config = {
	apiKey: `${REACT_APP_FIRE_BASE_KEY}`,
	authDomain: `${REACT_APP_AUTH_DOMAIN}`,
	projectId: `${REACT_APP_PROJECT_ID}`,
	storageBucket: `${REACT_APP_STORAGE_BUCKET}`,
	messagingSenderId: `${REACT_APP_MESSAGING_SENDER_ID}`,
	appId: `${REACT_APP_APP_ID}`,
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
