export default class Fight {
  constructor(userFingers, oppFingers) {
    this._round = 1;
    this._totalLife = userFingers + oppFingers;
    this._isUserTurn = true;

    this._callNum = null;

    this._userFingers = userFingers;
    this._userCall = null;
    this._userRaise = null;

    this._oppFingers = oppFingers;
    this._oppCall = null;
    this._oppRaise = null;

    console.group('this._userFingers');
    console.log(this._userFingers);
    console.groupEnd();
    console.group('this._oppFingers')
    console.log(this._oppFingers)
    console.groupEnd();
    console.group('this._totalLife')
    console.log(this._totalLife)
    console.groupEnd();
  }

  getCallNum() {
    console.group('getCallNum()')
    console.log(this._callNum)
    console.groupEnd();
    return this._callNum;
  }
  setCallNum(num = null) {
    console.group('setCallNum', num)
    console.log(this._callNum)
    this._callNum = num;
    console.log(this._callNum)
    console.groupEnd();
  }

  /**
   * User
   */
  getUserFingers() {
    console.group('getUserFingers()')
    console.log(this._userFingers)
    console.groupEnd();
    return this._userFingers;
  }

  setUserFingers(num = null) {
    console.group('setUserFingers', num)
    console.log(this._userFingers)
    this._userFingers = num;
    console.log(this._userFingers)
    console.groupEnd();
  }

  getUserCall() {
    console.group('getUserCall()')
    console.log(this._userCall)
    console.groupEnd();
    return this._userCall;
  }
  setUserCall(num = null) {
    console.group('setUserCall', num)
    console.log(this._userCall)
    this._userCall = num;
    console.log(this._userCall)
    console.groupEnd();
  }

  getUserRaise() {
    console.group('getUserRaise()')
    console.log(this._userRaise)
    console.groupEnd();
    return this._userRaise;
  }
  setUserRaise(num = null) {
    console.group('setUserRaise', num)
    console.log(this._userRaise)
    this._userRaise = num;
    console.log(this._userRaise)
    console.groupEnd();
  }

  /**
   * Opponent
   */
  getOppFingers() {
    console.group('getOppFingers()')
    console.log(this._oppFingers)
    console.groupEnd();
    return this._oppFingers;
  }
  setOppFingers(num = null) {
    console.group('setOppFingers', num)
    console.log(this._oppFingers)
    this._oppFingers = num;
    console.log(this._oppFingers)
    console.groupEnd();
  }

  getOppCall() {
    return this._oppCall;
  }
  setOppCall(num = null) {
    console.group('setOppCall', num)
    console.log(this._oppCall)
    this._oppCall = num;
    console.log(this._oppCall)
    console.groupEnd();
  }

  getOppRaise() {
    return this._oppRaise;
  }
  setOppRaise() {
    console.group('setOppRaise')
    console.log(this._oppRaise)
    const min = 0;
    const max = this._oppFingers;
    this._oppRaise = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(this._oppRaise)
    console.groupEnd();

  }


  judge() {
    console.log(this._callNum);
    console.log(this._userRaise);
    console.log(this._oppRaise);
    if (this._callNum === this._userRaise + this._oppRaise) {
      console.log('same');
      if (this._isUserTurn) {
        this._userFingers = this._userFingers - 1;
      } else {
        this._oppFingers = this._oppFingers - 1;
      }
    }
    console.group('userFingers, oppFingers')
    console.log(this._userFingers, this._oppFingers)
    console.groupEnd();
  }
  play() {

  }

  changeTurns() {
    this._isUserTurn = !!this._isUserTurn;
    this.setCallNum()
    this.setUserRaise()
    this.setOppRaise()
  }

  roundUp() {
    this._round++;
  }

  getCrrentRound() {
    return this._round;
  }

}
