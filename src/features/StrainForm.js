import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const StrainForm = ({values, errors, touched}) => {
    return(
        <Form>
            <h2>Strain Search Form</h2>
            <Field type='text' name='search' placeholder='Search' />
            <Field component='select' name='type'>
                <option value='select' disabled>Select type...</option>
                <option value='hybrid'>Hybrid</option>
                <option value='sativa'>Sativa</option>
                <option value='indica'>Indica</option>
            </Field>
            <Field component='select' name='benefit'>
                <option value='select' disabled>Select desired benefit...</option>
                <option value='pain'>Pain Relief</option>
                <option value='anxiety'>Anxiety Relief</option>
            </Field>
            <button type='submit'>Submit</button>
        </Form>
    )
}

const FormikStrainForm = withFormik({
    mapPropsToValues({search, type, benefit}){
        return{
            search: search || '',
            type: type || 'select',
            benefit: benefit || 'select'
        }
    },
    validationSchema: Yup.object().shape({
        // not sure if it makes sense to have any validation if all fields are optional...
    }),
    handleSubmit(values, {setStatus}){
        axios
            .post('https://reqres.in/api/form', values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
            })
            .catch(err => console.log(err.message));
    }
})(StrainForm)

export default FormikStrainForm;