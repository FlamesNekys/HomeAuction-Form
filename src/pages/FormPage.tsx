import { FC } from 'react';
import { Formik } from 'formik';
import FieldWrapper from '../components/FieldWrapper';
import { Card, VStack, StackSeparator, Button } from '@chakra-ui/react';
import { initialFormValues } from '../constants/constants';
import { validationSchema } from '../utils/yupValidation';

const FormPage: FC = () => {
    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={(values) => {
                        console.log('Form submitted!', values);
                    }}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <form onSubmit={props.handleSubmit} className="form">
                            <VStack separator={<StackSeparator />}>
                                <FieldWrapper name="name" label="Название объекта" type="text" />
                                <FieldWrapper name="address" label="Адрес" type="text" />
                                <FieldWrapper name="floor" label="Этаж" type="number" />
                                <FieldWrapper name="totalFloors" label="Количество этажей в доме" type="number" />
                                <FieldWrapper name="square" label="Площадь" type="number" />
                                <FieldWrapper name="livingSquare" label="Жилая площадь" type="number" />
                                <FieldWrapper name="kitchenSquare" label="Площадь кухни" type="number" />
                            </VStack>
                            <Button mt={4} colorScheme="teal" type="submit" justifySelf="center">
                                Отправить
                            </Button>
                        </form>
                    )}
                </Formik>
            </Card.Body>
        </Card.Root>
    );
};

export default FormPage;
