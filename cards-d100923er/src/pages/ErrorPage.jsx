import React from 'react'
import PageHeader from '../components/PageHeader'
import { Container} from '@mui/material'
import Error from '../components/Error'

export default function ErrorPage() {
  return (
    <Container>
    <PageHeader
      title="Error 404"
      subtitle="Page not found"/>
      <Error/>
    
    </Container>
  )
}
