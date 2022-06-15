import React, { useState } from "react";
import FormType1 from "../components/FormBuild/FormType1/FormType1";
import SideMenu from "../components/FormBuild/SideMenu/SideMenu";

const FormBuild = () => {
  const [fieldidx, setFieldIdx] = useState();
  return (
    <div className='form-builder'>
      <div className='secondary'>
        <SideMenu setFieldIdx={setFieldIdx} />
        <FormType1 fieldidx={fieldidx} />
      </div>
    </div>
  );
};

export default FormBuild;
