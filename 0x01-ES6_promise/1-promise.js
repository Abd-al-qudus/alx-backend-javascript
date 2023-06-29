export default function getResponseFromAPI(sucess) {
  const response = {
    status: 200,
    body: 'Success',
  };
  const promise = new Promise(
    ((resolve, reject) => {
      if (sucess) resolve(response);
      else reject(Error('The fake API is not working currently'));
    }),
  );
  return promise;
}
