import React from "react";
import Header from "../components/headerComponent/header";
import MyFormsCenterPage from "../components/MyFormsPage/MyFormsCenterPage";

const ObjectList = [
  {
    id: "6",
    Name: "Manila",
    lock: false,
    date: "2015-09-29",
    responses: "9",
  },
  {
    id: "51",
    Name: "Bern",
    lock: true,
    date: "2010-02-22",
    responses: "1",
  },
  {
    id: "56",
    Name: "Stuttgart",
    lock: false,
    date: "2014-04-09",
    responses: "6",
  },
  {
    id: "73",
    Name: "Paramaribo",
    lock: true,
    date: "2018-02-27",
    responses: "8",
  },
];

const MyForms = () => {
  return (
    <div>
      <Header />

      <MyFormsCenterPage data={ObjectList} />
    </div>
  );
};

export default MyForms;
