import EventsHistory from '../../components/Events/EventsHistory'
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import Layout from '../../components/Layout/layout'
import { DASHBOARD_URL } from '../../utils/urls'
import { useRouter } from 'next/dist/client/router'

export default function Events() {
    const router = useRouter();
    const newOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        
        router.push(DASHBOARD_URL + "events/new");
    }
    return (
      <Layout>
          <Button 
            colorScheme="teal" 
            variant="outline" 
            rightIcon={<AddIcon />}
            ml="5%" mt="2.5%"
            onClick={newOnClick}
            >
            Create New Event 
          </Button>  
        <EventsHistory></EventsHistory>
      </Layout>
    )
}