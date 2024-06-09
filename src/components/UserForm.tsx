// UserForm.jsx
import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const countryOptions = [
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
    { value: 'UK', label: 'UK' },
];

const UserForm = () => {

    const quillRef = useRef<ReactQuill | null>(null);



    const validationSchema = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Must be 8 characters or more')
            .required('Required'),
        gender: Yup.string()
            .oneOf(['male', 'female'], 'Invalid Gender')
            .required('Required'),
        country: Yup.string()
            .required('Required'),
        bio: Yup.string()
            .required('Required')
            .test('test-bio', 'Bio is required', (value) => {
                console.log(value);
                return quillRef.current && quillRef.current.getEditor().getText().trim().length > 0;
            }),
    });



    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                gender: '',
                country: '',
                bio: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className="bg-neutral-800/20 border border-neutral-500/50 rounded p-6 space-y-4 max-h-screen overflow-y-auto scrollbar-hide">
                    <div>
                        <label htmlFor="username" className="block text-neutral-200">Username</label>
                        <Field
                            id="username"
                            name="username"
                            type="text"
                            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded text-neutral-200"
                        />
                        <ErrorMessage name="username" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-neutral-200">Email</label>
                        <Field
                            id="email"
                            name="email"
                            type="email"
                            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded text-neutral-200"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-neutral-200">Password</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded text-neutral-200"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label className="block text-neutral-200">Gender</label>
                        <div className="mt-1 flex space-x-4">
                            <label className="text-neutral-200">
                                <Field type="radio" name="gender" value="male" className="mr-2" />
                                Male
                            </label>
                            <label className="text-neutral-200">
                                <Field type="radio" name="gender" value="female" className="mr-2" />
                                Female
                            </label>
                        </div>
                        <ErrorMessage name="gender" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label htmlFor="country" className="block text-neutral-200">Country</label>
                        <Select
                            id="country"
                            name="country"
                            options={countryOptions}
                            className="mt-1"
                            onChange={(option) => setFieldValue('country', option!.value)}
                        />
                        <ErrorMessage name="country" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label htmlFor="bio" className="block text-neutral-200">Bio</label>
                        <Field name="bio">
                            {({ field }: FieldProps) =>
                                <ReactQuill
                                    id="bio"
                                    value={field.value}
                                    onChange={field.onChange(field.name)}
                                    ref={quillRef}

                                    className="bg-neutral-700 border border-neutral-600 rounded text-neutral-200"
                                    theme="snow"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ size: [] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' },
                                            { 'indent': '-1' }, { 'indent': '+1' }],
                                            ['link', 'image'],
                                            ['clean']
                                        ],
                                    }}
                                    formats={[
                                        'header', 'font', 'size',
                                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                                        'list', 'bullet', 'indent',
                                        'link', 'image'
                                    ]}
                                    style={{ backgroundColor: '#1F2937', color: '#F9FAFB', maxHeight: '300px', overflowY: 'auto' }}
                                />}
                        </Field>
                        <ErrorMessage name="bio" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};


export default UserForm;
