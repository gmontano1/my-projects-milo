# Lesson 02: Your First Web Page

Welcome back! In the last lesson (`lessons/01-how-the-web-works.md`) you learned what a web page is made of. Now you get to build one. A real one. Your own. 🎉

By the end of this short session, your name will be showing in a web browser because *you* typed the code that put it there.

Let's go.

## What you'll make

A tiny web page that says:

> Hi, my name is ___ and I'm learning to code

That's it. Small on purpose. Small is where every big thing starts.

## First, three new words

Before you type, let MILO hand you three words. You'll use them a lot, so let's make them friendly.

Think of a web page like a **sandwich**. Every part of a sandwich has a start and an end: top bread, filling, bottom bread. A web page is built the same way, out of pieces called **tags**.

| Word | Everyday meaning | What it looks like |
| --- | --- | --- |
| **tag** | A label that wraps a piece of your page, like the two slices of bread around a filling. Most come in pairs: one to open, one to close. | `<p>` opens, `</p>` closes |
| **h1** | The big **headline** at the top, like the title on the cover of a book. | `<h1>My Page</h1>` |
| **p** | A **paragraph**, a normal chunk of text, like a sentence inside that book. | `<p>Hello there.</p>` |

The little `/` in a closing tag (like `</p>`) just means "this part ends here." Opening bread, filling, closing bread.

That's all the theory. You'll understand it much better by *doing* it, so let's build.

## Step 1: Open Claude Code in your projects folder

You already have a folder called `my-projects/` (see `my-projects/README.md`). That's your workshop. Everything you build lives there.

Open Claude Code — that's the window where MILO lives — and make sure you're working inside `my-projects/`. If you're not sure, just ask MILO. Paste this:

```
I'm a total beginner. Am I currently working inside my my-projects folder? If not, please help me get there. Explain each step in plain words.
```

## Step 2: Ask MILO to guide you line by line

Here's the important part: **you are going to type the code yourself.** Not copy and paste a giant block. Type it. Your hands learn things your eyes skip over.

So instead of asking MILO to *write* the file, you'll ask MILO to *coach* you while you write it.

Paste this exact prompt into Claude Code:

```
I'm a complete beginner making my very first web page, and I want to type it myself so I actually learn.

Please guide me to create a file called index.html inside my my-projects folder. The page should show a big headline and one paragraph that together say: "Hi, my name is ___ and I'm learning to code" (I'll put my real name where the blank is).

Coach me line by line. For each line: tell me exactly what to type, then explain in one plain sentence what that line does and why. Use the words tag, h1, and p when they come up. Wait for me to type each part before moving on. Do NOT paste the whole finished file for me to copy. Keep it warm and simple, like you're teaching a 13-year-old.
```

Then follow along. Type each line as MILO tells you. Put your **real name** where the blank is.

If you get stuck or a line doesn't make sense, just say so:

```
I don't understand that line. Can you explain it a different way, with an example?
```

There are no silly questions here. Asking is how coding works.

## Step 3: Open your page in the browser

You made a file. But a file just sitting on your computer isn't a web page yet. It's more like a letter still inside its envelope. Opening it in a **browser** (Chrome, Safari, Edge, whatever you use) is what brings it to life.

Ask MILO how to do it. Paste this:

```
I saved index.html in my my-projects folder. How do I open it in my web browser so I can see it? Give me the simplest way for my computer, step by step.
```

Do what MILO says. In a moment, your own words will appear on the screen.

Take a good look. That text is there because *you* typed the code. Sit with that for a second. That's real.

## Step 4: Change it and see what happens

Now the fun part. A web page is not fragile or precious. It's clay. You can poke it.

Try these one at a time. After each change, **save the file**, then go to your browser and **refresh** (press the reload button, or `Cmd+R` on a Mac, `Ctrl+R` on Windows):

1. Change your name to something silly. Save. Refresh. See it update.
2. Change the paragraph to say what you had for breakfast. Save. Refresh.
3. Add a second `<p>` paragraph with anything you want. Not sure how? Ask MILO: `How do I add a second paragraph to my page?`

Change, then see, then change again. That loop is basically what coding *is*.

## Step 5: Break it on purpose (yes, really)

This might feel scary. It's actually the best trick in this whole course.

Go into your file and **delete one closing tag**. For example, turn `</p>` into just `p>`, or remove it completely. Save. Refresh the browser.

Something will look wrong.

That's not you failing. That's you *learning what that tag was doing.* You just discovered its job by taking it away.

Now fix it. Put the tag back exactly as it was. Save. Refresh. It works again.

If you can't get it back to normal, don't panic. Ask MILO:

```
I removed a tag from my index.html to see what would happen, and now the page looks wrong. Here is my file: [paste your file here]. Can you help me fix it and explain what broke?
```

Breaking and fixing is not a detour. It *is* the road. Every coder does this all day.

## 🎉 Milestone: your first web page is live

If your own name (or your breakfast) is showing in a web browser right now, **you just built and ran your first web page.** That's a genuine milestone. Most people never do this even once. You just did.

Two things to lock in the win:

- **Take a screenshot** of your page in the browser.
- **Share it with whoever gave you this repo.** Seriously. Send it. This is worth being proud of, and they'll want to see it. 😄

> By the way: this same "type it, see it, change it, break it, fix it" muscle is exactly what you'll use later when you help test the real GetAdvice app and give it feedback (see `feedback-getadvice/README.md`). GetAdvice is MILO's friendly face, and it's a real app you'll help polish. You're already training for it.

## What's next

You've got structure now: the frame of your page. Next, we make it *look* good, with colors, sizes, and fonts.

Go to `lessons/03-add-style-css.md` when you're ready.

See you there. 🎨
