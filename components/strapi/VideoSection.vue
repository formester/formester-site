<template>
    <div class="container py-5">
      <div class="row justify-content-center align-items-center text-center mt-5">
        <div>
          <SectionTitle :heading="title" />
          <p class="hero__subheading" v-if="description">
            {{ description }}
          </p>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-md-5 flex-wrap"
          style="width: 100%;"
        >
          <!-- YouTube Video Thumbnail with Custom Play Button -->
          <div v-if="video_url" class="video-thumbnail-wrapper position-relative mx-auto" style="max-width: 100%; cursor: pointer; display: flex; justify-content: center;"
            @click="showOverlay = true">
            <img
              :src="thumbnail && thumbnail.url ? thumbnail.url : youtubeThumbnailUrl"
              class="img-fluid rounded shadow"
              style="width: 100%; display: block;"
            />
            <button class="custom-play-btn" aria-label="Play video"
              style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: none; background: transparent; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;">
              <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="white" fill-opacity="1"/>
                <polygon points="15,12 27,18 15,24" fill="#6434D0"/>
              </svg>
            </button>
          </div>
          <!-- Overlay -->
          <div v-if="showOverlay" class="video-overlay" @click.self="closeOverlay"
            style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 2147483647 !important;">
            <div style="position: relative; min-width: 900px; max-width: 95vw; max-height: 85vh; display: flex; justify-content: center;">
              <iframe
                :src="youtubeEmbedUrl"
                width="900"
                height="506"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                style="width: 100%; min-width: 900px; height: 506px; max-width: 95vw; max-height: 85vh; border-radius: 12px; box-shadow: 0 4px 32px rgba(0,0,0,0.5); margin: auto; display: block;"
              ></iframe>
              <button @click="closeOverlay" aria-label="Close video"
                style="position: absolute; top: -32px; right: -32px; background: #fff; border: none; border-radius: 50%; width: 40px; height: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; cursor: pointer;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18" stroke="#333" stroke-width="2" stroke-linecap="round"/>
                  <path d="M6 18L18 6" stroke="#333" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MarkdownContent from '~/components/MarkdownContent.vue'
  
  export default {
    components: { MarkdownContent },
    props: {
      title: {
        type: Array,
        required: true,
      },
      description: {
        type: String,
        default: '',
      },
      video_url: {
        type: String,
        default: '',
        required: true,
      },
     thumbnail: {
        type: Object,
        default: () => (null)
      },
    },
    data() {
    return {
      showOverlay: false,
    };
  },
  computed: {
    youtubeVideoId() {
      // Extracts the video ID from various YouTube URL formats
      const url = this.video_url;
      if (!url) return '';
      const regExp = /(?:youtube\.com.*[\?&]v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      return match ? match[1] : '';
    },
    youtubeThumbnailUrl() {
      return this.youtubeVideoId ? `https://img.youtube.com/vi/${this.youtubeVideoId}/hqdefault.jpg` : '';
    },
    youtubeEmbedUrl() {
      return this.youtubeVideoId ? `https://www.youtube.com/embed/${this.youtubeVideoId}?autoplay=1` : '';
    },
  },
  methods: {
    closeOverlay() {
      this.showOverlay = false;
    },
  },
  }
  </script>
  


<style>
.video-overlay {
  animation: fadeIn 0.2s;
  z-index: 2147483647 !important;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.custom-play-btn {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(220,220,220,100);
    opacity: 1;
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(255,0,0,0.0);
    opacity: 0.85;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255,0,0,0.0);
    opacity: 1;
  }
}
</style>