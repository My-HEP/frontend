import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const createAccount = async (email, password) => {
  const auth = getAuth();
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;
  } catch (error) {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message);
    // console.log(errorMessage);
    // if (error.code === 'auth/email-already-in-use') {
    //   alert(
    //     'Unable to create new account using provided email. Email is already in use.'
    //   );
    // } else if (error.code === ''){

    // }
  }
};

export { createAccount };
