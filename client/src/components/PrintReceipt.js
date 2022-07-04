import React from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";
import image from "../components/landingimage/cc.png";

const PrintReceipt = ({ order }) => {
  const { orderTotal, restaurantName, orderItems, orderDate, orderTime } =
    order;

 
  const handlePdf = () => {
    let verticalOffset = 125;
    let horizontalOffset = 66;
    let lineSpace = 20;
    let itemSpace = 50;
    let doc = new jsPDF("portrait", "px", "letter", "false");

    doc.text("CHEF-HIRE", horizontalOffset, verticalOffset);
    doc.addImage(image, "PNG", 300, 80, 50, 50);
    verticalOffset += lineSpace;
    doc.text("Order Receipt", horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;
    doc.text("Date: " + orderDate, horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;
    doc.text(orderTime, horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;

    doc.text(restaurantName, horizontalOffset, verticalOffset);
    verticalOffset += lineSpace;
    orderItems.map((item, index) => {
   

      doc.text(
        ["Name: " + item.name, "Qty: " + item.qty, "Price: $" + item.price],
        horizontalOffset,
        verticalOffset
      );
      verticalOffset += itemSpace;
    });

    doc.text("Total: " + orderTotal, horizontalOffset, verticalOffset);

    doc.save("Chef-Hire Order Receipt");
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
