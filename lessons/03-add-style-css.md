# Lesson 03: Make It Look Good with CSS

You made a real web page in `lessons/02-your-first-web-page.md`. Nice work. Right now it *works*, but it probably looks a little plain, black text on a white page, like a page torn out of a notebook.

Time to dress it up. 🎨

## Structure and style

Here's the idea that makes this whole lesson click.

The HTML you wrote last time is the **structure** — the walls and rooms. It decides *what's there*: a headline, a paragraph.

**CSS** is the **paint and furniture**. It doesn't change what's there, it changes how it *looks*: the colors, the sizes, the fonts, where things sit on the page.

> **CSS** stands for a fancy phrase you can happily ignore for now. Just remember: HTML is the house, CSS is the paint and decor you put on it.

Same house, endless looks. That's the power you're about to get.

## Two new words: property and value

CSS talks in pairs. Every style you write is you picking a *thing to change* and *what to change it to*.

Think of ordering food. You pick the **thing** ("size") and the **choice** ("large"). CSS is exactly that.

| Word | Everyday meaning | Example |
| --- | --- | --- |
| **property** | The *thing* you want to change, like "size" or "color" on a menu. | `color` |
| **value** | *What you set that thing to*, your choice for it. | `blue` |

Put together, one CSS line looks like this:

```
color: blue;
```

That reads as: "the **property** `color`, set to the **value** `blue`." The `:` separates them, and the `;` at the end just means "this instruction is done." Like a period at the end of a sentence.

Here are five properties you'll play with today. You don't need to memorize them, you'll just *use* them:

| Property | What it changes |
| --- | --- |
| `background-color` | The color behind everything (the page's background) |
| `color` | The color of the text |
| `font-size` | How big the text is |
| `text-align` | Where text sits: `left`, `center`, or `right` |
| `font-family` | The style of the letters (the font) |

Okay, enough menu-reading. Let's cook.

## Step 1: Ask MILO to coach you, while you type

Same rule as last time: **you type it.** MILO coaches, your hands do the work. That's how it sticks.

Make sure Claude Code is working inside your `my-projects/` folder, next to the `index.html` you made in Lesson 02.

Now paste this exact prompt:

```
I'm a beginner. I have an index.html file with a headline and a paragraph. I want to add CSS to make it look nicer, and I want to type the CSS myself so I actually learn.

Please coach me line by line to style my page so that: the page background is a soft color I choose, the headline is a different color I choose, and everything on the page is centered.

For each line: tell me exactly what to type, then explain in one plain sentence what the property and value do. Wait for me after each part. Do NOT paste the whole finished style for me to copy blindly. Keep it warm and simple, like teaching a 13-year-old. Use the words property and value when they come up.
```

Follow along and type each piece. When MILO asks what colors you want, **pick your own.** This is your page. Make it yours.

If a line confuses you, always okay to say:

```
Wait, what does that line do? Can you explain it another way?
```

## Step 2: Save, then look

You know this move now from Lesson 02:

1. **Save** the file.
2. Go to your browser.
3. **Refresh** (`Cmd+R` on Mac, `Ctrl+R` on Windows).

Your page just got dressed. Different background, colored headline, everything centered. You did that.

## Step 3: The real skill, change, see, adjust

Here's the honest secret of styling: **nobody gets it perfect on the first try.** Not beginners, not pros. Everyone tweaks a number, looks, tweaks again.

That loop has a name in your head from now on: **change → see → adjust.**

Try it. One change at a time, save, refresh, look:

- Change your `background-color` to a different color. Too bright? Pick another.
- Bump the `font-size` up. Too big? Bring it back down. Keep nudging until it feels right.
- Switch `text-align` from `center` to `left` and back. Notice how the whole feel changes.
- Change the text `color`. Try a few until one looks good *to you*.

There's no single "correct" answer here. If *you* like how it looks, it's right.

Not sure what colors or fonts you're even allowed to use? Just ask:

```
What are some background-color values I can try? Give me a few friendly ones with their names.
```

```
How do I change the font-family to something rounder and more fun? Show me a couple of options.
```

Asking follow-up questions like this isn't cheating. It's exactly how working coders use MILO every day.

## Step 4: Break it, fix it (you know this one now)

Same brave move as last lesson. Go into your CSS and **misspell a property** on purpose: type `colr` instead of `color`. Save. Refresh.

That color won't apply anymore. The page just told you, out loud, that CSS is picky about spelling. Type the wrong word and the page quietly ignores you. Good to know!

Now fix it, change `colr` back to `color`, save, refresh. Back to beautiful.

Want to see it again? Try a different break: **delete one whole line** of your CSS (the entire line, top to bottom). Save, refresh. That one style disappears. Put the line back, and it returns. Each line is doing one job, and now you've watched it happen.

Stuck? Hand it to MILO:

```
I changed my CSS and now a style isn't working. Here's my file: [paste it]. What did I break, and how do I fix it?
```

## 🎉 Milestone: your page has a look

If your page now has a background color you chose, a headline color you chose, and centered text, **you just styled your first web page.** 🎉

You now know both halves of how every website on Earth is built:

- **HTML** = the structure (Lesson 02)
- **CSS** = the style (this lesson)

Lock in the win:

- **Take a screenshot** of your restyled page.
- **Compare them side by side** — the plain version next to the styled version tells the whole story of what you learned today.

> This "change → see → adjust" instinct you just practiced is the *exact* skill you'll lean on when you help polish the real GetAdvice app, spotting when something looks a little off and describing how to make it better. You're building that eye right now.

## What's next

Your page looks good. But it can't *do* anything yet, it just sits there. Next, we make it react to you: buttons that respond, text that changes when you click. That's where pages come alive.

Head to `lessons/04-make-it-interactive-js.md` when you're ready.

Proud of you. Onward. ✨
