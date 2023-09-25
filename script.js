const jokesBtn = document.getElementById("joke-btn");
const jokesEl = document.getElementById("joke");

function jokesGen() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokesEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokesEl.innerHTML = 'Something went wrong :('
      }
    }
    //   const data = JSON.parse(this.responseText);

  };
  xhr.send();
}

jokesBtn.addEventListener("click", jokesGen);
document.addEventListener('DOMContentLoaded', jokesGen)