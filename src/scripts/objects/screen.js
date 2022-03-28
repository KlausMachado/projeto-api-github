const screen = {
  userProfile: document.querySelector(".profile-data"),

  renderUser(user) {
    this.userProfile.innerHTML = `
        <div class="info">
          <img src="${user.avatarUrl}" alt="foto do perfil do usuario"/>
          <div class="data">
              <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
              <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
          </div>
                    
          <div class="numberFollowers">
            <div>
                <p>Seguindo &#128101</p>
                <h2 class="following">${user.numberFollowing} </h2> 
            </div>
            <div>
                <p>Seguidores &#128101</p>
                <h2 class="followers">${user.numberFollowers} </h2> 
            </div>
          </div>     
        </div>  `;

    let repositoriesItens = "";
    user.repositories.forEach(function (repo) {
      if (repo.language === null) {
        repositoriesItens += `
               <li>
                 <a href="${repo.html_url}" target="_blank">${repo.name}
                 <div>
                   <p> &#127860; ${repo.forks_count}</p>
                   <p> &#11088; ${repo.stargazers_count}</p>
                  <p> &#128064; ${repo.watchers_count}</p>
                  </div></a>
                  </li>
                `
      } else {
        repositoriesItens += `
               <li>
                 <a href="${repo.html_url}" target="_blank">${repo.name}
                 <div>
                   <p> &#127860; ${repo.forks_count}</p>
                   <p> &#11088; ${repo.stargazers_count}</p>
                  <p> &#128064; ${repo.watchers_count}</p>
                   <p>	&#x1F4BB; ${repo.language}</p> 
                 </div></a>
               </li>
             `;
      }
    });
    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
                      <div class="repositories section"> 
                          <h2>Repositórios</h2>
                          <ul>${repositoriesItens}</ul>
                      </div>
                  `;
    }

    let activitiesItens = "";
    user.activities.forEach(
      (activity) =>
        (activitiesItens += `
              <li>            
                <div class="activity">  
                  <p> ${activity.repo.url}:</p>
                  <p> ${activity.type}</p>
                </div>
              </li>
            `)
    );
    if (user.activities.length > 0) {
      this.userProfile.innerHTML += `
                      <div class="activities section"> 
                          <h2>Atividades</h2>
                          <ul>${activitiesItens}</ul>
                      </div>
                  `;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};

export { screen };
