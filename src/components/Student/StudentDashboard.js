import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS, QUERY_TUTORS_BY_SUBJECT } from "../../utils/queries";

export default function StudentDashboard() {
  const requestedSubject = "Algebra";

  // const [getTutors, { loading, error, data }] = useLazyQuery(
  //   QUERY_TUTORS_BY_SUBJECT
  // );

  const { loading, error, data } = useQuery(QUERY_SUBJECTS);
  if (loading) console.log("Loading...");
  if (error) console.log("error...");
  console.log(data);

  const populateSubjects = async () => {
   for (let i = 0; i < data.subjects[0].mathematics.length; i++) {
       return (<div>{data.subjects[0].mathematics[i]}</div>);
    }
  };
  populateSubjects();

  // const { loading, error, data } = useQuery(QUERY_SUBJECTS);

  // if (loading) console.log("Finding tutors!");
  // if (error) console.log("Something went wrong...");
  // console.log(data);

  // const handleSubmitRequest = () => {
  //   getSubjects();
  // };

  // const populateTutors = () => {
  //   console.log(data.tutorBySubject.length);
  //   const tutor = data.tutorBySubject;
  //   for (let i = 0; i < data.tutorBySubject.length; i++) {
  //     return(       <>
  //         <h2>{tutor[i].username}</h2>
  //         <h4>{tutor[i].credentials}</h4>
  //         <p>{tutor[i].bio}</p>
  //       </>)

  //   }
  // };

  // const {
  //   loading: loadingSubjects,
  //   error: subjectsError,
  //   data: subjectsData,
  // } = useQuery(QUERY_SUBJECTS);

  // if (loadingSubjects) return "Loading subjects...";
  // if (subjectsError) return `Error! ${subjectsError.message}`;

  // const math = subjectsData.subjects[0].mathematics;
  // const science = subjectsData.subjects[0].science;

  return (
    <>
      <h1> STUDENT DASHBOARD</h1>
      <h2>Welcome, Student!</h2>

      <select className="form-select" aria-label="Default select example">
        <option>Mathematics</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <input className="requestedSubject" placeholder="subject"></input>
      {/* <button onClick={() => handleSubmitRequest()}>
        GET TUTORS BY SUBJECT!
      </button> */}

      {/* {data?.tutorBySubject && populateSubjects()} */}
    </>
  );
}
