<template>
  <div class="sof">
    <!-- Hero -->
    <header class="sof-hero">
      <div class="sof-hero__grid">
        <div class="sof-hero__copy">
          <p class="sof-hero__eyebrow">2026 Report</p>
          <h1 class="sof-hero__title">The State of Online Forms</h1>
          <p class="sof-hero__lede">
            AI writes almost half of every new form, and it is starting to edit and act on them too. Here is what
            changed across 128,000 forms built on Formester.
          </p>
          <a class="sof-hero__cta" href="#key-numbers">Read the report</a>
          <p class="sof-hero__meta">Built on Formester's own proprietary product data, May 2025 to September 2026</p>
        </div>

        <div class="sof-orbit" aria-hidden="true">
          <span class="sof-orbit__ring sof-orbit__ring--a"></span>
          <span class="sof-orbit__ring sof-orbit__ring--b"></span>
          <span class="sof-orbit__ring sof-orbit__ring--c"></span>

          <span class="sof-orbit__mark">
            <svg viewBox="0 0 17.5 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.53719 8.56006C7.53719 9.36966 6.82677 10.026 5.95041 10.026C5.07406 10.026 4.36364 9.36966 4.36364 8.56006C4.36364 7.75045 5.07406 7.11688 5.95041 7.11688C6.82677 7.11688 7.53719 7.75045 7.53719 8.56006Z"
                fill="currentColor"
              />
              <path
                d="M13.0909 8.57143C13.0909 9.37475 12.3805 10.026 11.5041 10.026C10.6278 10.026 9.91736 9.37475 9.91736 8.57143C9.91736 7.76811 10.6278 7.11688 11.5041 7.11688C12.3805 7.11688 13.0909 7.76811 13.0909 8.57143Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.18182 0C0.976833 0 0 1.02335 0 2.28571V21.7143C0 22.9767 0.976833 24 2.18182 24H15.2727C16.4777 24 17.4545 22.9767 17.4545 21.7143V2.28571C17.4545 1.02335 16.4777 0 15.2727 0H2.18182ZM4.90909 5.71429C3.40286 5.71429 2.18182 6.99347 2.18182 8.57143C2.18182 10.1494 3.40286 11.4286 4.90909 11.4286H12.5455C14.0517 11.4286 15.2727 10.1494 15.2727 8.57143C15.2727 6.99347 14.0517 5.71429 12.5455 5.71429H4.90909Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <span v-for="pill in orbitPills" :key="pill.label" class="sof-orbit__pill" :class="`sof-orbit__pill--${pill.pos}`">
            <b>{{ pill.value }}</b> {{ pill.label }}
          </span>

          <div class="sof-orbit__card">
            <p class="sof-orbit__cardtitle">Share of new forms built with AI</p>
            <svg class="sof-orbit__chart" viewBox="0 0 260 120" preserveAspectRatio="none" role="presentation">
              <path class="sof-orbit__area" :d="heroAreaPath" />
              <path class="sof-orbit__line" :d="heroLinePath" />
            </svg>
            <div class="sof-orbit__cardfoot">
              <span>May 2025</span>
              <span>Aug 2026</span>
            </div>
            <p class="sof-orbit__barlabel">Forms created per month, Mar to Aug 2026</p>
            <div class="sof-orbit__bars">
              <span v-for="bar in heroBars" :key="bar" class="sof-orbit__bar" :style="{ '--h': `${bar}%` }"></span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Body: table of contents rail + report -->
    <section class="sof-section">
      <div class="sof-layout">
        <aside class="sof-toc" aria-label="Table of contents">
          <nav class="sof-toc__card">
            <p class="sof-toc__title">Table of contents</p>
            <ul>
              <li v-for="chapter in chapters" :key="chapter.id">
                <a :href="`#${chapter.id}`" :class="{ 'is-active': activeId === chapter.id }">
                  <span class="sof-toc__kicker">{{ chapter.kicker }}</span>
                  <span class="sof-toc__label">{{ chapter.label }}</span>
                </a>
              </li>
            </ul>
          </nav>

          <div class="sof-toc__cta">
            <p>Every number here came out of forms people built. Start yours with a prompt.</p>
            <a href="https://app.formester.com/users/sign_up">Start free</a>
          </div>
        </aside>

        <div class="sof-content">
          <details class="sof-toc-mobile">
            <summary>Table of contents</summary>
            <ul>
              <li v-for="chapter in chapters" :key="chapter.id">
                <a :href="`#${chapter.id}`">{{ chapter.label }}</a>
              </li>
            </ul>
          </details>

    <!-- Three numbers -->
    <section id="key-numbers" class="sof-band" aria-labelledby="sof-numbers-h2">
      <div class="sof-wrap">
        <h2 id="sof-numbers-h2" class="sof-h2 sof-h2--center">Three numbers that tell the story</h2>

        <div class="sof-numbers">
          <article v-for="stat in headlineStats" :key="stat.value" class="sof-number">
            <p class="sof-number__value">{{ stat.value }}</p>
            <h3 class="sof-number__title">{{ stat.title }}</h3>
            <p class="sof-number__body">{{ stat.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Chapter 1 -->
    <section id="chapter-1" class="sof-band" aria-labelledby="sof-c1-h2">
      <div class="sof-wrap">
        <p class="sof-chapter">Chapter 01</p>
        <h2 id="sof-c1-h2" class="sof-h2">AI is now a normal way to start a form</h2>
        <p class="sof-lede">
          Almost half of the forms created on Formester in August 2026 were written by AI. That share was a third when
          we started measuring it in May 2025, and it has moved in both directions since. What has only gone up is
          everything that happens after the first draft.
        </p>

        <div class="sof-findings">
          <p class="sof-findings__title">Key findings</p>
          <ul>
            <li><strong>Share of new forms built with AI:</strong> 34% in May 2025, 45% in August 2026</li>
            <li><strong>Share of builders who used AI:</strong> 35% in May 2025, 48% in August 2026</li>
            <li><strong>Published forms with at least one AI edit:</strong> 4.3% in February 2026, 10.6% in August</li>
            <li><strong>Median length of an AI prompt:</strong> 281 characters in October 2025, 835 in May 2026, 316 in August</li>
            <li><strong>Median time from signup to a live form:</strong> 12 minutes when the first form is AI-built, 15 minutes from a blank builder</li>
          </ul>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">Nearly half of new forms are now built with AI</h3>

          <ReportLineChart
            title="Share of new forms built with AI, by month"
            :points="aiSharePoints"
            :max="60"
            unit="%"
            :label-every="3"
            area
          />

          <p>
            When we started tracking AI-built forms in May 2025, 34% of new forms were built with AI. By August 2026
            that had reached 45%, and the first few days of September were already at 47%.
          </p>
          <p>
            The line is not a straight climb. The share fell to 32% in February, then climbed back from April onwards.
            Counting people rather than forms shows the same move: 35% of builders used AI in May 2025, and 48% did in
            August 2026.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> starting a form with a prompt is no longer the unusual route. It is close to being the default one.</p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">AI editing grew 2.5x in six months</h3>

          <ReportLineChart
            title="Published forms that were edited with AI"
            :points="editRatePoints"
            :max="12"
            unit="%"
            :decimals="1"
            :tick-decimals="0"
            :label-every="1"
          />

          <p>
            Editing an existing form with AI shipped in February 2026. In that first month, 4.3% of published forms had
            at least one AI edit. By August the figure was 10.6%, and it rose in five of the six months after launch.
          </p>
          <p>
            The creation number gets the attention, but this one says more about habit. People are coming back to forms
            they already built and asking AI to change them.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> AI is not only a way to get a first draft. It is becoming part of how a form gets maintained.</p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">People are getting the same result from much shorter prompts</h3>

          <ReportLineChart
            title="Median length of an AI prompt, by month, in characters"
            :points="promptLengthPoints"
            :max="1000"
            :label-every="2"
          />

          <p>
            Prompts got longer for most of the period. The median was 281 characters in October 2025, about 50 words.
            By May 2026 it had grown to 835 characters, roughly 150 words. It held above 600 through July.
          </p>
          <p>
            Then it dropped to 316 characters in August, 62% shorter than the May peak. Part of that is the new builder,
            which launched in August with suggested prompts, so a form can start from a few words or a single click.
            Better models needing less instruction is a fair reading of the rest.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> the effort of describing a form is falling. People type less and still get a usable draft.</p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">Starting with AI gets a form live 3 minutes faster</h3>

          <ReportBarChart
            title="Median minutes from signup to first published form"
            :rows="timeToLiveRows"
            :max="20"
          />

          <p>
            The median new user publishes a first form 12 minutes after signing up, and that figure has sat between 12
            and 15 minutes every month since October 2025. It has not fallen over the year.
          </p>
          <p>
            The starting point is what changes the number. Users whose first form comes from AI publish in 12 minutes.
            Users who open a blank builder take 15, and users who import a Google Form take 16.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> AI shortens the gap between signing up and having something live, by about a fifth.</p>
        </div>
      </div>
    </section>

    <!-- Chapter 2 -->
    <section id="chapter-2" class="sof-band" aria-labelledby="sof-c2-h2">
      <div class="sof-wrap">
        <p class="sof-chapter">Chapter 02</p>
        <h2 id="sof-c2-h2" class="sof-h2">AI agents are moving from answering questions to doing the work</h2>
        <p class="sof-lede">
          Since June 2026, people have been able to connect ChatGPT, Claude, Cursor and other AI tools to their
          Formester account so the agent can work on their forms. The volume is small and the growth rate is not.
        </p>

        <div class="sof-findings">
          <p class="sof-findings__title">Key findings</p>
          <ul>
            <li><strong>Agent operations per month:</strong> 9 in June 2026, 97 in July, 838 in August</li>
            <li><strong>Organizations using an agent:</strong> 3 in June, 10 in July, 26 in August</li>
            <li><strong>Operations that change something:</strong> 38% either build or edit a form, or read or update submissions</li>
            <li><strong>Most connected tool:</strong> ChatGPT, with 52 of the 61 connections in the quarter so far</li>
          </ul>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">Agent activity grew 9x from July to August</h3>

          <ReportColumnChart
            title="Operations by AI agents inside Formester, by month"
            :columns="agentOpsColumns"
            :max="1000"
          />

          <p>
            Three organizations ran 9 operations in June. Ten ran 97 in July. Twenty-six ran 838 in August, and the
            first three days of September had already produced 357.
          </p>
          <p>
            These are early numbers on a small base, so the percentage growth matters less than the direction. An
            organization that connects an agent does not use it once.
          </p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">Agents are taking actions, not just reading data</h3>

          <ReportBarChart
            title="What agents do, share of all agent operations"
            :rows="agentActionRows"
            :max="32"
          />

          <p>
            The largest slice manages files and media on forms. One in five operations builds or edits a form, and
            almost as many read or update submissions. Checking on a running job accounts for another fifth, which is
            what long tasks look like from the inside.
          </p>
          <p>
            The most common first move is listing the forms in an account. Nineteen of the 34 organizations started
            there.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> agents are past the chat window. They are working inside the tools people already pay for.</p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">ChatGPT is far ahead of every other AI tool</h3>

          <ReportBarChart
            title="Organizations that connected an AI tool to Formester"
            :rows="aiClientRows"
            :max="56"
          />

          <p>
            ChatGPT had 52 organizations in the quarter. Claude had 4 and Claude Code 3, with 1 each for Cursor and
            Antigravity. That puts ChatGPT at almost 6x every other tool combined.
          </p>
          <p>
            Of the 34 organizations that ran an agent, 20 connected through an app login and 2 used an API key.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> for now, supporting one assistant well covers most of the demand.</p>
        </div>
      </div>
    </section>

    <!-- Chapter 3 -->
    <section id="chapter-3" class="sof-band" aria-labelledby="sof-c3-h2">
      <div class="sof-wrap">
        <p class="sof-chapter">Chapter 03</p>
        <h2 id="sof-c3-h2" class="sof-h2">Forms still handle the jobs people need done</h2>
        <p class="sof-lede">
          We classified 5,740 forms published in 2026 by what they are for, and 3,190 by the industry that built them,
          using the names their owners gave them. No single job dominates, and no single industry does either.
        </p>

        <div class="sof-finding">
          <h3 class="sof-h3">Registration, contact, quizzes and surveys make up 59% of forms</h3>

          <ReportBarChart
            title="What forms are for, share of forms published in 2026"
            :rows="useCaseRows"
            :max="20"
          />

          <p>
            Registration and sign-up is the biggest single job at 19%, followed by contact at 16%, quizzes at 14% and
            surveys at 11%. Applications, orders and bookings, support requests and feedback take most of the rest.
          </p>
          <p>
            Consent forms, intake forms and lead capture each sit at 3% to 4%. Small shares, but each one is a real
            workflow with its own rules about what has to be captured.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> the need behind a form has not changed. Someone has to collect information from someone else, in a way both sides can rely on.</p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">Education builds more forms than any other industry</h3>

          <ReportBarChart
            title="Who builds forms, share of forms by industry, 2026"
            :rows="industryRows"
            :max="17"
          />

          <p>
            Education leads at 16%, then events at 15%, fitness and sports at 11% and retail at 10%. Agencies, HR teams
            and healthcare follow. Sixteen industries show up in the data, and the smallest of them still runs into the
            dozens of forms.
          </p>
          <p>The most common industry and use case pairings:</p>
          <ul class="sof-list">
            <li><strong>Events and registration:</strong> 325 forms, the single biggest pairing in the set</li>
            <li><strong>Retail and orders:</strong> 165 forms</li>
            <li><strong>Education and quizzes:</strong> 123 forms</li>
            <li><strong>Education and registration:</strong> 105 forms</li>
          </ul>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">1 in 4 forms is built in a language other than English</h3>

          <div class="sof-duo">
            <ReportColumnChart
              title="Forms not in English, by quarter"
              :columns="nonEnglishColumns"
              :max="40"
              :height="200"
            />
            <ReportLineChart
              title="AI prompts written in a non-Latin script"
              :points="nonLatinPoints"
              :max="70"
              unit="%"
              :label-every="5"
              :height="260"
            />
          </div>

          <p>
            A quarter of the forms in the dataset are not in English, and that share has been flat across four quarters
            rather than rising. The largest languages after English are Portuguese, German, French and Spanish, with
            Arabic and Indonesian close behind.
          </p>
          <p>
            AI prompts lean further from English than the forms do. Around half use a non-Latin script, which means
            people describe the form in their own language and get a form back in it.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> multilingual is not an edge case to plan for later. It is a quarter of the current dataset.</p>
        </div>
      </div>
    </section>

    <!-- Chapter 4 -->
    <section id="chapter-4" class="sof-band" aria-labelledby="sof-c4-h2">
      <div class="sof-wrap">
        <p class="sof-chapter">Chapter 04</p>
        <h2 id="sof-c4-h2" class="sof-h2">AI adoption follows how much work the form takes</h2>
        <p class="sof-lede">
          Across all classified forms in 2026, 34% were built with AI. Split that by industry or by what the form is
          for and the spread runs from a quarter to nearly three quarters, in a pattern that is easy to explain.
        </p>

        <div class="sof-finding">
          <h3 class="sof-h3">Finance leads AI adoption at 72%, retail sits at 25%</h3>

          <ReportBarChart
            title="Share of forms built with AI, by industry, 2026"
            :rows="aiByIndustryRows"
            :max="80"
            :ref-line="{ value: 33.6, label: 'All forms 34%' }"
          />

          <p>
            Finance and insurance top the list at 72%. Healthcare follows at 69%, education at 63% and HR at 56%.
            Retail, events, real estate and fitness all sit below a third.
          </p>
          <p>
            The industries above the line share a trait: their forms tend to be long, structured and full of questions
            that have to be worded carefully.
          </p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">The more questions a form needs, the more likely AI writes it</h3>

          <ReportBarChart
            title="Share of forms built with AI, by what the form is for, 2026"
            :rows="aiByUseCaseRows"
            :max="80"
            :ref-line="{ value: 33.6, label: 'All forms 34%' }"
          />

          <p>
            Intake and onboarding forms are AI-built 67% of the time. Quizzes reach 63%, surveys 62% and feedback forms
            61%. Contact forms, event forms and consent forms all fall below a third.
          </p>
          <p>
            A contact form is four fields that anyone can type out. A 40-question intake form is an afternoon. That gap
            is what the chart is measuring.
          </p>

          <p class="sof-takeaway"><strong>The takeaway:</strong> AI gets used where the form is expensive to write by hand, not where it is quick.</p>
        </div>
      </div>
    </section>

    <!-- Chapter 5 -->
    <section id="chapter-5" class="sof-band" aria-labelledby="sof-c5-h2">
      <div class="sof-wrap">
        <p class="sof-chapter">Chapter 05</p>
        <h2 id="sof-c5-h2" class="sof-h2">Forms are not dead. They are getting smarter</h2>
        <p class="sof-lede">
          There is a growing argument that AI agents will make forms unnecessary. If an assistant can understand what
          someone wants and act on it, why keep the form? Our data points the other way.
        </p>

        <div class="sof-finding">
          <h3 class="sof-h3">Form creation grew for five months straight after the April low</h3>

          <ReportColumnChart
            title="Forms created per month, October 2025 to August 2026"
            :columns="formsCreatedColumns"
            :max="7400"
            :height="250"
          />

          <p>
            People created 51,000 forms on Formester in these 11 months. Monthly creation fell through the winter and
            bottomed at 3,200 forms in April, then rose every month to 5,100 in August, a 63% recovery.
          </p>
          <p>
            August also brought 3,300 new accounts, the second highest month for signups in the period.
          </p>
        </div>

        <div class="sof-finding">
          <h3 class="sof-h3">People who use AI do more of everything else too</h3>

          <ReportPairChart
            title="Builders who used AI compared with builders who did not"
            :pairs="aiVsOtherPairs"
          />

          <div class="sof-tablewrap">
            <table class="sof-table">
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  <th scope="col">Used AI</th>
                  <th scope="col">Did not use AI</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in aiVsOtherTable" :key="row.measure">
                  <th scope="row">{{ row.measure }}</th>
                  <td>{{ row.ai }}</td>
                  <td>{{ row.other }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            From April to early September, 2,471 builders used AI at least once and 4,097 did not. The AI group built
            75% more forms per person, published a little more often, and bought a paid plan at a higher rate.
          </p>
          <p>
            This is a correlation in one product's data, not proof that AI causes the difference. The people who reach
            for a new feature are often the more motivated ones to begin with.
          </p>
        </div>

        <div class="sof-close">
          <h3 class="sof-close__title">AI is not replacing the form, it is changing what the form can do</h3>
          <div class="sof-close__stats">
            <div v-for="stat in closingStats" :key="stat.label" class="sof-close__stat">
              <p class="sof-close__value">{{ stat.value }}</p>
              <p class="sof-close__label">{{ stat.label }}</p>
            </div>
          </div>
          <p class="sof-close__body">
            People still register, apply, book, order, answer questions and send in their details. What is changing is
            how much of the work around that AI can carry. It writes the first draft, and now an agent can act on the
            finished form.
          </p>
        </div>
      </div>
    </section>

          <div class="sof-method">
            <p class="sof-method__title">Methodology</p>
            <p class="sof-method__body">
              Formester compiled these numbers from its own product data between May 2025 and September 3, 2026,
              covering 128,000 forms and the accounts that built them. Volumes come from the product database and
              shares come from tracked product events, with internal and bulk-created forms left out. What a form is
              for, and the industry behind it, are read from the names people gave their forms.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CtaDark
      badge="Build on the data"
      heading="Start your next form with a prompt instead of a blank page"
      description="Describe the form you need and edit it from there. Free forever plan, no credit card required."
      trustText="56,000+ teams &middot; Free forever &middot; Live support"
      :buttons="ctaButtons"
    />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import CtaDark from '@/components/v2/CtaDark.vue'
import ReportBarChart from '@/components/report/BarChart.vue'
import ReportColumnChart from '@/components/report/ColumnChart.vue'
import ReportLineChart from '@/components/report/LineChart.vue'
import ReportPairChart from '@/components/report/PairChart.vue'

const chapters = [
  { id: 'key-numbers', kicker: 'Key numbers', label: 'Three numbers that tell the story' },
  { id: 'chapter-1', kicker: 'AI and the first draft', label: 'AI is now a normal way to start a form' },
  { id: 'chapter-2', kicker: 'AI agents', label: 'Agents are moving from answering questions to doing the work' },
  { id: 'chapter-3', kicker: 'What forms are for', label: 'Forms still handle the jobs people need done' },
  { id: 'chapter-4', kicker: 'Where AI lands', label: 'AI adoption follows how much work the form takes' },
  { id: 'chapter-5', kicker: 'Forms are not dead', label: 'Forms are not dead. They are getting smarter' },
]

const orbitPills = [
  { pos: 'a', value: '45%', label: 'built with AI' },
  { pos: 'b', value: '838', label: 'agent jobs' },
  { pos: 'c', value: '51K', label: 'forms' },
  { pos: 'd', value: '1 in 4', label: 'not in English' },
]

// Forms created per month, Mar to Aug 2026, as a share of the August peak (5,137)
const heroBars = [85, 61, 69, 77, 80, 100]

const headlineStats = [
  {
    value: '34% to 45%',
    title: 'Nearly half of new forms are built with AI',
    body: 'AI built 1 in 3 new forms in May 2025. By August 2026 it was almost 1 in 2.',
  },
  {
    value: '4.3% to 10.6%',
    title: 'AI editing more than doubled in six months',
    body: 'In February, 1 in 25 published forms was edited with AI. By August it was 1 in 10.',
  },
  {
    value: '9x growth',
    title: 'AI agents went from 97 to 838 operations',
    body: 'Agents ran 97 jobs inside Formester in July. In August they ran 838.',
  },
]

const aiSharePoints = [
  { label: 'May 25', value: 33.9 },
  { label: 'Jun', value: 38.7 },
  { label: 'Jul', value: 39.5 },
  { label: 'Aug', value: 40.5 },
  { label: 'Sep', value: 44.9 },
  { label: 'Oct', value: 45.7 },
  { label: 'Nov', value: 42.6 },
  { label: 'Dec', value: 40.5 },
  { label: 'Jan 26', value: 37.5 },
  { label: 'Feb', value: 32.3 },
  { label: 'Mar', value: 33.4 },
  { label: 'Apr', value: 35.7 },
  { label: 'May 26', value: 43.3 },
  { label: 'Jun', value: 37.6 },
  { label: 'Jul', value: 31.7 },
  { label: 'Aug', value: 45.3 },
]

const HERO_W = 260
const HERO_FLOOR = 26
const HERO_CEIL = 50
const heroGeometry = computed(() => {
  const n = aiSharePoints.length
  return aiSharePoints.map((p, i) => ({
    x: 8 + (i * (HERO_W - 16)) / (n - 1),
    y: 12 + (1 - (p.value - HERO_FLOOR) / (HERO_CEIL - HERO_FLOOR)) * 92,
  }))
})

const heroLinePath = computed(() =>
  heroGeometry.value.map((pt, i) => `${i === 0 ? 'M' : 'L'}${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(' ')
)

const heroAreaPath = computed(() => {
  const pts = heroGeometry.value
  return `${heroLinePath.value} L${pts[pts.length - 1].x.toFixed(1)},112 L${pts[0].x.toFixed(1)},112 Z`
})

const activeId = ref('key-numbers')
let sectionObserver = null

onMounted(() => {
  const targets = chapters.map((c) => document.getElementById(c.id)).filter(Boolean)
  if (!targets.length || typeof IntersectionObserver === 'undefined') return

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting)
      if (visible.length) {
        activeId.value = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id
      }
    },
    { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
  )
  targets.forEach((t) => sectionObserver.observe(t))
})

onBeforeUnmount(() => sectionObserver?.disconnect())

const editRatePoints = [
  { label: 'Feb 26', value: 4.3 },
  { label: 'Mar', value: 7.8 },
  { label: 'Apr', value: 6.1 },
  { label: 'May', value: 5.8 },
  { label: 'Jun', value: 8.0 },
  { label: 'Jul', value: 9.4 },
  { label: 'Aug', value: 10.6 },
]

const promptLengthPoints = [
  { label: 'Oct 25', value: 281 },
  { label: 'Nov', value: 328 },
  { label: 'Dec', value: 461 },
  { label: 'Jan 26', value: 335 },
  { label: 'Feb', value: 661 },
  { label: 'Mar', value: 409 },
  { label: 'Apr', value: 407 },
  { label: 'May 26', value: 835 },
  { label: 'Jun', value: 648 },
  { label: 'Jul', value: 649 },
  { label: 'Aug', value: 316 },
]

const timeToLiveRows = [
  { label: 'Started with AI', value: 12, display: '12 min' },
  { label: 'Started in the blank builder', value: 15, display: '15 min', dim: true },
  { label: 'Imported a Google Form', value: 16, display: '16 min', dim: true },
]

const agentOpsColumns = [
  { label: 'Jun 26', value: 9, display: '9', caption: '3 organizations', dim: true },
  { label: 'Jul', value: 97, display: '97', caption: '10 organizations', dim: true },
  { label: 'Aug', value: 838, display: '838', caption: '26 organizations' },
  { label: 'Sep', value: 357, display: '357', caption: '9 organizations', dim: true },
]

const agentActionRows = [
  { label: 'Manage files and media', value: 29.5, display: '30%' },
  { label: 'Check on a running job', value: 21.4, display: '21%' },
  { label: 'Build or edit a form', value: 19.8, display: '20%' },
  { label: 'Read or update submissions', value: 18.0, display: '18%' },
  { label: 'Look up forms and settings', value: 11.3, display: '11%' },
]

const aiClientRows = [
  { label: 'ChatGPT', value: 52, display: '52' },
  { label: 'Claude', value: 4, display: '4', dim: true },
  { label: 'Claude Code', value: 3, display: '3', dim: true },
  { label: 'Cursor', value: 1, display: '1', dim: true },
  { label: 'Antigravity', value: 1, display: '1', dim: true },
]

const useCaseRows = [
  { label: 'Registration and sign-up', value: 18.5, display: '18.5%' },
  { label: 'Contact', value: 15.9, display: '15.9%' },
  { label: 'Quiz and test', value: 13.6, display: '13.6%' },
  { label: 'Survey', value: 11.2, display: '11.2%' },
  { label: 'Application', value: 8.3, display: '8.3%' },
  { label: 'Order and booking', value: 7.8, display: '7.8%' },
  { label: 'Support and requests', value: 6.3, display: '6.3%' },
  { label: 'Feedback', value: 5.1, display: '5.1%' },
  { label: 'Lead capture', value: 3.7, display: '3.7%' },
  { label: 'Consent and waiver', value: 3.4, display: '3.4%' },
  { label: 'Intake and onboarding', value: 3.1, display: '3.1%' },
  { label: 'Event', value: 2.6, display: '2.6%' },
  { label: 'Donation', value: 0.3, display: '0.3%' },
]

const industryRows = [
  { label: 'Education', value: 15.5, display: '15.5%' },
  { label: 'Events', value: 14.5, display: '14.5%' },
  { label: 'Fitness and sports', value: 10.5, display: '10.5%' },
  { label: 'Retail and e-commerce', value: 10.2, display: '10.2%' },
  { label: 'Marketing and agencies', value: 8.5, display: '8.5%' },
  { label: 'HR and recruiting', value: 6.6, display: '6.6%' },
  { label: 'Healthcare', value: 6.1, display: '6.1%' },
  { label: 'Trades and field service', value: 4.8, display: '4.8%' },
  { label: 'Food and hospitality', value: 4.8, display: '4.8%' },
  { label: 'Real estate', value: 4.4, display: '4.4%' },
  { label: 'Software', value: 3.4, display: '3.4%' },
  { label: 'Nonprofit and religious', value: 2.7, display: '2.7%' },
  { label: 'Finance and insurance', value: 2.6, display: '2.6%' },
  { label: 'Beauty and personal care', value: 2.4, display: '2.4%' },
  { label: 'Legal', value: 2.2, display: '2.2%' },
  { label: 'Government', value: 1.0, display: '1.0%' },
]

const nonEnglishColumns = [
  { label: 'Q4 2025', value: 25.8, display: '26%' },
  { label: 'Q1 2026', value: 29.9, display: '30%' },
  { label: 'Q2 2026', value: 29.2, display: '29%' },
  { label: 'Q3 2026', value: 24.5, display: '25%' },
]

const nonLatinPoints = [
  { label: 'Oct 25', value: 47.1 },
  { label: 'Nov', value: 47.8 },
  { label: 'Dec', value: 47.3 },
  { label: 'Jan 26', value: 45.5 },
  { label: 'Feb', value: 54.7 },
  { label: 'Mar', value: 52.5 },
  { label: 'Apr', value: 53.9 },
  { label: 'May 26', value: 58.9 },
  { label: 'Jun', value: 56.7 },
  { label: 'Jul', value: 48.1 },
  { label: 'Aug', value: 39.1 },
]

const aiByIndustryRows = [
  { label: 'Finance and insurance', value: 72, display: '72%' },
  { label: 'Healthcare', value: 69, display: '69%' },
  { label: 'Education', value: 63, display: '63%' },
  { label: 'HR and recruiting', value: 56, display: '56%' },
  { label: 'Software', value: 54, display: '54%' },
  { label: 'Nonprofit and religious', value: 53, display: '53%' },
  { label: 'Marketing and agencies', value: 52, display: '52%' },
  { label: 'Government', value: 48, display: '48%' },
  { label: 'Food and hospitality', value: 41, display: '41%' },
  { label: 'Trades and field service', value: 39, display: '39%' },
  { label: 'Legal', value: 38, display: '38%' },
  { label: 'Beauty and personal care', value: 37, display: '37%' },
  { label: 'Fitness and sports', value: 32, display: '32%', dim: true },
  { label: 'Real estate', value: 31, display: '31%', dim: true },
  { label: 'Events', value: 28, display: '28%', dim: true },
  { label: 'Retail and e-commerce', value: 25, display: '25%', dim: true },
]

const aiByUseCaseRows = [
  { label: 'Intake and onboarding', value: 67, display: '67%' },
  { label: 'Quiz and test', value: 63, display: '63%' },
  { label: 'Survey', value: 62, display: '62%' },
  { label: 'Feedback', value: 61, display: '61%' },
  { label: 'Application', value: 48, display: '48%' },
  { label: 'Order and booking', value: 39, display: '39%' },
  { label: 'Registration and sign-up', value: 37, display: '37%' },
  { label: 'Lead capture', value: 36, display: '36%' },
  { label: 'Support and requests', value: 33, display: '33%', dim: true },
  { label: 'Consent and waiver', value: 32, display: '32%', dim: true },
  { label: 'Donation', value: 31, display: '31%', dim: true },
  { label: 'Event', value: 29, display: '29%', dim: true },
  { label: 'Contact', value: 28, display: '28%', dim: true },
]

const formsCreatedColumns = [
  { label: 'Oct 25', value: 6763, display: '6.8K', dim: true },
  { label: 'Nov', value: 5772, display: '5.8K', dim: true },
  { label: 'Dec', value: 4700, display: '4.7K', dim: true },
  { label: 'Jan 26', value: 5002, display: '5.0K', dim: true },
  { label: 'Feb', value: 4180, display: '4.2K', dim: true },
  { label: 'Mar', value: 4382, display: '4.4K', dim: true },
  { label: 'Apr', value: 3157, display: '3.2K' },
  { label: 'May', value: 3569, display: '3.6K' },
  { label: 'Jun', value: 3975, display: '4.0K' },
  { label: 'Jul', value: 4124, display: '4.1K' },
  { label: 'Aug', value: 5137, display: '5.1K' },
]

const aiVsOtherPairs = [
  { label: 'Forms built per builder', ai: 2.8, other: 1.6, aiDisplay: '2.8', otherDisplay: '1.6' },
  { label: 'Published at least one form', ai: 60, other: 54, aiDisplay: '60%', otherDisplay: '54%' },
  { label: 'Bought a paid plan', ai: 3.7, other: 2.6, aiDisplay: '3.7%', otherDisplay: '2.6%' },
  { label: 'Set up a rule or integration', ai: 16, other: 13, aiDisplay: '16%', otherDisplay: '13%' },
]

const aiVsOtherTable = [
  { measure: 'Builders in the period', ai: '2,471', other: '4,097' },
  { measure: 'Forms built per builder', ai: '2.8', other: '1.6' },
  { measure: 'Published at least one form', ai: '60%', other: '54%' },
  { measure: 'Bought a paid plan', ai: '3.7%', other: '2.6%' },
  { measure: 'Set up a rule or integration', ai: '16%', other: '13%' },
]

const closingStats = [
  { value: '51K', label: 'forms created in 11 months' },
  { value: '45%', label: 'of new forms built with AI in August' },
  { value: '838', label: 'AI agent operations in August' },
]

const ctaButtons = [
  {
    id: 1,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: false,
  },
  {
    id: 2,
    link: 'https://calendar.app.google/So3CCei31oYjhoM47',
    text: 'Talk to sales',
    type: 'Secondary',
    showArrow: false,
  },
]

const pageTitle = 'The State of Online Forms: 2026 Report | Formester'
const pageDescription =
  'First-party data on how AI is changing online forms: 14 charts on AI-built forms, AI agents, use cases and industries, from Formester product data.'
const pageUrl = 'https://formester.com/state-of-online-forms/'

useHead({
  title: pageTitle,
  link: [{ hid: 'canonical', rel: 'canonical', href: pageUrl }],
  meta: [
    { hid: 'description', name: 'description', content: pageDescription },
    { hid: 'og:site_name', name: 'og:site_name', content: 'Formester' },
    { hid: 'og:type', property: 'og:type', content: 'article' },
    { hid: 'og:url', property: 'og:url', content: pageUrl },
    { hid: 'og:title', property: 'og:title', content: pageTitle },
    { hid: 'og:description', property: 'og:description', content: pageDescription },
    { hid: 'og:image', property: 'og:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { hid: 'og:image:alt', name: 'og:image:alt', content: 'Formester Logo' },
    { hid: 'twitter:url', name: 'twitter:url', content: pageUrl },
    { name: 'twitter:site', content: '@_formester_' },
    { hid: 'twitter:title', name: 'twitter:title', content: pageTitle },
    { hid: 'twitter:description', name: 'twitter:description', content: pageDescription },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    {
      hid: 'keywords',
      name: 'keywords',
      content: [
        'state of online forms',
        'online form statistics',
        'ai form builder statistics',
        'form usage data 2026',
        'ai adoption forms',
      ],
    },
  ],
})

useJsonld([
  {
    '@graph': [
      {
        '@id': 'https://formester.com/#organization',
        '@type': 'Organization',
        url: 'https://formester.com/',
        name: 'Formester',
        logo: { '@type': 'ImageObject', url: 'https://formester.com/logo.png' },
      },
      {
        '@id': `${pageUrl}#webpage`,
        '@type': 'WebPage',
        url: pageUrl,
        name: pageTitle,
        isPartOf: { '@id': 'https://formester.com/#organization' },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        inLanguage: 'en-US',
        description: pageDescription,
        datePublished: '2026-09-07',
        dateModified: '2026-09-07',
      },
      {
        '@id': `${pageUrl}#breadcrumb`,
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
          { '@type': 'ListItem', position: 2, name: 'The State of Online Forms', item: pageUrl },
        ],
      },
      {
        '@id': `${pageUrl}#report`,
        '@type': 'Report',
        headline: 'The State of Online Forms, 2026 report',
        description: pageDescription,
        url: pageUrl,
        inLanguage: 'en-US',
        datePublished: '2026-09-07',
        dateModified: '2026-09-07',
        author: { '@id': 'https://formester.com/#organization' },
        publisher: { '@id': 'https://formester.com/#organization' },
        isPartOf: { '@id': `${pageUrl}#webpage` },
        about: ['Online forms', 'AI form builders', 'Form usage data'],
        temporalCoverage: '2025-05-01/2026-09-03',
      },
    ],
  },
])
</script>

