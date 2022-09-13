import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const createAccount = async (email, password) => {
  const auth = getAuth();
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export { createAccount };
