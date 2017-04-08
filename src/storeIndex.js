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
const dataRef = firebase.database().ref().child('dataState');
let dateBD = [];

dataRef.on('value', snapshot => {
	snapshot.forEach(item => {
		if (item.val().lat) {
			dateBD.push({ 
				startDate: item.val().startDate,
				time: item.val().time,
				lat: item.val().lat,
				log: item.val().log
			});
		}
	});
})
export {dataRef, dateBD}
