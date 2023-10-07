<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center"> <span class="hglt">How</span> it works</h2>
    <div class="row">
        <div id="stepsSlider" class="carousel slide" data-bs-ride="carousel" style="min-height: 535px;">
            <ol class="carousel-indicators">
                <li data-bs-target="#stepsSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Step 1"></li>
                <li data-bs-target="#stepsSlider" data-bs-slide-to="1" aria-label="Step 2"></li>
                <li data-bs-target="#stepsSlider" data-bs-slide-to="2" aria-label="Step 3"></li>
            </ol>
            <div class="carousel-inner px-3 py-5">
                <div class="carousel-item active">
                    <div class="d-flex flex-column-reverse align-items-center flex-lg-row ">
                        <div class="col-lg-6 me-lg-5 mt-5  ">
                            <h3 class="step__section-heading"><span class="hglt">Create</span> a form</h3>
                            <span class="">Use Formester backend link to power any existing HTML form on the web or create a sharable hosted form using our form builder tool.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/home/how-it-works/create-a-form.svg" class="w-lg-40 d-block img-fluid my-auto" alt="build your form easy with formester form builder" loading="lazy" sizes="40vw"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-column-reverse flex-lg-row align-items-center flex-lg-row">
                        <div class="col-lg-6 ms-lg-5 mt-5  ">
                            <h3 class="step__section-heading"><span class="hglt">Spam</span> filtering</h3>
                            <span class="">Easily filter out spam using ReCaptcha. It takes a few clicks to configure while allowing you to control all settings when you have to. No expert knowledge is required.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/home/how-it-works/spam-filtering.svg" class="w-lg-40 d-block img-fluid my-auto" alt="share your form" loading="lazy" sizes="40vw"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-column-reverse align-items-center flex-lg-row ">
                        <div class="col-lg-6 me-lg-5 mt-5 ">
                            <h3 class="step__section-heading"><span class="hglt">Automatic</span> response</h3>
                            <span class="">Replying to submissions is automatic. You can create and configure emails to go to your users on submission. We also notify you via email, Slack or any other way you like.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/home/how-it-works/automatic-response.svg" class="w-lg-40 d-block img-fluid my-auto" alt="Third slide" loading="lazy" sizes="40vw"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>


<style scoped>

.step__section-heading {
   font-size: 1.75rem;
   font-weight: 700;
}

#stepsSlider .carousel-indicators li{
    background-color: var(--clr-primary) !important; 
}
</style>
