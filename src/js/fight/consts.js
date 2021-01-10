export const PLAYER = {
  USER: `user`,
  OPP: `opp`,
}


export const IMAGE_FORMAT = {
  LEFT: `./images/%s/left/%s.svg`,
  RIGHT: `./images/%s/right/%s.svg`,
}

export const OPP_IMAGE_FORMAT = {
  LEFT: `./images/${PLAYER.OPP}/left/%s.svg`,
  RIGHT: `./images/${PLAYER.OPP}/right/%s.svg`,
}


export const MESSAGE = {
  USER_TURN: `あなたの番です。`,
  OPP_TURN: `相手の番です。`,
  START: `いっせーので…`,
  CALL: `%d！`,
  SETTLE: `いぇーいっ！`,
  TIE: `引き分け！`,
  FINISH: ``
}

export const STATUS = {
  NEUTRAL: `STATUS_NEUTRAL`,
  START: `STATUS_START`,
  CALL: `STATUS_CALL`,
  JUDGE: `STATUS_JUDGE`,
  SETTL: `STATUS_SETTL`,
  TIE: `STATUS_TIE`,
  FINISH: `STATUS_FINISH`,
}
