<template>
    <div class="row">
        <img 
        :src="require(`@/assets/images/blog/blog-img-1.png`)"
        class="rounded col-6"
        alt="NA" 
        />
        <div class="col-6 d-flex flex-column align-items-start">
            <span class="blog__date">1 Feb 2022</span>
            <div class="mt-2">
                <h3 class="blog__title">Get started with Formester</h3>
                <p class="mt-1 blog__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nihil nisi architecto voluptate hic quaerat neque eum, earum sunt at saepe dicta enim eius maxime non tempore. Quibusdam, rem quas!
                </p>
                <p class="mt-2 blog__desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, harum beatae? Corporis, autem. Quas adipisci expedita, beatae impedit ratione debitis.
                </p>
            </div>
            <span class="mt-2 blog__timetoRead">
                <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.00016 2.02344C11.6802 2.02344 14.6668 5.0101 14.6668 8.6901C14.6668 12.3701 11.6802 15.3568 8.00016 15.3568C4.32016 15.3568 1.3335 12.3701 1.3335 8.6901C1.3335 5.0101 4.32016 2.02344 8.00016 2.02344ZM8.00016 14.0234C10.9468 14.0234 13.3335 11.6368 13.3335 8.6901C13.3335 5.74344 10.9468 3.35677 8.00016 3.35677C5.0535 3.35677 2.66683 5.74344 2.66683 8.6901C2.66683 11.6368 5.0535 14.0234 8.00016 14.0234ZM10.3575 5.3901L11.3002 6.33277L8.00016 9.63277L7.0575 8.6901L10.3575 5.3901V5.3901Z"
                        fill="#828282"
                    />
                </svg>
                6 min read
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        props: ['blog'],
        mounted() {
            console.log(this.blog)
        }
    }
</script>

<style>
</style>