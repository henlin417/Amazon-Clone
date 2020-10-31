import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-8888e.cloudfunctions.net/api'
  // 'http://localhost:5001/clone-8888e/us-central1/api'
});

export default instance;