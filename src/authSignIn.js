import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const signIn = async (email, password) => {
  const auth = getAuth();
  try {
    const user = signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
};

export { signIn };
