import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../utils/queries";

export default function StudentDashboard() {
  const { loading, data } = useQuery(QUERY_SUBJECTS);
  const subject = data.subjects[0];
  loading ? console.log('loading...') : console.log(subject)
  const mathematics = subject.mathematics;
  const science = subject.science;

  console.log(mathematics);
  console.log(science);
  return (
    <>
    <h1> STUDENT DASHBOARD</h1>
    <h2>Welcome, Student!</h2>
    </>
  );
}
