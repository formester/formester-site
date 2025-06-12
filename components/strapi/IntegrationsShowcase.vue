<template>
  <section class="integrations-showcase">
    <div class="container">
      <div
        class="row justify-content-center align-items-center text-center mb-5"
      >
        <SectionTitle :heading="title" />
        <p>{{ description }}</p>
      </div>
    </div>

    <!-- Integration Ticker Container - Full Width -->
    <div class="integration-container position-relative">
      <!-- Gradient Overlays for Seamless Look -->
      <div class="integration-gradient-left"></div>
      <div class="integration-gradient-right"></div>

      <!-- First row - moves left to right -->
      <div class="integration-wrapper position-relative overflow-hidden mb-2">
        <div class="integration-cards ticker-scroll-forward">
          <IntegrationCard
            v-for="(integration, index) in firstRowIntegrations"
            :key="'forward-' + index"
            :tools="integration.tools"
            :action="integration.action"
            class="integration-card-item"
          />
        </div>
      </div>

      <!-- Second row - moves right to left -->
      <div class="integration-wrapper position-relative overflow-hidden">
        <div class="integration-cards ticker-scroll-backward">
          <IntegrationCard
            v-for="(integration, index) in secondRowIntegrations"
            :key="'backward-' + index"
            :tools="integration.tools"
            :action="integration.action"
            class="integration-card-item"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-center mt-5">
        <a href="/integrations/" class="cta-button__invert">
          See All Integrations
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import IntegrationCard from './IntegrationCard.vue'

