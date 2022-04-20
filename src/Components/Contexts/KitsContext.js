import { createContext, useState } from "react";

export const KitsContext = creteContext();

const KitsContextProvider = (props) => {
  const [kits, setKits] = useState([
    {
      id: 4,
      Model: "demomodel1",
      Body: "body2",
      Lot_No: "DEMOLOTNO1",
      Variant: "demovariant1",
      Order: {
        mrr_date: "18-4-2022",
        mrr_no: "34232",
      },
    },
    {
      id: 5,
      Model: "CRETA 1.6GL",
      Body: "body2",
      Lot_No: "LOT2",
      Variant: "variant2",
      Order: {
        mrr_date: "18-4-2022",
        mrr_no: "34232",
      },
    },
    {
      id: 7,
      Model: "CRETA 1.6GL",
      Body: "body3",
      Lot_No: "LOT2",
      Variant: "variant2",
      Order: {
        mrr_date: "18-4-2022",
        mrr_no: "39632",
      },
    },
    {
      id: 8,
      Model: "CRETA 5.6GL",
      Body: "body4",
      Lot_No: "LOT2",
      Variant: "variant2",
      Order: {
        mrr_date: "18-4-2022",
        mrr_no: "39632",
      },
    },
    {
      id: 9,
      Model: "CRETA 1.6 GL",
      Body: "MA3ENGL1S673532",
      Lot_No: "BGH2100015",
      Variant: "Variant1",
      Order: {
        mrr_date: "18-04-2022",
        mrr_no: "E2104B010A03A",
      },
    },
    {
      id: 10,
      Model: "CRETA 2.6 GL",
      Body: "MA3ENGL1S677657",
      Lot_No: "BGH2100453",
      Variant: "Variant2",
      Order: {
        mrr_date: "18-04-2022",
        mrr_no: "E2104B010A03A",
      },
    },
    {
      id: 11,
      Model: "CRETA 3.6 GL",
      Body: "MA3ENGL1S676756",
      Lot_No: "BGH2108795",
      Variant: "Variant3",
      Order: {
        mrr_date: "18-04-2022",
        mrr_no: "E2104B010A03A",
      },
    },
    {
      id: 12,
      Model: "CRETA 4.6 GL",
      Body: "MA3ENGL1S672378",
      Lot_No: "BGH2107525",
      Variant: "Variant4",
      Order: {
        mrr_date: "18-04-2022",
        mrr_no: "E2104B010A03A",
      },
    },
    {
      id: 13,
      Model: "CRETA 5.6 GL",
      Body: "MA3ENGL1S676543",
      Lot_No: "BGH2105679",
      Variant: "Variant5",
      Order: {
        mrr_date: "18-04-2022",
        mrr_no: "E2104B010A03A",
      },
    },
  ]);
  return (
    <KitsContext.Provider value={{ kits }}>
      {props.children}
    </KitsContext.Provider>
  );
};

export default KitsContextProvider;
