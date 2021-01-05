import casual from 'casual';

let color = casual.random_element(['yellow', 'black', 'white', 'blue', 'red']);

casual.define('user', () => {
  return {
    username: casual.username.replace(/[^a-zA-Z]/, '').slice(0, 6),
    password: casual.password,
  }
});

casual.define('color', () => {
  return {
    color
  }
});


export default casual