import { baseUrl, itensQuantity } from "../variables.js";

async function getRepositories(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${itensQuantity}`
  );
  return await response.json();
}

export { getRepositories };
