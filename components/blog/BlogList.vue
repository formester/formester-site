<template>
  <div class="container">
    <BlogCardMain />
    <div class="row mt-4">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        class="col-md-4 my-3"
        :blog="blog"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue'
import BlogCardMain from './BlogCardMain.vue'

export default {
  components: {
      BlogCard,
      BlogCardMain
  },
  data() {
    return {
      blogs: [
        {
          id: 1, 
          title: 'How autoresponder actually works',
          desc:
            'Create surveys, registration forms and more with our form builder. Drag and drop interface and instant live preview to test what you create. 100+ preexisting templates to choose from and customize to make them your own.',
          imgName: 'blog-img-1.png',
          date: '12 Feb 2022',
          timetoRead: 5,
        },
        {
          id: 2, 
          title: 'Formester vs Typeform',
          desc:
            'Create surveys, registration forms and more with our form builder. Drag and drop interface and instant live preview to test what you create.',
          imgName: 'blog-img-1.png',
          date: '16 Feb 2022',
          timetoRead: 3,
        },
        {
          id: 3, 
          title: 'Google Form vs Formester',
          desc:
            'Create surveys, registration forms and more with our form builder.',
          imgName: 'blog-img-1.png',
          date: '19 Feb 2022',
          timetoRead: 3,
        },
        {
          id: 4, 
          title: 'Whats special about Formester',
          desc:
            'Create surveys, registration forms and more with our form builder. Drag and drop interface and instant live preview to test what you create. 100+ preexisting templates to choose from and customize to make them your own.',
          imgName: 'blog-img-1.png',
          date: '20 Feb 2022',
          timetoRead: 5,
        },
        {
          id: 5, 
          title: 'How make customize the form according to your brand',
          desc:
            'Create surveys, registration forms and more with our form builder. Drag and drop interface and instant live preview to test what you create.',
          imgName: 'blog-img-1.png',
          date: '4 Mar 2022',
          timetoRead: 4,
        },
      ],
    }
  },
}
</script>

<style>
</style>
