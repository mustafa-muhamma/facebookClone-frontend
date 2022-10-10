import { useFormik } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import { logIn  } from "../API/APIs";
import Error from "../../Error";

const SignIn = ({ handleSign,signView }) => {
    const { err, handleErr,setErr } = useContext(MainContext)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        // validationSchema: Yup.object({
        //     email: Yup.string()
        //         .required('Required!!'),
        //     password: Yup.string()
        //         .required('Required!!')
        // }),

        onSubmit: () => {
            setErr(null);
            const body = formik.values;
            axios.post(logIn, body)
                .then((res) => {
                    handleSign(res.data);
                    setErr(null);
                })
                .catch((e) => {
                    handleErr(e);
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
                    disabled={signView ?true : false}
                />
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    disabled={signView ?true : false}
                />

                {err && !signView ? <Error /> : null}
                   
                <button type="submit" disabled={signView ?true : false}>Sign In</button>
            </form >
        </div >

    );
}

export default SignIn;