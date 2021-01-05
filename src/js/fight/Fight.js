export default class Fight {
  constructor(myCount, oppCount) {
    this._myChoice = null;
    this._oppChoice = null;
    this._myCount = myCount;
    this._oppCount = oppCount;
    this._remainCount = myCount + oppCount;
    console.group('this._myCount');
    console.log(this._myCount);
    console.groupEnd();
    console.group('this._oppCount')
    console.log(this._oppCount)
    console.groupEnd();
    console.group('this._remainCount')
    console.log(this._remainCount)
    console.groupEnd();
  }

  getMyChoice() {
    return this._myChoice;
  }
  setMyChoice(num = null) {
    this._myChoice = num;
  }

  getOppChoice() {
    return this._oppChoice;
  }
  setOppChoice() {
    const min = 0;
    const max = 0
    this._oppChoice = Math.random()
  }

}