<style scoped>
.sof {
  background: var(--bg-primary);
  color: var(--fg-1);
}

/* Hero */
.sof-hero {
  background: linear-gradient(135deg, #5a2ec4 0%, var(--color-primary) 45%, #7a4de0 100%);
  color: #fff;
  padding: 128px var(--space-6) var(--space-16);
  overflow: hidden;
}

.sof-hero__grid {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: var(--space-12);
}

.sof-hero__eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 var(--space-5);
}

.sof-hero__title {
  font-size: clamp(40px, 5.4vw, 66px);
  line-height: 1.04;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin: 0 0 var(--space-6);
  color: #fff;
}

.sof-hero__lede {
  font-size: clamp(16.5px, 1.6vw, 19px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.86);
  margin: 0 0 var(--space-8);
  max-width: 460px;
}

.sof-hero__cta {
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 28px;
  border-radius: var(--r-full);
  background: #fff;
  color: var(--violet-600);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.sof-hero__cta:hover {
  color: var(--violet-600);
  transform: translateY(-1px);
  box-shadow: 0 10px 24px -8px rgba(16, 24, 40, 0.35);
}

.sof-hero__meta {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  margin: var(--space-6) 0 0;
}

/* Hero orbit */
.sof-orbit {
  position: relative;
  height: 420px;
}

.sof-orbit__ring {
  position: absolute;
  top: 50%;
  left: 34%;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%);
  animation: sof-spin 90s linear infinite;
}

