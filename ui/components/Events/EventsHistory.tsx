import { VStack, Box, Grid, GridItem, Button, IconButton, Icon  } from '@chakra-ui/react'
import EditIcon from '@material-ui/icons/Edit';

export default function EventsHistory() {
    return (
        <Box mx="5%" mt="2.5%">
            <VStack>
                <h1>Events History</h1>
                <Grid templateColumns="repeat(8, 1fr)" gap={6} width="100%" borderBottom="1px">
                    <GridItem rowSpan={1} colSpan={4}>Name</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>Date</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>Status</GridItem>
                    <GridItem rowSpan={1} colSpan={1}></GridItem>
                </Grid>
                {/* TODO: MAKE REPEATING FROM BACK END LIST  */}
                <Grid templateColumns="repeat(8, 1fr)" gap={6} width="100%" borderBottom="1px">
                    <GridItem rowSpan={1} colSpan={4}>Nicaragua - Somewhere over the rainbow</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>March 15, 2020</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>Completed</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Button 
                            as={IconButton} 
                            icon={<Icon as={EditIcon} />} 
                            // bg={bg} 
                            // _hover={{bg:bgl}}
                            // _active={{ outline: 0, bg:bgl }}
                            >
                        </Button>
                    </GridItem>
                </Grid>
                <Grid templateColumns="repeat(8, 1fr)" gap={6} width="100%" borderBottom="1px" >
                    <GridItem rowSpan={1} colSpan={4}>Nicaragua - Chinandega</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>November 12, 2020</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>Completed</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Button 
                            as={IconButton} 
                            icon={<Icon as={EditIcon} />} 
                            // bg={bg} 
                            // _hover={{bg:bgl}}
                            // _active={{ outline: 0, bg:bgl }}
                            >
                        </Button>
                    </GridItem>
                </Grid>
                <Grid templateColumns="repeat(8, 1fr)" gap={6} width="100%" borderBottom="1px" /* _hover={{bg:'blue'}}*/>
                    <GridItem rowSpan={1} colSpan={4}>Ghana - Ayensuano</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>March 15, 2020</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>Incomplete</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Button 
                            as={IconButton} 
                            icon={<Icon as={EditIcon} />} 
                            // bg={bg} 
                            // _hover={{bg:bgl}}
                            // _active={{ outline: 0, bg:bgl }}
                            >
                        </Button>
                    </GridItem>
                </Grid>
                <Grid templateColumns="repeat(8, 1fr)" gap={6} width="100%" borderBottom="1px">
                    <GridItem rowSpan={1} colSpan={4}>India - Motihari</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>June 23, 2020</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>Completed</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Button 
                            as={IconButton} 
                            icon={<Icon as={EditIcon} />} 
                            // bg={bg} 
                            // _hover={{bg:bgl}}
                            // _active={{ outline: 0, bg:bgl }}
                            >
                        </Button>
                    </GridItem>
                </Grid>
            </VStack>
        </Box>

    )
}