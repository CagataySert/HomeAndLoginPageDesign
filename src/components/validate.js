import validation from '../utilities/validation';
import validateLibrary from 'validate.js';

export default function validate(fieldName, value) {
    let formValues = {};
    formValues[fieldName] = value;

    let constraints = {};
    constraints[fieldName] = validation[fieldName];


    const result = validateLibrary(formValues, constraints);

    if (result) {
        return result[fieldName][0];
    }
    return null;
}