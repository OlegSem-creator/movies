import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDQMEqa9w8oOB-b8kKOiB0F3A8C2_hI_Ds',
	authDomain: 'react-david.firebaseapp.com',
	projectId: 'react-david',
	storageBucket: 'react-david.appspot.com',
	messagingSenderId: '733050178210',
	appId: '1:733050178210:web:6d599aed547a2e671225fb',
}

// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)

// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()

export { projectFirestore }
