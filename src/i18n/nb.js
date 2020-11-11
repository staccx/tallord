const nb = {
  baseSeparator: " ",
  tenSeparator: remainder => remainder > 0 ? " og " : "",
  endSeparator: remainder => remainder > 0 ? remainder < 99 ? " og " : ", " : "",
  under20: [
    "null",
    ["én", "ett"],
    "to",
    "tre",
    "fire",
    "fem",
    "seks",
    "syv",
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
  million_plural: "millioner",
  billion: "milliard",
  billion_plural: "milliarder"
}
modules.exports = nb
