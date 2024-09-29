import { getFirestore } from 'firebase-admin/firestore';
import User from '../models/User.js';

const db = getFirestore();
const userColl = db.collection('users');

export default {
  addUser: async (req, res) => {
    const { body: payload } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, can not update the user.',
        },
      });
    }
    try {
      const user = await userColl.doc(payload.id).set({ ...payload });
      return res.status(200).json({
        status: true,
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: error.message,
      });
    }
  },

  getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      console.log("id",id);
      const userData = await userColl.doc(id).get();
      if (!userData.exists) {
        return res.status(400).send('No Users found');
      } else {
        const user = new User(
          userData.data().id,
          userData.data().name,
          userData.data().email,
          userData.data().role,
        );
        console.log(user);
        return res.status(200).send(user);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const snapshot = await userColl.get();
      if (snapshot.empty) {
        return res.status(400).send('No Users found');
      } else {
        const userList = snapshot.docs.map((doc) => {
          return new User(
            doc.data().id,
            doc.data().name,
            doc.data().email,
            doc.data().role,
          );
        });
        return res.status(200).send(userList);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updateUser: async (req, res) => {
    const {
      params: { id },
      body: payload,
    } = req;

    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: 'Body is empty, can not update the user.',
        },
      });
    }
    try {
      const userData = userColl.doc(id).update(payload);
      return res.status(200).send('user updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteUser: async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      await userColl.doc(id).delete();
      return res.status(200).send('user deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
