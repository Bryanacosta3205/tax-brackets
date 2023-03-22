import { getRequest } from "./request";
import { API_BASES } from "../constants/constants";

export const getBracketsRequest = async () => {
  const url = "/brackets";
  return getRequest({ url, apiBase: API_BASES.TAX_CALCULATOR });
};

export const getBracketsByDateRequest = async (
   year: string ,
) => {
  const url = `/brackets/${year}`;
  return getRequest({
    url,
    apiBase: API_BASES.TAX_CALCULATOR,
  });
};
