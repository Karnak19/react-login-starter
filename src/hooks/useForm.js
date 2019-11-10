import React, { useState, useEffect } from "react";

function useForm(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitting) {
      const noErrors = Object.keys(errors) === 0;
      if (noErrors) {
        console.log("Ok !", { ...values });
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = () => {
    setErrors(validate(values));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setSubmitting(true);
  };

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
    handleBlur
  };
}

export default useForm;
