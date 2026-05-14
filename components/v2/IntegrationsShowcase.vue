<template>
  <V2DualMarquee
    :badge="badge"
    :heading="resolvedHeading"
    :description="description"
    :integrations="resolvedIntegrations"
    :cta="cta"
    :background="background"
  />
</template>

<script setup>
import { computed } from 'vue'

const DEFAULT_INTEGRATIONS = [
  { name: 'Airtable',        imageUrl: '/icons/airtable.svg' },
  { name: 'Notion',          imageUrl: '/icons/notion.svg' },
  { name: 'Google Sheets',   imageUrl: '/icons/googlesheets.svg' },
  { name: 'Gmail',           imageUrl: '/icons/gmail.svg' },
  { name: 'Outlook',         imageUrl: '/icons/ms_outlook.svg' },
  { name: 'Mailchimp',       imageUrl: '/icons/mailchimp.svg' },
  { name: 'Trello',          imageUrl: '/icons/trello.svg' },
  { name: 'Asana',           imageUrl: '/icons/asana.svg' },
  { name: 'ClickUp',         imageUrl: '/icons/clickup.svg' },
  { name: 'HubSpot',         imageUrl: '/icons/hubspot.svg' },
  { name: 'Salesforce',      imageUrl: '/icons/salesforce.svg' },
  { name: 'Zoho CRM',        imageUrl: '/icons/zoho.svg' },
  { name: 'Google Calendar', imageUrl: '/icons/g-calendar.svg' },
  { name: 'Calendly',        imageUrl: '/icons/calendly.svg' },
  { name: 'Google Docs',     imageUrl: '/icons/googledocs.svg' },
  { name: 'PDF.co',          imageUrl: '/icons/pdfco.svg' },
  { name: 'Google Drive',    imageUrl: '/icons/googledrive.svg' },
  { name: 'Dropbox',         imageUrl: '/icons/dropbox.svg' },
  { name: 'OneDrive',        imageUrl: '/icons/ms_onedrive.svg' },
  { name: 'DocuSign',        imageUrl: '/icons/docusign.svg' },
  { name: 'Adobe Sign',      imageUrl: '/icons/adobesign.svg' },
  { name: 'ConvertKit',      imageUrl: '/icons/convertkit.svg' },
  { name: 'ActiveCampaign',  imageUrl: '/icons/activecampaign.svg' },
]

const props = defineProps({
  badge:        { type: String, default: 'Integrations' },
  title:        { type: [String, Array], default: null },
  heading:      { type: String, default: 'Plays well with your stack.' },
  description:  { type: String, default: 'Native connections to 50+ tools, plus webhooks and a typed API for the rest.' },
  integrations: { type: Array,  default: () => [] },
  cta:          { type: Object, default: () => ({ link: '/integrations/', text: 'Browse all integrations' }) },
  background:   { type: String, default: '' },
})

const resolvedHeading = computed(() => {
  if (props.title) {
    if (Array.isArray(props.title)) return props.title.map(t => t.text).join('')
    return props.title
  }
  return props.heading
})

const resolvedIntegrations = computed(() =>
  props.integrations.length ? props.integrations : DEFAULT_INTEGRATIONS
)
</script>
