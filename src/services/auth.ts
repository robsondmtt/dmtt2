import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { api } from './api'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type SignInRequestData = {
  email: string;
  password: string;
}


const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  const res = await api.post('api/auth/login', data)
  const dataUser = res.data.json()
  
  return dataUser
}

// export async function recoverUserInformation() {
//   await delay()

//   return {
//     user: {
//       name: 'Diego Fernandes',
//       email: 'diego@rocketseat.com.br',
//       avatar_url: 'https://github.com/diego3g.png'
//     }
//   }
// }