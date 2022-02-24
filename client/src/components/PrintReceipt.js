import React from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";

const PrintReceipt = ({ total, items }) => {
  console.log("total", total);

  const handlePdf = () => {
    let verticalOffset = 150;
    let horizontalOffset = 66;
    let lineSpace = 20;
    let itemSpace = 50;
    let doc = new jsPDF("portrait", "px", "letter", "false");
    doc.text("Order Receipt", horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;
    doc.text("Date: March 10,2022 ", horizontalOffset, verticalOffset);

    verticalOffset += lineSpace;
    items.map((item, index) => {
      console.log("itemmm", item);
      console.log("index", index + 1);

      doc.text(
        ["Name:" + item.name, "Qty:" + item.qty, "Price:" + item.price],
        horizontalOffset,
        verticalOffset
      );
      verticalOffset += itemSpace;
    });

    doc.text("Total: " + total, horizontalOffset, verticalOffset);

    doc.save("Culinary Collective Order Receipt");
  };

  return (
    <div>
      <Button variant="primary" onClick={handlePdf}>
        Print Receipt
      </Button>
    </div>
  );
};

export default PrintReceipt;
