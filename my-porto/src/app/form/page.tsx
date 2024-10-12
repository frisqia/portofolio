'use client'

import React from "react"
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Form() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      whatsapp: '',
      message: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      whatsapp: Yup.string()
        .matches(/^\d+$/, 'Whatsapp number must be numeric')
        .min(10, 'Must be at least 10 digits')
        .required('Whatsapp number is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>
      <div className="p-20">
        <h1 className="text-4xl font-lilita mb-8">Any Question?</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4 px-10 md:px-30 lg:px-80">
          <div>
            <input
              className="w-full p-3 border rounded-lg"
              type="email"
              name="email"
              placeholder="Your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <input
              className="w-full p-3 border rounded-lg"
              type="text"
              name="name"
              placeholder="Your name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <input
              className="w-full p-3 border rounded-lg"
              type="text"
              name="whatsapp"
              placeholder="Your whatsapp number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.whatsapp}
            />
            {formik.touched.whatsapp && formik.errors.whatsapp ? (
              <p className="text-red-500">{formik.errors.whatsapp}</p>
            ) : null}
          </div>

          <div>
            <textarea
              className="w-full p-3 border rounded-lg"
              name="message"
              placeholder="Your message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500">{formik.errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-gray-500 hover:bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