.sof-orbit__ring--a {
  width: 240px;
  height: 240px;
}

.sof-orbit__ring--b {
  width: 360px;
  height: 360px;
  animation-duration: 130s;
  animation-direction: reverse;
}

.sof-orbit__ring--c {
  width: 480px;
  height: 480px;
  border-color: rgba(255, 255, 255, 0.22);
  animation-duration: 180s;
}

.sof-orbit__mark {
  position: absolute;
  top: 50%;
  left: 34%;
  transform: translate(-50%, -50%);
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: #fff;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 30px -10px rgba(16, 24, 40, 0.4);
}

.sof-orbit__mark svg {
  width: 26px;
  height: 36px;
}

.sof-orbit__pill {
  position: absolute;
  background: var(--violet-600);
  color: #fff;
  font-size: 12.5px;
  padding: 7px 14px;
  border-radius: var(--r-full);
  white-space: nowrap;
  box-shadow: 0 6px 16px -8px rgba(16, 24, 40, 0.45);
}

.sof-orbit__pill b {
  font-weight: 700;
}

.sof-orbit__pill--a {
  top: 8%;
  left: 6%;
}

.sof-orbit__pill--b {
  bottom: 10%;
  left: 10%;
}

.sof-orbit__pill--c {
  top: 32%;
  left: 0;
}

