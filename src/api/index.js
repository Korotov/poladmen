import axios from 'axios'
import clients from './clients.js'
import subscriptions from './subscriptions.js'

axios.defaults.baseURL = 'https://poledeluxe.by/api/api';

const API = axios.create();
