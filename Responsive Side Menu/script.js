let btn = document.getElementById('btn')
let sidebar = document.querySelector('.sidebar')
let searchBtn = document.querySelector('.bx-serach')

btn.onclick = () => {
  sidebar.classList.toggle('active')
}

searchBtn.onclick = () => {
  sidebar.classList.toggle('active')
}
