<template>
  <div>
    <AiHero
      :description="c0_description"
      type="Form"
      :hideIcons="false"
      buttonText="Generate questions"
      placeholder="Paste lecture notes, a policy excerpt, a training handout. We'll generate questions from what you pasted, not what we guess the topic is."
      badgeText="TRY IT NOW. NO SIGN-UP REQUIRED."
      :title="c0_title"
      :suggestions="c0_suggestions"
      :footerItems="c0_footerItems"
      class="page-component-item"
    />

    <TrustSeals
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <Trustbadges
      :title="c2_title"
      :badges="c2_badges"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-three-real-inputs" aria-labelledby="fmstr-cmp-three-real-inputs-heading">
  <div class="fmstr-cmp-three-real-inputs__inner">

    <header class="fmstr-cmp-three-real-inputs__header">
      <span class="fmstr-cmp-three-real-inputs__eyebrow">Proof</span>
      <h2 id="fmstr-cmp-three-real-inputs-heading" class="fmstr-cmp-three-real-inputs__heading">See it work on three real inputs</h2>
      <p class="fmstr-cmp-three-real-inputs__intro">Three source documents, three different tests, same tool. Below: the first few questions each run actually produced. Click through to take the full version.</p>
    </header>

    <div class="fmstr-cmp-three-real-inputs__grid">

      <!-- Card 1: Biology 101 midterm -->
      <div class="fmstr-cmp-three-real-inputs__wrap">
        <article class="fmstr-cmp-three-real-inputs__card">
          <header class="fmstr-cmp-three-real-inputs__card-head">
            <span class="fmstr-cmp-three-real-inputs__kind">Classroom</span>
            <h3 class="fmstr-cmp-three-real-inputs__card-title">Biology 101 midterm: the cell</h3>
            <div class="fmstr-cmp-three-real-inputs__meta">
              <span><strong>Source:</strong> Simple AI prompt</span>
              <span><strong>Output:</strong> 20 MCQs + 5 short-answer items</span>
            </div>
            <div class="fmstr-cmp-three-real-inputs__pills">
              <span class="fmstr-cmp-three-real-inputs__pill"><strong>25</strong> questions</span>
              <span class="fmstr-cmp-three-real-inputs__pill"><strong>42s</strong> generation</span>
            </div>
          </header>

          <div class="fmstr-cmp-three-real-inputs__body">
            <p class="fmstr-cmp-three-real-inputs__body-intro">Preview of the first three items. Full test is 20 MCQs and 5 short-answer prompts with an answer key and points per item.</p>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 1 of 25</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--mcq">Multiple choice</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">Which organelle is primarily responsible for producing the cell's ATP through oxidative phosphorylation?</p>
              <ul class="fmstr-cmp-three-real-inputs__qn-opts">
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">A</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The nucleus</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt fmstr-cmp-three-real-inputs__qn-opt--correct"><span class="fmstr-cmp-three-real-inputs__qn-letter">B</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The mitochondrion</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">C</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The Golgi apparatus</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">D</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The smooth endoplasmic reticulum</li>
              </ul>
            </div>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 2 of 25</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--mcq">Multiple choice</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">A plant cell is placed in distilled water and observed to swell, but it does not burst. Which structure best explains why?</p>
              <ul class="fmstr-cmp-three-real-inputs__qn-opts">
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">A</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The plasma membrane</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">B</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The central vacuole</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt fmstr-cmp-three-real-inputs__qn-opt--correct"><span class="fmstr-cmp-three-real-inputs__qn-letter">C</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The rigid cellulose cell wall</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">D</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>The chloroplast envelope</li>
              </ul>
            </div>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 3 of 25</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--short">Short answer</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">Explain how the folded structure of the inner mitochondrial membrane relates to its role in ATP production. Two to three sentences.</p>
              <div class="fmstr-cmp-three-real-inputs__qn-short-input">Students type their answer here. AI-assisted review suggests a score against the rubric.</div>
              <div class="fmstr-cmp-three-real-inputs__qn-answer-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Model answer:</strong> The cristae fold the inner membrane so its surface area is large relative to volume, which packs in more electron-transport-chain complexes and ATP synthase, increasing ATP output per mitochondrion.</span>
              </div>
            </div>
          </div>

          <footer class="fmstr-cmp-three-real-inputs__foot">
            <span class="fmstr-cmp-three-real-inputs__more"><strong>22 more questions</strong> in the full test, including four more short-answer prompts.</span>
          </footer>
        </article>
        <a class="fmstr-cmp-three-real-inputs__btn" href="https://app.formester.com/users/sign_up">
          Take the full test
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>

      <!-- Card 2: HR anti-harassment -->
      <div class="fmstr-cmp-three-real-inputs__wrap">
        <article class="fmstr-cmp-three-real-inputs__card">
          <header class="fmstr-cmp-three-real-inputs__card-head">
            <span class="fmstr-cmp-three-real-inputs__kind">Corporate</span>
            <h3 class="fmstr-cmp-three-real-inputs__card-title">HR anti-harassment compliance test</h3>
            <div class="fmstr-cmp-three-real-inputs__meta">
              <span><strong>Source:</strong> Simple AI prompt</span>
              <span><strong>Output:</strong> 20 MCQs + 5 short-answer items</span>
            </div>
            <div class="fmstr-cmp-three-real-inputs__pills">
              <span class="fmstr-cmp-three-real-inputs__pill"><strong>25</strong> questions</span>
              <span class="fmstr-cmp-three-real-inputs__pill"><strong>28s</strong> generation</span>
            </div>
          </header>

          <div class="fmstr-cmp-three-real-inputs__body">
            <p class="fmstr-cmp-three-real-inputs__body-intro">Preview of the first three items. Full test is 20 MCQs and 5 short-answer prompts, auto-graded against the answer key.</p>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 1 of 25</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--mcq">Multiple choice</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">Which of the following best describes workplace harassment under a standard company policy?</p>
              <ul class="fmstr-cmp-three-real-inputs__qn-opts">
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">A</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>A single polite compliment about a colleague's presentation</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt fmstr-cmp-three-real-inputs__qn-opt--correct"><span class="fmstr-cmp-three-real-inputs__qn-letter">B</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Repeated unwelcome remarks about a coworker's appearance or identity</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">C</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Asking a coworker how their weekend was</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">D</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Disagreeing with a coworker's project approach in a meeting</li>
              </ul>
            </div>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 2 of 25</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--mcq">Multiple choice</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">If you witness what you believe to be harassment at work, the recommended first step is to:</p>
              <ul class="fmstr-cmp-three-real-inputs__qn-opts">
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">A</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Confront the alleged harasser one-on-one</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">B</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Post about the incident on a public social channel</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt fmstr-cmp-three-real-inputs__qn-opt--correct"><span class="fmstr-cmp-three-real-inputs__qn-letter">C</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Report it through the designated internal reporting channel</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">D</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Wait to see whether the behavior happens again before acting</li>
              </ul>
            </div>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 3 of 25</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--short">Short answer</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">A team lead hears one of their reports repeatedly making unwelcome comments about a colleague's accent. Describe the two steps they should take, in order. Two to three sentences.</p>
              <div class="fmstr-cmp-three-real-inputs__qn-short-input">Employees type their answer here. AI-assisted review suggests a score; HR can override before results are released.</div>
              <div class="fmstr-cmp-three-real-inputs__qn-answer-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Model answer:</strong> First, stop the behavior in the moment by naming it and asking it to stop. Second, report it through the designated internal reporting channel within one business day so HR can investigate.</span>
              </div>
            </div>
          </div>

          <footer class="fmstr-cmp-three-real-inputs__foot">
            <span class="fmstr-cmp-three-real-inputs__more"><strong>22 more questions</strong> in the full test, including four more short-answer scenarios.</span>
          </footer>
        </article>
        <a class="fmstr-cmp-three-real-inputs__btn" href="https://app.formester.com/users/sign_up">
          Take the full test
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>

      <!-- Card 3: Under-15 football post-drill -->
      <div class="fmstr-cmp-three-real-inputs__wrap">
        <article class="fmstr-cmp-three-real-inputs__card">
          <header class="fmstr-cmp-three-real-inputs__card-head">
            <span class="fmstr-cmp-three-real-inputs__kind">Coaching</span>
            <h3 class="fmstr-cmp-three-real-inputs__card-title">Under-15 football post-drill check</h3>
            <div class="fmstr-cmp-three-real-inputs__meta">
              <span><strong>Source:</strong> Pasted notes from a week of training</span>
              <span><strong>Output:</strong> 10 MCQs, timed 5 minutes</span>
            </div>
            <div class="fmstr-cmp-three-real-inputs__pills">
              <span class="fmstr-cmp-three-real-inputs__pill"><strong>10</strong> questions</span>
              <span class="fmstr-cmp-three-real-inputs__pill"><strong>11s</strong> generation</span>
            </div>
          </header>

          <div class="fmstr-cmp-three-real-inputs__body">
            <p class="fmstr-cmp-three-real-inputs__body-intro">Preview of the first three items. Full quiz is 10 MCQs, timed at five minutes, designed to spot who picked up the week's tactical concepts.</p>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 1 of 10</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--mcq">Multiple choice</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">In a 4-3-3, the primary job of the two wingers in open play is to:</p>
              <ul class="fmstr-cmp-three-real-inputs__qn-opts">
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">A</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Defend the center of midfield when we lose possession</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">B</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Track back only on set pieces</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt fmstr-cmp-three-real-inputs__qn-opt--correct"><span class="fmstr-cmp-three-real-inputs__qn-letter">C</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Stretch the opposition defense wide and supply crosses into the box</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">D</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Drop into the back four to make a five</li>
              </ul>
            </div>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 2 of 10</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--mcq">Multiple choice</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">In the pressing drill on Wednesday, the trigger for the front three to press the opposition back line was:</p>
              <ul class="fmstr-cmp-three-real-inputs__qn-opts">
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">A</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Every time the opposition goalkeeper has the ball</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt fmstr-cmp-three-real-inputs__qn-opt--correct"><span class="fmstr-cmp-three-real-inputs__qn-letter">B</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>A back-pass to a defender or a heavy first touch</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">C</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>When the opposition striker drops deep to collect</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">D</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Whenever the referee blows the whistle</li>
              </ul>
            </div>

            <div class="fmstr-cmp-three-real-inputs__qn">
              <div class="fmstr-cmp-three-real-inputs__qn-head">
                <span class="fmstr-cmp-three-real-inputs__qn-num">Question 3 of 10</span>
                <div class="fmstr-cmp-three-real-inputs__qn-tags">
                  <span class="fmstr-cmp-three-real-inputs__qn-tag fmstr-cmp-three-real-inputs__qn-tag--mcq">Multiple choice</span>
                </div>
              </div>
              <p class="fmstr-cmp-three-real-inputs__qn-text">You pick up the ball in your own half and two opposition players close you down at the same time. The coaching points from this week say the first option should be:</p>
              <ul class="fmstr-cmp-three-real-inputs__qn-opts">
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">A</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Kick it out for a throw-in to reset</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">B</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Try to dribble through both opponents</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt fmstr-cmp-three-real-inputs__qn-opt--correct"><span class="fmstr-cmp-three-real-inputs__qn-letter">C</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Play a one-two with the nearest free teammate to break the press</li>
                <li class="fmstr-cmp-three-real-inputs__qn-opt"><span class="fmstr-cmp-three-real-inputs__qn-letter">D</span><span class="fmstr-cmp-three-real-inputs__qn-bullet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Hit a long ball forward regardless of where teammates are</li>
              </ul>
            </div>
          </div>

          <footer class="fmstr-cmp-three-real-inputs__foot">
            <span class="fmstr-cmp-three-real-inputs__more"><strong>7 more questions</strong> in the full quiz, each tied to a drill the squad ran this week.</span>
          </footer>
        </article>
        <a class="fmstr-cmp-three-real-inputs__btn" href="https://app.formester.com/users/sign_up">
          Take the full test
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-inputs" aria-labelledby="fmstr-cmp-inputs-heading">
  <div class="fmstr-cmp-inputs__inner">

    <header class="fmstr-cmp-inputs__header">
      <span class="fmstr-cmp-inputs__eyebrow">At a glance</span>
      <h2 id="fmstr-cmp-inputs-heading" class="fmstr-cmp-inputs__heading">Inputs and question types</h2>
      <p class="fmstr-cmp-inputs__subhead">The honest attribute list. No feature toggles buried in a pricing page.</p>
    </header>

    <div class="fmstr-cmp-inputs__card">

      <div class="fmstr-cmp-inputs__row">
        <div class="fmstr-cmp-inputs__label">
          <span class="fmstr-cmp-inputs__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3"></path>
              <path d="M7 9l5-5 5 5"></path>
              <path d="M12 4v12"></path>
            </svg>
          </span>
          <span class="fmstr-cmp-inputs__label-text">
            <span class="fmstr-cmp-inputs__label-name">What you can upload</span>
            <span class="fmstr-cmp-inputs__label-meta">Source materials</span>
          </span>
        </div>
        <div class="fmstr-cmp-inputs__body">
          <p class="fmstr-cmp-inputs__desc">PDF, DOCX, PPTX, TXT, pasted text, prompts, URLs, and YouTube lecture links. Up to 100 pages or 50 MB per file on the free plan. 500 pages on paid plans.</p>
          <div class="fmstr-cmp-inputs__pills">
            <span class="fmstr-cmp-inputs__pill">PDF</span>
            <span class="fmstr-cmp-inputs__pill">DOCX</span>
            <span class="fmstr-cmp-inputs__pill">PPTX</span>
            <span class="fmstr-cmp-inputs__pill">TXT</span>
            <span class="fmstr-cmp-inputs__pill">URL</span>
            <span class="fmstr-cmp-inputs__pill">YouTube</span>
            <span class="fmstr-cmp-inputs__pill">Prompt</span>
          </div>
        </div>
      </div>

      <div class="fmstr-cmp-inputs__row">
        <div class="fmstr-cmp-inputs__label">
          <span class="fmstr-cmp-inputs__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="9" y1="6" x2="20" y2="6"></line>
              <line x1="9" y1="12" x2="20" y2="12"></line>
              <line x1="9" y1="18" x2="20" y2="18"></line>
              <circle cx="4.5" cy="6" r="1.5"></circle>
              <circle cx="4.5" cy="12" r="1.5"></circle>
              <circle cx="4.5" cy="18" r="1.5"></circle>
            </svg>
          </span>
          <span class="fmstr-cmp-inputs__label-text">
            <span class="fmstr-cmp-inputs__label-name">Question types you get</span>
            <span class="fmstr-cmp-inputs__label-meta">Output formats</span>
          </span>
        </div>
        <div class="fmstr-cmp-inputs__body">
          <p class="fmstr-cmp-inputs__desc">Multiple choice, true or false, fill in the blank, short answer, matching, numeric, and open ended. Mix question types in a single test, set points per item, and pull the answer key out before you publish.</p>
          <div class="fmstr-cmp-inputs__pills">
            <span class="fmstr-cmp-inputs__pill">MCQ</span>
            <span class="fmstr-cmp-inputs__pill">True or False</span>
            <span class="fmstr-cmp-inputs__pill">Fill in the blank</span>
            <span class="fmstr-cmp-inputs__pill">Short answer</span>
            <span class="fmstr-cmp-inputs__pill">Matching</span>
            <span class="fmstr-cmp-inputs__pill">Numeric</span>
            <span class="fmstr-cmp-inputs__pill">Open ended</span>
          </div>
        </div>
      </div>

      <div class="fmstr-cmp-inputs__row">
        <div class="fmstr-cmp-inputs__label">
          <span class="fmstr-cmp-inputs__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h11"></path>
              <path d="M8.5 4v2"></path>
              <path d="M5 6c0 4 3 7 6 8"></path>
              <path d="M11 9c-1 4-4 6-8 7"></path>
              <path d="m13 21 4-9 4 9"></path>
              <path d="M14.5 18h5"></path>
            </svg>
          </span>
          <span class="fmstr-cmp-inputs__label-text">
            <span class="fmstr-cmp-inputs__label-name">Languages</span>
            <span class="fmstr-cmp-inputs__label-meta">Output</span>
          </span>
        </div>
        <div class="fmstr-cmp-inputs__body">
          <p class="fmstr-cmp-inputs__desc">180+ languages including English, Spanish, French, Hindi, Arabic, Mandarin, Japanese, German, Portuguese, and Turkish.</p>
        </div>
      </div>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-tc-quality-control" aria-labelledby="fmstr-cmp-tc-quality-control-heading">
  <div class="fmstr-cmp-tc-quality-control__container">
    <div class="fmstr-cmp-tc-quality-control__inner">

      <div class="fmstr-cmp-tc-quality-control__text">
        <span class="fmstr-cmp-tc-quality-control__eyebrow">Question quality</span>
        <h2 id="fmstr-cmp-tc-quality-control-heading" class="fmstr-cmp-tc-quality-control__heading">Tests that ship with usable items, not items you have to vet line by line.</h2>
        <div class="fmstr-cmp-tc-quality-control__body">
          <p>When the AI drafts a test, it picks the right item type for each question, writes plausible distractors instead of obvious throwaways, and sets the answer key as it goes. Multiple choice gets four options where two are real contenders, not one correct plus three jokes. Short answer gets a clean acceptance pattern. True/false stays out of double-negative traps. These are the small calls a test designer normally makes by hand for every item.</p>
          <p>Every draft lands in the Formester editor, never as a frozen output. Rewrite the stem, swap a distractor, change the difficulty, regenerate a single item, or override the answer key. The AI handles the obvious 80%; the editor is where the last 20% gets human judgment.</p>
        </div>
      </div>

      <aside class="fmstr-cmp-tc-quality-control__card">
        <span class="fmstr-cmp-tc-quality-control__pill">What the AI handles automatically</span>
        <h3 class="fmstr-cmp-tc-quality-control__card-title">Five calls you don't have to make.</h3>
        <ul class="fmstr-cmp-tc-quality-control__list">
          <li class="fmstr-cmp-tc-quality-control__item">
            <svg class="fmstr-cmp-tc-quality-control__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="fmstr-cmp-tc-quality-control__item-text"><strong>Plausible distractors</strong> on every multiple choice item, instead of obvious throwaways the test-taker eliminates on sight.</span>
          </li>
          <li class="fmstr-cmp-tc-quality-control__item">
            <svg class="fmstr-cmp-tc-quality-control__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="fmstr-cmp-tc-quality-control__item-text"><strong>Answer key set as items are written</strong>, so you don't have to rebuild the key after editing the questions.</span>
          </li>
          <li class="fmstr-cmp-tc-quality-control__item">
            <svg class="fmstr-cmp-tc-quality-control__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="fmstr-cmp-tc-quality-control__item-text"><strong>Difficulty mix</strong> across the test (easy / medium / hard) so the score curves the way a real test should.</span>
          </li>
          <li class="fmstr-cmp-tc-quality-control__item">
            <svg class="fmstr-cmp-tc-quality-control__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="fmstr-cmp-tc-quality-control__item-text"><strong>Item-type variety</strong> across MCQ, true/false, short answer, and matching, instead of 20 multiple-choice items in a row.</span>
          </li>
          <li class="fmstr-cmp-tc-quality-control__item">
            <svg class="fmstr-cmp-tc-quality-control__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="fmstr-cmp-tc-quality-control__item-text"><strong>Cueing words flagged</strong> ("always," "never," "all of the above") that telegraph the answer before the test-taker reads the options.</span>
          </li>
        </ul>
      </aside>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <FeatureShowcase
      :description="c6_description"
      steps
      :title="c6_title"
      :itemList="c6_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-tc-why-pick" aria-labelledby="fmstr-cmp-tc-why-pick-heading">
  <div class="fmstr-cmp-tc-why-pick__container">

    <header class="fmstr-cmp-tc-why-pick__header">
      <span class="fmstr-cmp-tc-why-pick__eyebrow">Why pick Formester</span>
      <h2 id="fmstr-cmp-tc-why-pick-heading" class="fmstr-cmp-tc-why-pick__heading">Why teachers and trainers pick Formester as their AI test generator.</h2>
      <p class="fmstr-cmp-tc-why-pick__sub">Six things educators and L&amp;D leads keep coming back for, sourced from how the product is actually used, not from a feature list.</p>
    </header>

    <div class="fmstr-cmp-tc-why-pick__grid">

      <article class="fmstr-cmp-tc-why-pick__card">
        <span class="fmstr-cmp-tc-why-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2 4 5v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-tc-why-pick__title">AI test generator on the free plan</h3>
        <p class="fmstr-cmp-tc-why-pick__body">Generate a complete test from a prompt, a syllabus PDF, or a question list before you decide whether to pay. No credit card, no trial expiry, no watermark on the printed test.</p>
      </article>

      <article class="fmstr-cmp-tc-why-pick__card">
        <span class="fmstr-cmp-tc-why-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 11l3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-tc-why-pick__title">Answer key set as items are written</h3>
        <p class="fmstr-cmp-tc-why-pick__body">The grader is built as the questions are. Edit a stem, swap a distractor, override the key inline. Scores compute on submit. No spreadsheet, no manual rubric, no rebuilding the answer sheet at midnight before class.</p>
      </article>

      <article class="fmstr-cmp-tc-why-pick__card">
        <span class="fmstr-cmp-tc-why-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="4" rx="1"></rect>
            <rect x="3" y="10" width="18" height="4" rx="1"></rect>
            <rect x="3" y="16" width="18" height="4" rx="1"></rect>
            <path d="M7 6h.01M7 12h.01M7 18h.01"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-tc-why-pick__title">Item-type variety in one test</h3>
        <p class="fmstr-cmp-tc-why-pick__body">Multiple choice, true/false, short answer, and matching all coexist in the same test. The AI picks the right type for each question instead of defaulting to 20 multiple-choice items in a row.</p>
      </article>

      <article class="fmstr-cmp-tc-why-pick__card">
        <span class="fmstr-cmp-tc-why-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-tc-why-pick__title">Every draft is editable</h3>
        <p class="fmstr-cmp-tc-why-pick__body">The AI output is the first draft, never the final word. Rewrite a stem, regenerate a single item, change difficulty, swap a distractor, or pull from a template. Nothing freezes.</p>
      </article>

      <article class="fmstr-cmp-tc-why-pick__card">
        <span class="fmstr-cmp-tc-why-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 3v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4"></path>
            <circle cx="6" cy="3" r="2"></circle>
            <circle cx="18" cy="21" r="2"></circle>
          </svg>
        </span>
        <h3 class="fmstr-cmp-tc-why-pick__title">Score-based routing with conditional logic</h3>
        <p class="fmstr-cmp-tc-why-pick__body">Send the test-taker to remediation if they score below 60%, to a certificate if they pass, and to the next module if they ace it. Personal plan unlocks the full conditional engine.</p>
      </article>

      <article class="fmstr-cmp-tc-why-pick__card">
        <span class="fmstr-cmp-tc-why-pick__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-tc-why-pick__title">Student data stays student data</h3>
        <p class="fmstr-cmp-tc-why-pick__body">Test responses are not used to train AI models, run advertising, or feed analytics. Written into our DPA, Section 4.4. GDPR, UK GDPR, and CCPA compliant. Encrypted at rest, TLS in transit, audit-ready on request.</p>
      </article>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-who-uses-formester" aria-labelledby="fmstr-cmp-who-uses-formester-heading">
  <div class="fmstr-cmp-who-uses-formester__inner">

    <header class="fmstr-cmp-who-uses-formester__header">
      <h2 id="fmstr-cmp-who-uses-formester-heading" class="fmstr-cmp-who-uses-formester__heading">Who uses Formester AI test generator</h2>
      <p class="fmstr-cmp-who-uses-formester__subhead">Every test has a job to do. Below is how Formester fits the jobs we see most.</p>
    </header>

    <div class="fmstr-cmp-who-uses-formester__grid">

      <article class="fmstr-cmp-who-uses-formester__card">
        <span class="fmstr-cmp-who-uses-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 4 2 9l10 5 10-5-10-5Z"></path>
            <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"></path>
            <path d="M22 9v5"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-who-uses-formester__title">Teachers and professors</h3>
        <p class="fmstr-cmp-who-uses-formester__desc">Drop in the chapter you just taught. Walk out with a twenty-question midterm, Bloom's tagged and tied back to the page numbers you uploaded. Export to Google Forms, Canvas, or Moodle before the bell rings.</p>
        <a class="fmstr-cmp-who-uses-formester__cta" href="https://formester.com/templates/categories/quizzes/">
          Browse our quiz templates
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </article>

      <article class="fmstr-cmp-who-uses-formester__card">
        <span class="fmstr-cmp-who-uses-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="2"></rect>
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M3 13h18"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-who-uses-formester__title">Corporate L&amp;D and trainers</h3>
        <p class="fmstr-cmp-who-uses-formester__desc">Upload the forty-page anti-harassment policy nobody reads. Get a fifteen-question compliance test that's actually written from the policy, not a generic template. Branch questions by job family, auto-score, and push the pass or fail straight into your LMS so HR doesn't have to chase anyone.</p>
        <a class="fmstr-cmp-who-uses-formester__cta" href="https://formester.com/templates/categories/training-forms/">
          Browse our training form templates
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </article>

      <article class="fmstr-cmp-who-uses-formester__card">
        <span class="fmstr-cmp-who-uses-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="10" cy="7" r="3"></circle>
            <path d="M4 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
            <path d="m16 11 2 2 4-4"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-who-uses-formester__title">Recruiters and hiring teams</h3>
        <p class="fmstr-cmp-who-uses-formester__desc">Screen candidates with a role-specific skill test built from your JD or interview rubric. Grade short answers with AI-assisted review. Shortlist in one view.</p>
        <a class="fmstr-cmp-who-uses-formester__cta" href="https://formester.com/templates/categories/analysis-and-assessment/">
          Browse our employee skills assessment templates
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </article>

      <article class="fmstr-cmp-who-uses-formester__card">
        <span class="fmstr-cmp-who-uses-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="6" r="2.5"></circle>
            <path d="M5 21v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"></path>
            <path d="M9 11.5 12 9l3 2.5"></path>
            <path d="M12 9v6"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-who-uses-formester__title">Coaches and bootcamp operators</h3>
        <p class="fmstr-cmp-who-uses-formester__desc">Drop the week's session notes. Get a ten-question check for understanding, shareable on Slack or WhatsApp, completion tracked live. You'll catch the two people who missed the same concept before next week's drill.</p>
      </article>

      <article class="fmstr-cmp-who-uses-formester__card">
        <span class="fmstr-cmp-who-uses-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4Z"></path>
            <path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V4Z"></path>
          </svg>
        </span>
        <h3 class="fmstr-cmp-who-uses-formester__title">Students and self-learners</h3>
        <p class="fmstr-cmp-who-uses-formester__desc">Paste a week of lecture notes. Get a practice test with explanations you can re-take, shuffle, and mark the questions you still miss. Free forever on the basic plan.</p>
      </article>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-tc-api-mcp" aria-labelledby="fmstr-cmp-tc-api-mcp-title">
  <div class="fmstr-cmp-tc-api-mcp__container">

    <header class="fmstr-cmp-tc-api-mcp__header">
      <span class="fmstr-cmp-tc-api-mcp__eyebrow">For developers</span>
      <h2 id="fmstr-cmp-tc-api-mcp-title" class="fmstr-cmp-tc-api-mcp__title">Your test results, ready for the AI you already use.</h2>
      <p class="fmstr-cmp-tc-api-mcp__intro">Every Formester test ships with a REST API and an MCP server, so scores don't stop at a CSV. Pipe results into your LMS. Stream item-level data into a teaching copilot. Nobody else on this list ships MCP.</p>
    </header>

    <div class="fmstr-cmp-tc-api-mcp__grid">

      <article class="fmstr-cmp-tc-api-mcp__card">
        <span class="fmstr-cmp-tc-api-mcp__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="6" cy="6" r="2.5"></circle>
            <circle cx="18" cy="6" r="2.5"></circle>
            <circle cx="12" cy="18" r="2.5"></circle>
            <path d="M8 7l3 9M16 7l-3 9"></path>
          </svg>
        </span>
        <span class="fmstr-cmp-tc-api-mcp__badge">MCP server</span>
        <h3 class="fmstr-cmp-tc-api-mcp__card-title">Plug Formester into Claude, ChatGPT, or any MCP-compatible model.</h3>
        <div class="fmstr-cmp-tc-api-mcp__chips">
          <span class="fmstr-cmp-tc-api-mcp__chip">Claude</span>
          <span class="fmstr-cmp-tc-api-mcp__chip">ChatGPT</span>
          <span class="fmstr-cmp-tc-api-mcp__chip">Custom agents</span>
        </div>
        <p class="fmstr-cmp-tc-api-mcp__body">Connect Formester to any MCP-compatible model and let it read your test results directly. Ask Claude "which questions tripped up the most students this term?", or have a custom agent group test-takers by score band and draft a remediation plan for the bottom quartile.</p>
        <a class="fmstr-cmp-tc-api-mcp__cta" href="https://docs.formester.com/formester-mcp-server.html">Read the MCP docs →</a>
      </article>

      <article class="fmstr-cmp-tc-api-mcp__card">
        <span class="fmstr-cmp-tc-api-mcp__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
            <line x1="13" y1="4" x2="11" y2="20"></line>
          </svg>
        </span>
        <span class="fmstr-cmp-tc-api-mcp__badge fmstr-cmp-tc-api-mcp__badge--alt">REST API v2</span>
        <h3 class="fmstr-cmp-tc-api-mcp__card-title">Or build directly on the REST API.</h3>
        <div class="fmstr-cmp-tc-api-mcp__chips">
          <span class="fmstr-cmp-tc-api-mcp__chip">Self-service token</span>
          <span class="fmstr-cmp-tc-api-mcp__chip">Webhooks</span>
          <span class="fmstr-cmp-tc-api-mcp__chip">Business plan +</span>
        </div>
        <p class="fmstr-cmp-tc-api-mcp__body">Push scores into your LMS, pull item-level performance into a gradebook, or build a custom analytics workflow that flags struggling students. Self-service token at app.formester.com/api in two clicks. No support ticket, no waiting.</p>
        <a class="fmstr-cmp-tc-api-mcp__cta" href="https://docs.formester.com/formester-api.html">Read the API docs →</a>
      </article>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <FeatureShowcase
      :steps="false"
      :title="c10_title"
      :itemList="c10_itemList"
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-privacy-data-ownership" aria-labelledby="fmstr-cmp-privacy-data-ownership-heading">
  <div class="fmstr-cmp-privacy-data-ownership__container">
    <div class="fmstr-cmp-privacy-data-ownership__inner">

    <div class="fmstr-cmp-privacy-data-ownership__text">
      <span class="fmstr-cmp-privacy-data-ownership__eyebrow">Privacy and data ownership</span>
      <h2 id="fmstr-cmp-privacy-data-ownership-heading" class="fmstr-cmp-privacy-data-ownership__heading">Your content is not used to train anyone's AI. Yours, ours, or theirs.</h2>
      <div class="fmstr-cmp-privacy-data-ownership__body">
        <p>When you upload a PDF, paste a prompt, or generate a test, that content is used to generate your test and nothing else. Per Section 4.4 of our DPA, Formester does not use Customer Data for analytics, advertising, marketing, or product training. The Google Gemini integration we use to power AI features inherits the same boundary.</p>
        <p>Encrypted in transit and at rest, hosted on Heroku and AWS, automated encrypted backups with a 90-day retention, and full data deletion on request. We are GDPR, UK GDPR, and CCPA compliant. We are not SOC 2 or ISO 27001 certified yet, and we will tell you so directly rather than dance around it.</p>
      </div>
    </div>

    <aside class="fmstr-cmp-privacy-data-ownership__card">
      <span class="fmstr-cmp-privacy-data-ownership__pill">What's in the DPA</span>
      <blockquote class="fmstr-cmp-privacy-data-ownership__quote">"Formester does not use Customer Data for analytics, advertising, marketing, or product training."</blockquote>
      <hr class="fmstr-cmp-privacy-data-ownership__divider">
      <p class="fmstr-cmp-privacy-data-ownership__cite">Section 4.4, Formester Data Processing Agreement, effective January 2026.</p>
      <div class="fmstr-cmp-privacy-data-ownership__links">
        <a href="https://formester.com/dpa/">Read the DPA →</a>
        <a href="https://formester.com/security/">Security overview →</a>
      </div>
    </aside>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <TestimonialsV2
      description="See what our customers have to say about their experience with us!"
      version="home"
      :heading="c12_heading"
      :testimonials="c12_testimonials"
      class="page-component-item"
    />

    <CallToActionSection
      class="page-component-item"
    />

    <section class="page-component-item">
      <div class="raw-html-content">
