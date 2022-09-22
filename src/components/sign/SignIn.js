import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email('invalid Email Adress')
                .required('Required!!'),
            password: Yup.string()
                .required('Required!!')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        }),

        onSubmit: () => {
            console.log(formik.values)
        }
    })
    return (
        <div className="input-container">
            <form action="" onSubmit={formik.handleSubmit} className="sign-in">
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email Adress"
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