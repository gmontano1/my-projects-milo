# Lesson 04 — Make It Do Something (JavaScript)

Welcome back! So far your page can hold words (HTML) and look nice (CSS). Now we give it **wiring** — the electricity that makes things happen.

Think of it like a house:

| Part | What it is | What it does |
| --- | --- | --- |
| HTML | The structure | Holds everything up |
| CSS | The paint & furniture | Makes it look good |
| JavaScript | The electricity | Makes things happen when you interact |

In this lesson you will add a **button** that actually does something when you click it. That is your page coming alive.

---

## Two words to know first

MILO will explain each in one plain sentence. Read them once, then keep going.

- An **event** is something the user does that the page can notice — like a click, the same way a doorbell is an event that tells you someone is at the door.
- A **function** is a named set of steps you save so you can run them whenever you want — like a recipe card you can grab and follow any time.

So the plan is simple: when the **click event** happens, run our **function**.

---

## Step 1 — Open your project

Open the same folder you have been building in with Claude Code — that's the window where MILO lives. You should already have your `index.html` from [lessons/02-your-first-web-page.md](02-your-first-web-page.md) and your style from [lessons/03-add-style-css.md](03-add-style-css.md).

Good. You're ready.

---

## Step 2 — Ask MILO to build a simple button

Copy and paste the prompt below to MILO. The prompt is your way of asking; the code MILO gives back is what you'll type yourself.

Paste this to MILO:

```text
I'm a total beginner learning to code. In my index.html, add a button
that says "Click me". When I click it, show a friendly message on the
page (not a pop-up). Please put the JavaScript in a <script> tag at the
bottom of the page. Explain each line to me in one short sentence, in
plain English. Keep it small — one button, one message.
```

When MILO writes the code, **read the explanation**, then type the code into your file yourself. You learn far more by typing than by pasting.

---

## Step 3 — See it work

Open `index.html` in your browser (double-click the file, or ask MILO how to open it). Click your button.

Did the message appear? 🎉 That is an **event** (your click) running a **function** (the steps that show the message). You just made your first interactive thing.

If nothing happens, that's normal — everyone hits this. Paste this to MILO:

```text
I clicked my button but nothing happened. Here is my index.html:
[paste your file]. What is wrong, and how do I fix it? Explain simply.
```

MILO will read the error with you and walk you through the fix.

---

## Step 4 — Make it yours (the fun part)

A button that shows one message is just the start. Try changing what it does. Pick **one** idea and ask MILO to help:

- Make the button **count your clicks** and show the number.
- Make it **change the page color** each time you click.
- Make it show a **different message** each click.
- Make the button **change its own text** after you click it.

A prompt you can type for any of these:

```text
Right now my button shows a message. Instead, I want it to [describe
your idea in your own words]. Change the JavaScript to do that and
explain what changed. Keep it beginner-friendly.
```

Change one thing. See what happens. Break it, fix it, repeat. That is exactly how real coders learn — and MILO is right there with you the whole time.

---

## 🎉 Milestone: your page is alive

You built something that **reacts to you**. That is the heart of every app, game, and website you've ever used — including the real app you'll help test soon, **GetAdvice**. GetAdvice is MILO's friendly face, and it's a real app you'll get to polish with your feedback. When you tap a button in GetAdvice and something happens, that's this same idea, just bigger. Now you know the trick behind it.

**Your milestone:** your page now has structure, style, and wiring. It's alive.

---

## Next up

Ready to build something entirely your own, from scratch, with MILO helping?

Go to **[lessons/05-your-own-project.md](05-your-own-project.md)**.
