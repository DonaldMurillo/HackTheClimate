import { Box, Button, VStack } from "@chakra-ui/react";
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import AppContext from "../../state/AppContext";
import { DASHBOARD_URL } from "../../utils/urls";


export default function Sidenav() {
    const { currentRoute, getCurrentRoute } = useContext(AppContext);
    const router = useRouter();
    const route = router.route.replace('/dashboard/', '').replace('/new', '')
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, route: 'summary' | 'events') => {
      event.preventDefault();
      router.push(DASHBOARD_URL + route);
    }
    useEffect(() => {
        getCurrentRoute && getCurrentRoute(route);
    }, [router.route])
    
  return (
    
    <VStack h="inherit" spacing="4" minW="content" bg="#333" color="white" pr="15px" pl="5px">
      <Box as="h2" mt="5">My App</Box>
      {/* <Button 
        isFullWidth={true} 
        variant="link" 
        leftIcon={<AccountCircleIcon />}
        p="10px" 
        justifyContent="unset"
        color={currentRoute == 'profile' ? '#82DD8D' : 'white'}
        fontWeight="normal"
        ml="10px"
        onClick={(event) => handleClick(event, 'profile')}
        >
        Profile
      </Button> */}
        <Button 
            isFullWidth={true} 
            variant="link" 
            leftIcon={<HomeIcon />}
            p="10px" 
            justifyContent="unset"
            color={currentRoute == 'summary' ? '#82DD8D' : 'white'}
            fontWeight="normal"
            ml="10px"
            onClick={(event) => handleClick(event, 'summary')}
            >
            Summary
      </Button>
      <Button         
        isFullWidth={true} 
        variant="link" leftIcon={<EventIcon />}
        p="10px"
        justifyContent="unset"
        color={currentRoute == 'events' ? '#82DD8D' : 'white'}
        fontWeight="normal"
        ml="10px"
        onClick={(event) => handleClick(event, 'events')}
        >
        <span>Events</span>
      </Button>
    </VStack>
  )
}