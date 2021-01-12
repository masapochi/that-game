
export const PLAYERS = {
  me: {
    name: 'あなた',
    remain: 2,
    raise: null,
    isTurn: true,
    img: {
      left: '',
      right: '',
    },
  },
  opp: {
    name: '相手',
    remain: 2,
    raise: null,
    isTurn: false,
    img: {
      left: '',
      right: '',
    },
  }
}

export const IMG_FMT = {
  LEFT: `./images/%s/left/%s.svg`,
  RIGHT: `./images/%s/right/%s.svg`,
}

export const STATUS = {
  NEUTRAL: {
    STATE: 'NEUTRAL',
    MSG: `「%s」の番です！`,
  },
  READY: {
    STATE: 'READY',
    MSG: `いっせーので…`,
  },
  CALLED: {
    STATE: `CALLED`,
    MSG: `%d！`,
  },
  JUDGED: {
    STATE: `JUDGED`,
    MSG: `いぇーいっ！`,
  },
  DRAWN: {
    STATE: `DRAWN`,
    MSG: `引き分け！`,
  },
  FINISHED: {
    STATE: `FINISHED`,
    MSG: `「%s」の勝ちです！`,
  },
}

export const NEUTRAL_STATUS = (() => {
  return [STATUS.NEUTRAL, STATUS.DRAWN, STATUS.FINISHED].map(status => status.STATE);
})();

export const FIGHTING_STATUS = (() => {
  return [STATUS.READY, STATUS.CALLED, STATUS.JUDGED].map(status => status.STATE)
})();
