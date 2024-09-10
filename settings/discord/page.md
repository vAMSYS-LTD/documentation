---
title: Discord Settings
nextjs:
    metadata:
        title: Discord Settings
        description: Detailed guide to managing Discord settings in vAMSYS using the Orwell interface.
---
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Settings -> Discord
*  {% align="center" %}
* Can Manage Discord Integration Settings {% align="right" %}
{% /table %}

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

In vAMSYS, Discord Settings allow VA owners and staff to configure the integration of their VA with a Discord server. This integration enables automatic notifications for various events, such as new alerts, NOTAMs, and landing notifications.

The purpose of the Discord Settings page is to set up and manage the connection between vAMSYS and your Discord server, customize the notification channels, and define the color scheme for the messages sent by the vAMSYS bot.

## Managing Discord Settings

1. **Access the Discord Settings Section**: Navigate to the Discord Settings section under Settings.

## Inviting vAMSYS Bot to Your Discord Server

To enable the Discord functionality, you need to invite the vAMSYS bot to your Discord server and set it up properly.

1. **Step 1**: Add our Bot to your Discord Server
    - The invite URL for the vAMSYS bot is available in the interface.
    - The bot requires privileged access to your channels.

2. **Step 2**: In one of your Discord channels, type the following command to set up the bot:
    - `/setup [setup_token]`

3. **Step 3**: Click the "Check Connection" button in the interface to verify the connection between vAMSYS and your Discord server.

## Configuring Notification Channels

After the bot is successfully connected to your Discord server, you can configure the notification channels for different types of messages.

- **Alerts Channel**: Select the Discord channel where new alerts will be posted. If empty, no alerts will be posted on your Discord.
    - **Description**: "Where new Alerts will be posted. If empty, no Alerts will be posted on your Discord. Notifications are sent every 5 minutes."
- **NOTAMs Channel**: Select the Discord channel where new NOTAMs will be posted. If empty, no NOTAMs will be posted on your Discord.
    - **Description**: "Where new NOTAMs will be posted. If empty, no NOTAMs will be posted on your Discord. Notifications are sent every 5 minutes."
- **Landing Channel [WIP]**: Select the Discord channel where landing notifications will be posted. If empty, no notifications will be posted on your Discord.
    - **Description**: "Where Landing Notifications will be posted. If empty, no notifications will be posted on your Discord. Notifications are sent every 5 minutes."

## Customizing Message Colors

You can customize the colors used in the Discord messages for different types of notifications.

- **Success Color**: Choose a color for success messages.
- **Danger Color**: Choose a color for danger messages.
- **Warning Color**: Choose a color for warning messages.
- **Info Color**: Choose a color for info messages.
- **Secondary Color**: Choose a color for secondary messages.

## Saving the Settings

After configuring the notification channels and customizing the colors, click the "Save" button to update the settings. This will ensure that your Discord server receives the appropriate notifications with the desired color scheme.
