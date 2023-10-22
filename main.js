const btn = document.getElementById("btn");
const search = document.getElementById("search")
const users = document.getElementById("users")
const reset = document.getElementById("reset")

const searchUser = async () => {
  try {
    const username = search.value
    const res = await axios.get(`https://api.github.com/users/${username}`)
    showUser(res.data)
    console.log(res.data)
  } catch (err) {
    console.error(err);
  }
};

const showUser = (user) => {
  users.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
    <div class="card-header">${user.name}</div>
    <div class="card-body">
      <h4 class="card-title">Public repositories of the user: ${user.public_repos}</h4>
      <img style="width: 285px" src="${user.avatar_url}" alt="">
    </div>
  </div>`
};

const resetCard = () => {
  users.innerHTML = ""
  search.value = ""
}

btn.addEventListener("click", searchUser)
reset.addEventListener("click", resetCard)