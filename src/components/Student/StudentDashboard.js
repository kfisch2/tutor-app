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
      <form>

        {/* subjects */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div>Action</div> <div>Another</div> action Something else here
          </div>
        </div>





        {/* credentials */}
        {/* availability */}
        {/* rate per hour */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
