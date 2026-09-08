const text = "hello world";

const start = 5;
const end = 10;
console.log(text.slice(start, end));

let out = "";
for (let i = start; i < end; i++) {
  out += text[i];
}
console.log(out);
