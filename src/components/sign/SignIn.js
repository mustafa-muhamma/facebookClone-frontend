import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignIn = ({handleSign , isSigned}) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .min(10,'invalid Email Adress Or Phone Number') 
                .required('Required!!'),
            password: Yup.string()
                .required('Required!!')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        }),

        onSubmit: () => {
            axios.post('http://localhost:5000/auth/signin', {
                email: formik.values.email,
                password: formik.values.password,
            })
                .then((res) => {
                    handleSign(res.data);
                    isSigned(false)
                    console.log(res.data);

                }).catch((e) => {
                    console.log('server axios', e.response.data.message);
                    console.log(e);
                })
        }
    })
    return (
        <div className="input-container">
            <form action="" onSubmit={formik.handleSubmit} className="sign-in">
                <input
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Email Adress Or Phone Number"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? <p className="errorMsg">{formik.errors.email}</p> : null}
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? <p className="errorMsg">{formik.errors.password}</p> : null}


                <button type="submit">Sign In</button>
            </form >
        </div >

    );
}

export default SignIn;