.sof-orbit__pill--d {
  bottom: 32%;
  left: 4%;
}

.sof-orbit__card {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 292px;
  background: #fff;
  border-radius: 18px;
  padding: 18px 18px 14px;
  box-shadow: 0 24px 48px -20px rgba(16, 24, 40, 0.45);
}

.sof-orbit__cardtitle {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--fg-strong);
  margin: 0 0 10px;
}

.sof-orbit__chart {
  display: block;
  width: 100%;
  height: 108px;
}

.sof-orbit__area {
  fill: var(--violet-100);
}

.sof-orbit__line {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 2.5;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 900;
  animation: sof-draw 2.6s ease-out forwards;
}

.sof-orbit__cardfoot {
  display: flex;
  justify-content: space-between;
  font-size: 10.5px;
  color: var(--fg-muted);
  margin-top: 4px;
}

.sof-orbit__barlabel {
  font-size: 10.5px;
  color: var(--fg-3);
  margin: 14px 0 8px;
  padding-top: 12px;
  border-top: 1px solid var(--border-light);
}

.sof-orbit__bars {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 54px;
}

.sof-orbit__bar {
  flex: 1 1 0;
  background: var(--violet-300);
  border-radius: 3px 3px 0 0;
  height: var(--h);
  transform-origin: bottom;
  animation: sof-grow 1.4s ease-out backwards;
}

