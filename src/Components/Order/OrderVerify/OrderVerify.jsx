import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import s from "./OrderVerify.module.css";
import GreenButton from "./../../UI/GreenButton/GreenButton";
import {
  HiOutlineUserCircle,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { useSelector } from "react-redux";

const nameValidate = (nm) => {
  if (!nm || nm.length<2) return "!"
}
const emailValidate = (nm) => {
  if (!nm) return "!"
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(nm)) return "!";
}
const pnoneValidate = (nm) => {
  if (!nm) return "!"
  else if (!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(nm)) return "!";
}



export default function OrderVerify() {

  const userData = useSelector((state) => state.userData);

  return (
    <div className={s.bg}>
      <header></header>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          saveAddress: false,
        }}
        onSubmit={(values) => {
          fetch("https://6391f387ac688bbe4c57c52a.mockapi.io/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, status: 0, cart: userData.data[0].cart }),
          }).then((response) => response.json().then((res) => console.log(res)));
        }}>
        <Form className={s.form}>
          <div className={s.inp}>
            <HiOutlineUserCircle />
            <Field validate={nameValidate} type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="p" className={s.red} />
          </div>
          <div className={s.inp}>
            <HiOutlineMail />
            <Field
              validate={emailValidate}
              type="text"
              name="email"
              placeholder="Email Address"></Field>
            <ErrorMessage name="email" component="div" className={s.red} />
          </div>
          <div className={s.inp}>
            <HiOutlinePhone />
            <Field type="text" name="phone" validate={pnoneValidate} placeholder="Phone"></Field>
            <ErrorMessage name="phone" component="div" className={s.red} />
          </div>
          <div className={s.inp}>
            <HiOutlineLocationMarker />
            <Field type="text" validate={nameValidate} name="address" placeholder="Address"></Field>
            <ErrorMessage name="address" component="div" className={s.red} />
          </div>
          <div className={s.checkbox}>
            <Field type="checkbox" name="saveAddress"></Field> Save this address
            <ErrorMessage name="saveAddress" component="div" />
          </div>

          <GreenButton text={"Next"} />
        </Form>
      </Formik>
    </div>
  );
}
