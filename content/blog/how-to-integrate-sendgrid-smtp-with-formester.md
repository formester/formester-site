---
metaTitle: How To Integrate Sendgrid SMTP With Formester | How To Configure Sendgrid SMTP - Formester
metaDescription: Are you looking how to integrate Sendgrid SMTP with Formester? This blog post will show you how to configure Sendgrid SMTP so you can start using it with Formester.
title: How to integrate SendGrid SMTP with Formester
description: Are you looking how to integrate Sendgrid SMTP with Formester? This blog post will show you how to configure Sendgrid SMTP so you can start using it with Formester.This guide helps you configure SMTP settings for SendGrid SMTP on Formester. You can then start sending all emails through your personalized emails and receive response directly in your inbox
keywords: SendGrid SMTP, Sendgrid smtp credentials, get SendGrid smtp integration
author: Ravindra Kumar Verma
authorProfile: https://www.linkedin.com/in/ravindraverma12/
createdAt: 2022-12-19T05:18:45.522Z
coverImg: /img/how-to-integrate-sendgrid-smtp-with-formester.png
coverImgAlt: How to Integrate SendGrid SMTP with Formester
metaImages: [
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__home-screen.png,
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__signup.png,
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__some-extra-detail.png,
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__dashboard.png,
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__create-a-sender.png,
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__goto-smtp-relay.png,
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__create-api-key.png,
    https://formester.com/img/how-to-integrate-sendgrid-smtp-with-formester__verify.png,
    https://formester.com/img/test-credentails.png
  ]
featured: false
published: true
---
**How to use SendGrid SMTP Server**
[SendGrid](https://sendgrid.com/ "SendGrid") is a great option for sending large volumes of emails. For instance, this service would work well if you have to email an entire mailing list manually. It can be time-consuming and difficult to send a lot of emails all at once

**Step 1:** Visit [SendGrid](https://sendgrid.com/ "SendGrid") and click on start for free button.

![Go to SendGrid website and click start for free](/img/how-to-integrate-sendgrid-smtp-with-formester__home-screen.png "Go to SendGrid website and click start for free")

![Signup with Sendgrid by filling the correct details](/img/how-to-integrate-sendgrid-smtp-with-formester__signup.png "Signup with Sendgrid by filling the correct details")

**Step 2:**  Create an account and in next step fill the details asked

![Some extra details is required to get started with sendgrid, fill in details and get started ](/img/how-to-integrate-sendgrid-smtp-with-formester__some-extra-detail.png "Some extra details is required to get started with sendgrid, fill in details and get started ")

**S﻿tep 3:** First of all verify your email and now create a single Sender

![On sendGrid dashboard click on create a single sender](/img/how-to-integrate-sendgrid-smtp-with-formester__dashboard.png "On sendGrid dashboard click on create a single sender")

**S﻿tep 4:** Fill in the details and create a sender

![Create a single sender to send a mail](/img/how-to-integrate-sendgrid-smtp-with-formester__create-a-sender.png "Create a single sender to send a mail")

**S﻿tep 5:** After creating a single sender, verify it by receiving an email in your provided email account.   Now go to the Integration guide option under Email API. And Select SMTP relay.

![Go to integration under Email Api to select SMTP Relay for smtp](/img/how-to-integrate-sendgrid-smtp-with-formester__goto-smtp-relay.png "Go to integration under Email Api to select SMTP Relay for smtp")

**S﻿tep 6:** Enter an API key name and click on Create Key to generate a password. And save your details somewhere. Click on Verify Integration button below to verify your integration details.

![Enter an API key to generate a api with password](/img/how-to-integrate-sendgrid-smtp-with-formester__create-api-key.png "Enter an API key to generate a api with password")

![Verify your credentials by receiving a mail in Sendgrid email section](/img/how-to-integrate-sendgrid-smtp-with-formester__verify.png "Verify your credentials by receiving a mail in Sendgrid email section")

**Step 7:** Final step, check your integration credentials with Formester to verify if it’s working or not,

**Login to your account -> select a form -> Click on SMTP Integration from the top -> Click on Add Account**

![Visit Formester and go to SMTP Integration to add your account and test it](/img/test-credentails.png "Visit Formester and go to SMTP Integration to add your account and test it")

**Use**

```
Use:
* Name – Can be anything of your choice
* SMTP server - smtp.sendgrid.net
* Port - 587  ( Some users may have different ports do checkout other ports as well 25/465/587/2525)
* Username - apikey
* Password - password created at the time of apikey generation
* From email – your SendGrid account id
```

Add your credentials and click on three dots at the end of the mail account and select the Test option. Wait for a few seconds for the result.