import { useEffect, useState } from "react";
import GenericFormControl, { GenericFormData } from "../Forms/GenericFormControl";



export default function NewEventForm() {
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<Date>(null);
    const [status, setStatus] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const formFields: GenericFormData[] = [
        { id: 'name', label: 'Enter Name', type: 'text', hook: setName },
        { id: 'date', label: 'Enter Date', type: 'date', hook: setDate },
        { id: 'status', label: 'Enter Status', type: 'text', hook: setStatus},
        { id: 'description', label: 'Enter a Description', type: 'text', hook: setDescription}
    ];

    useEffect(() => {
        console.log('name: ', name, 'date: ', date, 'description: ', description, 'status: ', status)
    }, [name, date, description, status])

    return (
        <div>
            { formFields.map( field => {
                return (
                    <GenericFormControl 
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        errorText={field.errorText}
                        helperText={field.helperText}
                        hook={field.hook}
                        // key={field.id}
                    ></GenericFormControl>
                )
            })}
        </div>
    )
}
  