export default {
  components: {
    IntegrationCard,
  },
  props: {
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: 'Formester works great with tools in your existing platform.',
    },
    integrations: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      scrollIntervalForward: null,
      scrollIntervalBackward: null,
      scrollSpeedForward: 0.2,
      scrollSpeedBackward: 0.2,
      forwardPaused: false,
      backwardPaused: false,
      forwardPosition: 0,
      backwardPosition: 0,
      forwardTickerWidth: 0,
      backwardTickerWidth: 0,
      containerWidth: 0,
      forwardAnimationFrame: null,
      backwardAnimationFrame: null,
      upperRowIntegrations: [
        {
          tools: [
            { name: 'Airtable', icon: '/icons/airtable.svg' },
            { name: 'Notion', icon: '/icons/notion.svg' },
            { name: 'GoogleSheets', icon: '/icons/GoogleSheets.svg' },
          ],
          action: 'Update Sheets & CRMs',
        },
        {
          tools: [
            { name: 'Gmail', icon: '/icons/gmail.svg' },
            { name: 'Outlook', icon: '/icons/ms_outlook.svg' },
            { name: 'Mailchimp', icon: '/icons/mailchimp.svg' },
          ],
          action: 'Auto-Reply by Emai',
        },
        {
          tools: [
            { name: 'Trello', icon: '/icons/trello.svg' },
            { name: 'Asana', icon: '/icons/asana.svg' },
            { name: 'Clickup', icon: '/icons/clickup.svg' },
          ],
          action: 'Create Tasks from Forms',
        },
        {
          tools: [
            { name: 'Hubspot', icon: '/icons/hubspot.svg' },
            { name: 'Salesforce', icon: '/icons/salesforce.svg' },
            { name: 'Zoho CRM', icon: '/icons/zoho.svg' },
          ],
          action: 'Send Leads to CRM',
        },
      ],

      lowerRowIntegrations: [
        {
          tools: [
            { name: 'Google Calendar', icon: '/icons/g-calendar.svg' },
            { name: 'Calendly', icon: '/icons/calendly.svg' },
          ],
          action: 'Book Calendar Slots',
        },
        {
          tools: [
            { name: 'Google Docs', icon: '/icons/googledocs.svg' },
            { name: 'PDF.co', icon: '/icons/pdfco.svg' },
          ],
          action: 'Generate PDF Docs',
        },
        {
          tools: [
            { name: 'Google Drive', icon: '/icons/googledrive.svg' },
            { name: 'Dropbox', icon: '/icons/dropbox.svg' },
            { name: 'OneDrive', icon: '/icons/ms_onedrive.svg' },
          ],
          action: 'Save Files to Cloud',
        },
        {
          tools: [
            { name: 'DocuSign', icon: '/icons/docusign.svg' },
            { name: 'Adobe Sign', icon: '/icons/adobesign.svg' },
          ],
          action: 'Send for Signature',
        },
        {
          tools: [
            { name: 'ConvertKit', icon: '/icons/convertkit.svg' },
            { name: 'ActiveCampaign', icon: '/icons/activecampaign.svg' },
          ],
          action: 'Add to Email List',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setupTickers()
    })
  },
  beforeDestroy() {
    // Clear animation frames when component is destroyed
    if (this.forwardAnimationFrame) {
      cancelAnimationFrame(this.forwardAnimationFrame)
    }
    if (this.backwardAnimationFrame) {
      cancelAnimationFrame(this.backwardAnimationFrame)
    }

    // Remove event listeners
    const forwardWrapper = document.querySelector(
      '.ticker-scroll-forward'
    )?.parentElement
    const backwardWrapper = document.querySelector(
      '.ticker-scroll-backward'
    )?.parentElement

    if (forwardWrapper) {
      forwardWrapper.removeEventListener('mouseenter', this.handleMouseEnter)
      forwardWrapper.removeEventListener('mouseleave', this.handleMouseLeave)
    }

    if (backwardWrapper) {
      backwardWrapper.removeEventListener('mouseenter', this.handleMouseEnter)
      backwardWrapper.removeEventListener('mouseleave', this.handleMouseLeave)
    }
  },
  methods: {
    setupTickers() {
      // Setup both tickers
      this.$nextTick(() => {
        // Get references to ticker elements
        const forwardTicker = document.querySelector('.ticker-scroll-forward')
        const backwardTicker = document.querySelector('.ticker-scroll-backward')

        if (forwardTicker && backwardTicker) {
          // Prepare the forward ticker (left to right)
          this.prepareInfiniteTicker(forwardTicker)

          // Prepare the backward ticker (right to left)
          this.prepareInfiniteTicker(backwardTicker)

          // Start animations
          this.animateForwardTicker(forwardTicker)
          this.animateBackwardTicker(backwardTicker)

          // Add hover pause functionality
          this.setupHoverPause(
            forwardTicker.parentElement,
            backwardTicker.parentElement
          )
        }
      })
    },

    prepareInfiniteTicker(ticker) {
      // Get all original items
      const originalItems = ticker.querySelectorAll('.integration-card-item')
      if (!originalItems.length) return

      // Clone items multiple times to ensure we have enough for a smooth infinite loop
      const itemsToClone = Array.from(originalItems)

      // Clone enough times to ensure we have more than viewport width
      for (let i = 0; i < 4; i++) {
        itemsToClone.forEach((item) => {
          const clone = item.cloneNode(true)
          ticker.appendChild(clone)
        })
      }
    },

    setupHoverPause(forwardWrapper, backwardWrapper) {
      // Create event handlers for forward ticker
      const handleForwardMouseEnter = () => {
        this.forwardPaused = true
      }

      const handleForwardMouseLeave = () => {
        this.forwardPaused = false
      }

      // Create event handlers for backward ticker
      const handleBackwardMouseEnter = () => {
        this.backwardPaused = true
      }

      const handleBackwardMouseLeave = () => {
        this.backwardPaused = false
      }

      // Add event listeners to forward wrapper
      if (forwardWrapper) {
        forwardWrapper.addEventListener('mouseenter', handleForwardMouseEnter)
        forwardWrapper.addEventListener('mouseleave', handleForwardMouseLeave)
      }

      // Add event listeners to backward wrapper
      if (backwardWrapper) {
        backwardWrapper.addEventListener('mouseenter', handleBackwardMouseEnter)
        backwardWrapper.addEventListener('mouseleave', handleBackwardMouseLeave)
      }
    },

    animateForwardTicker(ticker) {
      // Initial position
      let position = 0

      // Get the width of a single item plus gap
      const firstItem = ticker.querySelector('.integration-card-item')
      if (!firstItem) return

      const itemWidth = firstItem.offsetWidth
      const itemGap = 32 // Same as the gap in CSS
      const moveStep = itemWidth + itemGap

      // Animation function for left to right movement (first row)
      const animate = () => {
        if (!this.forwardPaused) {
          // Move right to left (standard direction)
          position -= this.scrollSpeedForward

          // If we've moved a complete item width + gap, reset position
          if (Math.abs(position) >= moveStep) {
            // Move the first item to the end
            const firstItem = ticker.querySelector('.integration-card-item')
            if (firstItem) {
              ticker.appendChild(firstItem)
              position = 0
            }
          }

          ticker.style.transform = `translateX(${position}px)`
        }

        this.forwardAnimationFrame = requestAnimationFrame(animate)
      }

      // Start animation
      this.forwardAnimationFrame = requestAnimationFrame(animate)
    },

    animateBackwardTicker(ticker) {
      // For the backward ticker, we need a completely different approach
      const items = ticker.querySelectorAll('.integration-card-item')
      if (!items.length) return

      // Get the width of a single item plus gap
      const firstItem = items[0]
      if (!firstItem) return

      const itemWidth = firstItem.offsetWidth
      const itemGap = 32 // Same as the gap in CSS

      // Calculate the total width of all items
      const totalWidth = (itemWidth + itemGap) * (items.length / 2) // Half because we cloned them

      // Set initial position to be negative total width (off-screen to the left)
      // This ensures cards come in smoothly from the left side
      ticker.style.transform = `translateX(${-totalWidth}px)`
      let position = -totalWidth

      // Create a smooth animation loop
      const animate = () => {
        if (!this.backwardPaused) {
          // Move left to right (opposite direction from first row)
          position += this.scrollSpeedBackward

          // If we've moved all the way through (reached right side)
          if (position >= 0) {
            // Reset to start position to create seamless loop
            position = -totalWidth
          }

          // Apply the transform
          ticker.style.transform = `translateX(${position}px)`
        }

        this.backwardAnimationFrame = requestAnimationFrame(animate)
      }

      // Start animation
      this.backwardAnimationFrame = requestAnimationFrame(animate)
    },
  },
  computed: {
    // Get integrations for the first row (moving right to left)
    firstRowIntegrations() {
      if (this.integrations && this.integrations.length > 0) {
        // If custom integrations are provided, split them between rows
        const halfLength = Math.ceil(this.integrations.length / 2)
        return this.integrations.slice(0, halfLength)
      }

      // Use the dedicated upper row integrations
      return this.upperRowIntegrations
    },

    // Get integrations for the second row (moving left to right)
    secondRowIntegrations() {
      if (this.integrations && this.integrations.length > 0) {
        // If custom integrations are provided, split them between rows
        const halfLength = Math.ceil(this.integrations.length / 2)
        return this.integrations.slice(halfLength)
      }

      // Use the dedicated lower row integrations
      return this.lowerRowIntegrations
    },
  },
}
</script>

