import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react"
import { ChangeEvent, ChangeEventHandler, useState } from "react"

export interface GenericFormData {
    id: string;
    type: 'email' | 'number' | 'phone' | 'password' | 'text' | 'date'; 
    label: string;
    helperText?: string;
    errorText?: string;
    hook?: (value: any) => void;
}

export default function GenericFormControl({id, type, label, helperText, errorText, hook} : GenericFormData ) {
    const [hasError, setHasError] = useState<boolean>(false);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        hook(event.target.value);
    }
    return (
        <FormControl id={id}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} onChange={(event)=> handleChange(event)} />
            { !helperText ? <FormHelperText>{helperText}</FormHelperText> : null }
            { hasError ? <FormErrorMessage>{errorText}</FormErrorMessage> : null}
        </FormControl>
    )
}
  