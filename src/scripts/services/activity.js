import { baseUrl, itensQuantity } from "../variables.js";
async function getActivities(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events?per_page=${itensQuantity}`);
  return await response.json();
}

export { getActivities };
