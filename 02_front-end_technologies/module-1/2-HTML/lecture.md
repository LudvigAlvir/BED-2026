---
header: "Lesson 1.2: HTML"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# HTML

---

## Buttons

```html
<button onclick="alert('Button clicked')">Click me</button>
```

---

## buttons

```html
<button onclick="myFunction()">Click me</button>

<script>
  function myFunction() {
    alert("Button clicked");
  }
</script>
```

---

## buttons

```html
<button id="btn">Click me</button>

<script>
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    alert("Button clicked");
  });
</script>
```

---

## Lists

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

---

## Lists

```html
<ol>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
```

---

## Lists

```html
<dl>
  <dt>Skateboarding</dt>
  <dd>A sport where people roll around on wooden boards</dd>
  <dt>Rollerblading</dt>
  <dd>A sport where people roll around on their own shoes</dd>
</dl>
```

---

## Tables

```html
<table>
  <tr>
    <th>col-1</th>
    <th>col-2</th>
    <th>col-3</th>
  </tr>
  <tr>
    <td>val-1</td>
    <td>val-2</td>
    <td>val-3</td>
  </tr>
</table>
```

---

## Adding some styling

```css
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  padding: 0.5rem;
}
th {
  border: 1px solid black;
  padding: 0.5rem;
}
```

---

## Styling

```css
.common {
  margin: 10px;
  padding: 10px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  max-width: 500px;
  min-width: 100px;
  background-color: white;
  border: 1px solid black;
}
```

