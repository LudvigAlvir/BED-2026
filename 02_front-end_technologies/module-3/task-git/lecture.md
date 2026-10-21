---
header: "Lesson 3.2: Git"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# Git

---

## Recap terminal

- cd
- ls
- mkdir
- touch
- rm
- code

---

## Recap git

- clone
- checkout
- add
- commit
- push
- merge
- pull request (no example command)
- merge conflict (no example command)

---

## Task

Do all tasks except create repo in the terminal

- Create a new github repo
- Create files:
- - index.html
- - js/script.js
- - css/style.css
- - README.md
- In the readme write a heading with your name
- Push the changes to github

---

## index.html

- Add your css and js file.
- Create a heading with "Form validation"
- Create a form where a user can fill in:
- - username
- - email
- - age

---

## style.css

- Add styling to the form so labels inputs and buttons are in a column
- Center the form on the page
- Change the distance between elements

---

## script.js

- Create a function that handles submit events on the form
- Create validation:
- - username must be longer than 5 characters
- - email must contain "@" and "."
- - Extra: must have two characters before "@", and between "@" and "." and after ".".
- - age must be over 18.

If one of the validations fail, log out which one.
if all validations pass log out: "success"

---

## Hosting the website

- GitHub + Netlify
