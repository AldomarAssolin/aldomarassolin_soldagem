import { Button, FloatingLabel, Form } from "react-bootstrap"




const FormSingle = () => {

    return(
        <div className="w-100">
            <FloatingLabel
                controlId="floatingInput"
                label="Digite seu E-mail"
                className="w-100 d-flex align-items-start justify-content-start"
            >
                <Form.Control type="email" placeholder="name@example.com" className="bg-dark w-75 text-white border-0"/>
                <Button as="input" type="submit" value="Enviar" variant="info" className="w-25 text-white p-3 mx-3" />{''}
            </FloatingLabel>
        </div>
    )
}

export default FormSingle