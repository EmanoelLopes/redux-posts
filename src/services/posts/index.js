import axios from 'axios';

const posts = {
  get() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }
};

export default posts;