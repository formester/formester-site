<template>
  <div class="feature__hero">
    <div class="container">
      <div class="row gy-5 gx-lg-5">
        <div
          class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
        >
          <h1 class="section__heading">{{title}}</h1>
          <p class="hero__subheading mt-3">
            {{description}}
          </p>
          <a
            v-if="button"
            :href="button.link"
            class="hero__invert__button mt-4"
            >{{button.text}}</a
          >
          <div class="mt-3" v-if="clickTriggers" >
            <div class="click-triggers" v-for="item in clickTriggers" :key="item.id">
                ✓ &nbsp; {{item.text}}
            </div>
          </div>
        </div>
        <div
          class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5 video-column"
        >
          <!-- Image display when no video is provided -->
          <nuxt-img
            v-if="heroImage && !video_url"
            :src="heroImage.image?.url || heroImage.imageUrl"
            :alt="heroImage.imageAlt || 'Hero image'"
            class="img-fluid hero__image"
          />
          
          <!-- Video thumbnail with play button when video is provided -->
          <div v-if="video_url" class="video-thumbnail-wrapper" @click="showOverlay = true">
            <nuxt-img
              :src="thumbnail ? (thumbnail.url || thumbnail.image?.url || thumbnail.imageUrl) : youtubeThumbnailUrl"
              :alt="thumbnail?.imageAlt || 'Video thumbnail'"
              class="video-thumb-img hero__image"
            />
            <button class="custom-play-btn" aria-label="Play video">
              <nuxt-img src="/play-button.svg" />
            </button>
          </div>
          
          <!-- Video Overlay -->
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
                <nuxt-img src="/x-close.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    button: {
      type: Object,
      default: () => (null)
    },
    heroImage: {
      type: Object,
      default: () => (null)
    },
    clickTriggers: {
      type: Array,
      default: () => (null)
    },
    video_url: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: Object,
      default: () => (null)
    }
  },
  data() {
    return {
      showOverlay: false
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
    }
  },
  methods: {
    closeOverlay() {
      this.showOverlay = false;
    }
  }
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
}

.hero__image {
  height: 100%;
}

/* Using Bootstrap gutters instead of custom padding */
.video-column {
  /* Spacing handled by row gx-lg-5 class */
}

.click-triggers {
  font-size: 18px;
  margin-top: 8px;
  color: white !important;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}

/* Video styles */
.video-thumbnail-wrapper {
  position: relative;
  width: 100%;
  display: inline-block;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 32px rgba(0,0,0,0.1);
}

.video-thumb-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  box-shadow: 0 2px 32px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
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
  animation: fadeIn 0.2s;
}

.video-overlay-wrapper {
  position: relative;
  max-width: 95vw;
  max-height: 85vh;
  display: flex;
  justify-content: center;
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

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

@media (max-width: 1000px) {
  .video-iframe {
    min-width: 0;
    min-height: 0;
    width: 80vw;
    height: calc(80vw * 0.5625); /* 16:9 aspect ratio */
    max-width: 100%;
    max-height: calc(80vw * 0.5625);
  }
  
  .close-btn {
    top: -16px;
    right: -16px;
    width: 24px;
    height: 24px;
  }
}
</style>
