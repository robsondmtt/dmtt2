import Head from 'next/head'

import { parseCookies } from 'nookies'

import { GetServerSideProps } from 'next'
import { getAPIClient } from '../services/axios'
import Navbar from '../components/Nav/Navbar';
import { SimpleGrid } from '@chakra-ui/react'
import MenuInicial from '../components/Layout/MenuInicial'


export default function Home({dados}) {
  
 
  return (
    <>
   
<Head>
<title>Pagina Inicial</title>
</Head>
<Navbar />


<SimpleGrid my={8} columns={[2, 3]} spacing='20px'>
{dados.permissao === 17 && <MenuInicial link="/perfil" icone="/icones/admin.png" name="Perfil" />}
<MenuInicial link="/plantao/radio" icone="/icones/radio.png" name="Rádio" />
<MenuInicial link="/plantao/transito" icone="/icones/inspetor.png" name="Inspetor" />
<MenuInicial link="/informacoes" icone="/icones/informacoes.png" name="Informações" />
<MenuInicial link="/plantao/transporte" icone="/icones/transporte.png" name="Transporte" />
<MenuInicial link="/escala" icone="/icones/escala.png" name="Escala" />
<MenuInicial link="/inventarios" icone="/icones/inventario.png" name="Inventários" />
<MenuInicial link="/ordem_servico" icone="/icones/ordem_servico.png" name="Ordem de Serviço" />
<MenuInicial link="/agentes" icone="/icones/inspetor.png" name="Agentes" />
<MenuInicial link="/checklist" icone="/icones/checklist.png" name="Checklist" />
<MenuInicial link="/carajas" icone="/icones/carajas.png" name="Carajás" />
<MenuInicial link="/rotram" icone="/icones/rotram.png" name="Rotram" />
<MenuInicial link="/convocacoes" icone="/icones/convocacao.png" name="Convocacões" />
<MenuInicial link="/hora_extra" icone="/icones/hora_extra.png" name="Horas extras" />
<MenuInicial link="/relatorios" icone="/icones/relatorio.png" name="Relatórios" />
<MenuInicial link="/adm" icone="/icones/relatorio.png" name="Administração" />

</SimpleGrid>
</>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['admin-auth']: token } = parseCookies(ctx)
  const { ['userAuthId']: userId } = parseCookies(ctx)


  if (!token || !userId) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const res = await apiClient.get(`api/users/${userId}`)
  const dados = res.data.user
  

  return {
    props: {
      dados
    }
  }
}
