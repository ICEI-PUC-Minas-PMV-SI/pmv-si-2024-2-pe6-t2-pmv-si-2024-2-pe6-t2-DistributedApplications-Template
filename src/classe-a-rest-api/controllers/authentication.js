import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from'../firebase.js';

const auth = getAuth();

export default {
  register: (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        email: 'Email is required',
        password: 'Password is required',
      });
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            res.status(201).json({ message: 'Verification email sent! User created successfully!' });
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error sending email verification' });
          });
      })
      .catch((err) => {
        const errorMessage = error.message || 'An error occurred while registering user';
        res.status(500).json({ error: errorMessage });
      });
  },

  login: (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        email: 'Email is required',
        password: 'Password is required',
      });
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const idToken = userCredential._tokenResponse.idToken;
        if (idToken) {
          res.cookie('access_token', idToken, {
            httpOnly: true,
          });
          return res.status(200).json({ message: 'User logged in successfully', userId: (userCredential.user.uid) });
        } else {
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message || 'An error occurred while logging in';
        res.status(500).json({ error: errorMessage });
      });
  },

  logout(req, res) {
    signOut(auth)
      .then(() => {
        res.clearCookie('access_token');
        res.status(200).json({ message: 'User logged out successfully' });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  },

  resetPassword(req, res) {
    const { email } = req.body;
    if (!email) {
      return res.status(422).json({
        email: 'Email is required',
      });
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        res.status(200).json({ message: 'Password reset email sent successfully!' });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  },
};
