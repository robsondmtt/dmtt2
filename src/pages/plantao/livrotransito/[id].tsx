import  React from 'react';
import { Box, Center, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from "react"
import LayoutContent from '../../../components/Layout/LayoutContent'
import Header from '../../../components/Livro/Header'
import Navbar from '../../../components/Nav/Navbar'
import { api } from '../../../services/api'
import { getAPIClient } from '../../../services/axios'
import { useFetch } from '../../../contexts/useFetch';
import AgentesEquipe from '../../../components/Livro/AgentesEquipe';
import AdventistaEstudante from '../../../components/Livro/AdventistaEstudante';
import AgentesCarajas from '../../../components/Livro/AgentesCarajas';
import TrocasPlantao from '../../../components/Livro/TrocasPlantao';
import ViaturasPlantao from '../../../components/Livro/ViaturasPlantao';
import ObservacaoPlantao from '../../../components/Livro/ObservacaoPlantao';
import RelatorioPlantao from '../../../components/Livro/RelatorioPlantao';
import moment from 'moment';
import PermissaoBotao from '../../../lib/permissaoBotao';
import { GetServerSideProps } from 'next';



const PlantaoTransito: React.FC = (props) => {

    const router = useRouter()
    const { id } = router.query
    
    
    
        const {data} =  useFetch(`api/plantoes/${id}`)

        if (!data) {
           return <p>Carregando...</p>
        }
    

    return (
        <>
       
            
            <Navbar />
            <LayoutContent> 
                <Center mb="3">
                    <Heading>Livro de Inspetoria</Heading>
                </Center>
                
               
                <Header
                    dados={data}
                />

                <AgentesEquipe
                    dados={data} />

                <AdventistaEstudante
                    id={id.toString()}
                    data={data}
                    equipe={data} />

                <AgentesCarajas
                    id="" />

                <TrocasPlantao
                    id={id.toString()}
                    data=""
                    equipe=""/>

                <ViaturasPlantao
                    update={false}
                    id="" />

                <ObservacaoPlantao
                    id={id.toString()}
                    update={false}
                    tipo="obsTransito" />
 
                <RelatorioPlantao
                    id={id.toString()}
                    update={data && PermissaoBotao(data.plantoes.date)}
                    tipo="relatorioTransito" /> 
               
            </LayoutContent>
       
        
        </>
    )
}


export default PlantaoTransito




export const getServerSideProps: GetServerSideProps = async (ctx) => {

    
    console.log('teste',ctx.query.id);
    



    return {
        props: { data: ctx.query}
    };
}