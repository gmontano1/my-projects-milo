# Lesson 06 — Saving Your Work with Git 💾

Welcome back! In [lessons/05-your-own-project.md](05-your-own-project.md) you built a real thing from your own idea. You added style. You made it do something when you click. That is a lot.

Now let's make sure you never lose any of it.

This lesson has one job: teach you how to **save your work in a way that remembers everything and backs it up online**. And the best part? You will do it by simply asking MILO.

---

## What is git?

Think about a video game. When you reach a checkpoint, the game saves. If something goes wrong later, you go back to that checkpoint instead of starting over.

**Git is a checkpoint system for your code.**

Every time you save with git, it takes a snapshot of your files. It remembers:

- what changed
- when it changed
- a short note about why

So git is not just a save button. It is a save button **with a memory**. You can look back at every checkpoint you ever made.

---

## What is GitHub?

Git lives on your computer. But a computer can break, or get lost. That would be sad.

**GitHub is a place on the internet that keeps a copy of your checkpoints.**

Think of it like a cloud photo album. Your photos are on your phone, but a copy is safe online too. If your phone dies, the photos are still there.

GitHub does that for your code. It is also how people **share** projects. In fact, this whole learning repo lives on GitHub. You are already a **collaborator** on it, which is a fancy word for \"someone who is allowed to help.\"

| Word | Everyday meaning |
|------|------------------|
| **git** | A save button that remembers every save |
| **GitHub** | A safe copy of your saves, online, that others can see |
| **repo** | A project folder that git is watching (short for \"repository\") |
| **collaborator** | A person who is allowed to add to a repo |

There is more on these words in [glossary.md](../glossary.md) whenever you want a refresher.

---

## The three little steps (so you know what is happening)

When you save work with git, three small things happen in order. You do **not** need to memorize the commands. But it helps to know the names, so when MILO explains it, the words feel friendly.

1. **Add** — you pick which changed files to include in this snapshot. Like choosing which photos go in the album.
2. **Commit** — you take the snapshot and write a short note about it. Like pressing save and giving it a title.
3. **Push** — you send the snapshot up to GitHub. Like syncing your album to the cloud.

Add, commit, push. That is the whole trip.

---

## The easy, safe way: just ask MILO 🌟

Here is the good news. You do not have to type any of those commands yourself. Because you are working inside Claude Code, you can just **ask, in plain words**, and MILO will do the three steps for you.

Open Claude Code in your project and paste this:

```text
Please save my work with git.

Before you do anything, explain in simple words what you are about to
do, step by step. Then show me which files changed. Then add, commit,
and push my work to GitHub. Use a short, clear commit message that
describes what I changed today.
```

That is it. MILO will walk through add, commit, and push, and tell you what each step did.

---

## Safety first: MILO explains before it acts 🛡️

This part is important, so read it slowly.

MILO will **tell you what it is about to do before it does it**. You are always in control. If anything looks confusing, you do not have to say yes.

A good habit is to ask MILO to pause and explain. Try this if you ever feel unsure:

```text
Wait, before you save anything, list every file that changed and tell
me in one sentence what each change does. Do not push yet. I will tell
you when I am ready.
```

Git almost never loses work. Because it remembers every checkpoint, mistakes are easy to undo. But going slowly and understanding each step is how you build real confidence. There is no rush.

---

## Do it now ✅

Let's actually save today's work.

1. Make sure you have made at least one small change to your project (even fixing a typo counts).
2. Paste the first prompt above into Claude Code.
3. Read MILO's explanation of the three steps as it goes.
4. When it finishes, MILO will tell you the push succeeded.

Want to see the proof? Ask MILO:

```text
Give me the link to my project on GitHub so I can see my saved work
in the browser.
```

Open that link. Your files are there, on the internet, backed up and safe.

---

## 🎉 Milestone: your work is saved on GitHub

Stop and feel this for a second.

Your code is no longer only on your computer. It has checkpoints that remember its history, and a safe copy online that will not disappear. That is exactly how professional developers protect their work every single day.

You now know how to keep everything you build. That changes everything.

---

## What's next

You can build, and you can save. Now for something surprising: you can help make a **real app better**, even before you write a single new feature.

You are going to help polish an app called **GetAdvice** by testing it and telling the team what you find. Doing that well is a genuine skill, and it is your next lesson.

➡️ Continue to **[lessons/07-giving-good-feedback.md](07-giving-good-feedback.md)**.
