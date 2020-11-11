const nn = {
  baseSeparator: " ",
  tenSeparator: remainder => remainder > 0 ? " og " : "",
  endSeparator: remainder => remainder > 0 ? remainder < 99 ? " og " : ", " : "",
  under20: [
    "null",
    ["ein", "eitt"],
    "to",
    "tre",
    "fire",
    "fem",
    "seks",
    "sju",
    "åtte",
    "ni",
    "ti",
    "elleve",
    "tolv",
    "tretten",
    "fjorten",
    "femten",
    "seksten",
    "sytten",
    "atten",
    "nitten"
  ],
  tens: [
    "null",
    "ti",
    "tjue",
    "tretti",
    "førti",
    "femti",
    "seksti",
    "sytti",
    "åtti",
    "nitti"
  ],
  hundred: "hundre",
  thousand : "tusen",
  million: "million",
  million_plural: "millionar",
  billion: "milliard",
  billion_plural: "milliardar"
}

module.exports = nn
