import React from "react";
import Header from "../components/headerComponent/header";

import "../FormBuilderPage/FormBuilder.css";
import FormDesigner from "../FormBuilderPage/FormDesigner";
import FormGenerator from "../FormBuilderPage/FormGenerator";
const FormBuilder = () => {
  return (
    <>
      <Header />
      <div className='FormBuilder_container'>
        <FormGenerator />
        <FormDesigner />
      </div>
    </>
  );
};

export default FormBuilder;
