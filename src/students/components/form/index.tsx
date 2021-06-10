import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextFieldMU from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

import { createStudent } from "../../api";

type TextFieldProps = {
  name: string;
  label: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
};
const TextField = (props: TextFieldProps) => {
  const { name, label, onChange, onBlur, value, error, touched } = props;
  const hasError = touched && Boolean(error);
  return (
    <TextFieldMU
      name={name}
      error={hasError}
      label={label}
      helperText={error}
      variant="outlined"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido."),
  lastName: Yup.string().required("El apellido es requerido."),
  idNumber: Yup.string()
    .required("El número de identificación es requerido.")
    .min(8, "Número de identificación muy corto")
    .max(20, "Número de identificación muy largo"),
  idType: Yup.string()
    .required("El tipo de identificación es requerido")
    .matches(/(CC|CE|RC|TI)/, "Tipo de identificación inválido."),
});

const StudentsForm = () => {
  const history = useHistory();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        lastName: "",
        idNumber: "",
        idType: "",
      },
      validationSchema,
      onSubmit: (formValues) => {
        return createStudent(formValues).then(() => {
          history.push("/students/list");
        });
      },
    });
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        name="name"
        label="Nombre"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        error={errors.name}
        touched={touched.name}
      />
      <TextField
        name="lastName"
        label="Apellido"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
        error={errors.lastName}
        touched={touched.lastName}
      />
      <TextField
        name="idNumber"
        label="Número de identificación"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.idNumber}
        error={errors.idNumber}
        touched={touched.idNumber}
      />
      <TextField
        name="idType"
        label="Tipo de identificación"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.idType}
        error={errors.idType}
        touched={touched.idType}
      />
      <Button variant="contained" type="submit" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default StudentsForm;
