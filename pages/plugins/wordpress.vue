<template>
  <div>
    <WordpressHero />
    <div class="bg__secondary py-5">
      <div class="section__container d-flex flex-column p-5 gap-32 mx-auto">
        <h2 class="section__heading">
          Embedding Your Formester Form Using the Formester WordPress Plugin
        </h2>
        <div>
          <p>
            Utilize the Formester WordPress plugin to seamlessly integrate an
            existing form into your WordPress site. This plugin simplifies the
            process by offering two embedding methods:
          </p>
          <ul>
            <li>
              Directly paste the form's URL, eliminating the need to handle HTML
              embed codes.
            </li>
          </ul>
        </div>
        <div>
          <p>Steps to Embed a Formester Form:</p>
          <ol>
            <li>
              Install the plugin from WordPress.org here or from WordPress.com
              here. Log into your WordPress account and follow the installation
              instructions for WordPress.org users.
            </li>
            <li class="mt-4">
              In WordPress, when adding a block, you'll notice the Formester
              option:
              <nuxt-img src="/plugins/wordpress-block.svg" class="my-3" />
              <span class="d-block">
                Click this to launch the plugin and add a Formester form to your
                page.
              </span>
            </li>
            <li class="mt-4">
              Paste your form's share URL in the field (make sure the form is
              published).
              <nuxt-img src="/plugins/wordpress-paste-url.svg" class="my-3" />
              <span class="d-block"
                >Formester plugin doesn’t collect, store, or share any personal
                information of its users.</span
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordpressHero from '../../components/plugins/wordpress/WordpressHero.vue'
export default {
  components: {
    WordpressHero,
  },
}
</script>

<style scoped>
.section__heading {
  color: #000;
  font-size: 36px;
  font-weight: 600;
  line-height: 52px;
}

.gap-32 {
  gap: 32px;
}

.section__container {
  max-width: 848px;
  background: white;
  border-radius: 4px;
}

.bg__secondary {
  background-color: #f5f5f5;
}
</style>
