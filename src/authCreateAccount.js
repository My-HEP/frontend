import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const createAccount = async (email, password) => {
  const auth = getAuth();
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
      return error;
    }
};

export { createAccount };
