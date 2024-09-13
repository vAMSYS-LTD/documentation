---
title: Managing Design Settings in vAMSYS
nextjs:  
    metadata:  
      title: Managing Design Settings in vAMSYS  
      description: Detailed guide to customizing the Phoenix Dashboard, logos, social icons, and email templates in vAMSYS.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

The Design component in vAMSYS allows VAs to customize their interface and branding across the platform. This guide provides a detailed overview of the customization options available, including the Phoenix Dashboard, logos, social icons, and email templates.

## Logos
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Design -> Logo
*  {% align="center" %}
* Can Manage Design Settings {% align="right" %}
{% /table %}

The logo section allows you to upload different logos for bright and dark backgrounds, as well as for the select VA page and email headers. We **strongly urge** a size of 1800x400 pixels for optimal display.

### Logo Options
- **Logo for Bright Backgrounds**: Shown on Phoenix on Bright Theme.
- **Logo for Dark Backgrounds**: Shown on Phoenix on Dark Theme.
- **Logo for Select VA Page (Bright)**: Shown on the Select VA Page, Pegasus ACARS, Orwell and VDS on Bright Theme, and outgoing emails.
- **Logo for Select VA Page (Dark)**: Shown on the Select VA Page and Pegasus ACARS, Orwell and VDS on Dark Theme.
- **Background Images**: Displayed on the VA's Login and Register pages. Multiple images can be uploaded, with one selected at random each time. Recommended resolution is 2560x1600 pixels.

## Style
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Design -> Style
*  {% align="center" %}
* Can Manage Design Settings {% align="right" %}
{% /table %}

In this section, you can manage the look and feel of your Virtual Airline/

### Colors

vAMSYS offers a basic set of color overrides to make a quick change to how your VA looks. You can assign any color via the Hexcode, or using the color palette, which appears after you click into the individual field.

### Stylesheet
An advanced approach is to create a custom CSS stylesheet. CSS Overrides are a "raw" way to directly override the style of vAMSYS.

We highly recommend doing this only if you know what you're doing, because creating CSS requires some technical knowledge. Team vAMSYS does not provide support for creating, maintaining or updating your CSS.

*Note: The CSS, and Style customization in general, is applied only to the Phoenix. Not to the Orwell and VDS.*

#### Helpful Links and Resources
- Jan (one of the VA Owners) has made his CSS template public and available for anyone to use at this [Github repository](https://github.com/DarrianCZE/vamsys-v5-custom-css).
- [Inspector tools](https://developer.chrome.com/docs/devtools/css) tutorial from Google.
- [W3Schools](https://www.w3schools.com/css/) CSS Tutorial.

## Phoenix Dashboard
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Design -> Phoenix Dashboard
*  {% align="center" %}
* Can Manage Design Settings {% align="right" %}
{% /table %}

The Phoenix Dashboard can be customized with various components arranged in rows and blocks. Each row can contain either:
- 1 Full Width Block
- 2 Half Width Blocks
- 1 Third and 1 Two Thirds Blocks
- 3 Third Blocks

### Default Configuration
A Default Config can be added to the Phoenix Dashboard, which includes the default vAMSYS configuration. This is a good starting point to see available options and then tweak them to your needs. Be mindful that restoring the Default Config will override any changes you have made.

### Components and Their Options
The dashboard editor allows you to add rows and blocks, each with customizable components:

- **Pilot Statistics**: Shows pilot statistics with options for default selection:
  - Today
  - Last 24 Hours
  - Yesterday
  - Last 30 Days
  - Year to Date
  - Last Year
  - All Time
  - Your Details
- **Pilot Statistics (Slim)**: A slim version of the pilot statistics component with the same options as Pilot Statistics.
- **Alerts**: Displays alerts. No additional settings.
- **NOTAMs**: Shows NOTAMs with options for entries per page and visibility based on unread status.
- **PIREP and Booking Boxes**: Shows active flights, bookings, and past PIREPs with options for which boxes to display.
- **Buttons**: Customizable buttons with labels, URLs, and external link options.
- **Social Icons**: Displays social icons. No additional settings.
- **Events**: Shows events with options for which events to display (all, random, first).
- **Flight Map**: Displays a flight map with customizable height.
- **Flight List**: Lists all active flights. No additional settings.

## Social Icons
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Design -> Social Icons
*  {% align="center" %}
* Can Manage Design Settings {% align="right" %}
{% /table %}

Social icons can be managed and displayed in the navigation under the Community section and optionally on the Phoenix Dashboard.

### Social Icon Options
- **Name**: Display name for the social icon.
- **URL**: The link where the icon leads.
- **Icon**: FontAwesome icon name (e.g., brands.facebook).
- **Image**: Custom image for the icon. Recommended size is 200x50 pixels.
- **Image - Dark Mode**: Custom image for the icon, displayed in Dark Mode. Recommended size is 200x50 pixels.
- **Show on Phoenix Dashboard**: Toggle to display the icon on the Phoenix Dashboard.

## Emails
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Design -> Emails
* Review Registrations (optional) {% align="center" %}
* Can Manage Design Settings {% align="right" %}
{% /table %}

VAs can customize email templates sent to their pilots. To enable email functionality, the VA must configure the pilot support email in the airline settings.

### Types of Configurable Emails
- **Registration Received Email**: Sent upon pilot submitting their registration for review.
- **Registration Complete Email**: Sent upon pilot creating an account or when registration is approved if review is enabled.
- **Registration Rejected Email**: [WIP] Sent upon rejection of pilot registration application.

### Email Template Options
- **Subject**: Subject line of the email.
- **Email Content**: Content of the email written in Markdown with variables for dynamic content.
- **Button**: Customizable buttons within the email with text and URL options.

### Available Variables for Email Content
- **{airline_name}**: Name of the Virtual Airline.
- **{first_name}**: First name of the pilot.
- **{last_name}**: Last name of the pilot.
- **{username}**: Pilot username.
- **{login_url}**: URL of the login page.
- **{support_url}**: URL of the support page.
- **{support_email}**: Pilot support email.

## Activity Emails
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Design -> Activity Emails
* Enable Activity Requirements {% align="center" %}
* Can Manage Design Settings {% align="right" %}
{% /table %}

Activity emails are sent to pilots regarding their activity status. These emails require the pilot support email to be configured.

### Types of Activity Emails
- **Activity Grace Email**: Sent when a pilot enters the activity grace period.
- **Activity Removal Email**: Sent when a pilot is removed for lack of activity.
- **Initial Activity Reminder Email**: Sent to remind pilots of unmet initial activity requirements.

### Activity Email Template Options
- **Subject**: Subject line of the email.
- **Email Content**: Content of the email written in Markdown with variables for dynamic content.
- **Button**: Customizable buttons within the email with text and URL options.