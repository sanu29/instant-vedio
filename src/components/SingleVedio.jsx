import { Flex, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export  const  SingleVedio = () => {
  let params= useParams()
  const [singeVedioData, setSingleVedioData] = useState("loading")
  useEffect(()=>{
    (async()=>{
         const vedioData = await axios.get(`/api/video/${params.vedioId}`)
        setSingleVedioData(vedioData.data.video)
    })()
  
  },[])
  useEffect(()=>{
    (async()=>{
         const categories = await axios.get(`/api/categories`)
         const categoryId = ((categories.data.categories).filter((item)=>item.categoryName===singeVedioData.categoryName))

        const categoriesData = await axios.get(`/api/category/${categoryId[0]._id}`)
        console.log(categoriesData.data)
    
      })()
  
  },[singeVedioData])
  console.log(singeVedioData)


  if(singeVedioData === "loading")
  {
    return  <Flex pt={"5rem"} pl={'6rem'} direction={"column"} w={"100%"} justifyContent={""} alignItems={""} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
      saniya
    </Flex>
  }
  else{
    return(
    <Flex className='main'>
    <Flex justifyContent={""} w={"100%"} flexWrap={"wrap"}></Flex>
        <iframe className='singleVedio' 
        src={`https://www.youtube.com/embed/`+singeVedioData.src+`?showinfo=0&autoplay=1&rel=0`} title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <Text padding={'1rem'} pl={"0rem"} fontSize={"1.5rem"} pb={0} fontWeight={"semibold"}> {singeVedioData.title}</Text>
        <Text  pt={"5px"}  color={"gray.600"} fontWeight={"semibold"}>{singeVedioData.views} Views | {singeVedioData.date}</Text>

    </Flex>
    )
  }
  
      
      


}
