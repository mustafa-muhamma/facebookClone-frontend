import { useFormik } from "formik";
import * as Yup from "yup";
const SignUp = ({ closeSignUp }) => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            birthDay: ""
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
            birthDay: Yup.string()
                .required('required')
        }),
        onSubmit: () => {
            closeSignUp(false)
        }
    })
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
                name="birthDay"
                id="date"
                type="date"
                max='2001/12/31'
                min='1995/12/31'
                value={formik.values.date}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            {formik.errors.birthDay && formik.touched.birthDay ? <p className="errorMsg">{formik.errors.birthDay}</p> : null}

            <button className="newAcc" type="submit">Create New Account </button>
        </form>
    );
}

export default SignUp;