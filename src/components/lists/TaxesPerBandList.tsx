import { taxBracketsPerBandType } from "src/types/tax-brackets";
import { ListRowColumn, ListRowWrapper } from "./TaxesPerBandList.css";

interface Props {
  data: taxBracketsPerBandType;
}

const TaxesPerbandList: React.FC<Props> = ({data}) => {
  return (
    <ListRowWrapper>
      <ListRowColumn>{`${(data.rate * 100).toFixed(2)}%`}</ListRowColumn>
      <ListRowColumn>{`(${
        data.max ? `\$${data.max}-\$${data.min}` : `\$${data.min}`
      }) x ${(data.rate * 100).toFixed(2)}%`}</ListRowColumn>
      <ListRowColumn style={{textAlign:"end"}}>{`\$${data.amount.toLocaleString("en-US")}`}</ListRowColumn>
    </ListRowWrapper>
  );
};

export default TaxesPerbandList;
