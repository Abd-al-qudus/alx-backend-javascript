import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all(uploadPhoto, createUser)
    .then((value) => console.log(value))
    .catch(() => console.log('Signup system offline'));
}
