import React, { Fragment, useState } from "react";

const LoadingTodos = () => {
  const [loading, setLoading] = useState(
    "You currently do not have a todo item."
  );

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="mt-20 text-center">{loading}</tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default LoadingTodos;
