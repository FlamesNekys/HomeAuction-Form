import { NumberSchema } from 'yup';
import { IFormValues } from './types';

declare module 'yup' {
    interface NumberSchema<TType = number | undefined, TContext = any> {
        moreThanSumOfFields(fields: (keyof IFormValues)[], message: string): this;
    }
}
