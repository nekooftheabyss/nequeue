// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class Nequeue {
    #data;
    constructor(){
        this.#data = [];
    }
    add(v) {
        return this.#data.push(v);
    }
    array() {
        return this.#data;
    }
    at(pos) {
        if (pos > this.#data.length - 1) pos = pos % (this.#data.length - 1);
        if (pos < 0) pos = this.#data.length + pos % (this.#data.length - 1);
        const v = this.#data.splice(pos, 1)[0];
        return v;
    }
    encore() {
        if (!this.#data.length) return false;
        this.#data = this.#data.concat(this.#data);
        return true;
    }
    every(fn) {
        return this.#data.every(fn);
    }
    filter(fn) {
        const newQ = new Nequeue();
        for (const v of this.#data){
            if (fn(v)) {
                newQ.add(v);
            }
        }
        return newQ;
    }
    find(fn) {
        const item = this.#data.find(fn);
        if (!item) return undefined;
        const index = this.#data.indexOf(item);
        return this.#data.splice(index)[0];
    }
    kick() {
        const v = this.pop();
        if (!v) return undefined;
        this.#data.push(v);
        return v;
    }
    map(fn) {
        const q = new Nequeue();
        for (const v of this.#data){
            q.add(fn(v));
        }
        return q;
    }
    pop() {
        return this.#data.shift();
    }
    reduce(fn, initial) {
        return this.#data.reduce(fn, initial);
    }
    shuffle() {
        return this.sort(()=>Math.random() - 0.5);
    }
    sort(fn = ()=>0) {
        this.#data.sort((a, b)=>fn(a, b));
        return this;
    }
    toString() {
        return `Queue[${this.#data.length}] {${this.#data}}`;
    }
    toJSON() {
        return this.#data;
    }
    valueOf() {
        return this.#data;
    }
}
export { Nequeue as Nequeue };
