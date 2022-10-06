import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";



const SignUp = ({ closeSignUp, handleSign, isSigned }) => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(8, 'must be 8 chrachter or less')
                .required('Required..'),
            lastName: Yup.string()
                .max(8, 'must be 8 chrachter or less')
                .required('Required..'),
            email: Yup.string()
                .email('invalid Email Adress')
                .required('Required!!'),
            password: Yup.string()
                .required('Required!!')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            phoneNumber: Yup.string()
                .required('required')
        }),
        onSubmit: () => {

            axios.post('http://localhost:5000/auth/signup', {
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                email: formik.values.email,
                password: formik.values.password,
                phoneNumber: formik.values.phoneNumber
            })
                .then((res) => {
                    handleSign(res.data);
                    console.log(res);
                    closeSignUp(false);
                    isSigned(false)
                })
                .catch((e) => {
                    console.log('server axios', e.response.data.message);
                    console.log(e);
                })
        }
    });
    return (

        <form action="" className="sign-up" onSubmit={formik.handleSubmit}>
            <button type="button" className="closeBtn" onClick={() => closeSignUp(false)}>X</button>
            <input
                className="name"
                name="firstName"
                id="first-name"
                type="text"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName ? <p className="errorMsg">{formik.errors.firstName}</p> : null}

            <input
                className="name"
                name="lastName"
                id="last-name"
                type="text"
                placeholder="last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched.lastName ? <p className="errorMsg">{formik.errors.lastName}</p> : null}

            <input
                name="email"
                id="email"
                type="email"
                placeholder="Email Adress"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <p className="errorMsg">{formik.errors.email}</p> : null}

            <input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password ? <p className="errorMsg">{formik.errors.password}</p> : null}

            <input
                name="phoneNumber"
                id="num"
                type="number"
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? <p className="errorMsg">{formik.errors.phoneNumber}</p> : null}

            <button className="newAcc" type="submit">Create New Account </button>

        </form>
    );
}

export default SignUp;