<div class="raw-html-embed">

<section class="fmstr-cmp-more-from-formester" aria-labelledby="fmstr-cmp-more-from-formester-heading">
  <div class="fmstr-cmp-more-from-formester__inner">

    <header class="fmstr-cmp-more-from-formester__header">
      <h2 id="fmstr-cmp-more-from-formester-heading" class="fmstr-cmp-more-from-formester__heading">More from Formester for teachers and trainers</h2>
      <p class="fmstr-cmp-more-from-formester__subhead">Build more than tests. Templates and guides to round out your assessment workflow.</p>
    </header>

    <div class="fmstr-cmp-more-from-formester__grid">

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/features/quiz-maker-features/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Our quiz maker that scores itself</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/questionnaire-maker/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <line x1="9" y1="6" x2="20" y2="6"></line>
            <line x1="9" y1="12" x2="20" y2="12"></line>
            <line x1="9" y1="18" x2="20" y2="18"></line>
            <circle cx="4.5" cy="6" r="1.5"></circle>
            <circle cx="4.5" cy="12" r="1.5"></circle>
            <circle cx="4.5" cy="18" r="1.5"></circle>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Online questionnaire maker</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/templates/categories/quizzes/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="9" x2="9" y2="21"></line>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Ready-to-use quiz templates</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/templates/categories/academic-educational-forms/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 4 2 9l10 5 10-5-10-5Z"></path>
            <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"></path>
            <path d="M22 9v5"></path>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Forms for schools and universities</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/templates/categories/training-forms/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="2"></rect>
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M3 13h18"></path>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Training and L&amp;D forms</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/templates/employee-training-quiz-assessing-key-skills-46228/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="10" cy="7" r="3"></circle>
            <path d="M4 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
            <path d="m16 11 2 2 4-4"></path>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Employee skills assessment template</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/blog/best-online-quiz-maker-for-teachers/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4Z"></path>
            <path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V4Z"></path>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Best online quiz maker for teachers</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

      <a class="fmstr-cmp-more-from-formester__card" href="https://formester.com/use-case/formester-for-training-and-assessments/">
        <span class="fmstr-cmp-more-from-formester__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"></path>
          </svg>
        </span>
        <span class="fmstr-cmp-more-from-formester__label">Formester for training and assessments</span>
        <svg class="fmstr-cmp-more-from-formester__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>

    </div>
  </div>
</section>
</div>
      </div>
    </section>

    <FaqWithCategories
      :title="c15_title"
      :categories="c15_categories"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import AiHero from '@/components/features/AiHero.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqWithCategories from '@/components/features/FaqWithCategories.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description = "Drop a PDF or notes. Type a prompt like \"HR compliance test, 15 questions, pulled from the policy attached.\" In seconds you have a full test with the answer  written."
