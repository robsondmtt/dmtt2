import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
    const dados = {email: 'robson.dev9@gmail.com',
    password: '123456'}

  async function acessar() {
    console.log('acessou');
    // const res = await fetch('http://localhost:3001/api/user/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(dados)
    // })
    // const resp = await res.json()
    // console.log(resp);
    
    const response = await axios.post('https://dmtt-api.herokuapp.com/api/users/login', {
      email: 'robson.dev9@gmail.com',
      password: '123456'
    })
    console.log(response);


  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Login</h1>

      <button onClick={acessar}>Acessar</button>


    </div>
  )
}