.sof-orbit__bar:last-child {
  background: var(--color-primary);
}

.sof-orbit__bar:nth-child(2) {
  animation-delay: 0.1s;
}

.sof-orbit__bar:nth-child(3) {
  animation-delay: 0.2s;
}

.sof-orbit__bar:nth-child(4) {
  animation-delay: 0.3s;
}

.sof-orbit__bar:nth-child(5) {
  animation-delay: 0.4s;
}

.sof-orbit__bar:nth-child(6) {
  animation-delay: 0.5s;
}

@keyframes sof-spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes sof-draw {
  from {
    stroke-dashoffset: 900;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes sof-grow {
  from {
    transform: scaleY(0.05);
  }
  to {
    transform: scaleY(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sof-orbit__ring,
  .sof-orbit__line,
  .sof-orbit__bar {
    animation: none;
  }

  .sof-orbit__line {
    stroke-dasharray: none;
  }
}

/* Layout: table of contents rail + report */
.sof-section {
  background: var(--bg-primary);
  padding: var(--space-14) var(--space-6) var(--space-16);
}

.sof-layout {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 272px minmax(0, 1fr);
  gap: 56px;
  align-items: start;
}

.sof-toc {
  position: sticky;
  top: 96px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

.sof-toc__card {
  border: 1px solid var(--border-light);
  border-radius: 16px;
  background: #fff;
  padding: var(--space-5);
}

.sof-toc__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--fg-1);
  margin: 0 0 var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-light);
}

.sof-toc__card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sof-toc__card a {
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.15s ease;
}

.sof-toc__card a:hover {
  background: var(--bg-grey-50);
}

.sof-toc__kicker {
  display: block;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--fg-strong);
}

.sof-toc__label {
  display: none;
  font-size: 14.5px;
  line-height: 1.4;
  color: var(--fg-1);
  margin-top: 6px;
}

.sof-toc__card a.is-active {
  background: var(--bg-violet-25);
}

.sof-toc__card a.is-active .sof-toc__kicker {
  color: var(--color-primary);
}

.sof-toc__card a.is-active .sof-toc__label {
  display: block;
}

.sof-toc__cta {
  background: var(--fg-1);
  border-radius: 16px;
  padding: var(--space-5);
  text-align: center;
}

.sof-toc__cta p {
  font-size: 14.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 var(--space-4);
}

.sof-toc__cta a {
  display: block;
  background: var(--color-primary);
  color: #fff !important;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  padding: 11px 16px;
  border-radius: 10px;
}

.sof-toc__cta a:hover {
  background: var(--violet-300);
  color: #fff !important;
}

.sof-method {
  margin-top: var(--space-14);
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-light);
}

