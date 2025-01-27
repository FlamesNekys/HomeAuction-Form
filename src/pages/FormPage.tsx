import { FC } from 'react';
import { Formik } from 'formik';
import FieldWrapper from '../components/FieldWrapper';
import { Card } from '@chakra-ui/react';

const FormPage: FC = () => {
    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Formik
                    initialValues={{
                        name: '',
                    }}
                    onSubmit={(values) => {
                        console.log('Form submitted!', values);
                    }}
                >
                    <FieldWrapper name="name" label="Название объекта" type="text" />
                </Formik>
            </Card.Body>
        </Card.Root>
    );
};

export default FormPage;
