import { getToken } from "../../helpers/localStorage";

import axios from "axios";

const getAddressByZipcode = async ({ zipcode }: { zipcode: string }) => {
  return axios.get(`https://viacep.com.br/ws/${zipcode}/json`);
};

export { getAddressByZipcode };