const c0_title = [
  {
    "id": 4953,
    "text": "AI Test Generator That Turns a PDF, or Prompt Into ",
    "highlight": false,
    "color": "#000000",
    "bold": false
  },
  {
    "id": 4954,
    "text": "a Scored Test",
    "highlight": true,
    "color": "#000000",
    "bold": false
  }
]
const c0_suggestions = [
  {
    "id": 46,
    "text": "Preview the questions free. Save, export, share, and proctor when you're ready.",
    "label": "Preview questions free"
  },
  {
    "id": 47,
    "text": "Generate 15 HR compliance test questions with auto grading.",
    "label": "HR compliance test"
  },
  {
    "id": 48,
    "text": "Create 30-minute pre-employment JavaScript test with 8 mcq and auto grading",
    "label": "JavaScript skills test"
  }
]
const c0_footerItems = [
  {
    "id": 2678,
    "text": "Create tests in seconds"
  },
  {
    "id": 2679,
    "text": "No technical setup needed"
  },
  {
    "id": 2680,
    "text": "Used by 56,000 teachers, trainers, and L&D teams."
  }
]
const c1_title = []
const c1_logos = [
  {
    "id": 4118,
    "imageAlt": "Tedx Paris Organizer",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_3c0e17bf72.png",
    "width": null,
    "height": null,
    "image": null
  },
  {
    "id": 4119,
    "imageAlt": "Vue Jobs",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/vue_jobs_9705e4cfbe.svg",
    "width": 110,
    "height": null,
    "image": null
  },
  {
    "id": 4120,
    "imageAlt": "Mayple",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/mayple_67fe487816.png",
    "width": null,
    "height": null,
    "image": null
  },
  {
    "id": 4121,
    "imageAlt": "Equipal",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/equipment_connect_b753319419.png",
    "width": null,
    "height": null,
    "image": null
  },
  {
    "id": 4122,
    "imageAlt": "Vue Conference Toronto",
    "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_black_43e8b6a164.png",
    "width": null,
    "height": null,
    "image": null
  }
]
const c2_title = [
  {
    "id": 4955,
    "text": "Trusted by 56,000+ businesses, educators, and marketers worldwide.",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c2_badges = [
  {
    "id": 38,
    "ratingNumber": "5/5",
    "logo": {
      "id": 4123,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4419,
        "name": "product-hunt.svg",
        "alternativeText": null,
        "caption": null,
        "width": 162,
        "height": 38,
        "formats": null,
        "hash": "product_hunt_e2e4bc7036",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 4.24,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/product_hunt_e2e4bc7036.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.830Z",
        "updatedAt": "2026-04-30T06:51:08.830Z"
      }
    },
    "stars": {
      "id": 4137,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4422,
        "name": "5-stars.svg",
        "alternativeText": null,
        "caption": null,
        "width": 116,
        "height": 20,
        "formats": null,
        "hash": "5_stars_1ab86c2e05",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 8.48,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/5_stars_1ab86c2e05.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.905Z",
        "updatedAt": "2026-05-03T11:47:18.420Z"
      }
    }
  },
  {
    "id": 39,
    "ratingNumber": "4.5",
    "logo": {
      "id": 4124,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4420,
        "name": "trustpilot.svg",
        "alternativeText": null,
        "caption": null,
        "width": 1133,
        "height": 278,
        "formats": null,
        "hash": "trustpilot_8110e8fa37",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 4.18,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/trustpilot_8110e8fa37.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.833Z",
        "updatedAt": "2026-04-30T06:53:47.981Z"
      }
    },
    "stars": {
      "id": 4139,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4417,
        "name": "4.5-stars.svg",
        "alternativeText": null,
        "caption": null,
        "width": 116,
        "height": 20,
        "formats": null,
        "hash": "4_5_stars_a241f011b4",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 8.5,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/4_5_stars_a241f011b4.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.788Z",
        "updatedAt": "2026-04-30T06:51:08.788Z"
      }
    }
  },
  {
    "id": 40,
    "ratingNumber": "5",
    "logo": {
      "id": 4125,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4421,
        "name": "capterra.svg",
        "alternativeText": null,
        "caption": null,
        "width": 1500,
        "height": 345,
        "formats": null,
        "hash": "capterra_b1e2a24cba",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 9.39,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/capterra_b1e2a24cba.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.897Z",
        "updatedAt": "2026-05-03T12:22:08.650Z"
      }
    },
    "stars": {
      "id": 4140,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4422,
        "name": "5-stars.svg",
        "alternativeText": null,
        "caption": null,
        "width": 116,
        "height": 20,
        "formats": null,
        "hash": "5_stars_1ab86c2e05",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 8.48,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/5_stars_1ab86c2e05.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.905Z",
        "updatedAt": "2026-05-03T11:47:18.420Z"
      }
    }
  },
  {
    "id": 41,
    "ratingNumber": "4.7",
    "logo": {
      "id": 4126,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4418,
        "name": "g2-crowd.svg",
        "alternativeText": null,
        "caption": null,
        "width": 54,
        "height": 54,
        "formats": null,
        "hash": "g2_crowd_1acb49759d",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.4,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/g2_crowd_1acb49759d.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.792Z",
        "updatedAt": "2026-04-30T06:51:08.792Z"
      }
    },
    "stars": {
      "id": 4138,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4417,
        "name": "4.5-stars.svg",
        "alternativeText": null,
        "caption": null,
        "width": 116,
        "height": 20,
        "formats": null,
        "hash": "4_5_stars_a241f011b4",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 8.5,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/4_5_stars_a241f011b4.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-30T06:51:08.788Z",
        "updatedAt": "2026-04-30T06:51:08.788Z"
      }
    }
  }
]
const c6_description = "Create and launch a complete test quickly using AI. Follow these simple steps to generate questions, customize your test, and start collecting responses without manual work."
const c6_title = [
  {
    "id": 4959,
    "text": "How to Create a Test in Seconds",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c6_itemList = [
  {
    "id": 2512,
    "title": "Generate Test with AI",
    "description": "Start by choosing the AI test creator and describe or upload a PDF about what your test should include. Add your topic, difficulty level, or question type, and generate a ready-to-use test in seconds.",
    "description_markdown": "Log in, click **New Form**, and choose **AI Quiz**. Type your prompt, like “Generate a test on climate change,” and click **Generate**.",
    "icon": null,
    "cardImage": {
      "id": 4127,
      "imageAlt": "a screenshot of formester ai quiz maker",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2598,
        "name": "a screenshot of formester ai quiz maker.png",
        "alternativeText": "a screenshot of formester ai quiz maker",
        "caption": "a screenshot of formester ai quiz maker",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_960_490ea62b2d.png",
            "hash": "small_Component_960_490ea62b2d",
            "mime": "image/png",
            "name": "small_Component 960.png",
            "path": null,
            "size": 53.09,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_960_490ea62b2d.png",
            "hash": "thumbnail_Component_960_490ea62b2d",
            "mime": "image/png",
            "name": "thumbnail_Component 960.png",
            "path": null,
            "size": 13.66,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_960_490ea62b2d",
        "ext": ".png",
        "mime": "image/png",
        "size": 17,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_960_490ea62b2d.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-12-27T03:15:51.125Z",
        "updatedAt": "2024-12-27T03:37:29.484Z"
      }
    }
  },
  {
    "id": 2515,
    "title": "Customize Your Test",
    "description": "Once you are in the form builder, you can easily customize the test by adding, removing or changing the format of each field. \n\nYou can also **[embed images and videos](/blog/how-to-upload-photo-to-online-form/)** into the form using the embedding fields.",
    "description_markdown": "Edit the layout, add or remove questions, or change question types. You can **[embed images and videos](/blog/how-to-upload-photo-to-online-form/)**, or true/false and multiple-choice questions.\n",
    "icon": null,
    "cardImage": {
      "id": 4129,
      "imageAlt": "a screenshot of formester form builder ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2595,
        "name": "a screenshot of formester form builder ui.png",
        "alternativeText": "a screenshot of formester form builder ui",
        "caption": "a screenshot of formester form builder ui",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_962_333e109cae.png",
            "hash": "small_Component_962_333e109cae",
            "mime": "image/png",
            "name": "small_Component 962.png",
            "path": null,
            "size": 37.82,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_962_333e109cae.png",
            "hash": "thumbnail_Component_962_333e109cae",
            "mime": "image/png",
            "name": "thumbnail_Component 962.png",
            "path": null,
            "size": 10,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_962_333e109cae",
        "ext": ".png",
        "mime": "image/png",
        "size": 10.73,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_962_333e109cae.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-12-27T03:15:50.997Z",
        "updatedAt": "2024-12-27T03:37:14.220Z"
      }
    }
  },
  {
    "id": 2514,
    "title": "Design Your Test",
    "description": "Scan the output. Regenerate a single question, swap a distractor, change a correct answer, or adjust the points. Add an intro, a time limit, a pass mark, and branching logic. Apply a theme from your brand kit so the test looks like it came from your school, not a SaaS default.",
    "description_markdown": "Scan the output. Regenerate a single question, swap a distractor, change a correct answer, or adjust the points. Add an intro, a time limit, a pass mark, and branching logic. Apply a [pre-built themes](https://formester.com/features/branding-kit/) from your brand kit so the test looks like it came from your school, not a SaaS default.\n",
    "icon": null,
    "cardImage": {
      "id": 4128,
      "imageAlt": "a screenshot of formester design ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2593,
        "name": "a screenshot of formester design ui.png",
        "alternativeText": "a screenshot of formester design ui",
        "caption": "a screenshot of formester design ui",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_963_97f9f9c3f3.png",
            "hash": "small_Component_963_97f9f9c3f3",
            "mime": "image/png",
            "name": "small_Component 963.png",
            "path": null,
            "size": 30.37,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_963_97f9f9c3f3.png",
            "hash": "thumbnail_Component_963_97f9f9c3f3",
            "mime": "image/png",
            "name": "thumbnail_Component 963.png",
            "path": null,
            "size": 9.9,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_963_97f9f9c3f3",
        "ext": ".png",
        "mime": "image/png",
        "size": 8.46,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_963_97f9f9c3f3.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-12-27T03:15:50.708Z",
        "updatedAt": "2024-12-27T03:36:55.474Z"
      }
    }
  },
  {
    "id": 2519,
    "title": "Set Scoring or Outcomes",
    "description": "To automate the scoring process, go to the **“Advanced”** tab. Use the **“Scored Quiz”** feature to assign scores to each answer in every question.\n\nIf you want to show unique thank you pages based on the answers, use the **[“Outcome Quiz”](/blog/how-to-create-an-outcome-quiz/)** feature.",
    "description_markdown": "To automate the scoring process, go to the **“Advanced”** tab. Use the **“Scored Quiz”** feature to assign scores to each answer in every question.\n\nIf you want to show unique thank you pages based on the answers, use the **[“Outcome Quiz”](/blog/how-to-create-an-outcome-quiz/)** feature.",
    "icon": null,
    "cardImage": {
      "id": 4130,
      "imageAlt": "a screenshot of formester scoring ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2594,
        "name": "a screenshot of formester scoring ui.png",
        "alternativeText": "a screenshot of formester scoring ui",
        "caption": "a screenshot of formester scoring ui",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_964_71104b60cc.png",
            "hash": "small_Component_964_71104b60cc",
            "mime": "image/png",
            "name": "small_Component 964.png",
            "path": null,
            "size": 30.08,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_964_71104b60cc.png",
            "hash": "thumbnail_Component_964_71104b60cc",
            "mime": "image/png",
            "name": "thumbnail_Component 964.png",
            "path": null,
            "size": 8.92,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_964_71104b60cc",
        "ext": ".png",
        "mime": "image/png",
        "size": 7.32,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_964_71104b60cc.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-12-27T03:15:50.709Z",
        "updatedAt": "2024-12-27T03:36:37.256Z"
      }
    }
  },
  {
    "id": 2520,
    "title": "Publish & Share",
    "description": "When you are happy with the design and function of the test, click publish. Then go to the “Share” tab to find the share settings. Here you can set submission date, time and count limits. To share the test, simply copy the link and share it with the test takers via social media.",
    "description_markdown": "Once you're satisfied with the test's design and functionality, click **Publish.** Then, go to the **Share** tab to adjust the sharing settings.\n\nHere you can **[set submission date, time and count limits](/features/form-limiter/)**. To share the test, simply copy the link and share it with the test takers via social media.",
    "icon": null,
    "cardImage": {
      "id": 4133,
      "imageAlt": "a screenshot of formester publish ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2597,
        "name": "a screenshot of formester publish ui.png",
        "alternativeText": "a screenshot of formester publish ui",
        "caption": "a screenshot of formester publish ui",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_965_30b36ae0c5.png",
            "hash": "small_Component_965_30b36ae0c5",
            "mime": "image/png",
            "name": "small_Component 965.png",
            "path": null,
            "size": 44.6,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_965_30b36ae0c5.png",
            "hash": "thumbnail_Component_965_30b36ae0c5",
            "mime": "image/png",
            "name": "thumbnail_Component 965.png",
            "path": null,
            "size": 12.02,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_965_30b36ae0c5",
        "ext": ".png",
        "mime": "image/png",
        "size": 13.25,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_965_30b36ae0c5.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-12-27T03:15:51.106Z",
        "updatedAt": "2024-12-27T03:36:22.420Z"
      }
    }
  },
  {
    "id": 2517,
    "title": "Analyze Results",
    "description": "To analyze test results, go to the **Results** tab to view participant responses. You can then export the results as a CSV file or **[integrate with Google Sheets](/integrations/google-sheets/)**.",
    "description_markdown": "To analyze test results, go to the **Results** tab to view participant responses. You can then export the results as a CSV file or **[integrate with Google Sheets](/integrations/google-sheets/)**.",
    "icon": null,
    "cardImage": {
      "id": 4131,
      "imageAlt": "a screenshot of formester analytics",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2592,
        "name": "a screenshot of formester analytics.png",
        "alternativeText": "a screenshot of formester analytics",
        "caption": "a screenshot of formester analytics",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_966_de4d539da9.png",
            "hash": "small_Component_966_de4d539da9",
            "mime": "image/png",
            "name": "small_Component 966.png",
            "path": null,
            "size": 37.32,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_966_de4d539da9.png",
            "hash": "thumbnail_Component_966_de4d539da9",
            "mime": "image/png",
            "name": "thumbnail_Component 966.png",
            "path": null,
            "size": 11.11,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_966_de4d539da9",
        "ext": ".png",
        "mime": "image/png",
        "size": 9.89,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_966_de4d539da9.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-12-27T03:15:50.694Z",
        "updatedAt": "2024-12-27T03:36:01.100Z"
      }
    }
  }
]
const c10_title = [
  {
    "id": 4958,
    "text": "Built for Test Day, not Demo Day",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c10_itemList = [
  {
    "id": 2516,
    "title": "Email Autoresponder",
    "description": "With the email autoresponder you can automatically send custom notifications to the test takers via an SMTP email. You can also set up your own email to receive instant notifications on new submissions.",
    "description_markdown": "With the **[email autoresponder](/features/autoresponder-email/)** you can automatically send custom notifications to test takers via SMTP email.\n\nYou can also set up your own email to receive instant notifications on new submissions.",
    "icon": null,
    "cardImage": {
      "id": 4132,
      "imageAlt": "a screenshot of formester email autoresponder",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1544,
        "name": "auto-responder.svg",
        "alternativeText": null,
        "caption": null,
        "width": 632,
        "height": 500,
        "formats": null,
        "hash": "auto_responder_01eff49b50",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 126.52,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/auto_responder_01eff49b50.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-07-31T14:58:28.203Z",
        "updatedAt": "2024-07-31T15:03:12.915Z"
      }
    }
  },
  {
    "id": 2513,
    "title": "QR Code Generator",
    "description": "If you want to create a unique QR code for this test, you can use the built-in QR code generator. You can then share it with others. You can find this feature in the “Share” settings. Simply download the generated QR code and share it with the test takers.",
    "description_markdown": "If you want to create a unique QR code for this test, you can use the **[built-in QR code generator](/features/qr-code-generator/)**. You can then share it with others. \n\nYou can find this feature in the **“Share”** settings. Simply download the generated QR code and share it with the test takers.",
    "icon": null,
    "cardImage": {
      "id": 4134,
      "imageAlt": "a screenshot of formester qr code generator",
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_3_badbf13f4c.png",
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 2521,
    "title": "Runs offline Test when the Wi-Fi doesn't",
    "description": "Turn on Offline Forms and the test keeps working when the internet doesn't. Submissions queue on the device and sync the moment you're back online. Good for field training, off-site assessments, and any classroom where the router picks the worst possible moment to quit.",
    "description_markdown": "Turn on [Offline Forms](https://formester.com/features/offline-forms/) and the test keeps working when the internet doesn't. Submissions queue on the device and sync the moment you're back online. Good for field training, off-site assessments, and any classroom where the router picks the worst possible moment to quit.",
    "icon": null,
    "cardImage": {
      "id": 4136,
      "imageAlt": "a screenshot of formester offline feature",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1671,
        "name": "offiline-forms-hero-illustration.svg",
        "alternativeText": "a screenshot of formester offline form feature",
        "caption": "a screenshot of formester offline form feature",
        "width": 484,
        "height": 433,
        "formats": null,
        "hash": "offiline_forms_hero_illustration_d85eb96a5d",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 51.3,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/offiline_forms_hero_illustration_d85eb96a5d.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T07:23:06.410Z",
        "updatedAt": "2024-12-11T03:47:51.376Z"
      }
    }
  },
  {
    "id": 2518,
    "title": "Submission controls that fit a real classroom window",
    "description": "Set the exact window your test is live with the form limited and cap total submissions so you don't get a flood after the bell. Email Verification makes sure each entry comes from a real address you expect. Spam Protection blocks bots before they waste a slot.",
    "description_markdown": "Set the exact window your test is live with the form limited and cap total submissions so you don't get a flood after the bell. [Email Verification ](https://formester.com/features/email-verification/) makes sure each entry comes from a real address you expect. Spam Protection blocks bots before they waste a slot.\n",
    "icon": null,
    "cardImage": {
      "id": 4135,
      "imageAlt": "Submission controls that fit a real classroom window",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4414,
        "name": "Share and Track Formester Quiz Generator.png",
        "alternativeText": null,
        "caption": null,
        "width": 1582,
        "height": 1138,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Share_and_Track_Formester_Quiz_Generator_73dd55145a.png",
            "hash": "large_Share_and_Track_Formester_Quiz_Generator_73dd55145a",
            "mime": "image/png",
            "name": "large_Share and Track Formester Quiz Generator.png",
            "path": null,
            "size": 65.51,
            "width": 1000,
            "height": 719
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Share_and_Track_Formester_Quiz_Generator_73dd55145a.png",
            "hash": "small_Share_and_Track_Formester_Quiz_Generator_73dd55145a",
            "mime": "image/png",
            "name": "small_Share and Track Formester Quiz Generator.png",
            "path": null,
            "size": 25.3,
            "width": 500,
            "height": 360
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Share_and_Track_Formester_Quiz_Generator_73dd55145a.png",
            "hash": "medium_Share_and_Track_Formester_Quiz_Generator_73dd55145a",
            "mime": "image/png",
            "name": "medium_Share and Track Formester Quiz Generator.png",
            "path": null,
            "size": 43.72,
            "width": 750,
            "height": 540
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Share_and_Track_Formester_Quiz_Generator_73dd55145a.png",
            "hash": "thumbnail_Share_and_Track_Formester_Quiz_Generator_73dd55145a",
            "mime": "image/png",
            "name": "thumbnail_Share and Track Formester Quiz Generator.png",
            "path": null,
            "size": 7.53,
            "width": 217,
            "height": 156
          }
        },
        "hash": "Share_and_Track_Formester_Quiz_Generator_73dd55145a",
        "ext": ".png",
        "mime": "image/png",
        "size": 21.23,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Share_and_Track_Formester_Quiz_Generator_73dd55145a.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2026-04-27T07:50:40.311Z",
        "updatedAt": "2026-04-27T07:50:40.311Z"
      }
    }
  }
]
const c12_heading = [
  {
    "id": 4956,
    "text": "What Users Feels About Formester",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c12_testimonials = [
  {
    "id": 6,
    "name": "Thibaud Martinez",
    "position": "Organiser",
    "organization": "Tedx",
    "comment": "I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do.",
    "createdAt": "2024-06-18T03:53:38.957Z",
    "updatedAt": "2025-01-22T02:56:48.567Z",
    "publishedAt": "2024-06-18T03:53:40.693Z",
    "companyLogo": {
      "id": 229,
      "imageAlt": "tedx-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1684,
        "name": "tedx.webp",
        "alternativeText": "tedx-logo",
        "caption": "tedx-logo",
        "width": 109,
        "height": 38,
        "formats": null,
        "hash": "tedx_2fce0eee2e",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.09,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_2fce0eee2e.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.941Z",
        "updatedAt": "2024-12-01T07:50:31.505Z"
      }
    }
  },
  {
    "id": 2,
    "name": "Jilson",
    "position": "Organiser",
    "organization": "Vue Conference",
    "comment": "Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.",
    "createdAt": "2024-06-18T03:48:46.610Z",
    "updatedAt": "2025-01-22T02:57:08.760Z",
    "publishedAt": "2024-06-18T03:48:50.595Z",
    "companyLogo": {
      "id": 228,
      "imageAlt": "photo-of-vue-conference",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1680,
        "name": "vueconf.webp",
        "alternativeText": "photo-of-vue-conference",
        "caption": "photo-of-vue-conference",
        "width": 80,
        "height": 80,
        "formats": null,
        "hash": "vueconf_1bc3dc0827",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.07,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_1bc3dc0827.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.731Z",
        "updatedAt": "2024-12-01T07:47:11.024Z"
      }
    }
  },
  {
    "id": 4,
    "name": "Costanza Casullo",
    "position": "Volunteer",
    "organization": "Wato Coding Hub",
    "comment": "Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths. In addition, the founder is available to answer questions and doubts, which does not happen every day.",
    "createdAt": "2024-06-18T03:51:15.232Z",
    "updatedAt": "2025-01-22T02:58:03.674Z",
    "publishedAt": "2024-06-18T03:51:21.477Z",
    "companyLogo": {
      "id": 225,
      "imageAlt": "wato-coding-hub-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1681,
        "name": "wato-coding-hub.webp",
        "alternativeText": "wato-coding-hub-logo",
        "caption": "wato-coding-hub-logo",
        "width": 80,
        "height": 81,
        "formats": null,
        "hash": "wato_coding_hub_e054f0ea9d",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.88,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/wato_coding_hub_e054f0ea9d.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.738Z",
        "updatedAt": "2024-12-01T07:49:13.371Z"
      }
    }
  },
  {
    "id": 68,
    "name": "Deepika K",
    "position": "Business Development Executive",
    "organization": null,
    "comment": "Formester AI form builder has lots of customisation options. It's very easy to generate online forms. Forms generated are also very user friendly it supports both mobile and desktop version. It also allows us to build our own custom themes. File upload is also possible in surveys. I love the simplicity with which I can create forms within couple of minutes without any coding knowledge. The UI is very attractive and easy to use. No prior experience is required to use it.",
    "createdAt": "2026-05-03T09:28:05.067Z",
    "updatedAt": "2026-05-03T09:30:18.660Z",
    "publishedAt": "2026-05-03T09:30:06.733Z",
    "companyLogo": null
  },
  {
    "id": 37,
    "name": "Chris",
    "position": "Operations Lead",
    "organization": "SummitCloud Software",
    "comment": "Very intuitive and the surveys look genuinely professional out of the box. Most importantly, I requested a custom rating scale and they shipped it within hours. Stellar support that is hands-down better than the Jotform.",
    "createdAt": "2025-06-29T23:30:38.521Z",
    "updatedAt": "2026-05-11T05:18:51.458Z",
    "publishedAt": "2025-06-29T23:30:40.007Z",
    "companyLogo": {
      "id": 3650,
      "imageAlt": "summit-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4096,
        "name": "summit-logo.png",
        "alternativeText": "summit-logo",
        "caption": "summit-logo",
        "width": 200,
        "height": 26,
        "formats": null,
        "hash": "summit_logo_f5bfb8ce29",
        "ext": ".png",
        "mime": "image/png",
        "size": 1.42,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/summit_logo_f5bfb8ce29.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-10-31T04:00:11.826Z",
        "updatedAt": "2025-10-31T04:00:11.826Z"
      }
    }
  },
  {
    "id": 1,
    "name": "Dr. Michele Ross",
    "position": "Founder",
    "organization": "Infused Health",
    "comment": "I'm migrating my forms from Paperform, where I've been a user for over 4 years. Loving the software so far! I've already replaced Paperform form embeds & popups on my sites & my husband's websites with Formester forms",
    "createdAt": "2024-06-18T03:47:14.605Z",
    "updatedAt": "2025-01-22T02:57:30.159Z",
    "publishedAt": "2024-06-18T03:47:18.889Z",
    "companyLogo": {
      "id": 227,
      "imageAlt": "Dr. Michele Ross",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1685,
        "name": "dr._michelelogo.webp",
        "alternativeText": null,
        "caption": null,
        "width": 300,
        "height": 59,
        "formats": {
          "thumbnail": {
            "ext": ".webp",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_dr_michelelogo_2269ae2211.webp",
            "hash": "thumbnail_dr_michelelogo_2269ae2211",
            "mime": "image/webp",
            "name": "thumbnail_dr._michelelogo.webp",
            "path": null,
            "size": 5.58,
            "width": 245,
            "height": 48
          }
        },
        "hash": "dr_michelelogo_2269ae2211",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 5.87,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/dr_michelelogo_2269ae2211.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.944Z",
        "updatedAt": "2024-08-01T14:38:23.944Z"
      }
    }
  },
  {
    "id": 39,
    "name": "Alex",
    "position": "Customer Success Manager",
    "organization": "Orion Growth Partners",
    "comment": "Tried like 4 quiz tools for our lead gen funnel before this and honestly this is the only one I didn't end up hating. AI did most of the work and the customization actually works.",
    "createdAt": "2025-06-29T23:32:05.746Z",
    "updatedAt": "2026-05-11T05:16:55.955Z",
    "publishedAt": "2025-06-29T23:32:07.219Z",
    "companyLogo": {
      "id": 3647,
      "imageAlt": "logo of orion",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4092,
        "name": "logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x.png",
        "alternativeText": null,
        "caption": null,
        "width": 200,
        "height": 86,
        "formats": null,
        "hash": "logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd",
        "ext": ".png",
        "mime": "image/png",
        "size": 3,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-10-29T17:02:25.502Z",
        "updatedAt": "2025-10-29T17:02:25.502Z"
      }
    }
  }
]
const c15_title = [
  {
    "id": 4957,
    "text": "Frequently Asked Questions",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c15_categories = [
  {
    "id": 1294,
    "description": null,
    "centered": null,
    "title": [
      {
        "id": 4960,
        "text": "General Questions",
        "highlight": false,
        "color": null,
        "bold": null
      }
    ],
    "faqList": [
      {
        "id": 2529,
        "header": "What is an AI test creator?",
        "body": "An AI test creator is a tool that helps you generate complete tests automatically. You simply enter a topic or short prompt, and the system creates questions, answer options, and scoring rules for you. It saves time and removes the need to write every question manually.",
        "body_markdown": "An AI test creator is a smart tool that helps you generate quizzes or exams in seconds using artificial intelligence. Just type a topic, and it builds questions, answers, and scoring for you—no manual work needed.",
        "list": []
      },
      {
        "id": 2531,
        "header": "How does an AI test generator work?",
        "body": "You type a topic such as “basic algebra test” or “employee safety training quiz.” The AI analyzes your input and generates relevant questions with answer choices. You can then edit the questions, adjust difficulty, set scores, and publish the test.\n",
        "body_markdown": "AI testing in high schools saves time, boosts engagement, and helps teachers focus on teaching. AI can generate tests, grade answers, and track student performance instantly.\n\n",
        "list": []
      },
      {
        "id": 2532,
        "header": "Who can use an AI test maker?",
        "body": "Anyone who needs to create assessments can use it. This includes teachers, trainers, HR teams, course creators, businesses, and even students preparing practice quizzes. No technical skills are required.\n",
        "body_markdown": "Teachers, students, trainers, HR teams, and businesses can all use it. Anyone who needs quick, reliable, and auto-scored assessments will benefit.\n\n",
        "list": []
      },
      {
        "id": 2545,
        "header": "Can I create a test without coding?",
        "body": "Yes. You can create and publish a complete online test without writing any code. Everything works through a simple interface where you enter a topic, review the generated questions, and customize as needed.",
        "body_markdown": "It’s used to make tests for schools, training, hiring, or fun quizzes. You can create, share, and grade tests online—fast and easy.",
        "list": []
      },
      {
        "id": 2533,
        "header": "What file formats can I upload?",
        "body": "PDF, and TXT, up to 100 pages or 50 MB per file on the free plan. You can also paste text, drop in a URL, or forms from other platform such as Jotform, Typeform, Google forms, etc. \nMix sources if your test needs to cover more than one document.",
        "body_markdown": null,
        "list": []
      },
      {
        "id": 2534,
        "header": "Is the AI test generator free?",
        "body": "Yes. Formester AI Test Generator is free to use. No credit card required to sign up, and you can generate and publish test on the free plan. Paid plans unlock custom branding, advanced integrations, and higher response limits.",
        "body_markdown": null,
        "list": []
      },
      {
        "id": 2535,
        "header": "How many questions can I generate from one upload?",
        "body": "You can generate an unlimited number of questions",
        "body_markdown": null,
        "list": []
      },
      {
        "id": 2536,
        "header": "Can I edit the questions the AI generates?",
        "body": "Yes. Rewrite any stem, swap a distractor, change a correct answer, adjust the points, or regenerate a single question without touching the rest. Nothing publishes until you hit publish.",
        "body_markdown": null,
        "list": []
      },
      {
        "id": 2537,
        "header": "What question types are supported?",
        "body": "Multiple choice, true or false, fill in the blank, short answer, matching, numeric, and open ended.",
        "body_markdown": null,
        "list": []
      },
      {
        "id": 2538,
        "header": "Does it generate answer keys and grading rules?",
        "body": "Yes. Every generated test ships with an answer key, points per question, and optional partial credit on multi-part items. Auto-grade the objective questions and grade short answers with AI-assisted review. Override any score and leave a note for the student.",
        "body_markdown": "Yes. Every generated test ships with an answer key, points per question, and optional partial credit on multi-part items. Auto-grade the objective questions and grade short answers with [AI-assisted review](https://formester.com/features/quiz-maker-features/). Override any score and leave a note for the student.",
        "list": []
      },
      {
        "id": 2539,
        "header": "How accurate are the questions the AI generates?",
        "body": "Every question is graded against the source you uploaded, flagged if it can't be answered from the material.",
        "body_markdown": null,
        "list": []
      }
    ]
  },
  {
    "id": 1293,
    "description": null,
    "centered": null,
    "title": [
      {
        "id": 4961,
        "text": "Creating Tests",
        "highlight": false,
        "color": null,
        "bold": null
      }
    ],
    "faqList": [
      {
        "id": 2540,
        "header": "Can I set time limits for my test?",
        "body": "Yes. You can define how much time someone has to complete the test. This is useful for exams, timed practice quizzes, or certification assessments.\n",
        "body_markdown": "Definitely. You can limit how long someone has to complete the test.\n\n",
        "list": []
      },
      {
        "id": 2541,
        "header": "Does the AI also generate correct answers?",
        "body": "Yes. The AI test generator creates both the questions and suggested answers. You can review and modify them before publishing to make sure everything matches your requirements.\n",
        "body_markdown": "Yes. With Formester’s AI test generator, the tool not only creates questions but also suggests accurate test answers.\n\n",
        "list": []
      },
      {
        "id": 2542,
        "header": "Can test takers pause and continue later?",
        "body": "Yes. Test takers can save their progress and resume later if needed. This is helpful for longer tests or situations where internet connectivity may not be stable.\n",
        "body_markdown": "Yes, students can save their progress and continue later. Great for long tests or poor internet connections.\n\n",
        "list": []
      },
      {
        "id": 2543,
        "header": "Can I preview my test before sharing it?",
        "body": "Yes. You can preview the test exactly as your audience will see it. This allows you to check formatting, scoring, and question flow before publishing.\n",
        "body_markdown": "Yes. Before publishing, you can preview your AI generated test to see exactly how it looks for test takers.\n\n",
        "list": []
      },
      {
        "id": 2544,
        "header": "Who owns the tests I create?",
        "body": "You do. Formester does not train models on your uploads or your generated tests. You can delete a test, a source file, or an entire workspace at any time.",
        "body_markdown": null,
        "list": []
      }
    ]
  },
  {
    "id": 1292,
    "description": null,
    "centered": null,
    "title": [
      {
        "id": 4962,
        "text": "Software and Tools",
        "highlight": false,
        "color": null,
        "bold": null
      }
    ],
    "faqList": [
      {
        "id": 2527,
        "header": "What is the best AI test generator for teachers?",
        "body": "A good AI test generator should create questions quickly, support automatic grading, and allow easy customization. Formester helps you generate tests, edit questions, and track results in one place.\n",
        "body_markdown": "Formester is one of the best. It creates tests with AI, auto-grades answers, supports multimedia, and is easy to use.\n\n",
        "list": []
      },
      {
        "id": 2530,
        "header": "Which tool helps you create your own quiz?",
        "body": "An AI quiz maker lets you create quizzes by simply entering a topic. Formester generates questions and answers instantly, and you can customize everything before sharing.\n",
        "body_markdown": "Formester’s AI quiz maker helps you build your own quiz fast. Just type a topic, and it generates questions, answers, and scoring.\n\n",
        "list": []
      },
      {
        "id": 2528,
        "header": "What is the top test generator software?",
        "body": "Top test generator software should make it easy to create, share, and grade tests. Formester offers AI test creation, automatic scoring, multimedia support, and detailed results in one platform.\n",
        "body_markdown": "Formester ranks among the top test generator tools. It offers AI test generation, auto-scoring, offline support, and detailed analytics.\n\n",
        "list": []
      }
    ]
  }
]

useHead({
  "title": "Free AI Test Generator: PDF, Prompt, URL to Test in Seconds",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/test-creator/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-06-08T11:30:26.239Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Free AI test generator for teachers, trainers, and L&D. Upload a PDF, paste a prompt, or drop a URL. Get a full test with an answer key, auto-grading, and Moodle or Google Forms export in seconds."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Free AI Test Generator: PDF, Prompt, URL to Test in Seconds"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/test-creator/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Free AI Test Generator: PDF, Prompt, URL to Test in Seconds"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Free AI test generator for teachers, trainers, and L&D. Upload a PDF, paste a prompt, or drop a URL. Get a full test with an answer key, auto-grading, and Moodle or Google Forms export in seconds."
    },
    {
      "hid": "og:image",
      "property": "og:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "og:image:alt",
      "name": "og:image:alt",
      "content": "Formester Logo"
    },
    {
      "hid": "twitter:url",
      "name": "twitter:url",
      "content": "https://formester.com/test-creator/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Free AI Test Generator: PDF, Prompt, URL to Test in Seconds"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Free AI test generator for teachers, trainers, and L&D. Upload a PDF, paste a prompt, or drop a URL. Get a full test with an answer key, auto-grading, and Moodle or Google Forms export in seconds."
    },
    {
      "hid": "twitter:image",
      "name": "twitter:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "twitter:image:alt",
      "name": "twitter:image:alt",
      "content": "Formester Logo"
    },
    {
      "hid": "twitter:card",
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "hid": "apple-mobile-web-app-title",
      "name": "apple-mobile-web-app-title",
      "content": "Formester"
    },
    {
      "hid": "image",
      "name": "image",
      "property": "og:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "keywords",
      "name": "keywords",
      "content": [
        "test creator",
        "test maker",
        "test generator",
        "ai test maker",
        "exam creator",
        "math quiz",
        "multiple choice test",
        "vocabulary quiz",
        "quiz",
        "quiz maker",
        "ai test generator",
        "ai test answers",
        "ai generated test",
        "ai testing in high schools",
        "ai for test answers"
      ]
    }
  ]
})
useJsonld([
  {
    "@graph": [
      {
        "@id": "https://formester.com/#organization",
        "url": "https://formester.com/",
        "logo": "https://formester.com/logo.svg",
        "name": "Formester",
        "@type": "Organization",
        "sameAs": [
          "https://www.linkedin.com/company/formester-inc/",
          "https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ",
          "https://www.instagram.com/_formester_",
          "https://www.facebook.com/formester",
          "https://x.com/_Formester_"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "49D, Jugsalai",
            "addressCountry": "India",
            "addressLocality": "Jamshedpur"
          },
          {
            "@type": "PostalAddress",
            "addressRegion": "Delaware",
            "streetAddress": "2035 Sunset Lake",
            "addressCountry": "United States"
          }
        ],
        "contactPoint": {
          "url": "https://formester.com/contact",
          "@type": "ContactPoint",
          "email": "support@formester.com",
          "contactType": "customer support"
        }
      },
      {
        "@id": "https://formester.com/test-creator/#webpage",
        "url": "https://formester.com/test-creator/",
        "name": "Free AI Test Generator: PDF, Prompt, URL to Test in Seconds",
        "@type": "WebPage",
        "headline": "AI Test Generator That Turns a PDF, or Prompt Into a Scored Test",
        "isPartOf": {
          "@id": "https://formester.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://formester.com/test-creator/#breadcrumb"
        },
        "dateModified": "2026-05-07",
        "datePublished": "2025-06-07"
      },
      {
        "@id": "https://formester.com/test-creator/#breadcrumb",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "item": "https://formester.com/",
            "name": "Home",
            "@type": "ListItem",
            "position": 1
          },
          {
            "item": "https://formester.com/test-creator/",
            "name": "Test Creator",
            "@type": "ListItem",
            "position": 2
          }
        ]
      },
      {
        "@id": "https://formester.com/test-creator/#software",
        "url": "https://formester.com/test-creator/",
        "name": "Formester AI Test Creator",
        "@type": "SoftwareApplication",
        "offers": [
          {
            "url": "https://formester.com/pricing/",
            "name": "Free",
            "@type": "Offer",
            "price": "0",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          },
          {
            "url": "https://formester.com/pricing/",
            "name": "Personal",
            "@type": "Offer",
            "price": "13",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        ],
        "publisher": {
          "@id": "https://formester.com/#organization"
        },
        "description": "Turn a PDF, prompt, or URL into a fully scored test in seconds. Generate questions, an answer key, and grading rules with AI, then edit, publish, and auto-grade in one place.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "ratingValue": "4.7",
          "reviewCount": "33",
          "worstRating": "1"
        },
        "operatingSystem": "Web-based",
        "applicationCategory": "BusinessApplication"
      },
      {
        "@id": "https://formester.com/test-creator/#faq",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "name": "What is an AI test creator?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "An AI test creator is a smart tool that helps you generate quizzes or exams in seconds using artificial intelligence. Just type a topic, and it builds questions, answers, and scoring for you—no manual work needed.",
              "@type": "Answer"
            }
          },
          {
            "name": "How does an AI test generator work?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "AI testing in high schools saves time, boosts engagement, and helps teachers focus on teaching. AI can generate tests, grade answers, and track student performance instantly.",
              "@type": "Answer"
            }
          },
          {
            "name": "Who can use an AI test maker?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Teachers, students, trainers, HR teams, and businesses can all use it. Anyone who needs quick, reliable, and auto-scored assessments will benefit.",
              "@type": "Answer"
            }
          },
          {
            "name": "Can I create a test without coding?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "It’s used to make tests for schools, training, hiring, or fun quizzes. You can create, share, and grade tests online—fast and easy.",
              "@type": "Answer"
            }
          },
          {
            "name": "What file formats can I upload?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "PDF, and TXT, up to 100 pages or 50 MB per file on the free plan. You can also paste text, drop in a URL, or forms from other platform such as Jotform, Typeform, Google forms, etc. Mix sources if your test needs to cover more than one document.",
              "@type": "Answer"
            }
          },
          {
            "name": "Is the AI test generator free?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. Formester AI Test Generator is free to use. No credit card required to sign up, and you can generate and publish test on the free plan. Paid plans unlock custom branding, advanced integrations, and higher response limits.",
              "@type": "Answer"
            }
          },
          {
            "name": "How many questions can I generate from one upload?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "You can generate an unlimited number of questions",
              "@type": "Answer"
            }
          },
          {
            "name": "Can I edit the questions the AI generates?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. Rewrite any stem, swap a distractor, change a correct answer, adjust the points, or regenerate a single question without touching the rest. Nothing publishes until you hit publish.",
              "@type": "Answer"
            }
          },
          {
            "name": "What question types are supported?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Multiple choice, true or false, fill in the blank, short answer, matching, numeric, and open ended.",
              "@type": "Answer"
            }
          },
          {
            "name": "Does it generate answer keys and grading rules?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. Every generated test ships with an answer key, points per question, and optional partial credit on multi-part items. Auto-grade the objective questions and grade short answers with <a href=\"https://formester.com/features/quiz-maker-features/\">AI-assisted review</a>. Override any score and leave a note for the student.",
              "@type": "Answer"
            }
          },
          {
            "name": "How accurate are the questions the AI generates?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Every question is graded against the source you uploaded, flagged if it can't be answered from the material.",
              "@type": "Answer"
            }
          },
          {
            "name": "Can I set time limits for my test?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Definitely. You can limit how long someone has to complete the test.",
              "@type": "Answer"
            }
          },
          {
            "name": "Does the AI also generate correct answers?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. With Formester’s AI test generator, the tool not only creates questions but also suggests accurate test answers.",
              "@type": "Answer"
            }
          },
          {
            "name": "Can test takers pause and continue later?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes, students can save their progress and continue later. Great for long tests or poor internet connections.",
              "@type": "Answer"
            }
          },
          {
            "name": "Can I preview my test before sharing it?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Yes. Before publishing, you can preview your AI generated test to see exactly how it looks for test takers.",
              "@type": "Answer"
            }
          },
          {
            "name": "Who owns the tests I create?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "You do. Formester does not train models on your uploads or your generated tests. You can delete a test, a source file, or an entire workspace at any time.",
              "@type": "Answer"
            }
          },
          {
            "name": "What is the best AI test generator for teachers?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Formester is one of the best. It creates tests with AI, auto-grades answers, supports multimedia, and is easy to use.",
              "@type": "Answer"
            }
          },
          {
            "name": "Which tool helps you create your own quiz?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Formester’s AI quiz maker helps you build your own quiz fast. Just type a topic, and it generates questions, answers, and scoring.",
              "@type": "Answer"
            }
          },
          {
            "name": "What is the top test generator software?",
            "@type": "Question",
            "acceptedAnswer": {
              "text": "Formester ranks among the top test generator tools. It offers AI test generation, auto-scoring, offline support, and detailed analytics.",
              "@type": "Answer"
            }
          }
        ]
      }
    ],
    "@context": "https://schema.org"
  }
])
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-three-real-inputs {
    --fmstr-cmp-three-real-inputs-bg-section: #f9fafb;
    --fmstr-cmp-three-real-inputs-bg-card: #ffffff;
    --fmstr-cmp-three-real-inputs-bg-surface-2: #fcfcfd;
    --fmstr-cmp-three-real-inputs-bg-surface-3: #f2f4f7;
    --fmstr-cmp-three-real-inputs-bg-violet-25: #f7f3ff;
    --fmstr-cmp-three-real-inputs-bg-violet-100: #f4ebff;
    --fmstr-cmp-three-real-inputs-fg-1: #101828;
    --fmstr-cmp-three-real-inputs-fg-2: #475467;
    --fmstr-cmp-three-real-inputs-fg-3: #697586;
    --fmstr-cmp-three-real-inputs-fg-muted: #98a2b3;
    --fmstr-cmp-three-real-inputs-violet-500: #7f56d9;
    --fmstr-cmp-three-real-inputs-violet-600: #6941c6;
    --fmstr-cmp-three-real-inputs-violet-700: #53389e;
    --fmstr-cmp-three-real-inputs-border-light: #eaecf0;
    --fmstr-cmp-three-real-inputs-border-medium: #d0d5dd;
    --fmstr-cmp-three-real-inputs-border-violet: #9777e0;
    --fmstr-cmp-three-real-inputs-shadow-sm: 0 1px 3px 0 rgba(16, 24, 40, 0.10);
    --fmstr-cmp-three-real-inputs-shadow-md: 0 8px 24px -4px rgba(16, 24, 40, 0.08), 0 4px 8px -2px rgba(16, 24, 40, 0.04);
    --fmstr-cmp-three-real-inputs-success-bg: #f0fdf4;
    --fmstr-cmp-three-real-inputs-success-border: #86efac;
    --fmstr-cmp-three-real-inputs-success-fg: #14532d;
    --fmstr-cmp-three-real-inputs-success-tick: #22c55e;
    --fmstr-cmp-three-real-inputs-tag-mcq-bg: #eef4ff;
    --fmstr-cmp-three-real-inputs-tag-mcq-fg: #1e40af;
    --fmstr-cmp-three-real-inputs-tag-mcq-border: #c7d7ff;
    --fmstr-cmp-three-real-inputs-tag-short-bg: #fdf4ff;
    --fmstr-cmp-three-real-inputs-tag-short-fg: #86198f;
    --fmstr-cmp-three-real-inputs-tag-short-border: #f5d0fe;
    --fmstr-cmp-three-real-inputs-fs-tiny: 10px;
    --fmstr-cmp-three-real-inputs-fs-xs: 12px;
    --fmstr-cmp-three-real-inputs-fs-sm: 14px;
    --fmstr-cmp-three-real-inputs-fs-md: 16px;
    --fmstr-cmp-three-real-inputs-fs-lg: 18px;
    --fmstr-cmp-three-real-inputs-fs-2xl: 24px;
    --fmstr-cmp-three-real-inputs-fs-3xl: 36px;
    --fmstr-cmp-three-real-inputs-fw-regular: 400;
    --fmstr-cmp-three-real-inputs-fw-medium: 500;
    --fmstr-cmp-three-real-inputs-fw-semibold: 600;
    --fmstr-cmp-three-real-inputs-fw-bold: 700;
    --fmstr-cmp-three-real-inputs-lh-md: 24px;
    --fmstr-cmp-three-real-inputs-lh-2xl: 32px;
    --fmstr-cmp-three-real-inputs-space-1: 4px;
    --fmstr-cmp-three-real-inputs-space-2: 8px;
    --fmstr-cmp-three-real-inputs-space-3: 12px;
    --fmstr-cmp-three-real-inputs-space-4: 16px;
    --fmstr-cmp-three-real-inputs-space-5: 20px;
    --fmstr-cmp-three-real-inputs-space-6: 24px;
    --fmstr-cmp-three-real-inputs-space-8: 32px;
    --fmstr-cmp-three-real-inputs-space-10: 40px;
    --fmstr-cmp-three-real-inputs-space-12: 48px;
    --fmstr-cmp-three-real-inputs-space-16: 64px;
    --fmstr-cmp-three-real-inputs-r-sm: 6px;
    --fmstr-cmp-three-real-inputs-r-md: 8px;
    --fmstr-cmp-three-real-inputs-r-lg: 12px;
    --fmstr-cmp-three-real-inputs-r-xl: 16px;
    --fmstr-cmp-three-real-inputs-r-full: 9999px;

    background: var(--fmstr-cmp-three-real-inputs-bg-section);
    padding: var(--fmstr-cmp-three-real-inputs-space-16) var(--fmstr-cmp-three-real-inputs-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  .fmstr-cmp-three-real-inputs *,
  .fmstr-cmp-three-real-inputs *::before,
  .fmstr-cmp-three-real-inputs *::after {
    box-sizing: border-box;
  }

  .fmstr-cmp-three-real-inputs__inner {
    max-width: 1180px;
    margin: 0 auto;
  }

  .fmstr-cmp-three-real-inputs__header {
    text-align: center;
    margin: 0 auto var(--fmstr-cmp-three-real-inputs-space-10);
    max-width: 760px;
  }

  .fmstr-cmp-three-real-inputs__eyebrow {
    display: inline-block;
    padding: var(--fmstr-cmp-three-real-inputs-space-1) var(--fmstr-cmp-three-real-inputs-space-3);
    background: var(--fmstr-cmp-three-real-inputs-bg-violet-100);
    color: var(--fmstr-cmp-three-real-inputs-violet-600);
    border-radius: var(--fmstr-cmp-three-real-inputs-r-full);
    font-size: var(--fmstr-cmp-three-real-inputs-fs-xs);
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-three-real-inputs-space-4);
  }

  .fmstr-cmp-three-real-inputs__heading {
    font-size: var(--fmstr-cmp-three-real-inputs-fs-3xl);
    line-height: 44px;
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
    letter-spacing: -0.02em;
    color: var(--fmstr-cmp-three-real-inputs-fg-1);
    margin: 0 0 var(--fmstr-cmp-three-real-inputs-space-3);
  }

  .fmstr-cmp-three-real-inputs__intro {
    font-size: var(--fmstr-cmp-three-real-inputs-fs-md);
    line-height: var(--fmstr-cmp-three-real-inputs-lh-md);
    color: var(--fmstr-cmp-three-real-inputs-fg-3);
    margin: 0;
  }

  .fmstr-cmp-three-real-inputs__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--fmstr-cmp-three-real-inputs-space-6);
  }

  .fmstr-cmp-three-real-inputs__wrap {
    display: flex;
    flex-direction: column;
    gap: var(--fmstr-cmp-three-real-inputs-space-4);
  }

  .fmstr-cmp-three-real-inputs__card {
    background: var(--fmstr-cmp-three-real-inputs-bg-card);
    border: 1px solid var(--fmstr-cmp-three-real-inputs-border-light);
    border-radius: var(--fmstr-cmp-three-real-inputs-r-xl);
    box-shadow: var(--fmstr-cmp-three-real-inputs-shadow-sm);
    display: flex;
    flex-direction: column;
    height: 620px;
    overflow: hidden;
    transition: border-color 180ms ease, box-shadow 200ms ease;
  }

  .fmstr-cmp-three-real-inputs__card:hover {
    border-color: var(--fmstr-cmp-three-real-inputs-border-violet);
    box-shadow: var(--fmstr-cmp-three-real-inputs-shadow-md);
  }

  .fmstr-cmp-three-real-inputs__card-head {
    padding: var(--fmstr-cmp-three-real-inputs-space-5) var(--fmstr-cmp-three-real-inputs-space-6) var(--fmstr-cmp-three-real-inputs-space-4);
    border-bottom: 1px solid var(--fmstr-cmp-three-real-inputs-border-light);
    background: linear-gradient(180deg, var(--fmstr-cmp-three-real-inputs-bg-surface-2) 0%, #ffffff 100%);
    flex-shrink: 0;
  }

  .fmstr-cmp-three-real-inputs__kind {
    display: inline-block;
    font-size: var(--fmstr-cmp-three-real-inputs-fs-tiny);
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fmstr-cmp-three-real-inputs-violet-600);
    background: var(--fmstr-cmp-three-real-inputs-bg-violet-100);
    border: 1px solid var(--fmstr-cmp-three-real-inputs-border-violet);
    padding: 3px 9px;
    border-radius: var(--fmstr-cmp-three-real-inputs-r-full);
    margin-bottom: var(--fmstr-cmp-three-real-inputs-space-2);
  }

  .fmstr-cmp-three-real-inputs__card-title {
    margin: 0 0 var(--fmstr-cmp-three-real-inputs-space-3);
    font-size: 17.5px;
    letter-spacing: -0.015em;
    line-height: 1.3;
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
    color: var(--fmstr-cmp-three-real-inputs-fg-1);
  }

  .fmstr-cmp-three-real-inputs__meta {
    display: flex;
    flex-direction: column;
    gap: var(--fmstr-cmp-three-real-inputs-space-1);
    font-size: var(--fmstr-cmp-three-real-inputs-fs-xs);
    color: var(--fmstr-cmp-three-real-inputs-fg-3);
    line-height: 1.45;
  }

  .fmstr-cmp-three-real-inputs__meta strong {
    color: var(--fmstr-cmp-three-real-inputs-fg-2);
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
  }

  .fmstr-cmp-three-real-inputs__pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fmstr-cmp-three-real-inputs-space-2);
    margin-top: var(--fmstr-cmp-three-real-inputs-space-3);
  }

  .fmstr-cmp-three-real-inputs__pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: var(--fmstr-cmp-three-real-inputs-r-full);
    background: var(--fmstr-cmp-three-real-inputs-bg-surface-3);
    color: var(--fmstr-cmp-three-real-inputs-fg-2);
    font-size: 11.5px;
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
  }

  .fmstr-cmp-three-real-inputs__pill strong {
    color: var(--fmstr-cmp-three-real-inputs-violet-600);
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-bold);
    font-variant-numeric: tabular-nums;
  }

  .fmstr-cmp-three-real-inputs__body {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: var(--fmstr-cmp-three-real-inputs-space-5) var(--fmstr-cmp-three-real-inputs-space-6);
    scrollbar-gutter: stable;
  }

  .fmstr-cmp-three-real-inputs__body::-webkit-scrollbar { width: 8px; }
  .fmstr-cmp-three-real-inputs__body::-webkit-scrollbar-track { background: transparent; }
  .fmstr-cmp-three-real-inputs__body::-webkit-scrollbar-thumb { background: var(--fmstr-cmp-three-real-inputs-border-medium); border-radius: var(--fmstr-cmp-three-real-inputs-r-full); }

  .fmstr-cmp-three-real-inputs__body-intro {
    margin: 0 0 var(--fmstr-cmp-three-real-inputs-space-4);
    font-size: var(--fmstr-cmp-three-real-inputs-fs-xs);
    color: var(--fmstr-cmp-three-real-inputs-fg-3);
    font-style: italic;
    line-height: 1.5;
  }

  .fmstr-cmp-three-real-inputs__qn {
    margin-bottom: var(--fmstr-cmp-three-real-inputs-space-5);
    padding-bottom: var(--fmstr-cmp-three-real-inputs-space-5);
    border-bottom: 1px solid var(--fmstr-cmp-three-real-inputs-border-light);
  }

  .fmstr-cmp-three-real-inputs__qn:last-of-type {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: var(--fmstr-cmp-three-real-inputs-space-2);
  }

  .fmstr-cmp-three-real-inputs__qn-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--fmstr-cmp-three-real-inputs-space-3);
    gap: var(--fmstr-cmp-three-real-inputs-space-2);
    flex-wrap: wrap;
  }

  .fmstr-cmp-three-real-inputs__qn-num {
    font-size: 11.5px;
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-bold);
    color: var(--fmstr-cmp-three-real-inputs-fg-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .fmstr-cmp-three-real-inputs__qn-tags {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
  }

  .fmstr-cmp-three-real-inputs__qn-tag {
    font-size: var(--fmstr-cmp-three-real-inputs-fs-tiny);
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
    padding: 3px 8px;
    border-radius: var(--fmstr-cmp-three-real-inputs-r-full);
    border: 1px solid transparent;
  }

  .fmstr-cmp-three-real-inputs__qn-tag--mcq {
    background: var(--fmstr-cmp-three-real-inputs-tag-mcq-bg);
    color: var(--fmstr-cmp-three-real-inputs-tag-mcq-fg);
    border-color: var(--fmstr-cmp-three-real-inputs-tag-mcq-border);
  }

  .fmstr-cmp-three-real-inputs__qn-tag--short {
    background: var(--fmstr-cmp-three-real-inputs-tag-short-bg);
    color: var(--fmstr-cmp-three-real-inputs-tag-short-fg);
    border-color: var(--fmstr-cmp-three-real-inputs-tag-short-border);
  }

  .fmstr-cmp-three-real-inputs__qn-text {
    font-size: 14.5px;
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
    color: var(--fmstr-cmp-three-real-inputs-fg-1);
    margin: 0 0 var(--fmstr-cmp-three-real-inputs-space-3);
    line-height: 1.5;
  }

  .fmstr-cmp-three-real-inputs__qn-opts {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--fmstr-cmp-three-real-inputs-space-2);
  }

  .fmstr-cmp-three-real-inputs__qn-opt {
    display: flex;
    align-items: center;
    gap: var(--fmstr-cmp-three-real-inputs-space-3);
    padding: var(--fmstr-cmp-three-real-inputs-space-3);
    background: #ffffff;
    border: 1.5px solid var(--fmstr-cmp-three-real-inputs-border-light);
    border-radius: 9px;
    font-size: 13px;
    color: var(--fmstr-cmp-three-real-inputs-fg-2);
  }

  .fmstr-cmp-three-real-inputs__qn-opt--correct {
    background: var(--fmstr-cmp-three-real-inputs-success-bg);
    border-color: var(--fmstr-cmp-three-real-inputs-success-border);
    color: var(--fmstr-cmp-three-real-inputs-success-fg);
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
  }

  .fmstr-cmp-three-real-inputs__qn-letter {
    width: 20px;
    height: 20px;
    border-radius: var(--fmstr-cmp-three-real-inputs-r-sm);
    background: var(--fmstr-cmp-three-real-inputs-bg-surface-3);
    color: var(--fmstr-cmp-three-real-inputs-fg-3);
    display: inline-grid;
    place-items: center;
    font-size: 11px;
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-bold);
    flex-shrink: 0;
  }

  .fmstr-cmp-three-real-inputs__qn-opt--correct .fmstr-cmp-three-real-inputs__qn-letter {
    background: var(--fmstr-cmp-three-real-inputs-success-tick);
    color: #ffffff;
  }

  .fmstr-cmp-three-real-inputs__qn-bullet {
    width: 18px;
    height: 18px;
    border-radius: var(--fmstr-cmp-three-real-inputs-r-full);
    border: 1.8px solid var(--fmstr-cmp-three-real-inputs-border-medium);
    flex-shrink: 0;
    display: grid;
    place-items: center;
  }

  .fmstr-cmp-three-real-inputs__qn-opt--correct .fmstr-cmp-three-real-inputs__qn-bullet {
    border-color: var(--fmstr-cmp-three-real-inputs-success-tick);
    background: var(--fmstr-cmp-three-real-inputs-success-tick);
  }

  .fmstr-cmp-three-real-inputs__qn-bullet svg {
    width: 10px;
    height: 10px;
    color: #ffffff;
    stroke-width: 3.5;
    display: none;
  }

  .fmstr-cmp-three-real-inputs__qn-opt--correct .fmstr-cmp-three-real-inputs__qn-bullet svg {
    display: block;
  }

  .fmstr-cmp-three-real-inputs__qn-short-input {
    padding: var(--fmstr-cmp-three-real-inputs-space-4);
    min-height: 60px;
    background: var(--fmstr-cmp-three-real-inputs-bg-surface-2);
    border: 1.5px dashed var(--fmstr-cmp-three-real-inputs-border-medium);
    border-radius: 9px;
    color: var(--fmstr-cmp-three-real-inputs-fg-3);
    font-size: 13px;
    font-style: italic;
    display: flex;
    align-items: center;
  }

  .fmstr-cmp-three-real-inputs__qn-answer-note {
    margin-top: var(--fmstr-cmp-three-real-inputs-space-2);
    padding: var(--fmstr-cmp-three-real-inputs-space-3);
    background: var(--fmstr-cmp-three-real-inputs-success-bg);
    border: 1px solid #bbf7d0;
    border-radius: var(--fmstr-cmp-three-real-inputs-r-md);
    font-size: 12.5px;
    color: var(--fmstr-cmp-three-real-inputs-success-fg);
    line-height: 1.5;
    display: flex;
    gap: var(--fmstr-cmp-three-real-inputs-space-2);
  }

  .fmstr-cmp-three-real-inputs__qn-answer-note strong { font-weight: var(--fmstr-cmp-three-real-inputs-fw-bold); }

  .fmstr-cmp-three-real-inputs__qn-answer-note svg {
    width: 13px;
    height: 13px;
    color: #16a34a;
    flex-shrink: 0;
    margin-top: 2px;
    stroke-width: 2.2;
  }

  .fmstr-cmp-three-real-inputs__foot {
    padding: var(--fmstr-cmp-three-real-inputs-space-3) var(--fmstr-cmp-three-real-inputs-space-6);
    background: var(--fmstr-cmp-three-real-inputs-bg-surface-2);
    border-top: 1px solid var(--fmstr-cmp-three-real-inputs-border-light);
    flex-shrink: 0;
    text-align: center;
  }

  .fmstr-cmp-three-real-inputs__more {
    color: var(--fmstr-cmp-three-real-inputs-fg-3);
    font-size: 12.5px;
    line-height: 1.5;
  }

  .fmstr-cmp-three-real-inputs__more strong {
    color: var(--fmstr-cmp-three-real-inputs-fg-1);
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-bold);
  }

  .fmstr-cmp-three-real-inputs__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--fmstr-cmp-three-real-inputs-space-2);
    width: 100%;
    padding: 13px 20px;
    background: var(--fmstr-cmp-three-real-inputs-violet-500);
    color: #ffffff;
    border-radius: var(--fmstr-cmp-three-real-inputs-r-full);
    font-size: 14.5px;
    font-weight: var(--fmstr-cmp-three-real-inputs-fw-semibold);
    text-decoration: none;
    transition: background-color 160ms ease, transform 160ms ease;
  }

  .fmstr-cmp-three-real-inputs__btn:hover {
    background: var(--fmstr-cmp-three-real-inputs-violet-600);
    text-decoration: none;
    transform: translateY(-1px);
  }

  .fmstr-cmp-three-real-inputs__btn svg {
    width: 15px;
    height: 15px;
    transition: transform 160ms ease;
  }

  .fmstr-cmp-three-real-inputs__btn:hover svg {
    transform: translateX(2px);
  }

  @media (max-width: 1100px) {
    .fmstr-cmp-three-real-inputs__grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 760px) {
    .fmstr-cmp-three-real-inputs {
      padding: var(--fmstr-cmp-three-real-inputs-space-12) var(--fmstr-cmp-three-real-inputs-space-4);
    }
    .fmstr-cmp-three-real-inputs__heading {
      font-size: var(--fmstr-cmp-three-real-inputs-fs-2xl);
      line-height: var(--fmstr-cmp-three-real-inputs-lh-2xl);
    }
    .fmstr-cmp-three-real-inputs__grid {
      grid-template-columns: 1fr;
    }
    .fmstr-cmp-three-real-inputs__card {
      height: 580px;
    }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-inputs {

    --fmstr-cmp-inputs-bg-violet-25: #f7f3ff;
    --fmstr-cmp-inputs-fg-1: #101828;
    --fmstr-cmp-inputs-fg-2: #475467;
    --fmstr-cmp-inputs-fg-3: #697586;
    --fmstr-cmp-inputs-violet-100: #f4ebff;
    --fmstr-cmp-inputs-violet-600: #6941c6;
    --fmstr-cmp-inputs-border-light: #eaecf0;
    --fmstr-cmp-inputs-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    --fmstr-cmp-inputs-fs-xs: 12px;
    --fmstr-cmp-inputs-fs-sm: 14px;
    --fmstr-cmp-inputs-fs-md: 16px;
    --fmstr-cmp-inputs-fs-2xl: 24px;
    --fmstr-cmp-inputs-fs-3xl: 36px;
    --fmstr-cmp-inputs-fw-regular: 400;
    --fmstr-cmp-inputs-fw-semibold: 600;
    --fmstr-cmp-inputs-fw-bold: 700;
    --fmstr-cmp-inputs-lh-sm: 20px;
    --fmstr-cmp-inputs-lh-md: 24px;
    --fmstr-cmp-inputs-lh-2xl: 32px;
    --fmstr-cmp-inputs-space-1: 4px;
    --fmstr-cmp-inputs-space-2: 8px;
    --fmstr-cmp-inputs-space-3: 12px;
    --fmstr-cmp-inputs-space-4: 16px;
    --fmstr-cmp-inputs-space-5: 20px;
    --fmstr-cmp-inputs-space-6: 24px;
    --fmstr-cmp-inputs-space-7: 28px;
    --fmstr-cmp-inputs-space-8: 32px;
    --fmstr-cmp-inputs-space-10: 40px;
    --fmstr-cmp-inputs-space-12: 48px;
    --fmstr-cmp-inputs-space-16: 64px;
    --fmstr-cmp-inputs-r-lg: 8px;
    --fmstr-cmp-inputs-r-2xl: 16px;
    --fmstr-cmp-inputs-r-full: 9999px;
    padding: var(--fmstr-cmp-inputs-space-16) var(--fmstr-cmp-inputs-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  .fmstr-cmp-inputs *, .fmstr-cmp-inputs *::before, .fmstr-cmp-inputs *::after {
    box-sizing: border-box;
  }

  .fmstr-cmp-inputs__inner {
    max-width: 1180px;
    margin: 0 auto;
  }

  .fmstr-cmp-inputs__header {
    margin: 0 0 var(--fmstr-cmp-inputs-space-10);
    max-width: 760px;
  }

  .fmstr-cmp-inputs__eyebrow {
    display: inline-block;
    padding: var(--fmstr-cmp-inputs-space-1) var(--fmstr-cmp-inputs-space-3);
    background: var(--fmstr-cmp-inputs-violet-100);
    color: var(--fmstr-cmp-inputs-violet-600);
    border-radius: var(--fmstr-cmp-inputs-r-full);
    font-size: var(--fmstr-cmp-inputs-fs-xs);
    font-weight: var(--fmstr-cmp-inputs-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-inputs-space-5);
  }

  .fmstr-cmp-inputs__heading {
    font-size: var(--fmstr-cmp-inputs-fs-3xl);
    line-height: 44px;
    font-weight: var(--fmstr-cmp-inputs-fw-semibold);
    letter-spacing: -0.02em;
    color: var(--fmstr-cmp-inputs-fg-1);
    margin: 0 0 var(--fmstr-cmp-inputs-space-3);
  }

  .fmstr-cmp-inputs__subhead {
    font-size: var(--fmstr-cmp-inputs-fs-md);
    line-height: var(--fmstr-cmp-inputs-lh-md);
    color: var(--fmstr-cmp-inputs-fg-3);
    margin: 0;
  }

  .fmstr-cmp-inputs__card {
    background: var(--fmstr-cmp-inputs-bg-primary);
    border: 1px solid var(--fmstr-cmp-inputs-border-light);
    border-radius: var(--fmstr-cmp-inputs-r-2xl);
    box-shadow: var(--fmstr-cmp-inputs-shadow-xs);
    overflow: hidden;
  }

  .fmstr-cmp-inputs__row {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--fmstr-cmp-inputs-space-8);
    padding: var(--fmstr-cmp-inputs-space-7) var(--fmstr-cmp-inputs-space-8);
    border-bottom: 1px solid var(--fmstr-cmp-inputs-border-light);
  }

  .fmstr-cmp-inputs__row:last-child {
    border-bottom: none;
  }

  .fmstr-cmp-inputs__label {
    display: flex;
    align-items: flex-start;
    gap: var(--fmstr-cmp-inputs-space-4);
  }

  .fmstr-cmp-inputs__icon {
    width: 40px;
    height: 40px;
    border-radius: var(--fmstr-cmp-inputs-r-lg);
    background: var(--fmstr-cmp-inputs-bg-violet-25);
    color: var(--fmstr-cmp-inputs-violet-600);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .fmstr-cmp-inputs__label-text {
    display: flex;
    flex-direction: column;
    gap: var(--fmstr-cmp-inputs-space-1);
    padding-top: var(--fmstr-cmp-inputs-space-1);
  }

  .fmstr-cmp-inputs__label-name {
    font-size: var(--fmstr-cmp-inputs-fs-md);
    line-height: var(--fmstr-cmp-inputs-lh-md);
    font-weight: var(--fmstr-cmp-inputs-fw-semibold);
    color: var(--fmstr-cmp-inputs-fg-1);
  }

  .fmstr-cmp-inputs__label-meta {
    font-size: var(--fmstr-cmp-inputs-fs-sm);
    line-height: var(--fmstr-cmp-inputs-lh-sm);
    color: var(--fmstr-cmp-inputs-fg-3);
  }

  .fmstr-cmp-inputs__body {
    display: flex;
    flex-direction: column;
    gap: var(--fmstr-cmp-inputs-space-5);
  }

  .fmstr-cmp-inputs__desc {
    font-size: var(--fmstr-cmp-inputs-fs-md);
    line-height: var(--fmstr-cmp-inputs-lh-md);
    color: var(--fmstr-cmp-inputs-fg-2);
    margin: 0;
  }

  .fmstr-cmp-inputs__pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fmstr-cmp-inputs-space-2);
  }

  .fmstr-cmp-inputs__pill {
    display: inline-flex;
    align-items: center;
    padding: var(--fmstr-cmp-inputs-space-2) var(--fmstr-cmp-inputs-space-4);
    border-radius: var(--fmstr-cmp-inputs-r-full);
    background: var(--fmstr-cmp-inputs-violet-100);
    color: var(--fmstr-cmp-inputs-violet-600);
    font-size: var(--fmstr-cmp-inputs-fs-sm);
    line-height: var(--fmstr-cmp-inputs-lh-sm);
    font-weight: var(--fmstr-cmp-inputs-fw-semibold);
  }

  @media (max-width: 760px) {
    .fmstr-cmp-inputs {
      padding: var(--fmstr-cmp-inputs-space-12) var(--fmstr-cmp-inputs-space-4);
    }
    .fmstr-cmp-inputs__heading {
      font-size: var(--fmstr-cmp-inputs-fs-2xl);
      line-height: var(--fmstr-cmp-inputs-lh-2xl);
    }
    .fmstr-cmp-inputs__row {
      grid-template-columns: 1fr;
      gap: var(--fmstr-cmp-inputs-space-5);
      padding: var(--fmstr-cmp-inputs-space-6);
    }
    .fmstr-cmp-inputs__pill {
      font-size: var(--fmstr-cmp-inputs-fs-xs);
      padding: var(--fmstr-cmp-inputs-space-1) var(--fmstr-cmp-inputs-space-3);
    }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-tc-quality-control {
    --fmstr-cmp-tc-quality-control-bg-section: #0F0921;
    --fmstr-cmp-tc-quality-control-bg-glow: radial-gradient(ellipse 900px 600px at 95% 0%, rgba(127, 86, 217, 0.45) 0%, rgba(100, 52, 208, 0.15) 30%, transparent 65%);
    --fmstr-cmp-tc-quality-control-bg-card: rgba(255, 255, 255, 0.04);
    --fmstr-cmp-tc-quality-control-bg-card-glow: radial-gradient(ellipse 500px 400px at 90% 5%, rgba(127, 86, 217, 0.30) 0%, transparent 60%);
    --fmstr-cmp-tc-quality-control-bg-pill: rgba(255, 255, 255, 0.08);
    --fmstr-cmp-tc-quality-control-bg-row: rgba(255, 255, 255, 0.04);
    --fmstr-cmp-tc-quality-control-fg-eyebrow: #bda6ff;
    --fmstr-cmp-tc-quality-control-fg-row: rgba(255, 255, 255, 0.85);
    --fmstr-cmp-tc-quality-control-fg-row-tag: #bda6ff;
    --fmstr-cmp-tc-quality-control-fs-xs: 12px;
    --fmstr-cmp-tc-quality-control-fs-sm: 14px;
    --fmstr-cmp-tc-quality-control-fs-md: 16px;
    --fmstr-cmp-tc-quality-control-fs-lg: 18px;
    --fmstr-cmp-tc-quality-control-fs-2xl: 24px;
    --fmstr-cmp-tc-quality-control-fs-3xl: 32px;
    --fmstr-cmp-tc-quality-control-fw-bold: 700;
    --fmstr-cmp-tc-quality-control-lh-md: 24px;
    --fmstr-cmp-tc-quality-control-lh-lg: 28px;
    --fmstr-cmp-tc-quality-control-lh-2xl: 32px;
    --fmstr-cmp-tc-quality-control-space-2: 8px;
    --fmstr-cmp-tc-quality-control-space-3: 12px;
    --fmstr-cmp-tc-quality-control-space-4: 16px;
    --fmstr-cmp-tc-quality-control-space-5: 20px;
    --fmstr-cmp-tc-quality-control-space-6: 24px;
    --fmstr-cmp-tc-quality-control-space-7: 28px;
    --fmstr-cmp-tc-quality-control-space-8: 32px;
    --fmstr-cmp-tc-quality-control-space-12: 48px;
    --fmstr-cmp-tc-quality-control-r-md: 8px;
    --fmstr-cmp-tc-quality-control-r-2xl: 16px;
    --fmstr-cmp-tc-quality-control-r-full: 9999px;

    background: transparent;
    padding: var(--fmstr-cmp-tc-quality-control-space-12) var(--fmstr-cmp-tc-quality-control-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  .fmstr-cmp-tc-quality-control *, .fmstr-cmp-tc-quality-control *::before, .fmstr-cmp-tc-quality-control *::after { box-sizing: border-box; }

  .fmstr-cmp-tc-quality-control__container {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    background-color: var(--fmstr-cmp-tc-quality-control-bg-section);
    background-image: var(--fmstr-cmp-tc-quality-control-bg-glow);
    border-radius: 28px;
    padding: var(--fmstr-cmp-tc-quality-control-space-12);
    overflow: hidden;
  }

  .fmstr-cmp-tc-quality-control__inner {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: var(--fmstr-cmp-tc-quality-control-space-12);
    align-items: center;
  }

  .fmstr-cmp-tc-quality-control__eyebrow {
    display: inline-block;
    padding: var(--fmstr-cmp-tc-quality-control-space-2) var(--fmstr-cmp-tc-quality-control-space-4);
    background: var(--fmstr-cmp-tc-quality-control-bg-pill);
    color: var(--fmstr-cmp-tc-quality-control-fg-eyebrow);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: var(--fmstr-cmp-tc-quality-control-r-full);
    font-size: var(--fmstr-cmp-tc-quality-control-fs-xs);
    font-weight: var(--fmstr-cmp-tc-quality-control-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-tc-quality-control-space-5);
  }

  .fmstr-cmp-tc-quality-control__heading {
    font-size: var(--fmstr-cmp-tc-quality-control-fs-3xl);
    line-height: 40px;
    font-weight: var(--fmstr-cmp-tc-quality-control-fw-bold);
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0 0 var(--fmstr-cmp-tc-quality-control-space-6);
  }

  .fmstr-cmp-tc-quality-control__body p {
    font-size: var(--fmstr-cmp-tc-quality-control-fs-md);
    line-height: var(--fmstr-cmp-tc-quality-control-lh-md);
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 var(--fmstr-cmp-tc-quality-control-space-4);
  }
  .fmstr-cmp-tc-quality-control__body p:last-child { margin-bottom: 0; }

  .fmstr-cmp-tc-quality-control__card {
    background-color: var(--fmstr-cmp-tc-quality-control-bg-card);
    background-image: var(--fmstr-cmp-tc-quality-control-bg-card-glow);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--fmstr-cmp-tc-quality-control-r-2xl);
    padding: var(--fmstr-cmp-tc-quality-control-space-7);
    backdrop-filter: blur(8px);
  }

  .fmstr-cmp-tc-quality-control__pill {
    display: inline-block;
    padding: var(--fmstr-cmp-tc-quality-control-space-2) var(--fmstr-cmp-tc-quality-control-space-4);
    background: var(--fmstr-cmp-tc-quality-control-bg-pill);
    color: var(--fmstr-cmp-tc-quality-control-fg-eyebrow);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: var(--fmstr-cmp-tc-quality-control-r-full);
    font-size: var(--fmstr-cmp-tc-quality-control-fs-xs);
    font-weight: var(--fmstr-cmp-tc-quality-control-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-tc-quality-control-space-5);
  }

  .fmstr-cmp-tc-quality-control__card-title {
    font-size: var(--fmstr-cmp-tc-quality-control-fs-lg);
    line-height: var(--fmstr-cmp-tc-quality-control-lh-lg);
    font-weight: var(--fmstr-cmp-tc-quality-control-fw-bold);
    color: #ffffff;
    margin: 0 0 var(--fmstr-cmp-tc-quality-control-space-5);
  }

  .fmstr-cmp-tc-quality-control__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--fmstr-cmp-tc-quality-control-space-2);
  }

  .fmstr-cmp-tc-quality-control__item {
    display: flex;
    align-items: flex-start;
    gap: var(--fmstr-cmp-tc-quality-control-space-3);
    padding: var(--fmstr-cmp-tc-quality-control-space-3) var(--fmstr-cmp-tc-quality-control-space-4);
    background: var(--fmstr-cmp-tc-quality-control-bg-row);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: var(--fmstr-cmp-tc-quality-control-r-md);
  }

  .fmstr-cmp-tc-quality-control__check {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: var(--fmstr-cmp-tc-quality-control-fg-row-tag);
    margin-top: 2px;
  }

  .fmstr-cmp-tc-quality-control__item-text {
    font-size: var(--fmstr-cmp-tc-quality-control-fs-sm);
    line-height: 22px;
    color: var(--fmstr-cmp-tc-quality-control-fg-row);
  }
  .fmstr-cmp-tc-quality-control__item-text strong {
    color: #ffffff;
    font-weight: var(--fmstr-cmp-tc-quality-control-fw-bold);
  }

  @media (max-width: 760px) {
    .fmstr-cmp-tc-quality-control { padding: var(--fmstr-cmp-tc-quality-control-space-8) var(--fmstr-cmp-tc-quality-control-space-4); }
    .fmstr-cmp-tc-quality-control__container { padding: var(--fmstr-cmp-tc-quality-control-space-7); border-radius: 20px; }
    .fmstr-cmp-tc-quality-control__inner { grid-template-columns: 1fr; gap: var(--fmstr-cmp-tc-quality-control-space-8); }
    .fmstr-cmp-tc-quality-control__heading { font-size: var(--fmstr-cmp-tc-quality-control-fs-2xl); line-height: var(--fmstr-cmp-tc-quality-control-lh-2xl); }
    .fmstr-cmp-tc-quality-control__card { padding: var(--fmstr-cmp-tc-quality-control-space-6); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-tc-why-pick {
    --fmstr-cmp-tc-why-pick-bg-card: #ffffff;
    --fmstr-cmp-tc-why-pick-bg-violet-25: #f7f3ff;
    --fmstr-cmp-tc-why-pick-bg-pill: #f4ebff;
    --fmstr-cmp-tc-why-pick-fg-1: #101828;
    --fmstr-cmp-tc-why-pick-fg-2: #475467;
    --fmstr-cmp-tc-why-pick-fg-3: #697586;
    --fmstr-cmp-tc-why-pick-violet-600: #6941c6;
    --fmstr-cmp-tc-why-pick-border-light: #eaecf0;
    --fmstr-cmp-tc-why-pick-border-violet: #9777e0;
    --fmstr-cmp-tc-why-pick-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    --fmstr-cmp-tc-why-pick-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
    --fmstr-cmp-tc-why-pick-fs-xs: 12px;
    --fmstr-cmp-tc-why-pick-fs-sm: 14px;
    --fmstr-cmp-tc-why-pick-fs-md: 16px;
    --fmstr-cmp-tc-why-pick-fs-lg: 18px;
    --fmstr-cmp-tc-why-pick-fs-2xl: 24px;
    --fmstr-cmp-tc-why-pick-fs-3xl: 36px;
    --fmstr-cmp-tc-why-pick-fw-bold: 700;
    --fmstr-cmp-tc-why-pick-lh-md: 24px;
    --fmstr-cmp-tc-why-pick-lh-lg: 28px;
    --fmstr-cmp-tc-why-pick-lh-2xl: 32px;
    --fmstr-cmp-tc-why-pick-space-1: 4px;
    --fmstr-cmp-tc-why-pick-space-2: 8px;
    --fmstr-cmp-tc-why-pick-space-3: 12px;
    --fmstr-cmp-tc-why-pick-space-4: 16px;
    --fmstr-cmp-tc-why-pick-space-5: 20px;
    --fmstr-cmp-tc-why-pick-space-6: 24px;
    --fmstr-cmp-tc-why-pick-space-7: 28px;
    --fmstr-cmp-tc-why-pick-space-8: 32px;
    --fmstr-cmp-tc-why-pick-space-10: 40px;
    --fmstr-cmp-tc-why-pick-space-12: 48px;
    --fmstr-cmp-tc-why-pick-space-16: 64px;
    --fmstr-cmp-tc-why-pick-r-md: 8px;
    --fmstr-cmp-tc-why-pick-r-lg: 12px;
    --fmstr-cmp-tc-why-pick-r-2xl: 16px;
    --fmstr-cmp-tc-why-pick-r-full: 9999px;

    padding: var(--fmstr-cmp-tc-why-pick-space-16) var(--fmstr-cmp-tc-why-pick-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: var(--fmstr-cmp-tc-why-pick-fg-1);
  }

  .fmstr-cmp-tc-why-pick *, .fmstr-cmp-tc-why-pick *::before, .fmstr-cmp-tc-why-pick *::after { box-sizing: border-box; }

  .fmstr-cmp-tc-why-pick__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-tc-why-pick__header {
    max-width: 760px;
    margin: 0 auto var(--fmstr-cmp-tc-why-pick-space-10);
    text-align: center;
  }

  .fmstr-cmp-tc-why-pick__eyebrow {
    display: inline-block;
    padding: var(--fmstr-cmp-tc-why-pick-space-1) var(--fmstr-cmp-tc-why-pick-space-3);
    background: var(--fmstr-cmp-tc-why-pick-bg-pill);
    color: var(--fmstr-cmp-tc-why-pick-violet-600);
    border-radius: var(--fmstr-cmp-tc-why-pick-r-full);
    font-size: var(--fmstr-cmp-tc-why-pick-fs-xs);
    font-weight: var(--fmstr-cmp-tc-why-pick-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-tc-why-pick-space-4);
  }

  .fmstr-cmp-tc-why-pick__heading {
    font-size: var(--fmstr-cmp-tc-why-pick-fs-3xl);
    line-height: 44px;
    font-weight: var(--fmstr-cmp-tc-why-pick-fw-bold);
    letter-spacing: -0.02em;
    color: var(--fmstr-cmp-tc-why-pick-fg-1);
    margin: 0 0 var(--fmstr-cmp-tc-why-pick-space-3);
  }

  .fmstr-cmp-tc-why-pick__sub {
    font-size: var(--fmstr-cmp-tc-why-pick-fs-md);
    line-height: var(--fmstr-cmp-tc-why-pick-lh-md);
    color: var(--fmstr-cmp-tc-why-pick-fg-3);
    margin: 0;
  }

  .fmstr-cmp-tc-why-pick__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    gap: var(--fmstr-cmp-tc-why-pick-space-5);
  }

  .fmstr-cmp-tc-why-pick__card {
    display: flex;
    flex-direction: column;
    gap: var(--fmstr-cmp-tc-why-pick-space-4);
    padding: var(--fmstr-cmp-tc-why-pick-space-7);
    background: var(--fmstr-cmp-tc-why-pick-bg-card);
    border: 1px solid var(--fmstr-cmp-tc-why-pick-border-light);
    border-radius: var(--fmstr-cmp-tc-why-pick-r-2xl);
    box-shadow: var(--fmstr-cmp-tc-why-pick-shadow-xs);
    transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
  }
  .fmstr-cmp-tc-why-pick__card:hover {
    border-color: var(--fmstr-cmp-tc-why-pick-border-violet);
    box-shadow: var(--fmstr-cmp-tc-why-pick-shadow-md);
    transform: translateY(-2px);
  }

  .fmstr-cmp-tc-why-pick__icon {
    width: 44px;
    height: 44px;
    border-radius: var(--fmstr-cmp-tc-why-pick-r-md);
    background: var(--fmstr-cmp-tc-why-pick-bg-violet-25);
    color: var(--fmstr-cmp-tc-why-pick-violet-600);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .fmstr-cmp-tc-why-pick__title {
    margin: 0;
    font-size: var(--fmstr-cmp-tc-why-pick-fs-lg);
    line-height: var(--fmstr-cmp-tc-why-pick-lh-lg);
    font-weight: var(--fmstr-cmp-tc-why-pick-fw-bold);
    color: var(--fmstr-cmp-tc-why-pick-fg-1);
  }

  .fmstr-cmp-tc-why-pick__body {
    margin: 0;
    font-size: var(--fmstr-cmp-tc-why-pick-fs-sm);
    line-height: 22px;
    color: var(--fmstr-cmp-tc-why-pick-fg-2);
  }

  @media (max-width: 1024px) {
    .fmstr-cmp-tc-why-pick__grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 760px) {
    .fmstr-cmp-tc-why-pick { padding: var(--fmstr-cmp-tc-why-pick-space-12) var(--fmstr-cmp-tc-why-pick-space-4); }
    .fmstr-cmp-tc-why-pick__heading { font-size: var(--fmstr-cmp-tc-why-pick-fs-2xl); line-height: var(--fmstr-cmp-tc-why-pick-lh-2xl); }
    .fmstr-cmp-tc-why-pick__grid { grid-template-columns: 1fr; }
    .fmstr-cmp-tc-why-pick__card { padding: var(--fmstr-cmp-tc-why-pick-space-6); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-who-uses-formester {
    --fmstr-cmp-who-uses-formester-bg-section: #f9fafb;
    --fmstr-cmp-who-uses-formester-bg-card: #ffffff;
    --fmstr-cmp-who-uses-formester-bg-violet-25: #f7f3ff;
    --fmstr-cmp-who-uses-formester-fg-1: #101828;
    --fmstr-cmp-who-uses-formester-fg-2: #475467;
    --fmstr-cmp-who-uses-formester-fg-3: #697586;
    --fmstr-cmp-who-uses-formester-violet-600: #6941c6;
    --fmstr-cmp-who-uses-formester-violet-700: #53389e;
    --fmstr-cmp-who-uses-formester-border-light: #eaecf0;
    --fmstr-cmp-who-uses-formester-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    --fmstr-cmp-who-uses-formester-fs-sm: 14px;
    --fmstr-cmp-who-uses-formester-fs-md: 16px;
    --fmstr-cmp-who-uses-formester-fs-lg: 18px;
    --fmstr-cmp-who-uses-formester-fs-2xl: 24px;
    --fmstr-cmp-who-uses-formester-fs-3xl: 36px;
    --fmstr-cmp-who-uses-formester-fw-semibold: 600;
    --fmstr-cmp-who-uses-formester-lh-md: 24px;
    --fmstr-cmp-who-uses-formester-lh-lg: 28px;
    --fmstr-cmp-who-uses-formester-lh-2xl: 32px;
    --fmstr-cmp-who-uses-formester-space-2: 8px;
    --fmstr-cmp-who-uses-formester-space-3: 12px;
    --fmstr-cmp-who-uses-formester-space-4: 16px;
    --fmstr-cmp-who-uses-formester-space-5: 20px;
    --fmstr-cmp-who-uses-formester-space-6: 24px;
    --fmstr-cmp-who-uses-formester-space-8: 32px;
    --fmstr-cmp-who-uses-formester-space-10: 40px;
    --fmstr-cmp-who-uses-formester-space-12: 48px;
    --fmstr-cmp-who-uses-formester-space-16: 64px;
    --fmstr-cmp-who-uses-formester-r-lg: 8px;
    --fmstr-cmp-who-uses-formester-r-2xl: 16px;

    background: var(--fmstr-cmp-who-uses-formester-bg-section);
    padding: var(--fmstr-cmp-who-uses-formester-space-16) var(--fmstr-cmp-who-uses-formester-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  .fmstr-cmp-who-uses-formester *,
  .fmstr-cmp-who-uses-formester *::before,
  .fmstr-cmp-who-uses-formester *::after {
    box-sizing: border-box;
  }

  .fmstr-cmp-who-uses-formester__inner {
    max-width: 1180px;
    margin: 0 auto;
  }

  .fmstr-cmp-who-uses-formester__header {
    margin: 0 0 var(--fmstr-cmp-who-uses-formester-space-10);
    max-width: 760px;
  }

  .fmstr-cmp-who-uses-formester__heading {
    font-size: var(--fmstr-cmp-who-uses-formester-fs-3xl);
    line-height: 44px;
    font-weight: var(--fmstr-cmp-who-uses-formester-fw-semibold);
    letter-spacing: -0.02em;
    color: var(--fmstr-cmp-who-uses-formester-fg-1);
    margin: 0 0 var(--fmstr-cmp-who-uses-formester-space-3);
  }

  .fmstr-cmp-who-uses-formester__subhead {
    font-size: var(--fmstr-cmp-who-uses-formester-fs-md);
    line-height: var(--fmstr-cmp-who-uses-formester-lh-md);
    color: var(--fmstr-cmp-who-uses-formester-fg-3);
    margin: 0;
  }

  .fmstr-cmp-who-uses-formester__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    column-gap: var(--fmstr-cmp-who-uses-formester-space-6);
    row-gap: var(--fmstr-cmp-who-uses-formester-space-8);
  }

  .fmstr-cmp-who-uses-formester__card {
    display: flex;
    flex-direction: column;
    padding: var(--fmstr-cmp-who-uses-formester-space-8);
    background: var(--fmstr-cmp-who-uses-formester-bg-card);
    border: 1px solid var(--fmstr-cmp-who-uses-formester-border-light);
    border-radius: var(--fmstr-cmp-who-uses-formester-r-2xl);
    box-shadow: var(--fmstr-cmp-who-uses-formester-shadow-xs);
  }

  .fmstr-cmp-who-uses-formester__icon {
    width: 40px;
    height: 40px;
    border-radius: var(--fmstr-cmp-who-uses-formester-r-lg);
    background: var(--fmstr-cmp-who-uses-formester-bg-violet-25);
    color: var(--fmstr-cmp-who-uses-formester-violet-600);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--fmstr-cmp-who-uses-formester-space-5);
  }

  .fmstr-cmp-who-uses-formester__title {
    font-size: var(--fmstr-cmp-who-uses-formester-fs-lg);
    line-height: var(--fmstr-cmp-who-uses-formester-lh-lg);
    font-weight: var(--fmstr-cmp-who-uses-formester-fw-semibold);
    color: var(--fmstr-cmp-who-uses-formester-fg-1);
    margin: 0 0 var(--fmstr-cmp-who-uses-formester-space-3);
  }

  .fmstr-cmp-who-uses-formester__desc {
    font-size: var(--fmstr-cmp-who-uses-formester-fs-sm);
    line-height: 22px;
    color: var(--fmstr-cmp-who-uses-formester-fg-2);
    margin: 0;
  }

  .fmstr-cmp-who-uses-formester__cta {
    display: flex;
    align-items: center;
    gap: var(--fmstr-cmp-who-uses-formester-space-2);
    margin-top: auto;
    padding-top: var(--fmstr-cmp-who-uses-formester-space-5);
    border-top: 1px solid var(--fmstr-cmp-who-uses-formester-border-light);
    color: var(--fmstr-cmp-who-uses-formester-violet-600);
    font-size: var(--fmstr-cmp-who-uses-formester-fs-sm);
    font-weight: var(--fmstr-cmp-who-uses-formester-fw-semibold);
    text-decoration: none;
    transition: color 120ms ease;
  }

  .fmstr-cmp-who-uses-formester__cta:hover {
    color: var(--fmstr-cmp-who-uses-formester-violet-700);
    text-decoration: underline;
  }

  .fmstr-cmp-who-uses-formester__cta svg {
    transition: transform 160ms ease;
  }

  .fmstr-cmp-who-uses-formester__cta:hover svg {
    transform: translateX(2px);
  }

  @media (max-width: 760px) {
    .fmstr-cmp-who-uses-formester {
      padding: var(--fmstr-cmp-who-uses-formester-space-12) var(--fmstr-cmp-who-uses-formester-space-4);
    }
    .fmstr-cmp-who-uses-formester__heading {
      font-size: var(--fmstr-cmp-who-uses-formester-fs-2xl);
      line-height: var(--fmstr-cmp-who-uses-formester-lh-2xl);
    }
    .fmstr-cmp-who-uses-formester__grid {
      grid-template-columns: 1fr;
      gap: var(--fmstr-cmp-who-uses-formester-space-3);
    }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-tc-api-mcp {
    --fmstr-cmp-tc-api-mcp-bg-card: #ffffff;
    --fmstr-cmp-tc-api-mcp-bg-tint: #f7f3ff;
    --fmstr-cmp-tc-api-mcp-bg-pill: #f4ebff;
    --fmstr-cmp-tc-api-mcp-bg-chip: #f2f4f7;
    --fmstr-cmp-tc-api-mcp-fg-1: #101828;
    --fmstr-cmp-tc-api-mcp-fg-2: #475467;
    --fmstr-cmp-tc-api-mcp-fg-strong: #344054;
    --fmstr-cmp-tc-api-mcp-violet-500: #7f56d9;
    --fmstr-cmp-tc-api-mcp-violet-600: #6941c6;
    --fmstr-cmp-tc-api-mcp-violet-300: #9777e0;
    --fmstr-cmp-tc-api-mcp-border: #eaecf0;
    --fmstr-cmp-tc-api-mcp-fs-xs: 12px;
    --fmstr-cmp-tc-api-mcp-fs-sm: 14px;
    --fmstr-cmp-tc-api-mcp-fs-md: 16px;
    --fmstr-cmp-tc-api-mcp-fs-lg: 18px;
    --fmstr-cmp-tc-api-mcp-fs-xl: 20px;
    --fmstr-cmp-tc-api-mcp-fs-2xl: 24px;
    --fmstr-cmp-tc-api-mcp-fs-3xl: 36px;
    --fmstr-cmp-tc-api-mcp-lh-md: 24px;
    --fmstr-cmp-tc-api-mcp-lh-lg: 28px;
    --fmstr-cmp-tc-api-mcp-lh-xl: 30px;
    --fmstr-cmp-tc-api-mcp-fw-semibold: 600;
    --fmstr-cmp-tc-api-mcp-fw-bold: 700;
    --fmstr-cmp-tc-api-mcp-space-2: 8px;
    --fmstr-cmp-tc-api-mcp-space-3: 12px;
    --fmstr-cmp-tc-api-mcp-space-4: 16px;
    --fmstr-cmp-tc-api-mcp-space-5: 20px;
    --fmstr-cmp-tc-api-mcp-space-6: 24px;
    --fmstr-cmp-tc-api-mcp-space-7: 28px;
    --fmstr-cmp-tc-api-mcp-space-8: 32px;
    --fmstr-cmp-tc-api-mcp-space-10: 40px;
    --fmstr-cmp-tc-api-mcp-space-12: 48px;
    --fmstr-cmp-tc-api-mcp-space-16: 64px;
    --fmstr-cmp-tc-api-mcp-r-md: 6px;
    --fmstr-cmp-tc-api-mcp-r-lg: 12px;
    --fmstr-cmp-tc-api-mcp-r-2xl: 16px;
    --fmstr-cmp-tc-api-mcp-r-full: 9999px;
    --fmstr-cmp-tc-api-mcp-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);

    padding: var(--fmstr-cmp-tc-api-mcp-space-16) var(--fmstr-cmp-tc-api-mcp-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  .fmstr-cmp-tc-api-mcp *, .fmstr-cmp-tc-api-mcp *::before, .fmstr-cmp-tc-api-mcp *::after { box-sizing: border-box; }

  .fmstr-cmp-tc-api-mcp__container { max-width: 1180px; margin: 0 auto; }

  .fmstr-cmp-tc-api-mcp__header {
    margin: 0 auto var(--fmstr-cmp-tc-api-mcp-space-10);
    max-width: 760px;
    text-align: center;
  }

  .fmstr-cmp-tc-api-mcp__eyebrow {
    display: inline-block;
    padding: var(--fmstr-cmp-tc-api-mcp-space-2) var(--fmstr-cmp-tc-api-mcp-space-4);
    background: var(--fmstr-cmp-tc-api-mcp-bg-pill);
    color: var(--fmstr-cmp-tc-api-mcp-violet-600);
    border-radius: var(--fmstr-cmp-tc-api-mcp-r-full);
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-xs);
    font-weight: var(--fmstr-cmp-tc-api-mcp-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-tc-api-mcp-space-4);
  }

  .fmstr-cmp-tc-api-mcp__title {
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-3xl);
    line-height: 44px;
    font-weight: var(--fmstr-cmp-tc-api-mcp-fw-bold);
    letter-spacing: -0.02em;
    color: var(--fmstr-cmp-tc-api-mcp-fg-1);
    margin: 0 0 var(--fmstr-cmp-tc-api-mcp-space-3);
  }

  .fmstr-cmp-tc-api-mcp__intro {
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-lg);
    line-height: var(--fmstr-cmp-tc-api-mcp-lh-lg);
    color: var(--fmstr-cmp-tc-api-mcp-fg-2);
    margin: 0;
  }

  .fmstr-cmp-tc-api-mcp__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--fmstr-cmp-tc-api-mcp-space-5);
    align-items: stretch;
  }

  .fmstr-cmp-tc-api-mcp__card {
    background: var(--fmstr-cmp-tc-api-mcp-bg-card);
    border: 1px solid var(--fmstr-cmp-tc-api-mcp-border);
    border-radius: var(--fmstr-cmp-tc-api-mcp-r-2xl);
    padding: var(--fmstr-cmp-tc-api-mcp-space-8);
    display: flex;
    flex-direction: column;
    transition: border-color 150ms ease, box-shadow 150ms ease;
  }
  .fmstr-cmp-tc-api-mcp__card:hover {
    border-color: var(--fmstr-cmp-tc-api-mcp-violet-300);
    box-shadow: var(--fmstr-cmp-tc-api-mcp-shadow-md);
  }

  .fmstr-cmp-tc-api-mcp__icon {
    width: 52px;
    height: 52px;
    border-radius: var(--fmstr-cmp-tc-api-mcp-r-lg);
    background: var(--fmstr-cmp-tc-api-mcp-bg-tint);
    color: var(--fmstr-cmp-tc-api-mcp-violet-600);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--fmstr-cmp-tc-api-mcp-space-5);
    flex-shrink: 0;
  }

  .fmstr-cmp-tc-api-mcp__badge {
    display: inline-block;
    padding: 4px 10px;
    background: var(--fmstr-cmp-tc-api-mcp-violet-500);
    color: #ffffff;
    border-radius: var(--fmstr-cmp-tc-api-mcp-r-md);
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-xs);
    font-weight: var(--fmstr-cmp-tc-api-mcp-fw-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-tc-api-mcp-space-3);
    align-self: flex-start;
  }
  .fmstr-cmp-tc-api-mcp__badge--alt {
    background: var(--fmstr-cmp-tc-api-mcp-bg-tint);
    color: var(--fmstr-cmp-tc-api-mcp-violet-600);
  }

  .fmstr-cmp-tc-api-mcp__card-title {
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-xl);
    line-height: var(--fmstr-cmp-tc-api-mcp-lh-xl);
    font-weight: var(--fmstr-cmp-tc-api-mcp-fw-semibold);
    letter-spacing: -0.01em;
    color: var(--fmstr-cmp-tc-api-mcp-fg-1);
    margin: 0 0 var(--fmstr-cmp-tc-api-mcp-space-4);
  }

  .fmstr-cmp-tc-api-mcp__chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fmstr-cmp-tc-api-mcp-space-2);
    margin-bottom: var(--fmstr-cmp-tc-api-mcp-space-4);
  }

  .fmstr-cmp-tc-api-mcp__chip {
    display: inline-block;
    padding: 4px 10px;
    background: var(--fmstr-cmp-tc-api-mcp-bg-chip);
    color: var(--fmstr-cmp-tc-api-mcp-fg-strong);
    border-radius: var(--fmstr-cmp-tc-api-mcp-r-md);
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-sm);
    font-weight: var(--fmstr-cmp-tc-api-mcp-fw-semibold);
    line-height: 20px;
  }

  .fmstr-cmp-tc-api-mcp__body {
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-md);
    line-height: var(--fmstr-cmp-tc-api-mcp-lh-md);
    color: var(--fmstr-cmp-tc-api-mcp-fg-2);
    margin: 0 0 var(--fmstr-cmp-tc-api-mcp-space-5);
    flex: 1 1 auto;
  }

  .fmstr-cmp-tc-api-mcp__cta {
    color: var(--fmstr-cmp-tc-api-mcp-violet-600);
    font-weight: var(--fmstr-cmp-tc-api-mcp-fw-semibold);
    font-size: var(--fmstr-cmp-tc-api-mcp-fs-sm);
    text-decoration: none;
    align-self: flex-start;
  }
  .fmstr-cmp-tc-api-mcp__cta:hover { text-decoration: underline; }

  @media (max-width: 760px) {
    .fmstr-cmp-tc-api-mcp { padding: var(--fmstr-cmp-tc-api-mcp-space-12) var(--fmstr-cmp-tc-api-mcp-space-4); }
    .fmstr-cmp-tc-api-mcp__title { font-size: var(--fmstr-cmp-tc-api-mcp-fs-2xl); line-height: 32px; }
    .fmstr-cmp-tc-api-mcp__intro { font-size: var(--fmstr-cmp-tc-api-mcp-fs-md); line-height: var(--fmstr-cmp-tc-api-mcp-lh-md); }
    .fmstr-cmp-tc-api-mcp__grid { grid-template-columns: 1fr; }
    .fmstr-cmp-tc-api-mcp__card { padding: var(--fmstr-cmp-tc-api-mcp-space-6); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-privacy-data-ownership {
    --fmstr-cmp-privacy-data-ownership-bg-section: #0F0921;
    --fmstr-cmp-privacy-data-ownership-bg-glow: radial-gradient(ellipse 900px 600px at 95% 0%, rgba(127, 86, 217, 0.45) 0%, rgba(100, 52, 208, 0.15) 30%, transparent 65%);
    --fmstr-cmp-privacy-data-ownership-bg-card: rgba(255, 255, 255, 0.04);
    --fmstr-cmp-privacy-data-ownership-bg-card-glow: radial-gradient(ellipse 500px 400px at 90% 5%, rgba(127, 86, 217, 0.30) 0%, transparent 60%);
    --fmstr-cmp-privacy-data-ownership-bg-pill: rgba(255, 255, 255, 0.08);
    --fmstr-cmp-privacy-data-ownership-fg-eyebrow: #bda6ff;
    --fmstr-cmp-privacy-data-ownership-fg-link: #bda6ff;
    --fmstr-cmp-privacy-data-ownership-fg-link-hover: #ffffff;
    --fmstr-cmp-privacy-data-ownership-fs-xs: 12px;
    --fmstr-cmp-privacy-data-ownership-fs-sm: 14px;
    --fmstr-cmp-privacy-data-ownership-fs-md: 16px;
    --fmstr-cmp-privacy-data-ownership-fs-lg: 18px;
    --fmstr-cmp-privacy-data-ownership-fs-2xl: 24px;
    --fmstr-cmp-privacy-data-ownership-fs-3xl: 32px;
    --fmstr-cmp-privacy-data-ownership-fw-semibold: 600;
    --fmstr-cmp-privacy-data-ownership-fw-bold: 700;
    --fmstr-cmp-privacy-data-ownership-lh-md: 24px;
    --fmstr-cmp-privacy-data-ownership-lh-lg: 28px;
    --fmstr-cmp-privacy-data-ownership-lh-2xl: 32px;
    --fmstr-cmp-privacy-data-ownership-space-1: 4px;
    --fmstr-cmp-privacy-data-ownership-space-2: 8px;
    --fmstr-cmp-privacy-data-ownership-space-3: 12px;
    --fmstr-cmp-privacy-data-ownership-space-4: 16px;
    --fmstr-cmp-privacy-data-ownership-space-5: 20px;
    --fmstr-cmp-privacy-data-ownership-space-6: 24px;
    --fmstr-cmp-privacy-data-ownership-space-7: 28px;
    --fmstr-cmp-privacy-data-ownership-space-8: 32px;
    --fmstr-cmp-privacy-data-ownership-space-12: 48px;
    --fmstr-cmp-privacy-data-ownership-space-16: 64px;
    --fmstr-cmp-privacy-data-ownership-r-2xl: 16px;
    --fmstr-cmp-privacy-data-ownership-r-full: 9999px;

    background: transparent;
    padding: var(--fmstr-cmp-privacy-data-ownership-space-12) var(--fmstr-cmp-privacy-data-ownership-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  .fmstr-cmp-privacy-data-ownership *, .fmstr-cmp-privacy-data-ownership *::before, .fmstr-cmp-privacy-data-ownership *::after { box-sizing: border-box; }

  .fmstr-cmp-privacy-data-ownership__container {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    background-color: var(--fmstr-cmp-privacy-data-ownership-bg-section);
    background-image: var(--fmstr-cmp-privacy-data-ownership-bg-glow);
    border-radius: 28px;
    padding: var(--fmstr-cmp-privacy-data-ownership-space-12);
    overflow: hidden;
  }

  .fmstr-cmp-privacy-data-ownership__inner {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: var(--fmstr-cmp-privacy-data-ownership-space-12);
    align-items: center;
  }

  .fmstr-cmp-privacy-data-ownership__eyebrow {
    display: inline-block;
    padding: var(--fmstr-cmp-privacy-data-ownership-space-2) var(--fmstr-cmp-privacy-data-ownership-space-4);
    background: var(--fmstr-cmp-privacy-data-ownership-bg-pill);
    color: var(--fmstr-cmp-privacy-data-ownership-fg-eyebrow);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: var(--fmstr-cmp-privacy-data-ownership-r-full);
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-xs);
    font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-privacy-data-ownership-space-5);
  }

  .fmstr-cmp-privacy-data-ownership__heading {
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-3xl);
    line-height: 40px;
    font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-bold);
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-6);
  }

  .fmstr-cmp-privacy-data-ownership__body p {
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-md);
    line-height: var(--fmstr-cmp-privacy-data-ownership-lh-md);
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-4);
  }
  .fmstr-cmp-privacy-data-ownership__body p:last-child { margin-bottom: 0; }

  .fmstr-cmp-privacy-data-ownership__card {
    background-color: var(--fmstr-cmp-privacy-data-ownership-bg-card);
    background-image: var(--fmstr-cmp-privacy-data-ownership-bg-card-glow);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--fmstr-cmp-privacy-data-ownership-r-2xl);
    padding: var(--fmstr-cmp-privacy-data-ownership-space-7);
    backdrop-filter: blur(8px);
  }

  .fmstr-cmp-privacy-data-ownership__pill {
    display: inline-block;
    padding: var(--fmstr-cmp-privacy-data-ownership-space-2) var(--fmstr-cmp-privacy-data-ownership-space-4);
    background: var(--fmstr-cmp-privacy-data-ownership-bg-pill);
    color: var(--fmstr-cmp-privacy-data-ownership-fg-eyebrow);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: var(--fmstr-cmp-privacy-data-ownership-r-full);
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-xs);
    font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: var(--fmstr-cmp-privacy-data-ownership-space-5);
  }

  .fmstr-cmp-privacy-data-ownership__quote {
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-lg);
    line-height: var(--fmstr-cmp-privacy-data-ownership-lh-lg);
    font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-semibold);
    font-style: italic;
    color: #ffffff;
    margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-5);
  }

  .fmstr-cmp-privacy-data-ownership__divider { border: none; border-top: 1px solid rgba(255, 255, 255, 0.12); margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-5); }

  .fmstr-cmp-privacy-data-ownership__cite {
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-sm);
    line-height: var(--fmstr-cmp-privacy-data-ownership-lh-md);
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 var(--fmstr-cmp-privacy-data-ownership-space-3);
  }

  .fmstr-cmp-privacy-data-ownership__links {
    display: flex;
    gap: var(--fmstr-cmp-privacy-data-ownership-space-4);
    flex-wrap: wrap;
  }

  .fmstr-cmp-privacy-data-ownership__links a {
    color: var(--fmstr-cmp-privacy-data-ownership-fg-link);
    font-weight: var(--fmstr-cmp-privacy-data-ownership-fw-semibold);
    font-size: var(--fmstr-cmp-privacy-data-ownership-fs-sm);
    text-decoration: none;
  }

  .fmstr-cmp-privacy-data-ownership__links a:hover { color: var(--fmstr-cmp-privacy-data-ownership-fg-link-hover); text-decoration: underline; }

  @media (max-width: 760px) {
    .fmstr-cmp-privacy-data-ownership { padding: var(--fmstr-cmp-privacy-data-ownership-space-8) var(--fmstr-cmp-privacy-data-ownership-space-4); }
    .fmstr-cmp-privacy-data-ownership__container { padding: var(--fmstr-cmp-privacy-data-ownership-space-7); border-radius: 20px; }
    .fmstr-cmp-privacy-data-ownership__inner { grid-template-columns: 1fr; gap: var(--fmstr-cmp-privacy-data-ownership-space-8); }
    .fmstr-cmp-privacy-data-ownership__heading { font-size: var(--fmstr-cmp-privacy-data-ownership-fs-2xl); line-height: var(--fmstr-cmp-privacy-data-ownership-lh-2xl); }
    .fmstr-cmp-privacy-data-ownership__quote { font-size: var(--fmstr-cmp-privacy-data-ownership-fs-md); line-height: var(--fmstr-cmp-privacy-data-ownership-lh-md); }
    .fmstr-cmp-privacy-data-ownership__card { padding: var(--fmstr-cmp-privacy-data-ownership-space-6); }
  }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .fmstr-cmp-more-from-formester {
    --fmstr-cmp-more-from-formester-bg-section: #f9fafb;
    --fmstr-cmp-more-from-formester-bg-card: #ffffff;
    --fmstr-cmp-more-from-formester-bg-violet-25: #f7f3ff;
    --fmstr-cmp-more-from-formester-fg-1: #101828;
    --fmstr-cmp-more-from-formester-fg-3: #697586;
    --fmstr-cmp-more-from-formester-violet-600: #6941c6;
    --fmstr-cmp-more-from-formester-border-light: #eaecf0;
    --fmstr-cmp-more-from-formester-border-violet: #9777e0;
    --fmstr-cmp-more-from-formester-shadow-xs: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    --fmstr-cmp-more-from-formester-shadow-md: 0 2px 4px 0 rgba(16, 24, 40, 0.06);
    --fmstr-cmp-more-from-formester-fs-md: 16px;
    --fmstr-cmp-more-from-formester-fs-2xl: 24px;
    --fmstr-cmp-more-from-formester-fs-3xl: 36px;
    --fmstr-cmp-more-from-formester-fw-regular: 400;
    --fmstr-cmp-more-from-formester-fw-semibold: 600;
    --fmstr-cmp-more-from-formester-fw-bold: 700;
    --fmstr-cmp-more-from-formester-lh-md: 24px;
    --fmstr-cmp-more-from-formester-lh-2xl: 32px;
    --fmstr-cmp-more-from-formester-space-3: 12px;
    --fmstr-cmp-more-from-formester-space-4: 16px;
    --fmstr-cmp-more-from-formester-space-5: 20px;
    --fmstr-cmp-more-from-formester-space-6: 24px;
    --fmstr-cmp-more-from-formester-space-10: 40px;
    --fmstr-cmp-more-from-formester-space-12: 48px;
    --fmstr-cmp-more-from-formester-space-16: 64px;
    --fmstr-cmp-more-from-formester-r-lg: 8px;
    --fmstr-cmp-more-from-formester-r-xl: 12px;

    background: var(--fmstr-cmp-more-from-formester-bg-section);
    padding: var(--fmstr-cmp-more-from-formester-space-16) var(--fmstr-cmp-more-from-formester-space-6);
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }

  .fmstr-cmp-more-from-formester *, .fmstr-cmp-more-from-formester *::before, .fmstr-cmp-more-from-formester *::after {
    box-sizing: border-box;
  }

  .fmstr-cmp-more-from-formester__inner {
    max-width: 1180px;
    margin: 0 auto;
  }

  .fmstr-cmp-more-from-formester__header {
    margin: 0 0 var(--fmstr-cmp-more-from-formester-space-10);
    max-width: 760px;
  }

  .fmstr-cmp-more-from-formester__heading {
    font-size: var(--fmstr-cmp-more-from-formester-fs-3xl);
    line-height: 44px;
    font-weight: var(--fmstr-cmp-more-from-formester-fw-bold);
    letter-spacing: -0.02em;
    color: var(--fmstr-cmp-more-from-formester-fg-1);
    margin: 0 0 var(--fmstr-cmp-more-from-formester-space-3);
  }

  .fmstr-cmp-more-from-formester__subhead {
    font-size: var(--fmstr-cmp-more-from-formester-fs-md);
    line-height: var(--fmstr-cmp-more-from-formester-lh-md);
    color: var(--fmstr-cmp-more-from-formester-fg-3);
    margin: 0;
  }

  .fmstr-cmp-more-from-formester__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--fmstr-cmp-more-from-formester-space-6);
    row-gap: var(--fmstr-cmp-more-from-formester-space-4);
  }

  .fmstr-cmp-more-from-formester__card {
    display: flex;
    align-items: center;
    gap: var(--fmstr-cmp-more-from-formester-space-4);
    padding: var(--fmstr-cmp-more-from-formester-space-4) var(--fmstr-cmp-more-from-formester-space-5);
    background: var(--fmstr-cmp-more-from-formester-bg-card);
    border: 1px solid var(--fmstr-cmp-more-from-formester-border-light);
    border-radius: var(--fmstr-cmp-more-from-formester-r-xl);
    box-shadow: var(--fmstr-cmp-more-from-formester-shadow-xs);
    text-decoration: none;
    color: inherit;
    transition: border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
  }

  .fmstr-cmp-more-from-formester__card:hover {
    border-color: var(--fmstr-cmp-more-from-formester-border-violet);
    box-shadow: var(--fmstr-cmp-more-from-formester-shadow-md);
    transform: translateY(-1px);
    text-decoration: none;
  }

  .fmstr-cmp-more-from-formester__icon {
    width: 40px;
    height: 40px;
    border-radius: var(--fmstr-cmp-more-from-formester-r-lg);
    background: var(--fmstr-cmp-more-from-formester-bg-violet-25);
    color: var(--fmstr-cmp-more-from-formester-violet-600);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .fmstr-cmp-more-from-formester__label {
    flex: 1;
    font-size: var(--fmstr-cmp-more-from-formester-fs-md);
    line-height: var(--fmstr-cmp-more-from-formester-lh-md);
    font-weight: var(--fmstr-cmp-more-from-formester-fw-semibold);
    color: var(--fmstr-cmp-more-from-formester-fg-1);
  }

  .fmstr-cmp-more-from-formester__arrow {
    flex-shrink: 0;
    color: var(--fmstr-cmp-more-from-formester-fg-3);
    transition: transform 160ms ease, color 160ms ease;
  }

  .fmstr-cmp-more-from-formester__card:hover .fmstr-cmp-more-from-formester__arrow {
    color: var(--fmstr-cmp-more-from-formester-violet-600);
    transform: translateX(2px);
  }

  @media (max-width: 760px) {
    .fmstr-cmp-more-from-formester {
      padding: var(--fmstr-cmp-more-from-formester-space-12) var(--fmstr-cmp-more-from-formester-space-4);
    }
    .fmstr-cmp-more-from-formester__heading {
      font-size: var(--fmstr-cmp-more-from-formester-fs-2xl);
      line-height: var(--fmstr-cmp-more-from-formester-lh-2xl);
    }
    .fmstr-cmp-more-from-formester__grid {
      grid-template-columns: 1fr;
      row-gap: var(--fmstr-cmp-more-from-formester-space-3);
    }
    .fmstr-cmp-more-from-formester__card {
      padding: var(--fmstr-cmp-more-from-formester-space-4);
    }
  }
</style>
