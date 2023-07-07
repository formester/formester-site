---
title: "schema testing "
description: long................................
metaTitle: "schema testing "
metaDescription: long................................
keywords: schema
author: Aditya Prasad Dhal
authorProfile: dhaladitya108
createdAt: 2023-07-06T07:36:59.122Z
coverImg: /img/11_top-5-web-forms-with-cl.png
coverImgAlt: cover image for schema
featured: false
published: false
schema:
  - type: >-
      let jsonData = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://formester.com/blog/schema-testing/`,
            },
            headline: 'schema',
            description: '................',
            publisher: {
              '@type': 'Organization',
              name: 'Formester',
              logo: {
                '@type': 'ImageObject',
                url: 'https://formester.com/logo.png',
              },
            },
          }

      let schema = `{
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "Corporation",
                "@id": "https://acornglobus.com",
                "name": "Formester",
                "description": "Sign up now for the best No Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
                "logo": "https://formester.com/logo.png",
                "url": "https://formester.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Delaware",
                  "addressCountry": "United States"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://acornglobus.com",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://formester.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://formester.com/blog"
                  }
                ]
              }
            ]
          }`

      const parsedData = JSON.parse(schema)

      Object.assign(jsonData, parsedData)


      console.log(jsonData)
---
# t﻿esting out the schema

n﻿ot sure what else to write here......................