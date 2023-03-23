import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";
import Card from "react-bootstrap/Card";
import { useQuery} from "@apollo/client";
import { QUERY_TUTORS } from "../../../utils/queries";

export default function RequestHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // ------mock items------
  const items = [
    { name: "example", id: 1 },
    { name: "example", id: 2 },
    { name: "example", id: 3 },
  ];

  // const handleClick = (page) => {
  //   setCurrentPage(page);
  //   const pageIndex = page - 1;
  //   const firstIndex = pageIndex * rowsPerPage;
  //   const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
  //   showData(data.slice(firstIndex, lastIndex));
  // };

  const RenderItems = () => {
    const { loading, error, data } = useQuery(QUERY_TUTORS);
    const tutors = JSON.stringify(data.allTutors, null, 2);
    console.log("here are your tutors" + tutors);

    // Determine the index of the first item to display on the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    // Slice the array of items to get the items for the current page
    const itemsForPage = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Map over the items to render them if there is data
    if (loading) {
      return "Loading...";
    } else {
      tutors.map((tutor) => (
        <Card key={tutor.username} className="tutor-cards">
          <Card.Body>{tutor.bio}</Card.Body>
        </Card>
      ));
    }
  };

  return (
    <div className="page-container">
      {/* items----- */}
      <div>
        {RenderItems()}
        <Pagination
          className="mt-4"
          size="lg"
          activePage={currentPage}
          itemsCountPerPage={ITEMS_PER_PAGE}
          totalItemsCount={items.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div className="pagination-container">
        {/* numbered buttons--- */}
        <Pagination className="pagination">
          <Pagination.Prev />
          <Pagination.Item active> {1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
}
