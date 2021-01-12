
export const player = {
  me: {
    name: 'あなた',
    remain: 2,
    raise: null,
    isTurn: true,
    img: {
      left: `./images/me/left/%s.svg`,
      right: `./images/me/right/%s.svg`,
    },
  },
  opp: {
    name: '相手',
    remain: 2,
    raise: null,
    isTurn: false,
    img: {
      left: `./images/opp/left/%s.svg`,
      right: `./images/opp/right/%s.svg`,
    },
  }
}

export const IMG_FMT = {
  LEFT: `./images/%s/left/%s.svg`,
  RIGHT: `./images/%s/right/%s.svg`,
}

export const STS = {
  NEUTRAL: {
    STATE: 'NEUTRAL',
    MSG: `「%s」の番です。`,
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
    MSG: `「%s」の勝ちです。`,
  },
}

export const NEUTRAL_STATUS = (() => {
  return [STS.NEUTRAL, STS.DRAWN, STS.FINISHED].map(status => status.STATE);
})();

export const FIGHTING_STATUS = (() => {
  return [STS.READY, STS.CALLED, STS.JUDGED].map(status => status.STATE)
})();

export const STATUS = {
  NEUTRAL: `NEUTRAL`,
  READY: `READY`,
  CALLED: `CALLED`,
  JUDGEDD: `JUDGEDD`,
  DRAWN: `DRAWN`,
  FINISHED: `FINISHED`,
}


// export const PLAYERS = {
//   USER: `user`,
//   OPP: `opp`,
// }

// export const MESSAGE = {
//   USER_TURN: `あなたの番です。`,
//   OPP_TURN: `相手の番です。`,
//   READY: `いっせーので…`,
//   GO: `%d！`,
//   JUDGEDD: `いぇーいっ！`,
//   DRAWN: `引き分け！`,
//   USER_WON: `あなたの勝ちです。`,
//   OPP_WON: `相手の勝ちです。`,
//   TURN: `%sの番です。`,
//   WINNNER: `%sの勝ちです。`
// }
