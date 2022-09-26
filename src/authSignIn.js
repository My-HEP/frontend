import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const signIn = async (email, password) => {
  const auth = getAuth();
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(error.message);
    if (error.code === 'auth/wrong-password') {
      alert('Incorrect password.');
    }
  }
};

export { signIn };
