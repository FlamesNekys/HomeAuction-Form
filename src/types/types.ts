export type FieldWrapperProps = {
    name: string;
    label: string;
    type?: 'text' | 'number';
    as?: 'input' | 'checkbox' | 'radio';
    options?: string[];
};

export interface IFormValues {
    name: string;
    address: string;
    floor: number;
    totalFloors: number;
    square: number;
    livingSquare: number;
    kitchenSquare: number;
}
