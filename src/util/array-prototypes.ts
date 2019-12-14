Array.prototype.pushUnique = function<T>(val: T) {
  if(!this.includes(val)) {
    this.push(val);
  }
}

Array.prototype.pushAll = function<T>(values: Array<T>) {
  values.forEach((val: T) => {
    this.push(val);
  });
}
 
interface Array<T> {
  pushUnique: (val: T) => void;
  pushAll: (values: Array<T>) => void;
}