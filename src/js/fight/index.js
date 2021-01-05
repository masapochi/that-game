import Fight from "./Fight.js";

let totalCount = 4;
let userLife = 2;
let oppLife = 2;
let userThumbUp = null;
let oppThumbUp = null;
const callBtns = document.querySelectorAll('.call-btn')
const fingerBtns = document.querySelectorAll('.finger-btn')
const fightBtn = document.getElementById('js-fight-btn')


const fight = new Fight(userLife, oppLife)

console.group('user-choice')
fight.setUserThumbUp(1);
console.log(fight.getUserThumbUp())
console.groupEnd();

console.group('opp-choice')
fight.setOppThumbUp();
console.log(fight.getOppThumbUp())
console.groupEnd();

fight.judge()

console.group('user-life')
console.log(fight.getUserLife())
console.groupEnd();

console.group('opp-life')
console.log(fight.getOppLife())
console.groupEnd();



callBtns.forEach(callBtn => {
  callBtn.addEventListener('click', e => {
    const num = e.target.dataset.num;
    toggleActive(e)
    setUserThumbUp(num)

  }, false)
})
fingerBtns.forEach(fingerBtn => {
  fingerBtn.addEventListener('click', e => {
    const num = e.target.dataset.num;
    toggleActive(e)

  }, false)
})

const toggleActive = (e) => {
  for (const sibling of e.target.parentNode.children) {
    if (sibling !== e.target) sibling.classList.remove('active')
  }
  e.target.classList.add('active')
}
const setUserThumbUp = (num = null) => {
  userThumbUp = num;
}



const setOppThumbUp = (totalCount, userCount, oppCount) => {
  const max = userCount + oppCount;
}
const disableNumBtn = (totalCount) => {

}
