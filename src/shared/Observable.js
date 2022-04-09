export default class Observable {
  _value = null;
  observers = [];

  constructor(initialValue) {
    this._value = initialValue;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer(this._value);
    });
  }
}
