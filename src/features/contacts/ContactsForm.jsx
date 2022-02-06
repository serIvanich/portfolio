import React from 'react';
import { useFormik } from 'formik';
import s from './ContactsForm.module.scss'
import { projectApi } from '../../api/projectApi';
 

 export const ContactsForm = () => {
   
  
  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        phone: '',
        message: '',
    },
    validate: (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (/(^[A-F0-9]{*}$)/i.test(values.name)) {
            errors.name = 'Invalid name';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (/(^[A-F0-9]{*}$)/i.test(values.email)) {
            errors.email = 'Invalid email';
        }

        return errors;
    },

    onSubmit: async(values) => {
       //console.log(values);
       await projectApi.sendMessage(values)
        //formik.resetForm()
    },
});

return (
    <form  className={s.contactsFormContainer} onSubmit={formik.handleSubmit}>
        <label htmlFor="name" >enter your name</label>
        <input
            placeholder={''}
            {...formik.getFieldProps('name')}  />
        <div style={{'color': 'red', 'height': '10px'}}>
            {formik.touched.name && formik.errors.name && formik.errors.name}
        </div>
        <label htmlFor="email" >enter your email</label>
        <input
            placeholder={''}
            {...formik.getFieldProps('email')}  />
        <div style={{'color': 'red', 'height': '10px'}}>
            {formik.touched.email && formik.errors.email && formik.errors.email}
        </div>

        <label htmlFor="phone" >enter your phone</label>
        <input
            placeholder={''}
            {...formik.getFieldProps('phone')}  />
        <div style={{'color': 'red', 'height': '10px'}}>
            {formik.touched.phone && formik.errors.phone && formik.errors.phone}
        </div>

        <label htmlFor="message" >write message</label>
        <textarea
            placeholder={''}
            {...formik.getFieldProps('message')}  />
        <div style={{'color': 'red', 'height': '10px'}}>
            {formik.touched.message && formik.errors.message && formik.errors.message}
        </div>

        <button type="submit">add gradient</button>
    </form>
)
}

       
 