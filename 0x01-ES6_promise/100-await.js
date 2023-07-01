import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let object = {};
  try {
    const getPhoto = await uploadPhoto();
    const crUser = await createUser();
    object = {
      photo: getPhoto,
      user: crUser,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
  return object;
}
