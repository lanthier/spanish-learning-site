Array.prototype.pushUnique = function(val: any) {
  if(!this.includes(val)) {
    this.push(val);
  }
}

interface Array<T> {
  pushUnique: (val: any) => void;
}