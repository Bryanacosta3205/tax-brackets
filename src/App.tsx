import SalaryForm from "@components/forms/SalaryForm";
import TaxesPerbandList from "@components/lists/TaxesPerBandList";
import MainLayout from "@layouts/MainLayout/MainLayout";
import { ComponentStates as STATES } from "@lib/constants/constants";
import {
  getBracketsByDateRequest,
  getBracketsRequest,
} from "@lib/network/tax-calculator";
import { getTaxesBands } from "@lib/utils/calculateTaxes";
import { useEffect, useState } from "react";
import { taxBracketsPerBandType, taxBracketsType } from "./types/tax-brackets";

const initialState: taxBracketsType[] = [
  {
    max: 0,
    min: 0,
    rate: 0,
  },
];
function App() {
  const [state, setState] = useState(STATES.EMPTY);
  const [salaryBrackets, setSalaryBrackets] =
    useState<taxBracketsType[]>(initialState);
  const [totalTaxes, settotalTaxes] = useState<number>(0);
  const [effectiveRate, setEffectiveRate] = useState<string>("0");
  const [taxesPerBand, setTaxesPerBand] = useState<
    taxBracketsPerBandType[] | []
  >([]);

  useEffect(() => {
    getBracketsRequest()
      .then(({ data }) => setSalaryBrackets(data.tax_brackets))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (state === "loading") {
      setState(STATES.LOADING);
    } else if (taxesPerBand.length < 1) {
      setState(STATES.EMPTY);
    } else {
      setState(STATES.SUCCESS);
    }
  }, [taxesPerBand]);

  const onSubmit = (salary: number, year?: string) => {
    if (year) {
      setState(STATES.LOADING);
      getBracketsByDateRequest(year)
        .then(({ data }) => {
          if (data.errors) {
            throw new Error(data.errors[0].message);
          }
          setSalaryBrackets(data.tax_brackets);
          setState(STATES.SUCCESS);
        })
        .catch((error) => {
          setState(STATES.ERROR);
        });
    }
    if (salaryBrackets.length) {
      const taxesPerBand = getTaxesBands(salaryBrackets, salary);
      const totalTaxes = taxesPerBand.reduce(
        (accumulator: any, currentValue: any) => {
          return accumulator + currentValue.amount;
        },
        0
      );
      const effectiveRate = (totalTaxes / salary).toFixed(2);
      setTaxesPerBand(taxesPerBand);
      settotalTaxes(totalTaxes);
      setEffectiveRate(effectiveRate);
    }
  };

  const renderTaxesPerBand = (
    <div>
      {taxesPerBand.map((data, i) => (
        <TaxesPerbandList key={`unique-key-${i}`} data={data} />
      ))}
    </div>
  );

  let Content: JSX.Element;
  switch (state) {
    case STATES.LOADING:
      Content = <>Loading...</>;
      break;
    case STATES.SUCCESS:
      Content = renderTaxesPerBand;
      break;
    case STATES.ERROR:
      Content = <>An error has ocurred while fetching data</>;
      break;
    default:
      Content = <></>;
      break;
  }
  return (
    <MainLayout>
      <SalaryForm onSubmit={onSubmit} salaryBrackets={salaryBrackets} />
      {Content}
      <div
        style={{
          padding: "20px",
          minHeight: "76px",
          backgroundColor: "#F4F5FB",
        }}
      >
        {state !== STATES.ERROR && state !== STATES.LOADING ? (
          <>
            <div>
              <span>
                Total taxes:
                <b>{` \$${totalTaxes.toLocaleString("en-US")}`}</b>
              </span>
            </div>
            <div>
              <span>
                Effective rate:
                <b>{` ${effectiveRate}%`}</b>
              </span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </MainLayout>
  );
}

export default App;
