export default function signUpUser(firstName, lastName) {
  const object = {
    firstName,
    lastName,
  };
  return Promise.resolve(
    object,
  );
}
