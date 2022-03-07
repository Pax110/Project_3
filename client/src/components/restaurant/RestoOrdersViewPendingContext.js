import React, { createContext, useContext, useState } from "react";
export const PendingContext = createContext({});

const RestoOrdersViewPendingContext = (props) => {
  const children = props.children;
  const [numPending, setNumPending] = useState();

  return (
    <PendingContext.Provider value={{ numPending, setNumPending }}>
      {children}
    </PendingContext.Provider>
  );
};

export function usePendings() {
  return useContext(PendingContext);
}
export default RestoOrdersViewPendingContext;
