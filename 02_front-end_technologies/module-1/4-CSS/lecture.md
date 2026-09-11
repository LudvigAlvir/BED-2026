---
header: "Lesson 1.4: CSS"
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

<style>
    
    .margin{
        border: 1px dotted black;
        text-align: center;
    }
    .border{
        background-color:grey;
    }
    .padding{
        background-color: #ddd;
    }
    .padding,.content,.border,.margin{
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem
    }
    .content{
        background-color: white;
        font-weight: bold;
    }
</style>

## Box model

<div class="margin">
  margin
<div class="border">border
<div class="padding">padding
<div class="content">content</div>
</div>
</div>
</div>

---

## margins

```css
.all-sides {
  /* 12px all sides */
  margin: 12px;
}
.left-and-right {
  /* 12px left and right */
  margin-left: 12px;
  margin-right: 12px;
}
.centered {
  /* centers the element* */
  margin: auto;
}
```

---

## Borders

```css
.small-border {
  /*      size type color*/
  border: 1px solid black;
}
.border-bottom {
  border-bottom: 1px solid black;
}
```

---

## border-radius

```css
.rounded {
  border-radius: 12px;
}
.circle {
  border-radius: 50%;
}
```

---

## Floating elements

```css
#portrait {
  float: right;
  width: 200px;
  height: 200px;
  background-color: aqua;
}
```

---

## Positioning

- Static
- Relative
- Fixed
- Absolute
- Sticky

---

## Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```