import { ChangeEvent, useState } from "react";
import { db, storage } from "../firebase"
import { addDoc, collection } from "firebase/firestore";
import { Button, Form } from "react-bootstrap";
import {v4 as uuid} from 'uuid';
import { ref, uploadBytes } from "firebase/storage";


function CreatePoint() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        console.log(formData.entries());

        await addDoc(collection(db, "locations"), {
            date: date,
            name: name
        });
    }

    const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
        try {

            const file = event.target.files != null ? event.target.files[0] : null;
            const filePath = uuid()+`.${file?.name.substr(file.name.lastIndexOf('.') + 1)}`;
            const fileRef = ref(storage, filePath);

            const fileBytes = await file?.arrayBuffer();
            if (fileBytes) {
                uploadBytes(fileRef, fileBytes)
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Locatia vizitata</Form.Label>
                <Form.Control placeholder="Salcuta" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlDate1">
                <Form.Label>Vizitat la date de</Form.Label>
                <Form.Control value={date} type="date" onChange={(e) => setDate(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.File1">
                <Form.Label>Poze</Form.Label>
                <Form.Control type="file" onChange={uploadImage} />
            </Form.Group>
            <Button type="submit">Save</Button>
        </Form>
    )
}

export default CreatePoint;
