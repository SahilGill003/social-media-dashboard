
const switchTheme = () => {

  const htmlElement = document.querySelector('[data-theme]');
  console.log(htmlElement);
  const currentTheme = htmlElement.getAttribute('data-theme');

  if (currentTheme === "dark") {
    htmlElement.setAttribute('data-theme', 'white');

  }
  else {
    htmlElement.setAttribute('data-theme', 'dark');
  }
}

document.querySelector('#theme-switch').addEventListener('click', () => {
  switchTheme();
})
