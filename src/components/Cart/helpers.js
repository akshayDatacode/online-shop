import React from "react";
import { Link } from "react-router-dom";

export const getColumns = (handleRemoveFromCart) => [
  {
    dataField: "",
    text: "S.NO.",
    align: "center",
    headerAlign: "center",
    headerClasses: "table-header s-no",
    formatter: (cell, row, index) => <span>{++index}</span>,
  },
  {
    dataField: "image",
    text: "",
    sort: true,
    style: { color: "#757575" },
    headerClasses: "table-header status",
    formatter: (cell, row) => (
      <div>
        <img
          src={row.image}
          className="rounded-circle"
          height="80"
          width="80"
          alt="loading..."
        />
      </div>
    ),
  },
  {
    dataField: "title",
    text: "Product",
    sort: true,
    headerClasses: "table-header name",
    style: { color: "#757575" },
  },

  {
    dataField: "quantity",
    text: "Qty",
    sort: true,
    style: { color: "#757575" },
    align: "center",
    headerAlign: "center",
    headerClasses: "table-header group-name",
  },
  {
    dataField: "price",
    text: "Price",
    sort: true,
    style: { color: "#757575" },
    align: "center",
    headerAlign: "center",
    headerClasses: "table-header group-name",
    formatter: (cell, row) => (
      <span className="text-success">₹{row.price}</span>
    ),
  },
  {
    dataField: "",
    text: "",
    sort: true,
    style: { color: "#757575" },
    align: "center",
    headerAlign: "center",
    headerClasses: "table-header group-name",
    formatter: (cell, row) => (
      <i
        onClick={() => handleRemoveFromCart(row)}
        className="fal fa-times text-danger"
      />
    ),
  },
];
