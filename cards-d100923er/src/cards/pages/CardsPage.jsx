import React, { useEffect} from 'react'
import PageHeader from '../../components/PageHeader'
import { Container } from '@mui/material'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'
import AddNewCardButton from '../components/AddNewCardButton'

export default function CardsPage() {
  const{
    filterCards,
    isLoading,
    error,
    getCardsData,
    handleDeleteCard,
    handleCardLike
  }=useCards()

  useEffect(()=>{
    getCardsData()
  },[getCardsData])

  const onDelete = async (id) => {
    await handleDeleteCard(id);
    getCardsData();
  }; 

  const onLike = async (id,isLiked) => {
    await handleCardLike(id,isLiked)
    
  }

  return (
    <Container>
         <PageHeader
            title="Cards"
            subtitle="On this page you can find all business cards from all categories"
          />
        <CardsFeedback  
        isLoading={isLoading}
        cards={filterCards}
        error={error}
        handleDelete={onDelete}
        handleLike={onLike}/>

        <AddNewCardButton/>
    </Container>
)
}
