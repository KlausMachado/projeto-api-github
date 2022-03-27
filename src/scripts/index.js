import { getRepositories } from "./services/repositories.js";
import { getUser } from "./services/user.js";
import { getActivities } from "./services/activities.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

function validateEmpytInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuario do GitHub");
    return true;
  }
}

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (validateEmpytInput(userName)) return;
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateEmpytInput(userName)) return;
    getUserData(userName);
  }
});

async function getUserData(userName) {
  const userResponse = await getUser(userName);
  const repositoriesResponse = await getRepositories(userName);
  const activitiesResponse = await getActivities(userName);
  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  user.setActivities(activitiesResponse);
  screen.renderUser(user);
}
