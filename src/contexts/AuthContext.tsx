import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

// import { recoverUserInformation, signInRequest } from "../services/auth";
// import {  signInRequest } from "../services/auth.";
import { api } from "../services/api";
import axios from "axios";
import Cookies from 'js-cookie'


type User = {
  name: string;
  fullName: string;
  email: string;
  avatar: string;
  permissao: string;
  agente: boolean;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

function gerenciarCookie(logado, usuarioDB) {
  if (logado) {
    Cookies.set('admin-auth', usuarioDB.token, {
      expires: 7
    })
    Cookies.set('userAuthId', usuarioDB._id, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-auth')
    Cookies.remove('userAuthId')
  }
}


export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user;


  async function configurarSessao(usuarioDB) {
    // console.log(usuarioDB);

    if (usuarioDB?.email) {
      setUser(usuarioDB)
      gerenciarCookie(true, usuarioDB)
      return usuarioDB.email
    } else {
      setUser(null)
      gerenciarCookie(false, null)
      return false
    }
  }

  async function usuarioLogado() {

    
      const idUser = Cookies.get('userAuthId')
      
      if (idUser) {
        const res = await api.get(`api/users/${idUser}`)
        const dados = res.data.user;
        console.log(dados);
        
  
        setUser(dados);
      
      }
   
  }

  useEffect(() => {
    
    if (Cookies.get('admin-auth')) {
      usuarioLogado()
    }
  }, [])

  async function signIn({ email, password }: SignInData) {

    const res = await api.post('api/auth/login', { email, password })
    console.log(res.data);
    const dados = res.data;
    await configurarSessao(dados)


    api.defaults.headers['Authorization'] = `Bearer ${res.data.token}`;

    Router.push('/');
  }

  async function signOut() {
    setUser(null)
    gerenciarCookie(false, null)
    return false
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}