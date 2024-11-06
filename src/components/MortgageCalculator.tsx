import { Formik } from "formik";
import DsInput from "./DsInput";
import DsSelect from "./DsSelect";
//import axios from "axios";
import * as Yup from "yup";

const MortgageCalculatorSchema = Yup.object().shape({
  loanAmount: Yup.string()
    .required("Field required")
    .test("is-decimal", "Invalid number", (value) => !isNaN(Number(value))),
  loanTerm: Yup.string().required("Field required"),
  interest: Yup.string()
    .required("Field required")
    .test("is-decimal", "Invalid number", (value) => !isNaN(Number(value))),
});

const monthlyPayment = (
  loanAmount: number,
  loanTerm: number,
  interest: number
) => {
  return (
    (loanAmount * (interest / 100 / 12)) /
    (1 - Math.pow(1 + interest / 100 / 12, -loanTerm * 12))
  );
};

const MortgageCalculator = () => {
  return (
    <div>
      <Formik
        validateOnBlur={true}
        initialValues={{
          loanAmount: "",
          loanTerm: "",
          interest: "",
        }}
        validationSchema={MortgageCalculatorSchema}
        onSubmit={(values) => console.log(values)}
        // onSubmit={(values, { setSubmitting, resetForm }) => {
        //   axios
        //     .post("/api/calculator", values)
        //     .then(function () {
        //       alert(JSON.stringify(values, null, 2));
        //       resetForm();
        //       setSubmitting(false);
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //       setSubmitting(false);
        //     });
        // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          submitCount,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <DsInput
                label="Loan Amount"
                name="loanAmount"
                error={
                  (errors?.loanAmount &&
                    touched.loanAmount &&
                    errors.loanAmount) ||
                  ""
                }
                type="text"
                onChange={handleChange}
                value={values.loanAmount}
              />
              <DsSelect
                options={[
                  { displayName: "10", value: "10" },
                  { displayName: "15", value: "15" },
                  { displayName: "20", value: "20" },
                  { displayName: "25", value: "25" },
                  { displayName: "30", value: "30" },
                ]}
                title="Loan term"
                name="loanTerm"
                error={
                  (errors?.loanTerm && touched.loanTerm && errors.loanTerm) ||
                  ""
                }
                onChange={handleChange}
                value={values.loanTerm}
              />
              <DsInput
                label="Interest rate (APR)"
                name="interest"
                error={
                  (errors?.interest && touched.interest && errors.interest) ||
                  ""
                }
                type="text"
                onChange={handleChange}
                value={values.interest}
              />

              <p></p>
              <button type="submit" className="ds_button">
                Submit
              </button>
              {isValid && submitCount > 0 && (
                <div>
                  <h3>
                    Monthly mortgage payment: £
                    {monthlyPayment(
                      Number(values.loanAmount),
                      Number(values.loanTerm),
                      Number(values.interest)
                    ).toFixed(2)}
                  </h3>
                  <h3>
                    Total payment amount: £
                    {(
                      monthlyPayment(
                        Number(values.loanAmount),
                        Number(values.loanTerm),
                        Number(values.interest)
                      ) *
                      Number(values.loanTerm) *
                      12
                    ).toFixed(2)}
                  </h3>
                  <h3>
                    Total interest paid: £
                    {(
                      monthlyPayment(
                        Number(values.loanAmount),
                        Number(values.loanTerm),
                        Number(values.interest)
                      ) *
                        Number(values.loanTerm) *
                        12 -
                      Number(values.loanAmount)
                    ).toFixed(2)}
                  </h3>
                </div>
              )}
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MortgageCalculator;
