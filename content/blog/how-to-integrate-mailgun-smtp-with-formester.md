---
title: How to integrate MailGun SMTP with Formester
description: This guide helps you configure SMTP settings for MailGun SMTP on
  Formester. You can then start sending all emails through your personalized
  emails and receive response directly in your inbox
metaTitle: How To Integrate Mailgun SMTP With Formester? - By Formester
metaDescription: Learn how to integrate Mailgun SMTP with Formester to easily
  send emails from your application. This guide provides step-by-step
  instructions on configuring Mailgun SMTP with Formester.
keywords: smtp, mailgun smtp, mailgun smtp integration, mailgun smtp credentials
author: Ravindra Kumar Verma
authorProfile: https://www.linkedin.com/in/ravindraverma12/
createdAt: 2022-12-19T11:20:02.681Z
coverImg: /img/how-to-integrate-mailgunsmtp-with-formester.png
coverImgAlt: How to integrate MailGun SMTP with Formester
featured: false
published: true
metaImages:
  - https://formester.com/img/how-to-integrate-mailgun-smtp-with-formester__home-page.png
  - https://formester.com/img/how-to-integrate-mailgun-smtp-with-formester__signup.png
  - https://formester.com/img/how-to-integrate-mailgun-smtp-with-formester__create-smtp.png
  - https://formester.com/img/how-to-integrate-mailgun-smtp-with-formester__smtp-credentials.png
  - https://formester.com/img/test-credentails.png
---
**How to use MailGun SMTP Serve**

Mailgun's primary purpose is to provide transactional email services for developers. But, even non-technical people can easily use their service. We'll show you exactly how easy it is in the steps below!

**Step 1:**  Visit [MailGun](https://www.mailgun.com/ "MailGun") and first sign up for a free account by clicking on Get Started

![Visit MailGun site and click on get started on top-right corner](/img/how-to-integrate-mailgun-smtp-with-formester__home-page.png "Visit MailGun site and click on get started on top-right corner")

**Step 2:**  Fill in the required details and signup

![Fill in the details asked and click on create account](/img/how-to-integrate-mailgun-smtp-with-formester__signup.png "Fill in the details asked and click on create account")

**Step 3:** Go to the overview section from sending option and select SMTP

![Visit the overview section from sending menu and click on SMTP](/img/how-to-integrate-mailgun-smtp-with-formester__create-smtp.png "Visit the overview section from sending menu and click on  SMTP")

**Step 4:** Find your integration credentials here

![You will find your credentials listed ](/img/how-to-integrate-mailgun-smtp-with-formester__smtp-credentials.png "You will find your credentials listed ")

**Step 5:** Final step, check your integration credentials with [Formester](https://app.formester.com/users/sign_in "Formester") to verify if it’s working or not,

**Login to your account -> select a form -> Click on SMTP Integration from the top -> Click on Add Account**

![Visit Formester's SMTP Integration section add a new account and test it](/img/test-credentails.png "Visit Formester's SMTP Integration section add a new account and test it")

```
Fill in the required fiels as mentioned below:
* Name – Can be anything of your choice
* SMTP server - smtp.mailgun.org
* Port - 587  ( Some users may have different ports do checkout other ports as well 25/465/587/2525)
* Username – As mentioned in STEP 4
* Password - As mentioned in STEP 4
* From email – Your MailGun account
```

Add your credentials and click on three dots at the end of the mail account and select the Test option. Wait for a few seconds for the result.