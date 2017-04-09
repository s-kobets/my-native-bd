import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCZ8pjhvX6snAzYVnvcUnpDLpq5bAuTWNU',
	authDomain: 'native-bd.firebaseapp.com',
	databaseURL: 'https://native-bd.firebaseio.com',
	projectId: 'native-bd',
	storageBucket: 'native-bd.appspot.com',
	messagingSenderId: '85968346295'
};

firebase.initializeApp(config);

// const rootRef = firebase.database().ref().child('native-bd');
const dataRef = new Promise((resolve, reject) => {
	return resolve(firebase.database().ref().child('dataState'));
});

export default dataRef;
