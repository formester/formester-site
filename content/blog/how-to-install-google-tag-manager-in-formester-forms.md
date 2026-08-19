---
slug: "how-to-install-google-tag-manager-in-formester-forms"
title: "How to Install Google Tag Manager in Formester Forms and Track Submissions"
description: "Find out how to install Google Tag Manager in your Formester forms to track submissions, run ads, and connect with tools like Google Analytics. No coding needed."
metaTitle: "How to Install Google Tag Manager in Formester Forms"
metaDescription: "Learn how to install Google Tag Manager in your Formester forms to track submissions, run ads, and connect with tools like Google Analytics. No coding needed."
keywords: "google tag manager,\nonline forms,\nform conversion tracking,\nform submission tracking,\n"
author: "Harish Kumar"
authorProfile: "https://www.linkedin.com/in/harish-kumar2424/"
coverImgAlt: "a blog post cover about how to connect google tag manager to formester"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/52_1e8722f48e.png","width":1214,"height":630}
metaImage: []
jsonld: []
createdAt: "2025-07-18T02:04:34.728Z"
updatedAt: "2025-08-21T22:39:09.784Z"
publishedAt: "2025-07-18T02:04:37.341Z"
---
<iframe width="100%" height="315" src="https://www.youtube.com/embed/FNhjSZp13v8?si=NT0MNypVxfYfNzSj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you want to track form submissions, run ads for people who visited your form, or send data to tools like Google Analytics, installing Google Tag Manager is a smart move.

In this guide, you will learn how to add **[Google Tag Manager](https://tagmanager.google.com/)** (GTM) to your **[Formester forms](/)** and use it to track user actions like form submissions or page views.

No coding needed. Just follow these simple steps.

## What is Google Tag Manager and Why You Need It
Google Tag Manager is a free tool that lets you add tracking codes to your website or form without editing any code. These tracking codes are called tags, and you can use them to:

- Track form submissions

- Send events to Google Analytics

- Fire Facebook Pixel for retargeting

- Record user actions with tools like Hotjar

Instead of adding each tag manually, you just install one GTM code and manage everything from one place.

### Step 1: Get Your GTM Code
![a screenshot of google tag manager](https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_google_tag_manager_1abdffe2b2.png)

First, log in to your Google Tag Manager account.

If you do not have a container yet, create one. A container is like a folder where you keep all your tags for a website or app.
Once your container is ready:

- Go to the Admin tab

- Click on Install Google Tag Manager

- You will see two code snippets: one for the head and one for the body

- Copy the **head script**, this is the one we will use in Formester


### Step 2: Add the GTM Script to Your Formester Form
![a screenshot of adding gtag in formester](https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_adding_gtag_in_formester_b197b1616f.png)

Now open your **[Formester dashboard](https://app.formester.com/users/sign_in)** and select the form you want to connect to GTM. For example, a **[lead capture form](/templates/categories/lead-generation/)**.

- Click on Edit Form

- In the **builder**, go to the Advanced tab

- Scroll down to find the Scripts section

- Click Add Script

- Give your script a name (like GTM Main Tag)

- Paste the GTM head script you copied earlier

- Choose where the script should run:

- If you select Page 1, the tag will load when the form opens

- If you select Thank You Page, the tag will only fire after someone submits the form

- For tracking submissions, set it to fire on the Thank You Page.

Click Create and you are done. Your form is now connected to GTM.

### Step 3: Test If GTM Is Working
![a screenshot of google tag manager](https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_google_tag_manager_f1074d3bb1.png)

Before using it, make sure the GTM code is working.

- Go back to Google Tag Manager

- In the Workspace, click on Preview

- Paste your form URL and click Connect

This opens the Google Tag Assistant. It lets you see which tags are active on your form.

Once the page loads, scroll or interact with your form. You will see the tag firing in the summary panel. You can also check variables like page path and source.

If you see your tag firing, it means GTM is set up correctly.

### Step 4: Submit and Publish
![a screenshot of google tag manager](https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_google_tag_manager_d6ea064048.png)
After confirming that the tag is working:

- Close the Tag Assistant

- Go back to your GTM workspace

- Click Submit

- Add a version name and click Publish

- Now your GTM container is live and fully connected to your Formester form.

### What You Can Do After Setting Up GTM
Once your form is connected to Google Tag Manager, you can:

- Track form submissions in GA4 to measure conversions

- Run retargeting ads for people who viewed the form but did not submit

- Use Hotjar or other tools to see user behavior and scroll depth

- Fire custom events based on page views or button clicks

You can also add more scripts inside Formester by repeating the same steps. Just paste your new code and choose the page where it should trigger.

### Final Thoughts
Connecting Google Tag Manager to your **[Formester forms](https://app.formester.com/users/sign_up)** opens the door to powerful tracking and better marketing results.
**You can:**

- See how users behave on your form

- Measure which campaigns drive results

- Run smarter ad campaigns using custom events

You do not need a developer or a complex setup. Just add the script once and manage everything inside Google Tag Manager.

