import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID q-STLrNeryp9wY4R3ivL7LskZXF8fM1Egvjp4kSYHPY'
  }
});