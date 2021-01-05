export default class Fight {
  constructor(userLife, oppLife) {
    this._round = 1;
    this._totalLife = userLife + oppLife;
    this._isUserTurn = true;

    this._userLife = userLife;
    this._userCall = null;
    this._userThumbUp = null;

    this._oppLife = oppLife;
    this._oppCall = null;
    this._oppThumbUp = null;

    console.group('this._userLife');
    console.log(this._userLife);
    console.groupEnd();
    console.group('this._oppLife')
    console.log(this._oppLife)
    console.groupEnd();
    console.group('this._totalLife')
    console.log(this._totalLife)
    console.groupEnd();
  }

  getUserThumbUp() {
    return this._userThumbUp;
  }
  setUserThumbUp(num = null) {
    this._userThumbUp = num;
  }

  getOppThumbUp() {
    return this._oppThumbUp;
  }
  setOppThumbUp() {
    const min = 0;
    const max = this._totalLife;
    this._oppThumbUp = Math.floor(Math.random() * (max - min + 1)) + min
  }

  getUserLife() {
    return this._userLife;
  }
  getOppLife() {
    return this._oppLife;
  }

  judge() {
    if (this._userThumbUp > this._oppThumbUp) {
      this._oppLife--;
    } else if (this._userThumbUp < this._oppThumbUp) {
      this._userLife--;
    }
    // console.log(this._userLife);
    // console.log(this._oppLife);
  }
  play() {

  }

  takeTurns() {
    this._isUserTurn = !!this._isUserTurn;
  }

  roundUp() {
    this._round++;
  }

  getCrrentRound() {
    return this._round;
  }

}
