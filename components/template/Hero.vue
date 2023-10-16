<template>
  <section class="hero-section position-relative d-flex justify-content-center">
    <!-- Background Image -->
    <nuxt-img class="overlap-patter" src="/templates/hero-pattern.png" />
    <div class="hero-headings d-flex flex-column p-2 m-auto">
      <h1 class="mx-auto">Search for a template. Modify it. Share it.</h1>
      <h2>
        <span class="mx-auto">
          Browse through our curated library of 50+ ready to use form templates
          to help you gather information in a few clicks.
        </span>
        <span class="mx-auto">
          Our templates are fully customizable, so you can easily match them to
          your brand style and share it across.
        </span>
      </h2>
    </div>

    <!-- <div class="search-box position-absolute mx-auto d-flex flex-column"> -->
      <!-- Search -->
      <!-- <div class="d-flex">
        <div class="d-flex gap-4 align-items-center m-auto">
          <div class="search-svg">
            <nuxt-img src="/templates/search.png" alt="Search" />
          </div>
          <input
            type="text"
            placeholder="Blood donation, job applicant tracker"
          />
        </div>
      </div> -->
      <!-- Trending -->
      <!-- <div class="trending-searches d-flex">
        <p class="trending-heading">Trending:</p>
        <p>Lead Generation ,</p>
        <p>Event RSVP ,</p>
        <p>Product Research</p>
      </div> -->
    <!-- </div> -->
  </section>
</template>

<script></script>

<style scoped>
.hero-section {
  width: 100%;
  height: 348px;
  background-image: linear-gradient(#4726ad, #633ae1);
  margin-bottom: 3rem;
}
.hero-headings {
  color: white;
  width: 1025px;
}

.hero-headings h1 {
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
}
.hero-headings h2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}
.search-box {
  bottom: -36px;
  background: #fff;
  height: 67px;
  border-radius: 8px;
  padding: 20px;
  gap: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08),
    0px 12px 24px 0px rgba(0, 0, 0, 0.04);
}
.search-box input {
  width: 869px;
  border: none;
}
.search-box input::placeholder {
  color: var(--neutral-500, #737373);
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
}
.search-box input:focus {
  outline: none;
}
.search-svg {
  width: 20px;
}

.overlap-patter {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 3;
}
.trending-searches {
  margin: 13px 0 0px -18px;
  gap: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.trending-heading {
  color: var(--neutral-500, #737373);
}

@media (max-width: 991px) {
  .search-box {
    height: 52px;
    bottom: -33px;
    padding: 12px;
    gap: 8px;
  }
  .search-box input {
    width: 398px;
  }
  .hero-headings {
    color: white;
    width: 455px;
    padding: 1rem;
  }
  .hero-headings h1 {
    font-size: 32px;
    line-height: 48px;
  }
  .hero-headings h2 {
    display: block;
    font-size: 16px;
  }
  .trending-searches {
    visibility: hidden;
  }
}

@media only screen and (max-width: 840px) {
  .search-box input::placeholder {
    font-size: 14px;
  }
}

@media only screen and (max-width: 550px) {
  .search-box input {
    width: 290px;
  }
  .search-box {
    width: min-content;
  }
}
</style>