.sof-method__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--fg-1);
  margin: 0 0 var(--space-3);
}

.sof-method__body {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--fg-3);
  margin: 0;
  max-width: 640px;
}

.sof-toc-mobile {
  display: none;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: var(--space-8);
}

.sof-toc-mobile summary {
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: var(--fg-1);
}

.sof-toc-mobile ul {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sof-toc-mobile a {
  font-size: 14px;
  color: var(--fg-2);
  text-decoration: none;
}

/* Bands */
.sof-band {
  padding: var(--space-12) 0 0;
  scroll-margin-top: 96px;
}

.sof-band + .sof-band {
  margin-top: var(--space-12);
  border-top: 1px solid var(--border-light);
}

.sof-band--tint {
  background: transparent;
}

.sof-wrap {
  max-width: none;
}

.sof-chapter {
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 var(--space-3);
}

.sof-h2 {
  font-size: clamp(26px, 3.6vw, 40px);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 var(--space-5);
}

.sof-h2--center {
  margin-bottom: var(--space-8);
}

.sof-h3 {
  font-size: clamp(20px, 2.4vw, 26px);
  line-height: 1.3;
  font-weight: 600;
  margin: 0 0 var(--space-5);
}

.sof-lede {
  font-size: 17px;
  line-height: 1.7;
  color: var(--fg-2);
  margin: 0 0 var(--space-8);
}

/* Three numbers */
.sof-numbers {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);
}

