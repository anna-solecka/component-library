//import axios from "axios";
import { Formik } from "formik";
import DsInput from "./DsInput";
import DsSelect from "./DsSelect";
import DsTextarea from "./DsTextarea";
import axios from "axios";
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Field required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Field required"),
  email: Yup.string().email("Invalid email").required("Field required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Field required"),
  select: Yup.string().required("Select form of contact"),
});

const ContactFormFormik = () => {
  return (
    <div>
      <h1>Contact Formik</h1>

      <Formik
        validateOnBlur={true}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          select: "",
        }}
        validationSchema={ContactFormSchema}
        // validate={(values) => {
        //   const errors: {
        //     firstName?: string;
        //     lastName?: string;
        //     email?: string;
        //     message?: string;
        //     select?: string;
        //   } = {};
        //   if (!values.firstName) {
        //     errors.firstName = "This field is required";
        //   } else if (values.firstName.length < 2) {
        //     errors.firstName = "Must be 2 characters or more";
        //   }
        //   if (!values.lastName) {
        //     errors.lastName = "This field is required";
        //   } else if (values.lastName.length < 2) {
        //     errors.lastName = "Must be 2 characters or more";
        //   }
        //   if (!values.email) {
        //     errors.email = "This field is required";
        //   }

        //   if (!values.message) {
        //     errors.message = "This field is required";
        //   } else if (values.message.length < 5) {
        //     errors.message = "Must be 5 characters or more";
        //   }
        //   if (!values.select) {
        //     errors.select = "This field is required";
        //   }

        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios
            .post("/api/contact", values)
            .then(function () {
              alert(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            })
            .catch(function (error) {
              console.log(error);
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <DsInput
              label="First name"
              name="firstName"
              error={
                (errors?.firstName && touched.firstName && errors.firstName) ||
                ""
              }
              type="text"
              onChange={handleChange}
              value={values.firstName}
            />
            <DsInput
              label="Last name"
              name="lastName"
              error={
                (errors?.lastName && touched.lastName && errors.lastName) || ""
              }
              type="text"
              onChange={handleChange}
              value={values.lastName}
            />
            <DsInput
              label="Email"
              name="email"
              hint="We'll never share your email with anyone else."
              error={(errors?.email && touched.email && errors.email) || ""}
              type="text"
              onChange={handleChange}
              value={values.email}
            />
            <DsTextarea
              label="Message"
              name="message"
              error={
                (errors?.message && touched.message && errors.message) || ""
              }
              rows={3}
              hint="Please enter your message here."
              onChange={handleChange}
              value={values.message}
            />
            <DsSelect
              options={["Post", "Message", "Email"]}
              title="Select a form of contact"
              name="select"
              error={(errors?.select && touched.select && errors.select) || ""}
              onChange={handleChange}
              value={values.select}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactFormFormik;
