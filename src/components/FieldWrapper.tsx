import { useField } from 'formik';
import { Radio, RadioGroup } from './ui/radio';
import { Input } from '@chakra-ui/react';
import { Field } from './ui/field';
import { Checkbox } from './ui/checkbox';
import { FieldWrapperProps } from '../types/types';

const FieldWrapper: React.FC<FieldWrapperProps> = ({ name, label, type = 'text', as = 'input', options }) => {
    const [field, meta] = useField(name);

    return (
        <Field label={label} required invalid={meta.touched && !!meta.error} errorText={meta.error}>
            {as === 'input' && <Input id={name} {...field} type={type} />}
            {as === 'checkbox' && (
                <Checkbox id={name} {...field}>
                    {label}
                </Checkbox>
            )}
            {as === 'radio' && options && (
                <RadioGroup id={name} {...field}>
                    {options.map((option) => (
                        <Radio key={option} value={option}>
                            {option}
                        </Radio>
                    ))}
                </RadioGroup>
            )}
        </Field>
    );
};

export default FieldWrapper;
