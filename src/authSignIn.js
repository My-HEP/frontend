import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const signIn = async (email, password) => {
  const auth = getAuth();
  try {
    const user = signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export { signIn };
