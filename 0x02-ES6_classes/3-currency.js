export default class Currency {
  /**
   * implements a currency class with params code and name
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // implement a getter for attribute code
  get code() {
    return this._code;
  }

  // implement a setter for code
  set code(cd) {
    if (typeof cd === 'string') this.code = cd;
    else throw new TypeError('Code must be a string');
  }

  // implement a getter for name
  get name() {
    return this._name;
  }

  // implement a setter for name
  set name(nm) {
    if (typeof nm === 'string') this.name = nm;
    else throw new TypeError('Name must be a string');
  }

  /**
   * displayFullCurrency - displays full currency
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
