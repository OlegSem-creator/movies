import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: '...',
	authDomain: '...',
	projectId: '...',
	storageBucket: '...',
	messagingSenderId: '...',
	appId: '...',
}

// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)

// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()

export { projectFirestore }
