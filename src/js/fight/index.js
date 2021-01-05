import Fight from "./Fight.js";

let totalCount = 4;
let myCount = 2;
let oppCount = 2;
let myChoice = null;
let oppChoice = null;
const numBtns = document.querySelectorAll('.num-btn')
const fightBtn = document.getElementById('js-fight-btn')

console.log(Math.random() * (4 - 3));



const fightModel = new Fight(myCount, oppCount)


numBtns.forEach(numBtn => {
  numBtn.addEventListener('click', e => {
    const num = e.target.dataset.num;
    toggleActive(e)
    setMyChoice(num)

    console.log(myChoice);
  }, false)
})

const toggleActive = (e) => {
  for (const sibling of e.target.parentNode.children) {
    if (sibling !== e.target) sibling.classList.remove('active')
  }
  e.target.classList.add('active')
}
const setMyChoice = (num = null) => {
  myChoice = num;
}

const fight = () => {
  // oppChoice = Math.random()
}

const setOppChoice = (totalCount, myCount, oppCount) => {
  const max = myCount + oppCount;
}
const disableNumBtn = (totalCount) => {

}
