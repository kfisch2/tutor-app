import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../utils/queries";

export default function StudentDashboard() {
  const { loading, error, data } = useQuery(QUERY_SUBJECTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const math = data.subjects[0].mathematics;
  const science = data.subjects[0].science;

  return (
    <>
      <h1> STUDENT DASHBOARD</h1>
      <h2>Welcome, Student!</h2>

      <div>
        Subjects you are requesting a tutor for: QUERY STUDENT'S SUBJECT
      </div>
      <form>
        Request help with another subject: QUERY REMAINING SUBJECTS AND FILTER
        OUT ALREADY SELECTED
      </form>
    </>
  );
}
