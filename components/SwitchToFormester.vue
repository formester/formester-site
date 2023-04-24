<template>
  <div class="container py-5 px-2">
    <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
            <h2 class="section__heading">Why you should switch to formester</h2>
        </div>

        <div class="templates mt-md-5">
            <div v-for="(feature, idx) in features" :key="idx">
                <NuxtLink :to="`/${feature.link}/`">
                    <div class="card p-4 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start">
                        <img
                            :src="require(`../assets/images/${feature.imageSrc}`)"
                            class="img-fluid"
                            style="width: 69px;"
                            :alt="feature.altText"
                        />
                        <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
                        <p  class="subheading__text">{{ feature.description }}</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            features: [
                {
                    title: 'Value for Money',
                    description:'At Formester, we totally believe in the concept of value for money. We take care that you are getting the best that you can, with a form builder whilst ensuring every penny you spent was worth it.',
                    imageSrc: 'icons/dollar.jpg',
                    altText: 'Formester values for money',
                    link: 'pricing'
                },
                {
                    title: 'Rapid Development Experience',
                    description:'We value your time! Bid farewell to the waiting time that comes with loading screens; And experience rapid, efficient and optimized form building with us.',
                    imageSrc: 'icons/lighting.jpg',
                    altText: 'no loading screen which makes experience faster',
                    link: 'features/html-form-backend'
                },
                {
                    title: 'Wide Customization Scope',
                    description:'Your creativity can take full flight with us! We offer a number of templates with a wide scope of customization; even with our free plan!',
                    imageSrc: 'icons/brush.jpg',
                    altText: 'we provide wide customization with numbers of templates',
                    link: 'templates'
                },
                {
                    title: 'Prompt Customer Support',
                    description:'From the first step of signing-up to the last step of publishing your web forms, we are here to assist you! Chat support, contact form, email communication, you name it; just choose a method you’re comfortable with, and we’ll take you from there.',
                    imageSrc: 'icons/helpline.jpg',
                    altText: 'providing customer support at every step',
                    link: 'contact'
                },
                {
                    title: 'Top-tier Security',
                    description:'If there is one thing that every form builder, or for that matter, any data collection software must ensure is, tight security. By using captcha and re-captcha integrations, we stop bots from spamming your data and help you attain data which will yield accurate and actionable insights.',
                    imageSrc: 'icons/lock.jpg',
                    altText: 'secures you data with re-captcha, no spam data',
                    link: 'features/spam-protection'
                },
                {
                    title: 'Seamless Integration',
                    description:'At Formester, we understand that you may already be using a range of tools to run your business. Therefore, we offer seamless integration with popular third-party apps like Zapier and Google Sheets so you can connect your form data with the tools you already use.',
                    imageSrc: 'icons/atom.jpg',
                    altText: 'offer wide number of integration to connect with',
                    link: 'integrations'
                },
            ]
        }
    }
}
</script>

<style scoped>
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}
.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}
.card {
    border-radius: 18px;
    border: none;
}
.card:hover {
  transition: all ease-in-out 300ms;
  box-shadow: 0px 6px 14px 2px rgba(214,214,214,1);
  cursor: pointer;
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 765px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>