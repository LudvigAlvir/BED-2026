---
header: "Lesson 1.3: CSS"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# CSS

---

## What is CSS?

---

## Syntax

```css
/*selector */
div {
  /*Property*/
  color: red; /*value */
}
```

---

## Selectors

```css
div {
  color: red;
}
```

```css
.class {
  color: blue;
}
```

```css
#id {
  color: yellow;
}
```

---

## Selecting multiple

```css
h1,
h2,
h3,
h4 {
  color: darkgrey;
}
```

---

## Text

- font-family
- font-size
- font-weight
- letter-spacing
- line-height

---

## Sizing

```css
.box {
  height: 200px;
  width: 200px;
  background-color: purple;
}
```

---

## Responsive sizing

```css
.box {
  height: 200px;
  width: 50%;
  min-width: 200px;
  max-width: 400px;
  background-color: purple;
}
```

---

## Positioning: z-index

```css
#background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
```
