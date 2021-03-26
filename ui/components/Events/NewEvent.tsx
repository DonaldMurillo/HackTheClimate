import { useEffect, useState, useRef } from "react";
import GenericFormControl, { GenericFormData } from "../Forms/GenericFormControl";
import { 
    Box, 
    Button, 
    useDisclosure, 
    VStack, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton 
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'

interface Receipts { 
    type: string;
    date: Date;
    amount: number;
    place: string;
}

export default function NewEventForm() {
    //NEW EVENT FORM DATA
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<Date>(null);
    const [status, setStatus] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [receipts, setReceipts] = useState<Receipts[]>([]);

    const formFields: GenericFormData[] = [
        { id: 'name', label: 'Enter Name', type: 'text', hook: setName },
        { id: 'date', label: 'Enter Date', type: 'date', hook: setDate },
        { id: 'status', label: 'Enter Status', type: 'text', hook: setStatus},
        { id: 'description', label: 'Enter a Description', type: 'text', hook: setDescription}
    ];
    // NEW RECEIPT FORM DATA
    const finalRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [place, setPlace] = useState<string>('');
    const [recDate, setRecDate] = useState<Date>(null);
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<string>('');

    const receiptsFormFields: GenericFormData[] = [
        { id: 'type', label: 'Enter Type', type: 'text', hook: setType },
        { id: 'recDate', label: 'Enter Date', type: 'date', hook: setRecDate },
        { id: 'amount', label: 'Enter Amount', type: 'number', hook: setAmount},
        { id: 'place', label: 'Enter a Place', type: 'text', hook: setPlace}
    ];

    const clickHandle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let recs = receipts
        recs.push({type, date: recDate, amount, place})
        setReceipts(recs);
        setType('');
        setRecDate(null);
        setAmount(0);
        setPlace('')
        onClose()
    }


    useEffect(() => {
        console.log('name: ', name, 'date: ', date, 'description: ', description, 'status: ', status)
    }, [name, date, description, status])

    return (
        <div>
            <VStack>
                <Box fontSize="3xl" mb="5">Create New Event</Box>
                { formFields.map( field => {
                    return (
                        <GenericFormControl 
                            id={field.id}
                            label={field.label}
                            type={field.type}
                            errorText={field.errorText}
                            helperText={field.helperText}
                            hook={field.hook}
                            key={field.id}
                        ></GenericFormControl>
                    )
                })}
                <Button 
                    colorScheme="teal" 
                    variant="outline" 
                    rightIcon={<AddIcon />}
                    onClick={onOpen}
                    >
                    Add new Receipt
                </Button>
                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Create Receipt</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        { receiptsFormFields.map( field => {
                        return (
                            <GenericFormControl 
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                errorText={field.errorText}
                                helperText={field.helperText}
                                hook={field.hook}
                                key={field.id}
                            ></GenericFormControl>
                            )
                        })}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant="ghost" onClick={clickHandle}>Create</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                <Box>{receipts.length}</Box>
            </VStack>
        </div>
    )
}
  