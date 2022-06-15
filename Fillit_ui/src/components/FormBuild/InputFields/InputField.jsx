import { TextField } from "@mui/material";
import React from "react";

const Inputfields1 = () => {
  return (
    <>
      <TextField name='firstName' label='First Name' variant='filled' />
    </>
  );
};
const Inputfields2 = () => {
  return (
    <>
      <TextField name='firstName' label='First Name' variant='standard' />
    </>
  );
};
const Inputfields3 = () => {
  return (
    <>
      <TextField name='firstName' label='First Name' variant='outlined' />
    </>
  );
};

export { Inputfields1, Inputfields2, Inputfields3 };
