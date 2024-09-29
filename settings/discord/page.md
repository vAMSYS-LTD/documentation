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

In vAMSYS, Discord Settings allow VA Owners and Staff to configure their Discord Integration with vAMSYS. This integration enables automatic notifications for various events, such as new alerts, NOTAMs, landing notifications and other. In addition, presence of vAMSYS Bot will allow for pilot authentication and Rank based role assignment.

## Inviting vAMSYS Bot to Your Discord Server

To enable the Discord functionality, you need to invite the vAMSYS bot to your Discord server and set it up properly.

1. **Step 1**: Add our Bot to your Discord Server
    - The invite URL for the vAMSYS bot is available in the page.
    - The bot requires privileged access to your channels.

2. **Step 2**: In one of your Discord channels, type the following command to set up the bot:
    - `/setup [setup_token]`

3. **Step 3**: Click the "Check Connection" button in the interface to verify the connection between vAMSYS and your Discord server.

## Configuring vAMSYS Bot Role

Depending on number of Roles you have created in Discord, you should move the newly created 'vAMSYS' role above pilot ranks.

1. In Discord, open your Server Settings
2. Navigate to Roles section
3. Move 'vAMSYS' Role above your pilot ranks

vAMSYS role needs to be above ranks it will interact with. vAMSYS will not be able to assign roles to Discord Members who have a role higher than the 'vAMSYS Role'.

In addition - the bot will not be able to change nicknames or remove members from your Discord if they hold a rank above that of 'vAMSYS'.

## What vAMSYS Bot can do?

The bot is still in its early days and currently only performs two functions:
### Conduit for vAMSYS notifications and user management actions
Discord bot is required to assign the Pilot Rank Discord Roles, send notifications and change discord user nicknames and discord roles. See this [Section](https://docs.vamsys.dev/settings/discord#configuring-notification-channels) to set up Notifications.

With the help of the vAMSYS Bot, any name changes or Public Name changes will be automatically reflected on the Discord user, as well any change in Rank.
In addition, should a pilot stop being a member of your VA or disconnect the link between vAMSYS and their Discord User account - they will be automatically removed from your Discord.

### New Discord User Verification
vAMSYS Bot can also help with your Pilots joining your Discord by providing a button in a channel of your choice. New users joining your server can click on the button and:
- Get their Discord Nickname changed to conform with this standard - `Public Name - Pilot Username` - for example -> Lukas J - HTA1249. Public name is set via Name Display setting in User Settings -> General Settings.
- Get the [Role assigned](https://docs.vamsys.dev/settings/discord#configuring-pilot-rank-discord-roles) based on the Pilot rank they hold at your VA.

A Discord Member, with Manage Channels Permission, can create the authentication button by calling `!pilot-role-command` command.

Please note - discord members clicking this button need to have their Discord Account linked with their vAMSYS User account. If they have not done so already, the bot will prompt them to do it and will provide a link to where it can be done.

#### Automating Discord User Verification
If your new Discord User has already linked an account with vAMSYS and has a pilot account on your VA, it is possible to automate the renaming and role assignment. 

In Pilot Rank Discord Roles section enable 'Automatically Assign' - when User joins your discord, they will be renamed automatically and roles assigned.
A temporary public message will be shown in first text channel of your Discord:
```text
Access Granted 

Hi @user! Welcome to our Discord. We have been able to match you with your vAMSYS account and you have been given access.
```
This message will be removed after 10-15 seconds.

## Configuring Notification Channels

After the bot is successfully connected to your Discord server, you can configure the notification channels for different types of messages.

- **Alerts Channel**: Select the Discord channel where new alerts will be posted. If empty, no alerts will be posted on your Discord.
- **NOTAMs Channel**: Select the Discord channel where new NOTAMs will be posted. If empty, no NOTAMs will be posted on your Discord.
- **Alert Notification Role**: Role which is @ mentioned with every Alert message.
- **NOTAM Notification Role**: Role which is @ mentioned with every NOTAM message.

- **Booking Notification Channel**: Channel where notification will be sent after every flight Dispatch.
- **Departure Notification Channel**: Channel where notification will be sent upon flight taking off.
- **Landing Notification Channel**: Channel where notification will be sent upon the flight landing.

#### VA Statistics Full
Intent was to create a daily statistics summary for VA Staff. It was intended to be posted in a private channel, not visible to Pilots - but you may do as you wish.

Sent every night, shortly after midnight UTC.

Statistics Full include:
- Last 24 Hour Pilot registrations, PIREPs filed, Points (+Bonus) awarded, Flight Time, Passengers and Cargo; System Accepted PIREPs, Manually Accepted PIREPs, Rejected/Invalidated PIREPs.
- Last 30 Day Pilot registrations, PIREPs filed, Points (+Bonus) awarded, Flight Time, Passengers and Cargo
- Year to Date Pilot registrations, PIREPs filed, Points (+Bonus) awarded, Flight Time, Passengers and Cargo
- Total Pilot registrations, PIREPs filed, Points (+Bonus) awarded, Flight Time, Passengers and Cargo
- Average per day for Year to date: Pilot registrations, PIREPs filed, Points (+Bonus) awarded, Flight Time, Passengers and Cargo
- Summary of outstanding items: PIREPs to Review; PIREPs pending Pilot Reply; Liveries, Registrations, Claims and Transfers to Review

#### VA Statistics Simple
Intent was to create a daily statistics summary for Pilots. It was intended to be posted in a public channel, not visible to Pilots - but you may do as you wish.

Sent every night, shortly after midnight UTC.
Message sent includes Last 24 Hour Pilot registrations, PIREPs filed, Points (+Bonus) awarded, Flight Time, Passengers and Cargo

## Configuring Pilot Rank Discord Roles

You can set up different Discord Roles for each Rank in your VA, or you can keep it simple and give everyone the same role and anything in-between.
The Pilot Rank Discord Roles section lists all the Ranks in your VA. Dropdown box lists all your Discord Roles.

Please note that Honorary Rank roles are additive - if a pilot holds a regular and honorary rank - both sets of roles will be applied.
Please see this [section](https://docs.vamsys.dev/settings/discord#automating-discord-user-verification) regarding 'Automatically Assign' button functionality.

## Customizing Message Colors

You can customize the colors used in the Discord messages for different types of notifications.

- **Success Color**: Choose a color for success messages.
- **Danger Color**: Choose a color for danger messages.
- **Warning Color**: Choose a color for warning messages.
- **Info Color**: Choose a color for info messages.
- **Secondary Color**: Choose a color for secondary messages.
 
## Saving the Settings

After configuring the notification channels and customizing the colors, click the "Save" button to update the settings. This will ensure that your Discord server receives the appropriate notifications with the desired color scheme.

## Keeping Discord and vAMSYS in-sync
If you change your Discord Roles, add or remove channels - be sure to check the Discord settings page to ensure the settings are still as you would like them to be.