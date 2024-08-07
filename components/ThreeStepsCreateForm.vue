<template>
  <div class="container py-5 px-2">
    <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
            <h2 class="section__heading">How to create an online form with Formester in 3 simple steps</h2>
            <p class="hero__subheading">Skip the hassle of learning how to create HTML forms from scratch. With Formester, you can concentrate on the questions you want to ask and easily build free online forms. Increase your response rates with our user-friendly form creator!</p>
        </div>
        <div id="stepsSlider" class="carousel slide" data-bs-ride="carousel" style="min-height: 535px;">
            <ol class="carousel-indicators">
                <li data-bs-target="#stepsSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Step 1"></li>
                <li data-bs-target="#stepsSlider" data-bs-slide-to="1" aria-label="Step 2"></li>
                <li data-bs-target="#stepsSlider" data-bs-slide-to="2" aria-label="Step 3"></li>
            </ol>
            <div class="carousel-inner px-3 py-5">
                <div class="carousel-item active">
                    <div class="d-flex flex-column-reverse flex-lg-row ">
                        <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                            <span class="step__heading">Step 1</span>
                            <h3 class="step__section-heading">Create a Custom Form</h3>
                            <span class="step__description">Open the online form maker in Formester. Decide if you want to start with a blank page or use one of the available pre-designed templates. Combine blocks to create a survey, quiz, registration form, online order form, or any other custom web form. Add standard fields like Name, Email, Phone, Date, Text Input, or File Upload by simply dragging and dropping these blocks into your form. Create multiple choice questions, drop-down lists, ratings, and scales – all with just a few clicks. Once your questions are ready, open the form designer. Choose a built-in form design theme that suits your preferences. Customize the colors, fonts, and buttons until you achieve a web form design that truly represents your brand! That's it – your form is ready.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/features/three-steps-create-form/step1.svg" class="w-lg-40 d-block img-fluid my-auto" alt="build your form easy with formester form builder" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-column-reverse flex-lg-row flex-lg-row-reverse">
                        <div class="col-lg-6 ms-lg-5 mt-5 mt-lg-0">
                            <span class="step__heading">Step 2</span>
                            <h3 class="step__section-heading">Publish and Share</h3>
                            <span class="step__description">Activate the form in the Publish section so that people can view and fill it out. Now let everyone access your online form: Add the link to the form page to a button on your website. Alternatively, share a direct link to your form on social networks. If you need a website form, use the embed code that is automatically generated by Formester's website form creator. Simply copy and paste it to the desired web page – no HTML coding required. Whichever sharing method you choose, there's no need to set up any additional server integrations. Everything will be processed through Formester's software.</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/features/three-steps-create-form/step2.svg" class="w-lg-40 d-block img-fluid my-auto" alt="share your form" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-column-reverse flex-lg-row ">
                        <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                            <span class="step__heading">Step 3</span>
                            <h3 class="step__section-heading">Gather and Analyze Responses</h3>
                            <span class="step__description">You don't have to constantly check your dashboard for new responses – you'll receive email notifications when submissions occur. Sit back and get to know your customers one person at a time. Export results as Excel documents or Google Sheets for analysis at your convenience. Alternatively, evaluate key stats and response data in informative visualizations through Formester's web interface. With this valuable data, you can plan ahead for the next steps of your project or business!"</span>
                        </div>
                        <div class="col-lg-5 m-auto">
                            <nuxt-img src="/features/three-steps-create-form/step3.svg" class="w-lg-40 d-block img-fluid my-auto" alt="Third slide" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.subheading__text {
    font-size: 16px;
    margin-top: 12px;
}
.step__heading {
    color: var(--clr-primary);
    font-weight: 700;
    margin-bottom: 8px;
}
.step__description {
    font-size: 15px;
    font-weight: 500;
}
.step__section-heading {
   font-size: 28px;
   font-weight: 600;
}
.step__circle {
    position: absolute;
    top: 50%;
    right: 50%;
}
.carousel-indicators li{
    background-color: var(--clr-primary);
}
</style>