import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState<any>(initialForm);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let nValue = value.replace(",", "");
    if (name === "salary" && !/^\d+$/.test(nValue)) {
      setFormState(initialForm);
      return;
    }
    setFormState({
      ...formState,
      [name]: nValue,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
