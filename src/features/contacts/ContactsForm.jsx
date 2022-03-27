import React from 'react';
import { useFormik } from 'formik';
import s from './ContactsForm.module.scss'

 

export const ContactsForm = ({disabled, submitForm}) => {
  
    

  const formValidate = (values) => {
      
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (!/^\w+$/ig.test(values.name)) {
        errors.name = 'name can have only a letter or number or _';
    } else if (values.name.length > 10) {
        errors.name = 'Length of the name cannot be more 10'
    } 
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email.';
    }
    if (values.phone && !/^\d{11}$/ig.test(values.phone)) {
        errors.phone = 'Phone number can be 11 numbers'
    } 
    if (values.message.length > 500) {
        errors.message = 'Message can be only a less thah 500 characters'
    }

    return errors;
}



  
  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        phone: '',
        message: '',
    },
    validate: formValidate,

    onSubmit:submitForm,
    //  async(values) => {
    //    //console.log(values);
    //    await projectApi.sendMessage(values)
    //     //formik.resetForm()
    // },
});

return (
    <form  className={s.contactsFormContainer} onSubmit={formik.handleSubmit}>
        <label htmlFor="name" >enter your name *</label>
        <input
            placeholder={''}
            {...formik.getFieldProps('name')}  />
        <div style={{'color': 'red', 'height': '10px'}}>
            {formik.touched.name && formik.errors.name && formik.errors.name}
        </div>
        <label htmlFor="email" >enter your email *</label>
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

        <label htmlFor="message">write your text</label>
        <textarea
            placeholder={''}
            {...formik.getFieldProps('message')}  />
        <div style={{'color': 'red', 'height': '10px'}}>
            {formik.touched.message && formik.errors.message && formik.errors.message}
        </div>

        <button type="submit" disabled={disabled}>send message</button>
    </form>
)
}

       
 