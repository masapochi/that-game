export const PLAYERS = {
  USER: `user`,
  OPP: `opp`,
}

export const MESSAGE = {
  USER_TURN: `あなたの番です。`,
  OPP_TURN: `相手の番です。`,
  STARTED: `いっせーので…`,
  CALLED: `%d！`,
  DECIDED: `いぇーいっ！`,
  DRAWN: `引き分け！`,
  USER_WON: `あなたの勝ちです。`,
  OPP_WON: `相手の勝ちです。`,
  TURN: `%sの番です。`,
  WINNNER: `%sの勝ちです。`
}

export const STATUS = {
  DEFAULT: `DEFAULT`,
  STARTED: `STARTED`,
  CALLED: `CALLED`,
  DECIDED: `DECIDED`,
  DRAWN: `DRAWN`,
  FINISHED: `FINISHED`,
}

export const IMAGE_FORMAT = {
  LEFT: `./images/%s/left/%s.svg`,
  RIGHT: `./images/%s/right/%s.svg`,
}
export const TEST = {
  a: 'aaa',
  b: 'bbb'
}

export const player = {
  me: {
    name: 'あなた',
    remain: 2,
    raise: null,
    isTurn: true,
    img: {
      left: `./images/user/left/%s.svg`,
      right: `./images/user/right/%s.svg`,
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
