import { Box, Button, VStack } from "@chakra-ui/react";
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import AppContext from "../../state/AppContext";
import Link from "next/link";


export default function Sidenav() {
    const { currentRoute, getCurrentRoute } = useContext(AppContext);
    const router = useRouter();
    const route = router.route.replace('/dashboard/', '').replace('/new', '')

    useEffect(() => {
        getCurrentRoute && getCurrentRoute(route);
    }, [router.route])
    
  return (
    
    <VStack h="inherit" spacing="4" minW="content" bg="#333" color="white" pr="15px" pl="5px">
      <Box as="h2" mt="5">BFWP Portal</Box>

        <Button 
            isFullWidth={true} 
            variant="link" 
            leftIcon={<HomeIcon />}
            p="10px" 
            justifyContent="unset"
            color={currentRoute == 'summary' ? '#82DD8D' : 'white'}
            fontWeight="normal"
            ml="10px"
            >
            <Link href="/dashboard/summary">
                <span>Summary</span>
            </Link>
      </Button>
      <Button         
        isFullWidth={true} 
        variant="link" leftIcon={<EventIcon />}
        p="10px"
        justifyContent="unset"
        color={currentRoute == 'events' ? '#82DD8D' : 'white'}
        fontWeight="normal"
        ml="10px"
        >
        <Link href="/dashboard/events">
            <span>Events</span>
        </Link>
        
      </Button>
    </VStack>
  )
}