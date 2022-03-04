import React from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";

const PrintReceipt = ({ order }) => {
  const { orderTotal, restaurantName, orderItems, orderDate, orderTime } =
    order;

  console.log("total", orderTotal);
  console.log("restaurantName is ", restaurantName);
  const handlePdf = () => {
    let verticalOffset = 150;
    let horizontalOffset = 66;
    let lineSpace = 20;
    let itemSpace = 50;
    let doc = new jsPDF("portrait", "px", "letter", "false");
    doc.text("Order Receipt", horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;
    doc.text("Date: " + orderDate, horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;
    doc.text(orderTime, horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;

    doc.text(restaurantName, horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;
    orderItems.map((item, index) => {
      console.log("itemmm", item);
      console.log("index", index + 1);

      doc.text(
        ["Name: " + item.name, "Qty: " + item.qty, "Price: $" + item.price],
        horizontalOffset,
        verticalOffset
      );
      verticalOffset += itemSpace;
    });

    doc.text("Total: " + orderTotal, horizontalOffset, verticalOffset);

    doc.save("Culinary Collective Order Receipt");
  };

  return (
    <div>
      <Button
        variant="primary"
        style={{
          backgroundColor: "#feaa00",
          borderColor: "#feaa00",
          padding: "0.25rem",
          margin: "1%",
        }}
        onClick={handlePdf}
      >
        Print Receipt
      </Button>
    </div>
  );
};

export default PrintReceipt;
