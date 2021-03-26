
import { Box } from '@chakra-ui/layout'
import NewEventForm from '../../../components/Events/NewEvent'
import Layout from '../../../components/Layout/layout'

export default function NewEvent() {
    return (
      <Layout>
          <Box maxWidth="500px" mx="auto" mt="5%" p="25px" border="1px solid" borderRadius="10px" borderColor="#4173E4">
            <NewEventForm></NewEventForm>
          </Box>
      </Layout>
    )
}