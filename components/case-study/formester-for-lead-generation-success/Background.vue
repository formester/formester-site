<template>
  <div class="container my-5 py-5">
    <div class="heading d-flex flex-column">
      <span class="section__subtext">Background</span>
      <h2 class="section__heading">
        Understanding the Evolution and Role of Lead Generation in Modern B2B
        Success
      </h2>
      <p class="section__description">
        In today's highly competitive business landscape, B2B companies
        continually strive to maximize lead generation and conversion rates.
      </p>
    </div>

    <div class="my-4 py-5">
      <div class="d-flex flex-column flex-xl-row gap-112">
        <div class="d-flex flex-column">
          <h3 class="sub__section-heading">Importance of Lead Generation</h3>
          <p class="sub__section-description mt-3">
            The challenge is pervasive across industries
          </p>
          <p class="sub__section-description">
            Dealing with this challenge becomes even more crucial, as the
            ability to effectively capture and convert leads into paying
            customers directly impacts revenue and business growth.
          </p>
          <div class="lead-generation-stats d-flex mt-3">
            <div>
              <span class="d-block">
                <span class="sub__section-heading">53</span>
                %
              </span>
              <span class="d-block">of marketers spend</span>
            </div>
            <div>
              <span class="d-block">
                <span class="sub__section-heading">50</span>
                %
              </span>
              <span class="d-block">of their budget generating leads</span>
            </div>
          </div>
        </div>

        <nuxt-img
          class="sub__section-img img-fluid"
          src="case-study-1/background/importance-of-lead-generation.png"
        />
      </div>
    </div>

    <div class="my-4 py-5">
      <div class="d-flex flex-column flex-xl-row gap-112">
        <div class="d-flex flex-column">
          <h3 class="sub__section-heading">Role of Lead Generation Forms</h3>
          <p class="sub__section-description mt-3">
            The backbone of this challenge lies in the lead generation process
            itself. And when it comes to the contemporary digital world,
            lead-generation forms emerge as the key elements of the
            lead-generation process. 
          </p>
          <p class="sub__section-description">
            These forms serve as the initial touchpoint between a potential lead
            and your organization. 
          </p>
          <p class="sub__section-description">
            They determine whether a website visitor takes the step from being
            merely interested to actively engaging with your products or
            services. 
          </p>
          <div class="lead-generation-stats d-flex mt-3">
            <div>
              <span class="d-block">
                <span class="sub__section-heading">53</span>
                %
              </span>
              <span class="d-block">of marketers spend</span>
            </div>
            <div>
              <span class="d-block">
                <span class="sub__section-heading">50</span>
                %
              </span>
              <span class="d-block">of their budget generating leads</span>
            </div>
          </div>
        </div>

        <nuxt-img
          class="sub__section-img img-fluid order-xl-first"
          src="case-study-1/background/role-of-lead-generation-forms.png"
        />
      </div>
    </div>

    <div class="my-4 py-5">
      <div class="d-flex flex-column flex-xl-row gap-112">
        <div class="d-flex flex-column">
          <h3 class="sub__section-heading">Designing Effective Forms</h3>
          <p class="sub__section-description mt-3">
            The effectiveness of these lead-generation forms is what can make or
            break your lead-generation efforts. 
          </p>
          <p class="sub__section-description">
            That being said, they must be strategically designed, user-friendly,
            and optimized to capture crucial information without overwhelming or
            driving away potential leads.
          </p>
          <p class="sub__section-description">
            As such, it becomes important for any business to recognize this and
            understand that the key to addressing the lead-generation challenge
            lies in both creating and optimizing powerful lead-generation forms.
          </p>
          <div class="lead-generation-stats d-flex mt-3">
            <div>
              <span class="d-block">
                <span class="sub__section-heading">84</span>
                %
              </span>
              <span class="d-block"
                >of marketers use form submissions to generate leads.</span
              >
            </div>
          </div>
        </div>

        <nuxt-img
          class="sub__section-img img-fluid"
          src="case-study-1/background/designing-effective-forms.png"
        />
      </div>
    </div>

    <div class="my-4 py-5">
      <div class="d-flex flex-column flex-xl-row gap-112">
        <div class="d-flex flex-column">
          <h3 class="sub__section-heading">Formester: A Valuable Tool</h3>
          <p class="sub__section-description mt-3">
            In this context, Formester emerges as a valuable tool for businesses
            looking to optimize their lead-generation forms. Its features, such
            as simplified form creation, conditional logic, and seamless
            integration, provide the means to transform forms, from basic data
            collection tools into powerful lead-capturing and nurturing
            instruments.  
          </p>
          <p class="sub__section-description">
            Formester empowers businesses to not only create forms but to
            fine-tune them for success in the competitive digital landscape. 
          </p>
          <div class="lead-generation-stats d-flex mt-3">
            <div>
              <span class="d-block">
                <span class="sub__section-heading">50</span>
                %
              </span>
              <span class="d-block"
                >of marketers say inbound marketing strategies, such as onsite
                forms, are their primary source of leads</span
              >
            </div>
          </div>
        </div>

        <nuxt-img
          class="sub__section-img img-fluid order-xl-first"
          src="case-study-1/background/formester-a-valuable-tool.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.sub__section-heading {
  color: var(--clr-neutral-900);
  font-size: 28px;
  font-weight: 600;
  line-height: 140%;
}

.sub__section-description {
  color: var(--clr-neutral-700);
  font-size: 18px;
  line-height: 160%;
}

.sub__section-img {
  margin-right: -16px;
}

.lead-generation-stats {
  border-left: 1px solid var(--clr-primary);
  background: #fbf9ff;
  padding: 24px;
  gap: 48px;
  color: var(--clr-neutral-600);
}

.gap-112 {
  gap: 112px;
}

@media screen and (max-width: 1200px) {
  .gap-112 {
    gap: 56px;
  }
}
</style>
