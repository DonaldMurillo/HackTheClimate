import EventsHistory from '../../components/Events/EventsHistory'
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import Layout from '../../components/Layout/layout'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Link from 'next/link'

export default function Events() {
    const router = useRouter();
    const newOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        
        router.push("events/new");
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
            <Link href="/dashboard/summary">
                <span>Create New Event </span>
            </Link>
            
          </Button>  
        <EventsHistory></EventsHistory>
      </Layout>
    )
}