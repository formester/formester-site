---
title: How to integrate Amazon SES SMTP with Formester
description: This guide helps you configure SMTP settings for Amazon SES SMTP on
  Formester. You can then start sending all emails through your personalized
  emails and receive responses directly in your inbox.
keywords: amazon, smtp, amazon smtp, ses smtp integration, amazon smtp credentials
author: Ravindra Kumar Verma
createdAt: 2023-03-16T10:27:12.358Z
coverImg: /img/how-to-integrate-amazon-ses-smtp-with-formester.png
coverImgAlt: How to integrate Amazon SES SMTP with formester
featured: false
published: true
---
If you plan to send email through the Amazon SES SMTP interface in more than one AWS Region, you must generate SMTP credentials for each Region.

**How to use Amazon SES SMTP Server**

**Step 1:** Visit [Amazon SES](https://aws.amazon.com/ses/) and click on create an AWS account

![Visit amazon ses home page](/img/how-to-integrate-amazon-ses-smtp-with-formester_home_page.png "Visit amazon ses home page")

**Step 2:**  Fill in your details, click on verify email address and complete the signup process

![Login to your amazon account](/img/how-to-integrate-amazon-ses-smtp-with-formester_signup_for_ses.png "Login to your amazon account")

**Step 3:** Click on the create identity button

![Click on create identity on right hand top corner](/img/how-to-integrate-amazon-ses-smtp-with-formester_click_to_create_identity.png "Click on create identity on right hand top corner")

**Step 4:** Select either of the option to set your identity

![Select either of the option to create identity](/img/how-to-integrate-amazon-ses-smtp-with-formester_create_verification_identity.png "Select either of the option to create identity")

**Step 5:** In case of creating identity using Doman enter your domain name and click on create identity

![Select domain to proceed with domain ](/img/_how-to-integrate-amazon-ses-smtp-with-formester_create_verification_identity_using_domain.png "Select domain to proceed with domain ")

Or in case of creating identity using an Email address enter your email address and click on create identity

![Select email to proceed with email ](/img/how-to-integrate-amazon-ses-smtp-with-formester_create_verification_identity_using_email_address.png "Select email to proceed with email ")

**Step 6:** Check your domain or email is verified or not from the verified identities option under Configuration

![Click on verified identities option under Configuration to check if domain/email is verified or not ](/img/how-to-integrate-amazon-ses-smtp-with-formester_check_your_domain_under_configuration.png "Click on verified identities option under Configuration to check if domain/email is verified or not ")

**Step 7:**  Now go to SMTP settings options

![Now go to smtp settings from left hand side options](/img/how-to-integrate-amazon-ses-smtp-with-formester_smtp_setting_option.png "Now go to smtp settings from left hand side options")

**Step 8:**  Click on create SMTP credentials button

![Click on create smtp to create your smtp account](/img/how-to-integrate-amazon-ses-smtp-with-formester_smtp_credentials_button.png "Click on create smtp to create your smtp account")

**Step 9:** Enter a name and click on create button

![Enter a name for smtp and click create button](/img/how-to-integrate-amazon-ses-smtp-with-formester_enter_a_name.png "Enter a name for smtp and click create button")

**Step 10:** Smtp credentials image

![Copy your credentials to use it](/img/how-to-integrate-amazon-ses-smtp-with-formester_smtp_credentials_ses.png "Copy your credentials to use it")

**Step 11:** Final step, check your integration credentials with Formester to verify if it’s working or not,

**Login to your account -> select a form -> Click on SMTP Integration from the top -> Click on Add Account**

![Visit Formester's SMTP Integration section add a new account and test it](/img/test-credentails.png "Visit Formester's SMTP Integration section add a new account and test it")

```
Fill in the required fiels as mentioned below:
* Name – Can be anything of your choice
* SMTP server - Your user id from above credentials
* Port - 587 ( Some users may have different ports do checkout other ports as well 25/465/587/2525)
* Username - Your user id from above credentials
* Password - Your password from above credentials
* From email – Your Amazon account id
```

Add your credentials and click on three dots at the end of the mail account and select the Test option. Wait for a few seconds for the result.