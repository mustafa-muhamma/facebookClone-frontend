import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import MainContext from "../../contexts/MainContext";
import Error from "../common/Error";
import { signUp } from "../../APIs/APIs";



const SignUp = ({ closeSignUp, handleSign }) => {

    const { err, handleErr, setErr } = useContext(MainContext);

    const closeForm = () => {
        closeSignUp(false);
        setErr(null)
    }
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            username: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(8, 'must be 8 chrachter or less')
                .required('Required!!'),
            lastName: Yup.string()
                .max(8, 'must be 8 chrachter or less')
                .required('Required!!'),
            email: Yup.string()
                .email('invalid Email Adress')
                .required('Required!!'),
            password: Yup.string()
                .required('Required!!')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            phoneNumber: Yup.string()
                .required('Required!!'),
            username: Yup.string()
                .required('Required!!')
        }),
        onSubmit: () => {

            setErr(null);
            const body = formik.values
            axios.post(signUp, body)
                .then((res) => {
                    handleSign(res.data);
                    closeSignUp(false);
                    console.log(formik.values);
                })
                .catch((e) => {
                    handleErr(e);
                })
        }
    });
    return (

        <form action="" className="sign-up" onSubmit={formik.handleSubmit}>
            <button type="button" className="closeBtn" onClick={closeForm}>X</button>
            <input
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
                className={err ? "onError" : null}
                name="email"
                id="email"
                type="email"
                placeholder="Email Adress"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onClick={() => setErr(null)}
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
                className={err ? "onError" : null}
                name="phoneNumber"
                id="num"
                type="number"
                placeholder="Phone Number"
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                onClick={() => setErr(null)}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? <p className="errorMsg">{formik.errors.phoneNumber}</p> : null}

            <input
                className={err ? "onError" : null}
                name="username"
                id="user"
                type="text"
                placeholder="User_Name"
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                onClick={() => setErr(null)}
            />
            {formik.errors.username && formik.touched.username ? <p className="errorMsg">{formik.errors.username}</p> : null}

            {err ? <Error /> : null}
            <button className="newAcc" type="submit">Create New Account </button>

        </form>
    );
}

export default SignUp;
