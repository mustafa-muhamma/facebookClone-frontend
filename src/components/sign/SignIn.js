import { useFormik } from "formik";
import axios from "axios";
import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import { logIn } from "../../APIs/APIs";
import Error from "../common/Error";

const SignIn = ({ handleSign, signUpView }) => {
    const { err, handleErr, setErr } = useContext(MainContext)

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },

        onSubmit: () => {
            setErr(null);
            const body = formik.values;
            axios.post(logIn, body)
                .then((res) => {
                    handleSign(res.data);
                    console.log(res.data);
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
                    className={err && !signUpView ? "onError" : null}
                    name="username"
                    id="username"
                    type="text"
                    placeholder="User Name"
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    onClick={() => setErr(null)}
                    disabled={signUpView ? true : false}
                />
                <input
                    className={err && !signUpView ? "onError" : null}
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    onClick={() => setErr(null)}
                    disabled={signUpView ? true : false}
                />

                {err && !signUpView ? <Error /> : null}

                <button type="submit" disabled={signUpView ? true : false}>Sign In</button>
            </form >
        </div >

    );
}

export default SignIn;
