import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from '../../Navigation'
import { auth } from '../../utils/FirebaseConfig'
import { User } from 'firebase/auth'

const AuthWrapper = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const userHandler = (user: User | null) => {
    user ? setCurrentUser(user) : setCurrentUser(null)
  }

  useEffect(() => auth.onAuthStateChanged((user) => userHandler(user)), [])

  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthWrapper
