import { useFormik } from "formik";
import * as yup from "yup";

export function Login() {
  const formValidationSchema = yup.object({
    email: yup.string().required("Please provide your E-mail"),
    password: yup.string().required("Please provide your password"),
  });

  async function login(userInfo) {
    console.log(userInfo);
  }

  const { handleSubmit, handleChange, values, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (userInfo) => {
      login(userInfo);
    },
  });

  return (
    <section>
      <form onClick={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          value={values.email}
          name="email"
          onBlur={handleBlur}
        />
        <input
          type="password"
          onChange={handleChange}
          value={values.password}
          name="password"
          onBlur={handleBlur}
        />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
