import { Formik } from "formik";
import DsInput from "./DsInput";
import DsSelect from "./DsSelect";
import DialogElement, { useDialog } from "./DialogElement";
//import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";

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
  const { showDialog } = useDialog();
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [interest, setInterest] = useState(0);
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
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setLoanAmount(Number(values.loanAmount));
          setLoanTerm(Number(values.loanTerm));
          setInterest(Number(values.interest));
          showDialog();
          resetForm();
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => {
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
            </form>
          );
        }}
      </Formik>
      <DialogElement title="Mortgage calculations:" buttonCloseLabel="Close">
        <div>
          <h3>
            Monthly mortgage payment: £
            {monthlyPayment(
              Number(loanAmount),
              Number(loanTerm),
              Number(interest)
            ).toFixed(2)}
          </h3>
          <h3>
            Total payment amount: £
            {(
              monthlyPayment(
                Number(loanAmount),
                Number(loanTerm),
                Number(interest)
              ) *
              Number(loanTerm) *
              12
            ).toFixed(2)}
          </h3>
          <h3>
            Total interest paid: £
            {(
              monthlyPayment(
                Number(loanAmount),
                Number(loanTerm),
                Number(interest)
              ) *
                Number(loanTerm) *
                12 -
              Number(loanAmount)
            ).toFixed(2)}
          </h3>
        </div>
      </DialogElement>
    </div>
  );
};

export default MortgageCalculator;
