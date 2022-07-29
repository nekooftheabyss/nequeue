/**
 * Queue
 */
export class Nequeue<T> {
  /**
   * Queue data
   */
  #data: T[];
  constructor() {
    this.#data = [];
  }
  get size(): number {
    return this.#data.length;
  }
  /**
   * Add an item to the end of the queue.
   * @param {T} v Value to add to the end of the queue.
   * @returns
   */
  add(v: T): number {
    return this.#data.push(v);
  }
  array(): T[] {
    return this.#data;
  }
  /**
   * Return the nth element of the queue.
   * @param pos Position to get data.
   * @returns Item at specified index.
   */
  at(pos: number): T | undefined {
    if (pos > (this.#data.length - 1)) pos = pos % (this.#data.length - 1);
    if (pos < 0) pos = (this.#data.length) + (pos % (this.#data.length - 1));
    const v = this.#data.splice(pos, 1)[0];
    return v;
  }
  encore(): boolean {
    if (!this.#data.length) return false;
    this.#data = this.#data.concat(this.#data);
    return true;
  }
  /**
   * Check whether every element in the map satisfies a function.
   * @param fn Function to run on every element.
   * @returns True or false
   */
  every(fn: (v: T) => boolean): boolean {
    return this.#data.every(fn);
  }
  /**
   * Filter elements in the queue that do not satisfy the function.
   * @param fn Function to be passed.
   * @returns Queue with elements that passed.
   */
  filter(fn: (v: T) => boolean): Nequeue<T> {
    const newQ = new Nequeue<T>();
    for (const v of this.#data) {
      if (fn(v)) {
        newQ.add(v);
      }
    }
    return newQ;
  }
  /**
   * Pop an item from the queue.
   * @param fn Function to be passed.
   * @returns A value from the queue. If none found, returns undefined.
   */
  find(fn: (v: T) => boolean): T | undefined {
    const item = this.#data.find(fn);
    if (!item) return undefined;
    const index = this.#data.indexOf(item);
    return this.#data.splice(index)[0];
  }
  /**
   * Take out the first element in the queue and push it to the last.
   * @returns First element of the queue.
   */
  kick(): T | undefined {
    const v = this.pop();
    if (!v) return undefined;
    this.#data.push(v);
    return v;
  }
  /**
   * Map the queue into another type.
   * @param fn Function for mapping.
   * @returns {T2[]} Array.
   */
  map<T2>(fn: (v: T) => T2): Nequeue<T2> {
    const q = new Nequeue<T2>();
    for (const v of this.#data) {
      q.add(fn(v));
    }
    return q;
  }
  /**
   * Take out the first element in the queue and return it.
   * @returns The first element from the queue.
   */
  pop(): T | undefined {
    return this.#data.shift();
  }
  /**
   * Reduce elements into a single instance.
   * @param fn Reducer function.
   * @param initial Initial value passed to the reducer.
   * @returns Reducer's output.
   */
  reduce<T1>(fn: (acc: T1, current: T) => T1, initial: T1) {
    return this.#data.reduce<T1>(fn, initial);
  }
  /**
   * Shuffle the queue.
   * @returns {Nequeue<T>} shuffled queue.
   */
  shuffle() {
    return this.sort(() => Math.random() - 0.5);
  }
  /**
   * Check whether at least one element in the map satisfies a function.
   * @param fn Function to run on every element.
   * @returns True or false
   */
  some(fn: (v: T) => boolean): boolean {
    return this.#data.some(fn);
  }
  /**
   * Sort elements in the queue.
   * @param fn Function to use for sorting.
   * @returns {Nequeue<T>} sorted queue.
   */
  sort(fn: (v1: T, v2: T) => number = () => 0): Nequeue<T> {
    this.#data.sort((a, b) => fn(a, b));
    return this;
  }
  toString(): string {
    return `Queue[${this.#data.length}]`;
  }
  toJSON(): T[] {
    return this.#data;
  }
  valueOf(): T[] {
    return this.#data;
  }
}
