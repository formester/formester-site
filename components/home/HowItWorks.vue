<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center"> <span class="hglt">How</span> it works</h2>
    <div class="row">
        <div id="stepsSlider" class="carousel slide" data-bs-ride="carousel" style="min-height: 535px;">
            <ol class="carousel-indicators">
                <li data-bs-target="#stepsSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Step 1"></li>
                <li data-bs-target="#stepsSlider" data-bs-slide-to="1" aria-label="Step 2"></li>
                <li data-bs-target="#stepsSlider" data-bs-slide-to="2" aria-label="Step 3"></li>
                <li data-bs-target="#stepsSlider" data-bs-slide-to="3" aria-label="Step 4"></li>
            </ol>
            <div class="carousel-inner px-3 py-5">
                <div class="carousel-item active">
                    <div class="d-flex flex-column-reverse align-items-center flex-lg-row">
                        <div class="col-lg-6 me-lg-5 mt-5">
                            <span class="step__heading">Step 1</span>
                            <h3 class="step__section-heading">Create</h3>
                            <span class="">Start with a template or drag and drop different question types to fit your form needs.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/home/how-it-works/create.svg" class="w-lg-40 d-block img-fluid my-auto" alt="build your form easy with formester form builder" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-column-reverse flex-lg-row align-items-center flex-lg-row">
                        <div class="col-lg-6 ms-lg-5 mt-5">
                            <span class="step__heading">Step 2</span>
                            <h3 class="step__section-heading">Customize</h3>
                            <span class="">Add your logo and branding for a more personalized look. Send an automated response for a personalized experience.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/home/how-it-works/customize.svg" class="w-lg-40 d-block img-fluid my-auto" alt="share your form" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-column-reverse align-items-center flex-lg-row">
                        <div class="col-lg-6 me-lg-5 mt-5">
                            <span class="step__heading">Step 3</span>
                            <h3 class="step__section-heading">Share</h3>
                            <span class="">Send your form to real people and watch your form submission roll in.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/home/how-it-works/share.svg" class="w-lg-40 d-block img-fluid my-auto" alt="Third slide" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-column-reverse align-items-center flex-lg-row">
                        <div class="col-lg-6 me-lg-5 mt-5">
                            <span class="step__heading">Step 4</span>
                            <h3 class="step__section-heading">Analyze</h3>
                            <span class="">Turn form insights into actions with built-in analytics.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/home/how-it-works/analyze.svg" class="w-lg-40 d-block img-fluid my-auto" alt="Fourth slide" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>


<style scoped>
.step__heading {
    display: block;
    color: var(--clr-primary);
    font-weight: 700;
    margin-bottom: 8px;
}

.step__section-heading {
   font-size: 1.75rem;
   font-weight: 600;
}

#stepsSlider .carousel-indicators li{
    background-color: var(--clr-primary) !important; 
}
</style>
