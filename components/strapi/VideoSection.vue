<template>
    <div class="container py-5">
      <div class="row justify-content-center align-items-center text-center mt-5">
        <div>
          <SectionTitle :heading="title" />
          <p class="hero__subheading" v-if="description_markdown">
            <MarkdownContent :content="description_markdown" />
          </p>
          <p class="hero__subheading" v-else-if="description">
            {{ description }}
          </p>
        </div>
        <div>

          <!-- YouTube Video Thumbnail with Custom Play Button -->
          <div v-if="video_url" class="video-thumbnail-wrapper" @click="showOverlay = true">
            <nuxt-img
              :src="thumbnail ? thumbnail.url : youtubeThumbnailUrl"
              class="video-thumb-img"
            />
            <button class="custom-play-btn" aria-label="Play video">
              <img src="/play-button.svg" />
          </button>
          </div>
          <!-- Overlay -->
          <div v-if="showOverlay" class="video-overlay" @click.self="closeOverlay">
            <div class="video-overlay-wrapper">
              <iframe
                class="video-iframe"
                :src="youtubeEmbedUrl"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
              <button @click="closeOverlay" aria-label="Close video" class="close-btn">
                <img src="/x-close.svg" />
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
        required: true,
      },
     thumbnail: {
        type: Object,
        default: () => (null)
      },
      description_markdown: {
        type: String,
        default: '',
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
.close-btn {
  position: absolute;
  top: -24px;
  right: -24px;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}
@media (max-width: 1000px) {
  .close-btn {
    top: -16px;
    right: -16px;
    width: 24px;
    height: 24px;
  }
}

.video-overlay-wrapper {
  position: relative;
  max-width: 95vw;
  max-height: 85vh;
  display: flex;
  justify-content: center;
}
.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(0,0,0,0.8);
  align-items: center;
  justify-content: center;
  z-index: 2147483647 !important;
}

.video-iframe {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    min-height: 563px;
    border-radius: 8px;
    box-shadow: 0 2px 32px rgba(0,0,0,0.1);
   margin: auto;
   display: block;
}

@media (max-width: 1000px) {
  .video-iframe {
    min-width: 0;
    min-height: 0;
    width: 80vw;
    height: calc(80vw * 0.5625); /* 16:9 aspect ratio */
    max-width: 100%;
    max-height: calc(80vw * 0.5625);
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

.video-thumb-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 3 / 2;
  box-shadow: 0 2px 32px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

@media (max-width: 700px) {
  .video-thumb-img {
    width: 100% !important;
    height: auto !important;
    min-height: 180px;
  }
}

.video-overlay {
  animation: fadeIn 0.2s;
  z-index: 2147483647 !important;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.video-thumbnail-wrapper {
  position: relative;
  width: 800px;
  display: inline-block;
  cursor: pointer;
  margin-top: 16px;
}

.custom-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background: transparent;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: pulse 2s infinite;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

@media (max-width: 991px) {
  .video-thumbnail-wrapper {
    width: 100% !important;
    height: auto !important;
    min-height: 180px;
  }
}

@media (max-width: 768px) {
  .video-thumbnail-wrapper {
    width: 100% !important;
    height: auto !important;
    min-height: 180px;
  }
}


@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 0 rgba(220,220,220,100);
    opacity: 1;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 0 20px rgba(255,0,0,0.0);
    opacity: 0.85;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 0 rgba(255,0,0,0.0);
    opacity: 1;
  }
}
</style>