---
header: "Lesson 1.1: HTML"
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

## Basic skeleton

```html
<!DOCTYPE html>
<html>
  <head>
    <title>App</title>
  </head>
  <body>
    <!--This is a comment-->
    Hello world!
  </body>
</html>
```

---

## HTML elements

```html
<!--Most HTML tags-->
<tag>content</tag>
<!--Tags with no content (eg. img, input)-->
<tag />
```

---

## Semantic HTML

- Why semantic elements
- Example of semantic elements

---

## Non-semantic HTML

- Why?

```html
<div>Hello</div>
<div>Hello <span>class!</span></div>
```

---

## Bad HTML

```html
<body>
  <div>
    <div>
      <a href="example.com">Link 1</a>
      <a href="example.com">Link 2</a>
    </div>
  </div>
  <div>main content</div>
  <div>Footer</div>
</body>
```

---

## Small improvement

```html
<body>
  <div id="header">
    <div id="nav">
      <a href="example.com">Link 1</a>
      <a href="example.com">Link 2</a>
    </div>
  </div>
  <div id="main">main content</div>
  <div id="footer">Footer</div>
</body>
```

---

## Good HTML

```html
<body>
  <header>
    <nav>
      <a href="example.com">Link 1</a>
      <a href="example.com">Link 2</a>
    </nav>
  </header>
  <main>main content</main>
  <footer id="footer">Footer</footer>
</body>
```

---

## Headings

```html
<h1>First</h1>
<h2>Second</h2>
<h3>Third</h3>
<h4>Fourth</h4>
<h5>Fifth</h5>
<h6>Sixth</h6>
```

Styling vs Semantics

---

## Paragraphs

<!--prettier-ignore-->
```html
<p>This is a piece of text</p>
<p>This is a piece of text     with        long     
        spaces  and 
newlines</p>

<pre>pre         tag</pre>
```

---

## Attributes

<!--prettier-ignore-->
```html
<tag attribute="value">content</tag>

<div id="div-1">Div 1</div>
<div class="bg-blue">blue div</div>
<div style="margin: 1rem; color:purple">styled div</div>
<img src="example.com" alt="Image of a dog" />
<i>
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" />
    </svg>
</i>
```

---

## Links

```html
<!--Link to external resource-->
<a href="https://google.com">Google</a>
<!--Link to this site-->
<a href="/profile">Profile</a>
<!--Relative link-->
<a href="./info">Info</a>
<!--Link to element-->
<a href="#footer">Scroll down</a>
```

---

## Task