---
name: writing-style
description: The Formester content writing style — voice, sentence mechanics, and structure patterns for every blog post and marketing page we draft. ALWAYS load this before writing or rewriting any content (content-draft loads it as step one). Built from Ankit's writing preferences plus patterns from Vivek Badani's blog posts.
---

# Formester writing style

How we write content on this site. `content-draft` must load this before drafting a single
sentence; `content-review` checks against it.

## The one-line test

**A seventh grader should read any sentence once and get it.** If a sentence needs a second
read, it's wrong. Rewrite it plainly instead of decorating it.

## Voice

1. **Talk with the reader, second person.** "You have a PDF. You want a form." Not "users
   who possess documents."
2. **Rhetorical questions pull the reader forward.** "How?" "Sounds familiar?" "Want more
   responses?" Use one to open a section or set up a why. (Vivek used these well —
   "Why do you need a form builder?", "Want to create forms that are more interactive?")
3. **Direct statements only.** No clever, indirect, aphorism-style lines. Bad: "The PDF was
   never the point. The answers are." Good: "You don't really need the PDF. You need the
   answers people write in it." If a line sounds like a poster, unpack it into plain words.
4. **Why before how.** Every section and every step starts with the reason it matters, then
   the instructions. (Vivek's pattern: each tip opens with what goes wrong without it.)
5. **Concrete over abstract.** Name the situation: the clinic intake form, the job
   application, the event sign-up. One real example beats three adjectives. Analogies are
   welcome when they make something abstract concrete.
6. **Honest and humble.** Say what the product doesn't do or when a different route is
   better ("if the form must stay a document, keep it a PDF"). Never over-claim a feature.
7. **Stats with sources.** A linked, specific number ("74% of companies use web forms for
   lead generation") earns trust. No made-up or unlinked stats — if we can't source it,
   we don't say it.

## Sentence mechanics (hard rules)

- **NO em dashes. Ever.** They read as an AI tell. Use a comma, a period, or parentheses.
  "Share it as a link, a QR code, or embed it." Not "Share it — link, QR, embed."
- **Short sentences, one idea each.** Mix in a longer one for rhythm, but when in doubt,
  split it.
- **Short, common words.** "use" not "utilize", "help" not "facilitate", "so" not
  "therefore". Jargon only when the reader needs the exact term.
- **Active voice.** "Formester reads the PDF", not "the PDF is read".
- **No filler or meta intros.** Never "In this blog, we will discuss…", "In today's
  fast-paced world…", "Let's dive in". Start with the reader's problem.
- **No hype words.** seamless, revolutionary, game-changing, effortless, empower, unlock.
- Parentheses for quick asides are fine. Bold for the few phrases that carry the point,
  not for keyword stuffing. **Never bold the target keyword or a feature name in body
  copy** ("**response validation in Google Forms**") — a reader gets nothing from it and
  it reads as SEO markup. Bold is for UI element names and rare genuine emphasis only.

## Claude-isms (banned — Ankit's feedback, Sep 2026)

These are words and patterns that read as AI-written. Never use them, and flag them in review:

- **"lands" / "land in"** for data or responses ("responses land in your dashboard").
  Say "arrive in", "are stored in", "show up in".
- **"honest" / "genuinely" as self-praise or framing** ("we'll be honest about", "genuinely
  good", "honest feedback"). Just state the fact or limitation. ("Honest pro/con" labels in
  review checklists are fine; the word in reader-facing copy is not.)
- **Numeric setup lines** that announce a count before the content: "Three decisions
  matter", "Two rules apply", "the same four walls", "gives you three views". Go straight
  into the content or use a plain lead-in ("Check these settings:").
- **Stock metaphor phrases:** "do the heavy lifting", "runs out of road", "if these bite
  you", "hitting walls", "steal these", "the easy half", "pays off", "out of the box".
  Say the plain thing instead.
- **Suspense one-liners as a cadence:** setup-then-reveal fragments ("There's one big
  catch here." / "The problem comes at the end." / a paragraph that is just "No.") and
  one-sentence paragraphs as the default rhythm. State the catch in the same paragraph;
  keep paragraphs 2 to 4 sentences by default. Once or twice is emphasis; constant use
  reads as AI content marketing.

- **Format announcers:** a standalone sentence that describes the shape of the next block
  instead of starting it: "Here is how it works, step by step.", "Let's break it down",
  "Here's how it works". Delete it and start the content; at most a plain lead-in
  ("Here's how:"). Avoid the phrase "step by step" everywhere, headings included.
- **Vague intensifiers:** "all the time", "more than you think", "more often than you'd
  think", "constantly" with no source. Cut it, or say who and why specifically.
- **Meta-commentary about other content:** "most guides get this wrong", "most articles
  skip this", "nobody talks about". Nobody checked most guides; it's the article marketing
  itself. State the distinction directly instead of posturing over competitors.
- **The comma-pivot twist sentence:** [relatable observation], and [contrarian turn].
  ("These two get mixed up all the time, and most guides answer the wrong one.") Rewrite
  as two plain sentences that say the useful thing: "People mix these up, and the fix is
  different for each. Figure out which one you have first."
- **Parallel-example stacking:** two or more sentences built on the same skeleton to
  create rhythm: "You ask for a phone number and get a name. You ask for an email
  address and get one with a typo." Merge the examples into one plain sentence: "When
  you ask for a phone number or email, you get a name or a typo that makes your message
  bounce." One example sentence is fine; a repeated frame is a drumbeat.
- **Invented-cost dramatization:** made-up specifics that raise the stakes: "costs you
  an afternoon", "after a hundred submissions", "eats your whole morning". The numbers
  and time costs are fabricated for punch. State the consequence plainly ("you end up
  fixing entries by hand later") or use a real, sourced number.
- **Pronoun-punch opener:** a short sentence whose only content is a back-reference to
  the previous paragraph: "Response validation in Google Forms prevents it.", "This
  fixes that." It withholds the substance for a beat. Lead with what the thing actually
  does ("Response validation lets you set rules an answer must follow before
  submission"), then state the benefit in the next sentence.
- **Abstract capability stacks:** a run of "can require / can accept / can check"
  statements where the actor is a field or feature: "An age field can require a number.
  An email field can require a valid format. A feedback box can require 50 characters."
  Grammatically active, but nobody is doing anything, so it reads passive. Replace the
  stack with ONE worked example where the reader is the actor: "If someone submits an
  email without an @, the form blocks it until they fix it." (This pairs with
  parallel-example stacking above; capability stacks usually commit both sins.)
- **Redundant restatement:** re-explaining a fact from an earlier paragraph in fresh
  wording ("blocks the submission until they fix it" … next paragraph: "refuses to
  accept the form until the answer is fixed"). Each fact gets said once. If the second
  pass adds one new detail (the error shows in red under the question), move that detail
  into the first mention and delete the rest. Before handing over a draft, read adjacent
  paragraphs asking: does this paragraph tell the reader anything the last one didn't?
- **Enumerations buried in a paragraph:** a paragraph that is really a mapping, where
  each sentence pairs an item with what it gets or does ("Short answer questions get
  the full set. Paragraph questions get length and regex only. Checkbox questions can
  only limit selections."). Break it into a list, one line per item, reader as actor:
  "For paragraph questions: you can apply length and regex rules." The distinction from
  parallel-example stacking above: illustrations collapse to one example; reference
  facts the reader needs all of become a list. Don't drop facts while converting — every
  item in the prose version keeps its line in the list.
- **Instructions written as prose:** a how-to paragraph that chains sequential actions
  into sentences ("Go to forms.google.com and open the form you're working on. Click
  the question you want to validate, and make sure its type is..."). Break it into a
  numbered step list, one action per line. Step headings name ONE action, the step's
  goal ("Pick a question"); prerequisites and sub-actions (open the form) go in the
  step body, never bundled into the heading. Short single-action step headings also
  extract better into Google's list featured snippets.

The pattern behind all of these: a punchy, clever-sounding phrase where a plain sentence
would do. When a line feels quotable, rewrite it flat.

**The across-the-desk test** (companion to the seventh-grader test): would you say this
sentence out loud to a coworker across the desk? You'd never say "most guides answer the
wrong one" out loud. You'd say "figure out which one you actually have first." Sentences
that perform insight or talk about the content instead of being the content fail this test.

## No quotation marks in body copy (Ankit's feedback, Sep 2026)

Never put quotation marks around words in body copy, and don't swap them for italics
either. An italicized sample sentence is the same tic with different markup. Rewrite the
sentence so no marker is needed.

- UI element names (buttons, settings, tabs): **bold** them. `Turn off <strong>Collect
  email addresses</strong>`, not `Turn off "Collect email addresses"`.
- Example questions or sample text: fold them into the sentence as plain indirect speech.
  "Add a question asking what worked well", not `like "What worked well?"` and not
  `like <em>What worked well?</em>`.
- Italics are allowed only as rare, genuine emphasis. Never as a quote substitute.
- FAQ answers are the exception: quotation marks are fine there when they help.
- Code/HTML attributes (`alt="..."`), YAML frontmatter strings, and JSON syntax in
  `jsonld` keep their syntactic quotes.

## Structure patterns (from Vivek's posts — the parts that worked)

- **Hook: the reader's problem in the first two sentences**, stated plainly. Skip the
  industry preamble (his intros ran long; ours don't).
- **One screenshot per step** in how-tos, right after the instruction it shows, with alt
  text that describes what's actually on screen ("Form builder being used for quickly
  creating intake form with name, email and phone number fields").
- **Numbered tips/steps with named headings** ("1. Have a custom lead form for every
  campaign"), each self-contained.
- **A worked example inside explanations.** "For example, for a lead generation form you
  would need name, email, phone…" Whenever a claim feels abstract, add one.
- **The option-explainer template.** When a section walks through a set of options (rule
  types, plans, field types), give every subsection the same three beats: what it does,
  when to use it, one worked example with the reader as actor. When the option checks a
  format, end the example with a pass and a fail ("So 555-123-4567 passes and 5551234567
  doesn't."). Define jargon on first use in the plainest inline way ("Regular expression,
  or regex, validation..."). Parallel structure ACROSS subsections is good template
  design, not the banned drumbeat; the drumbeat ban applies within a paragraph.
- **"Put yourself in the respondent's shoes"** framing when giving form-building advice.
- **Internal links woven into sentences** with descriptive anchors, never "click here".
- **Close with a branded, action-focused section** ("Step up your form building game with
  Formester"), one CTA, no recap padding.

## Self-check before handing over a draft

1. Search the draft for "—" and "–". Count must be zero.
   Also grep for the Claude-isms above (land/lands, honest, genuinely, heavy lifting,
   "N rules/decisions/views/walls" count setups, "step by step", "all the time",
   "more than you think", "most guides", "nobody talks about", "costs you a",
   "prevents it", "fixes that") and rewrite every hit. Then scan for repeated sentence
   skeletons (two neighboring sentences opening with the same words) and for bolded
   keyword/feature phrases in body copy; rewrite those too.
2. Read the intro out loud. Does it state the reader's problem in plain words by sentence two?
3. Find your three fanciest sentences. Rewrite each so a seventh grader gets it in one read.
4. Every section: does it say why before how?
5. Every claim about Formester: verified against a feature page?
