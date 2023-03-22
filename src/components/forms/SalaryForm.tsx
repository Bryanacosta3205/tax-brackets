import { useForm } from "@lib/hooks/useForm";
import { useState } from "react";
import { FormButton, FormContentWrapper, FormRow, StyledForm } from "./SalaryForm.css";

interface Props {
  onSubmit: (salary: number,year?:string) => void;
  salaryBrackets: any;
}

const SalaryForm: React.FC<Props> = ({ onSubmit, salaryBrackets }) => {
  
  const {formState, onInputChange}= useForm({
    salary: 0,
    year: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.salary || formState.salary<=0) {
      return;
    }
    onSubmit(Number(formState.salary),formState.year);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
        <FormContentWrapper>
        <FormRow width="25%">
          <label htmlFor="year">Tax Year: </label>
          <select
            name="year"
            id="year"
            style={{ padding: "13px 16px" }}
            value={formState.year}
            onChange={onInputChange}
          >
            <option defaultValue=""></option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </FormRow>
        <FormRow width="73%">
          <label htmlFor="salary">Yearly salary: </label>
          <div style={{width:"100%",position:"relative"}}>
            <span style={{position:"absolute",fontSize:"20px", color:"grey" ,left:"10px",top:"11px"}}>$</span>
          <input
            name="salary"
            id="salary"
            type="text"
            style={{ width:"100%",padding: "13px 16px 13px 26px",  }}
            value={Number(formState.salary).toLocaleString("en-US")}
            onChange={onInputChange}
          />
          </div>
        </FormRow>
        </FormContentWrapper>
        <FormButton >Calculate</FormButton>
    </StyledForm>
  );
};

export default SalaryForm;
