<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="section__heading">We are happy to help</h1>
        <p>
          Need more information about our product, pricing or anything else?
          Fill out the form, and we'll be in touch shortly.
        </p>
        <div class="">
          <div class="div mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-chat-dots me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
              <path
                d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
              /></svg
            ><a href="mailto:support@formester.com">support@formester.com</a>
          </div>
          <div class="div my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-geo-alt me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              /></svg
            >2035 Sunset Lake, Delaware
          </div>
        </div>
      </div>
      <div class="col-lg-5 ms-auto">
        <form
          class="contact__container"
          method="post"
          action="https://app.formester.com/forms/7821cca5-60e9-414d-94d4-60c987e7044e/submissions"
        >
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control auth__inputField"
              id="name"
              name="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input
              type="email"
              class="form-control auth__inputField"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3">
            <label for="company" class="form-label">Company Name</label>
            <input
              type="text"
              class="form-control auth__inputField"
              id="company"
              name="company"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              rows="5"
              class="form-control auth__inputField"
              id="email"
              name="message"
              aria-describedby="emailHelp"
              required
            ></textarea>
          </div>
          <button type="submit" class="button contact__button mt-4">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CallToStackSection from '@/components/CallToActionSection.vue'

// MetaTags
import getSiteMeta from '../utils/getSiteMeta'

export default {
  name: 'Contact',
  components: {
    CallToStackSection,
  },
  jsonld() {
    return {
      '@context': 'http://schema.org/',
      '@type': 'ContactPage',
      name: 'Formester contact page',
      description:
        'Formester support to help you with any questions that you may have',
      url: 'https://formester.com/contact',
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/contact',
        title: 'We are happy to help',
        description:
          'Formester support to help you with any questions that you may have',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with contact page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with contact page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Contact | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/contact',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: 7em;
  margin-bottom: 5em;
}
.contact__container {
  padding: 2em 2.5em;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.form-label {
  font-size: var(--ft-small-body);
}

.form-control {
  border: none;
  background-color: #f5eff8;
}

.form-control:focus,
.form-control:active {
  box-shadow: none;
  border: none;
  outline: none;
  background-color: #f5eff8;
}

.contact__button {
  background-color: var(--clr-primary);
  color: white;
  font-size: var(--ft-small-body);
  font-weight: 700;
  padding: 0.7em 2.5em;
  border-radius: var(--brd-df-rd);
}
</style>
