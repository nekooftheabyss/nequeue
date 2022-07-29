# Nequeue
A queue-like wrapper around the JavaScript `array`.

## Properties And methods
- `size` (size of the queue)

Supports the following default Array methods:
- `at()` (now warps on either side of the queue, also removes the item from the array)
- `every()`
- `some()`
- `find()` (also removes the item from the queue)
- `filter()`
- `map()`
- `sort()`
- `pop()` (actually implements `shift()` rn. Use `at(-1)` for the original `pop()`)

Newer methods:
- `add()` (akin to `Array#push`)
- `array()` (read-only access to the private `#data` field)
- `kick()` (get the first element and move it to the last)
- `shuffle()` (sorts the queue in a random order)

## License
MIT as always.

## Support
[https://discord.gg/A69vvdK]