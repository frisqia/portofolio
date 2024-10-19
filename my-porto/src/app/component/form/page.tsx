import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


interface NotificationProps {
  message: string;
  onClose: () => void; 
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-pink-500 text-white p-2 rounded-lg shadow-lg transition-transform duration-300">
      <p>{message}</p>
      <button onClick={onClose} className="mt-2 text-sm underline">Close</button>
    </div>
  );
};

export default function Form() {
  const [notification, setNotification] = useState<string>(''); 
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
    onSubmit: (values) => {
      emailjs.send('service_vnrjs4t', 'template_11ytfnh', {
        email: values.email,
        name: values.name,
        whatsapp: values.whatsapp,
        message: values.message,
      }, 'HkTk-KgHC9NBwZlCU')
        .then((response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          setNotification('Message sent successfully!');
          formik.resetForm(); // Reset form fields after successful submission
        }, (err) => {
          console.error('FAILED...', err);
          setNotification('Failed to send message. Please try again later.');
        });
    }
  });

  return (
    <div className="p-10 md:p-15 lg:p-20 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-lilita mb-4 text-center">Any Question?</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mb-6 md:mr-4">
          <p className="text-xs md:text-sm lg:text-base text-gray-700">
            I'm glad you've visited my personal portfolio website! If you have any questions, suggestions, or would like to collaborate, please feel free to contact me through this form. I will endeavor to reply to your message as soon as possible.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex-1 space-y-4">
          <div>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              type="email"
              name="email"
              placeholder="Your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              type="text"
              name="name"
              placeholder="Your name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 mt-1">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              type="text"
              name="whatsapp"
              placeholder="Your whatsapp number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.whatsapp}
            />
            {formik.touched.whatsapp && formik.errors.whatsapp ? (
              <p className="text-red-500 mt-1">{formik.errors.whatsapp}</p>
            ) : null}
          </div>

          <div>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              name="message"
              placeholder="Your message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              rows={4}
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500 mt-1">{formik.errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}
    </div>
  );
}
