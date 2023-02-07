import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../../utils/queries";
import { QUERY_TUTORS_BY_SUBJECT } from "../../../utils/queries";

const RequestForm = () => {
  const { loading, error, data } = useQuery(QUERY_SUBJECTS);
  // POPULATE SUBJECTS
  const populateTutors = (subject) => {

  }
  return (
    <>
      <h1>Request Form!</h1>
      <h2>Science: </h2>
      {data?.subjects[0].science.map((subject, i) => {
        return <button key={subject}>{subject}</button>;
      })}

      <h2>Mathematics: </h2>
      {data?.subjects[0].mathematics.map((subject, i) => {
        return <button key={subject}>{subject}</button>;
      })}

      <h2>History: </h2>
      {data?.subjects[0].history.map((subject, i) => {
        return <button key={subject}>{subject}</button>;
      })}

      <h2>Language: </h2>
      {data?.subjects[0].language.map((subject, i) => {
        return <button key={subject}>{subject}</button>;
      })}

      <h2>Social Science: </h2>
      {data?.subjects[0].socialScience.map((subject, i) => {
        return <button key={subject}>{subject}</button>;
      })}
    </>
  );
};

export default RequestForm;
