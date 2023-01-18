import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_DB_API_KEY,
	authDomain: 'auth-project-f4848.firebaseapp.com',
	projectId: 'auth-project-f4848',
	storageBucket: 'auth-project-f4848.appspot.com',
	messagingSenderId: '744284209463',
	appId: '1:744284209463:web:cca2d18ea338ad9a6f9ab2',
	measurementId: 'G-YGMPJPWSVM',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
