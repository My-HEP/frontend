import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const createAccount = async (email, password) => {
  const auth = getAuth();
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    if (error.code === 'auth/email-already-in-use') {
      alert(
        'Unable to create new account using provided email. Email is already in use.'
      );
    }
  }
};

export { createAccount };
