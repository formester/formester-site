---
slug: "how-to-add-custom-domain-to-online-forms"
title: "How to Add a Custom Subdomain to Your Online Forms"
description: "Learn how to set up a custom subdomain in Formester to create branded form links, boost trust, and improve email deliverability in a few easy steps."
metaTitle: "How to Add a Custom Subdomain to Online Forms"
metaDescription: "Learn how to use your own domain with Formester forms. Step-by-step guide to add a custom subdomain and make your form links look more professional."
keywords: "how to add custom domain to online forms,\nadd custom sub domain to online forms,\nweb forms,\ncustom forms,\ncustom form url,"
author: "Harish Kumar"
authorProfile: "https://www.linkedin.com/in/harish-kumar2424/"
coverImgAlt: "a blog post cover about how to add custom domain to online forms"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/How_to_Make_User_Research_Survey_15_af3de6d65d.png","width":1214,"height":630}
metaImage: []
jsonld: []
createdAt: "2025-06-13T03:27:05.276Z"
updatedAt: "2025-09-26T02:51:18.874Z"
publishedAt: "2025-06-13T03:33:07.116Z"
---
<iframe width="100%" height="315" src="https://www.youtube.com/embed/EuTEHBPZH6E?si=9DZczjXmb-H3_T7r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


When you share **online forms**, the link you send plays a big role in how people respond. If the URL looks generic or unfamiliar, people may hesitate to click. In some cases, your email might even end up in the spam folder.

That’s where custom subdomains help. They allow you to use your **own domain in the form link**, which builds trust and gives your forms a more professional appearance.

In this guide, you'll learn what a custom subdomain is, why it matters, and **how to set it up inside Formester** in a few simple steps.

## What is a Custom Subdomain?
A subdomain is the part of a web address that comes before your main domain.

**For example, if your website is:**
 
- yourcompany.com

**A subdomain could be:**

- forms.yourcompany.com

- apply.yourcompany.com

- register.yourcompany.com

**[Formester](/)** allows you to use subdomains like these for your form URLs. That means instead of a default Formester link, you can publish forms using a link that looks like it came directly from your business.

### Why Use a Custom Subdomain in Formester

**1. Build Trust**
When your form link includes your domain, people are more likely to recognize and trust it.

**2. Stay Consistent with Your Brand**
A branded URL keeps everything aligned—from emails to forms to landing pages.

**3. Improve Email Deliverability**
Links from your domain are less likely to be flagged as spam compared to links from external domains.

**4. Look More Professional**
Branded links show that your business pays attention to detail, whether you're sharing a form with clients, leads, or internal teams.

### What You’ll Need to Get Started
To set up a custom subdomain in Formester, make sure you have:

- A **<a href="https://www.atom.com/">registered domain name</a>** (like yourcompany.com)

- Access to your domain’s DNS settings (through your hosting provider or domain registrar)

- A paid Formester plan that supports custom domains

Once you have these ready, you can move on to the setup.

## Step-by-Step: How to Set Up a Custom Subdomain in Formester

### Step 1: Decide on Your Subdomain
Pick a short word that describes the purpose of your form. Some examples include:

- forms.yourdomain.com

- apply.yourdomain.com

- register.yourdomain.com

- feedback.yourdomain.com

Choose something easy to remember and relevant to the form’s use case.

### Step 2: Log in to Your Formester Dashboard
Go to formester.com and log in to your account. Once inside the dashboard, navigate to the Domains section.
You’ll find this under Settings or Account Settings, depending on your plan.

### Step 3: Add Your Custom Subdomain
Click Add Domain and enter the subdomain you want to use, like forms.yourcompany.com.

Formester will now show you the DNS records you need to add to your domain provider. These usually include CNAME records that point your subdomain to Formester’s servers.

### Step 4: Update DNS Settings in Your Domain Provider
Log in to your domain registrar (like GoDaddy, Cloudflare, Namecheap, or others).

Go to the DNS settings section for your domain. Add a new CNAME record with the following values:

- **Type:** CNAME

- **Name:** The subdomain you chose (for example, forms)

- **Value:** This will be the destination Formester provides

- **TTL:** Leave it as default or set to 30 minutes

Save the changes. It can take up to 24 hours for DNS records to update globally, but it often works within a couple of hours.

### Step 5: Publish Forms Using Your Subdomain
Once your custom subdomain is active, every form you create and publish can use your branded URL.

**For example:**

 forms.yourcompany.com/form-name

This gives your audience a more trustworthy and consistent experience.

### Troubleshooting Tips

**If verification fails:**

- Double-check for typos in your DNS entry

- Make sure you copied the exact value Formester provided

- Wait a little longer. DNS changes may take time

**Not sure where to find DNS settings?**
Search your domain provider’s help section. Most offer step-by-step instructions for adding CNAME records.

### Conclusion
Adding a custom subdomain to your Formester forms takes just a few minutes, but it adds long-term value. It strengthens your brand, makes your links more trustworthy, and can help improve the success rate of form submissions especially in email campaigns.

If you already own a domain and **[use Formester to collect responses](https://app.formester.com/users/sign_up)**, setting up a custom subdomain is a smart next step.