<style scoped>
.cta-button__invert {
  background-color: white;
  font-size: var(--ft-md-btn);
  padding: 16px 24px;
  border-radius: 8px;
  color: var(--clr-primary);
  font-weight: 700;
}

.cta-button__invert:hover {
  background-color: var(--clr-primary-light);
  transition: all 0.2s ease-in-out;
}

section.integrations-showcase {
  background: radial-gradient(
      100% 100% at 50% 0%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      80% 80% at 80% 20%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #6434d0;
  color: white;
  padding: 6rem 0 !important;
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .section.integrations-showcase {
    padding: 6rem 0 !important;
  }
}

/* Integration Container Styles */
.integration-container {
  width: 100vw;
  position: relative;
  padding: 0;
  overflow: hidden;
  margin-top: 2rem;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  box-sizing: border-box;
}

/* Integration Wrapper Styles */
.integration-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 12px 0;
}

/* Integration Cards Container */
.integration-cards {
  display: flex;
  gap: 32px;
  will-change: transform;
  padding: 0 48px;
  overflow: visible;
  box-sizing: border-box;
  transition: none;
}

/* Individual Card Item */
.integration-card-item {
  flex: 0 0 auto;
  width: 320px; /* Increased width for bigger cards */
}

/* Gradient Overlay Styles */
.integration-gradient-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(to right, #6c3ce9 10%, rgba(108, 60, 233, 0));
  z-index: 10;
  pointer-events: none;
}

.integration-gradient-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(to left, #6c3ce9 10%, rgba(108, 60, 233, 0));
  z-index: 10;
  pointer-events: none;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .integration-cards {
    gap: 24px;
    padding: 0 24px;
  }

  .integration-card-item {
    width: 300px;
  }

  .integration-gradient-left,
  .integration-gradient-right {
    width: 80px;
  }
}
</style>
