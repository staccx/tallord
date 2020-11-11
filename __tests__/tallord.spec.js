import {tallord} from "../src/tallord"
import {TRILLION} from "../src/constants";
import nn from "../src/i18n/nn";

describe("tallord", () => {
  it("0-19", () => {
    expect(tallord(0)).toBe("null")
    expect(tallord(1)).toBe("én")
    expect(tallord(10)).toBe("ti")
    expect(tallord(19)).toBe("nitten")
  })
  it("Under 100", () => {
    expect(tallord(20)).toBe("tjue")
    expect(tallord(30)).toBe("tretti")
    expect(tallord(40)).toBe("førti")
    expect(tallord(50)).toBe("femti")
    expect(tallord(60)).toBe("seksti")
    expect(tallord(70)).toBe("sytti")
    expect(tallord(80)).toBe("åtti")
    expect(tallord(90)).toBe("nitti")
    expect(tallord(90)).toBe("nitti")
    expect(tallord(91)).toBe("nittién")
    expect(tallord(92)).toBe("nittito")
    expect(tallord(93)).toBe("nittitre")
    expect(tallord(94)).toBe("nittifire")
    expect(tallord(95)).toBe("nittifem")
    expect(tallord(96)).toBe("nittiseks")
    expect(tallord(97)).toBe("nittisyv")
    expect(tallord(98)).toBe("nittiåtte")
    expect(tallord(99)).toBe("nittini")
  })

  it("Under 1000", () => {
    expect(tallord(100)).toBe("ett hundre")
    expect(tallord(101)).toBe("ett hundre og én")
    expect(tallord(102)).toBe("ett hundre og to")
    expect(tallord(250)).toBe("to hundre og femti")
    expect(tallord(333)).toBe("tre hundre og trettitre")
    expect(tallord(494)).toBe("fire hundre og nittifire")
    expect(tallord(916)).toBe("ni hundre og seksten")
  })

  it("Under 10 000", () => {
    expect(tallord(1000)).toBe("ett tusen")
    expect(tallord(2400)).toBe("to tusen, fire hundre")
    expect(tallord(3568)).toBe("tre tusen, fem hundre og sekstiåtte")
    expect(tallord(5555)).toBe("fem tusen, fem hundre og femtifem")
    expect(tallord(6001)).toBe("seks tusen og én")
    expect(tallord(7019)).toBe("syv tusen og nitten")
  })

  it("Under 100 000", () => {
    expect(tallord(10000)).toBe("ti tusen")
    expect(tallord(24000)).toBe("tjuefire tusen")
    expect(tallord(35680)).toBe("trettifem tusen, seks hundre og åtti")
    expect(tallord(55555)).toBe("femtifem tusen, fem hundre og femtifem")
    expect(tallord(60001)).toBe("seksti tusen og én")
    expect(tallord(70019)).toBe("sytti tusen og nitten")
  })

  it("Under 1 000 000", () => {
    expect(tallord(100000)).toBe("ett hundre tusen")
    expect(tallord(240000)).toBe("to hundre og førti tusen")
    expect(tallord(356800)).toBe("tre hundre og femtiseks tusen, åtte hundre")
    expect(tallord(555555)).toBe("fem hundre og femtifem tusen, fem hundre og femtifem")
    expect(tallord(600001)).toBe("seks hundre tusen og én")
    expect(tallord(700019)).toBe("syv hundre tusen og nitten")
  })

  it("Under 10 000 000", () => {
    expect(tallord(1000000)).toBe("én million")
    expect(tallord(2400000)).toBe("to millioner, fire hundre tusen")
    expect(tallord(3568000)).toBe("tre millioner, fem hundre og sekstiåtte tusen")
    expect(tallord(5555555)).toBe("fem millioner, fem hundre og femtifem tusen, fem hundre og femtifem")
    expect(tallord(6000001)).toBe("seks millioner og én")
    expect(tallord(7000019)).toBe("syv millioner og nitten")
  })

  it("Over 1 000 000 000", () => {
    const billion = 1000 * 1000 * 1000
    expect(tallord(billion)).toBe("én milliard")
    expect(tallord(billion + 2400000)).toBe("én milliard, to millioner, fire hundre tusen")
    expect(tallord(billion * 10)).toBe("ti milliarder")
    expect(tallord(billion * 24)).toBe("tjuefire milliarder")
    expect(tallord(billion + 1)).toBe("én milliard og én")
  })

  it("String values", () => {
    expect(tallord("100000")).toBe("ett hundre tusen")
  })

  describe("Should throw if applicable", () => {
    it("max value", () => {
      expect(() => tallord(TRILLION)).toThrow()
    })
  })

  describe("Other locale", () => {
    it("Norwegian nynorsk", () => {
      const billion = 1000 * 1000 * 1000
      expect(tallord(1000, nn)).toBe("eitt tusen")
      expect(tallord(2 * billion + 1, nn)).toBe("to milliardar og ein")
    })
    it("Override", () => {
      expect(tallord(256, {
        ...nn,
        baseSeparator: "-",
        tenSeparator: () => "-"
      })).toBe("to-hundre-femtiseks")
    })
  })

})