.sof-number {
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: var(--space-6);
}

.sof-number__value {
  font-size: 30px;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.15;
  margin: 0 0 var(--space-3);
}

.sof-number__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 var(--space-2);
}

.sof-number__body {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--fg-2);
  margin: 0;
}

/* Findings */
.sof-findings {
  background: var(--bg-violet-25);
  border: 1px solid var(--violet-100);
  border-radius: 16px;
  padding: var(--space-6);
  margin-bottom: var(--space-14);
}

.sof-findings__title {
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--violet-600);
  margin: 0 0 var(--space-4);
}

.sof-findings ul {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sof-findings li {
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--fg-strong);
}

.sof-finding {
  padding-top: var(--space-10);
  margin-top: var(--space-10);
  border-top: 1px solid var(--border-light);
}

.sof-finding:first-of-type {
  border-top: none;
  padding-top: 0;
  margin-top: 0;
}

.sof-finding p {
  font-size: 16.5px;
  line-height: 1.75;
  color: var(--fg-2);
  margin: var(--space-5) 0 0;
}

.sof-finding figure {
  margin-bottom: var(--space-2);
}

.sof-takeaway {
  background: var(--bg-violet-25);
  border-left: 3px solid var(--color-primary);
  border-radius: 0 10px 10px 0;
  padding: var(--space-4) var(--space-5);
  color: var(--fg-1) !important;
  margin-top: var(--space-6) !important;
}

