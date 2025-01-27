import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: 'Поле обязательно для заполнения',
    },
    number: {
        min: 'Значение не может быть меньше ${min}',
        max: 'Значение не может быть больше ${max}',
    },
});

Yup.addMethod(Yup.number, 'moreThanSumOfFields', function compare(fields: string[], message: string) {
    return this.test('moreThanSumOfFields', message, function (value) {
        const { parent } = this;
        const total = fields.reduce((sum, field) => sum + (parent[field] || 0), 0);
        return !!value && value >= total;
    });
});

export const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    address: Yup.string().required(),
    floor: Yup.number().min(-1).max(Yup.ref('totalFloors')).required(),
    totalFloors: Yup.number().min(3).max(200).required(),
    square: Yup.number()
        .min(0)
        .max(400)
        .moreThanSumOfFields(
            ['kitchenSquare', 'livingSquare'],
            'Общая площадь должна быть больше суммы жилой площади и площади кухни'
        )
        .required(),
    livingSquare: Yup.number().min(0).required(),
    kitchenSquare: Yup.number().min(0).required(),
});
