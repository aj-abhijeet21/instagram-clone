import { doc, getDoc } from 'firebase/firestore'
import { db, auth } from '../utils/FirebaseConfig'

export async function getUser() {
  const userRef = doc(db, 'users', auth.currentUser?.email!)
  try {
    const result = await getDoc(userRef)

    if (result.exists()) {
      return result.data().username
    }
  } catch (err) {
    return err
  }
}