.sof-list {
  margin: var(--space-4) 0 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sof-list li {
  font-size: 16px;
  line-height: 1.7;
  color: var(--fg-2);
}

.sof-list--method li {
  font-size: 15.5px;
}

.sof-duo {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: var(--space-4);
}

/* Table */
.sof-tablewrap {
  overflow-x: auto;
  margin-top: var(--space-6);
}

.sof-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  min-width: 420px;
}

.sof-table thead th {
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
  text-align: right;
  padding: 12px 14px;
}

.sof-table thead th:first-child {
  text-align: left;
  border-radius: 8px 0 0 0;
}

.sof-table thead th:last-child {
  border-radius: 0 8px 0 0;
}

.sof-table tbody th {
  text-align: left;
  font-weight: 500;
  color: var(--fg-strong);
  padding: 12px 14px;
  border-bottom: 1px solid var(--border-light);
}

.sof-table tbody td {
  text-align: right;
  padding: 12px 14px;
  border-bottom: 1px solid var(--border-light);
  color: var(--fg-1);
}

.sof-table tbody tr:nth-child(odd) th,
.sof-table tbody tr:nth-child(odd) td {
  background: var(--bg-violet-25);
}

/* Close */
.sof-close {
  margin-top: var(--space-14);
  background: var(--bg-violet-25);
  border: 1px solid var(--violet-100);
  border-radius: 20px;
  padding: var(--space-10);
}

.sof-close__title {
  font-size: clamp(22px, 2.8vw, 30px);
  line-height: 1.25;
  font-weight: 700;
  margin: 0 0 var(--space-8);
}

.sof-close__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.sof-close__stat {
  background: #fff;
  border: 1px solid var(--violet-100);
  border-radius: 14px;
  padding: var(--space-5);
}

.sof-close__value {
  font-size: 34px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
  line-height: 1.1;
}

.sof-close__label {
  font-size: 14px;
  color: var(--fg-2);
  margin: var(--space-2) 0 0;
  line-height: 1.5;
}

.sof-close__body {
  font-size: 16.5px;
  line-height: 1.75;
  color: var(--fg-2);
  margin: var(--space-8) 0 0;
}

@media (max-width: 1080px) {
  .sof-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }

  .sof-toc {
    display: none;
  }

  .sof-method {
  margin-top: var(--space-14);
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-light);
}

.sof-method__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--fg-1);
  margin: 0 0 var(--space-3);
}

.sof-method__body {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--fg-3);
  margin: 0;
  max-width: 640px;
}

.sof-toc-mobile {
    display: block;
  }
}

@media (max-width: 980px) {
  .sof-hero__grid {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-10);
  }

  .sof-orbit {
    height: 300px;
  }

  .sof-orbit__ring,
  .sof-orbit__mark,
  .sof-orbit__pill {
    display: none;
  }

  .sof-orbit__card {
    position: static;
    transform: none;
    width: 100%;
    max-width: 380px;
    box-shadow: 0 18px 40px -22px rgba(16, 24, 40, 0.5);
  }

  .sof-orbit {
    height: auto;
  }
}

@media (max-width: 860px) {
  .sof-numbers,
  .sof-close__stats {
    grid-template-columns: 1fr;
  }

  .sof-duo {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .sof-hero {
    padding: 108px var(--space-4) var(--space-12);
  }

  .sof-section {
    padding: var(--space-10) var(--space-4) var(--space-12);
  }

  .sof-close {
    padding: var(--space-6);
  }
}
</style>
