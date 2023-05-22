---
metaTitle: How To Integrate Google SMTP With Formester | How To Use Gmail SMTP Server For Sending Mail - Formester
metaDescription: Learn how to use the Gmail SMTP server to send mail with Formester. This guide will show you how to integrate Gmail SMTP server and use it to send mail.
title: How to integrate Google SMTP with Formester
description: This guide helps you configure SMTP settings for Gmail SMTP on Formester. You can then start sending all emails through your personalized emails and receive responses directly in your inbox
keywords: smtp, google smtp, google smtp integration, google smtp credentials
author: Ravindra Kumar Verma
authorProfile: https://www.linkedin.com/in/ravindraverma12/
createdAt: 2022-12-19T04:14:23.956Z
coverImg: /img/how-to-integrate-google-smtp-with-formester.png
coverImgAlt: How to integrate Google SMTP with formester
images: [
    https://formester.com/img/how-to-integrate-google-smtp-with-formester__home-screen.png,
    https://formester.com/img/how-to-integrate-google-smtp-with-formester__security-option.png,
    https://formester.com/img/how-to-integrate-google-smtp-with-formester__sign-app-account.png,
    https://formester.com/img/how-to-integrate-google-smtp-with-formester__dropdown-option.png,
    https://formester.com/img/how-to-integrate-google-smtp-with-formester__generate-account.png,
    https://formester.com/img/how-to-integrate-google-smtp-with-formester__app-password.png,
    https://formester.com/img/test-credentails.png
  ]
featured: false
published: true
---
**How to use Google SMTP Server**

**Step 1:** [Visit ](https://myaccount.google.com/u/1/?hl=en&utm_source=OGB&utm_medium=act "Google Login Account") and login to your Google Account

![Login to your google account](/img/how-to-integrate-google-smtp-with-formester__home-screen.png "Login to your google account")

**Step 2:** Click on the security option and scroll down to open the App password

![Click on the security option from the menu](/img/how-to-integrate-google-smtp-with-formester__security-option.png "Click on the security option from the menu")

![Scroll down and click on App password](/img/how-to-integrate-google-smtp-with-formester__sign-app-account.png "Scroll down and click on App password")

**Step 3:** Create an app for your SMTP by selecting Other from the dropdown options

![Click on the dropdown menu and select other from the option](/img/how-to-integrate-google-smtp-with-formester__dropdown-option.png "Click on the dropdown menu and select other from the option")

**Step 4:** Enter a name for your app and click on generate to generate a 16-digit app password

![Enter an app name and click on generate button](/img/how-to-integrate-google-smtp-with-formester__generate-account.png "Enter an app name and click on generate button")

**Step 5:** You will get a 16-digit auto-generated password, keep it safe as you won’t be able to see it again

![Save your 16-digit app password](/img/how-to-integrate-google-smtp-with-formester__app-password.png "Save your 16-digit app password")

**Step 6:** Final step, check your integration credentials with [Formester](https://app.formester.com/users/sign_in "Formester") to verify if it’s working or not,

**Login to your account -> select a form -> Click on SMTP Integration from the top -> Click on Add Account**

![Visit Formester's SMTP Integration section add a new account and test it](/img/test-credentails.png "Visit Formester's SMTP Integration section add a new account and test it")

```
Fill in the required fiels as mentioned below:
* Name – Can be anything of your choice  
* SMTP server - smtp.gmail.com
* Port - 587  ( Some users may have different ports do checkout other ports as well 25/465/587/2525)
* Username - Your Gmail Id
* Password - 16-digit app password
* From email – Your Gmail Id
```

Add your credentials and click on three dots at the end of the mail account and select the Test option. Wait for a few seconds for the result.