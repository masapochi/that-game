import Fight from "./Fight.js";

let totalCount = 4;
let userFingers = 2;
let oppFingers = 2;
let userRaise = null;
let oppRaise = null;
const callBtns = document.querySelectorAll('.call-btn')
const fingerBtns = document.querySelectorAll('.finger-btn')
const fightBtn = document.getElementById('js-fight-btn')


const fight = new Fight(userFingers, oppFingers)

// select call number
fight.setCallNum(4)
// select user thumb up number
fight.setUserRaise(2)

// logic... select opp thumb up number
fight.setOppRaise()

// fight
fight.judge();
// judge
fight.changeTurns()

// change turns


// console.group('user-raise')
// fight.setUserRaise(1);
// console.log(fight.getUserRaise())
// console.groupEnd();

// console.group('opp-raise')
// fight.setOppRaise();
// console.log(fight.getOppRaise())
// console.groupEnd();

// fight.judge()

// console.group('user-life')
// console.log(fight.getUserFingers())
// console.groupEnd();

// console.group('opp-life')
// console.log(fight.getOppFingers())
// console.groupEnd();



callBtns.forEach(callBtn => {
  callBtn.addEventListener('click', e => {
    const num = e.target.dataset.num;
    toggleActive(e)
    setUserRaise(num)

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
const setUserRaise = (num = null) => {
  userRaise = num;
}



const setOppRaise = (totalCount, userCount, oppCount) => {
  const max = userCount + oppCount;
}
const disableNumBtn = (totalCount) => {

}
