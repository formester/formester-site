---
slug: "how-to-integrate-google-smtp-with-formester"
title: "How to integrate Google SMTP with Formester"
description: "This guide helps you configure SMTP settings for Gmail SMTP on Formester. You can then start sending all emails through your personalized emails and receive responses directly in your inbox"
metaTitle: "How To Integrate Google SMTP With Formester To Send Mails?"
metaDescription: "Learn how to use the Gmail SMTP server to send mail with Formester. This guide will show you how to integrate Gmail SMTP server and use it to send mail."
keywords: "smtp, google smtp, google smtp integration, google smtp credentials"
author: "Ravindra Kumar Verma"
authorProfile: "https://www.linkedin.com/in/ravindraverma12/"
coverImgAlt: "How to integrate Google SMTP with formester"
featured: false
coverImg: {"url":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_f0becf706e.png","width":1200,"height":630}
metaImage: [{"id":104,"imageURL":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_home_screen_55886aa333.png"},{"id":105,"imageURL":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_security_option_1575cd5045.png"},{"id":110,"imageURL":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_sign_app_account_431717dbfe.png"},{"id":106,"imageURL":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_dropdown_option_179308c4db.png"},{"id":109,"imageURL":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_generate_account_1959ad50ab.png"},{"id":107,"imageURL":"https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_app_password_eb0817b3fb.png"},{"id":108,"imageURL":"https://formester-strapi.s3.ap-south-1.amazonaws.com/test_credentails_36bf4ac0a6.png"}]
jsonld: []
createdAt: "2024-04-07T10:04:43.391Z"
updatedAt: "2025-01-27T04:14:43.052Z"
publishedAt: "2022-12-19T04:14:23.956Z"
---
<iframe width="813" height="315" src="https://www.youtube.com/embed/Trx2y69O-4Y?si=fgWc7BChHaOwLVXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Step 1:** [Visit ](https://myaccount.google.com/u/1/?hl=en&utm_source=OGB&utm_medium=act "Google Login Account") and login to your Google Account

![Login to your google account](https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_home_screen_f9be8032d3.png "Login to your google account")

**Step 2:** Click on the security option and scroll down to open the App password

![Click on the security option from the menu](https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_security_option_7b620fa8c0.png "Click on the security option from the menu")

![Scroll down and click on App password](https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_sign_app_account_d9c9f17d80.png "Scroll down and click on App password")

**Step 3:** Create an app for your SMTP by selecting Other from the dropdown options

![Click on the dropdown menu and select other from the option](https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_dropdown_option_29be16a12c.png "Click on the dropdown menu and select other from the option")

**Step 4:** Enter a name for your app and click on generate to generate a 16-digit app password

![Enter an app name and click on generate button](https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_generate_account_a16e1d0be1.png "Enter an app name and click on generate button")

**Step 5:** You will get a 16-digit auto-generated password, keep it safe as you won’t be able to see it again

![Save your 16-digit app password](https://formester-strapi.s3.ap-south-1.amazonaws.com/how_to_integrate_google_smtp_with_formester_app_password_4769681631.png "Save your 16-digit app password")

**Step 6:** Final step, check your integration credentials with [Formester](https://app.formester.com/users/sign_in "Formester") to verify if it’s working or not,

**Login to your account -> select a form -> Click on SMTP Integration from the top -> Click on Add Account**

![Visit Formester's SMTP Integration section add a new account and test it](https://formester-strapi.s3.ap-south-1.amazonaws.com/test_credentails_417879d622.png "Visit Formester's SMTP Integration section add a new account and test it")

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
