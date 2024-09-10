---
title: Airline Settings
nextjs:  
    metadata:  
        title: Airline Settings  
        description: Detailed guide to managing airline settings in vAMSYS using the Orwell interface.
---
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Settings -> Airline
*  {% align="center" %}
* Can Manage Airline Settings {% align="right" %}
{% /table %}

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

The Airline Settings section in vAMSYS allows VA owners and staff to configure various aspects of their airline's operations, including general settings, pilot settings, rank and transfer settings, activity settings, booking settings, and PIREP settings. Each sub-section contains specific settings that impact how the VA functions on the platform.

## General Settings

This section contains basic configurations for your VA.

#### General
- **VA Name**: The name of your Virtual Airline as set during your application. This can only be changed by Team vAMSYS after submitting a ticket.
- **Slogan**: Your VA's slogan, shown on login/register pages and the Select VA Page.
- **Website**: The homepage of your Virtual Airline. Used across vAMSYS, including emails.
- **Login/Register Link Modifier**: Text appended to vAMSYS Register and Login URLs for your VA, forming a unique registration link. Must be lowercase with no spaces.
- **Pilot Support Email**: Email for pilot support, shown in navigation and used as the reply-to address for vAMSYS emails.
- **Pilot Support URL**: URL of your support system for pilots, shown in navigation if entered.
- **Maintenance Mode**: Puts the VA in Maintenance Mode. Your pilots will be redirected to a maintenance page, where Maintenance Message is shown. VA Staff will be able to access and interact with VA as normal. You can see what the page will look like by clicking 'Preview Page'.
- **Maintenance Message**: Custom message you want to display to your pilots on the maintenance page.

#### Modules
- **Enable Events**: Toggle to enable the Event system.
- **Enable NOTAM**: Toggle to enable the NOTAM system.
- **Enable Leaderboard**: Toggle to enable Pilot Leaderboards.
- **Enable Badges**: Toggle to enable the Badge Award System. When enabled, the **Badge Name** field becomes visible.
- **Badge Name**: Specify what badges are called in your VA, such as "Awards". Visible if **Enable Badges** is toggled on.
- **Enable Hangar**: Toggle to enable the Hangar for VA Staff. When enabled, the **Hangar Name** field becomes visible.
- **Make Hangar Public**: Toggle to enable the Hangar for Pilots of the VA.
- **Hangar Name**: Specify what the Hangar is called, such as "Downloads" or "Resources". Visible if **Enable Hangar** is toggled on.

## Pilot Settings

Settings related to pilot accounts.

- **Review Registrations**: Toggle to enable the review of all registrations, allowing you to accept or reject them. When enabled, the **Review Page Message for Pilots** editor becomes visible.
- **Review Page Message for Pilots**: Message shown to pilots on the registration review page. Required if **Review Registrations** is enabled.
- **Rejoining**: Toggle to allow former pilots, who have not been permanently removed, to re-join your VA. When enabled, the **Rejoin Reuse** and **Rejoin Restore** toggles become visible.
    - **Rejoin Reuse**: Toggle to allow rejoining pilots to reuse their previous username. Visible if **Rejoining** is toggled on.
    - **Rejoin Restore**: Toggle to reactivate rejoining pilots' old accounts, including their PIREPs and bookings (but not username). Visible if **Rejoining** is toggled on.
- **Removed Pilot Digest**: Toggle to receive a daily email with a list of removed pilots. When enabled, the **Digest Recipient** selector becomes visible.
    - **Digest Recipient**: Select the recipient of the removed pilot digest email from your staff. Required if **Removed Pilot Digest** is toggled on.
- **Discard Data on Merge**: Toggle to discard PIREPs of the secondary pilot account during user account merges.
- **Default to Imperial Units**: Toggle to default newly registered pilots to using Imperial Units.

## Rank and Transfer Settings

Configurations for pilot ranks and rank transfers.

- **Bonus Points as Regular Points**: Toggle to treat bonus points as regular points for rank calculations.
- **Enable Rank Transfer**: Toggle to enable the option for pilots to apply for a rank transfer. When enabled, the **Transfer Modal Text**, **vAMSYS -> vAMSYS Transfer**, and **External Transfer** toggles become visible.
    - **Transfer Modal Text**: Text shown in the transfer modal, explaining the rank transfer process. Visible if **Enable Rank Transfer** is toggled on.
    - **vAMSYS -> vAMSYS Transfer**: Toggle to enable internal transfers within vAMSYS. Internal transfers are auto-approved. When enabled, the **Internal Transfer Rank & Target** selector becomes visible.
        - **Internal Transfer Rank & Target**: Select the rank for internal transfers. Required if **vAMSYS -> vAMSYS Transfer** is toggled on.
    - **External Transfer**: Toggle to enable external transfers. External transfers require review and approval. When enabled, the **External Transfer Rank** selector becomes visible.
        - **External Transfer Rank**: Select the rank for external transfers. Required if **External Transfer** is toggled on.

For a detailed explanation of how rank transfers work, see the [Rank Transfers](/concepts/rank-transfer) concept page.

## Activity Settings

The Activity Settings section includes settings related to pilot activity and holidays.

### General Activity Settings
- **Enable Activity Requirements**: Toggle to enable ongoing activity requirements for pilots. Additional settings become visible when enabled.
- **Activity Type**: Choose whether pilot activity is based on PIREPs or hours flown.
- **Activity Amount**: Specify the number of PIREPs or hours required to meet activity requirements.
- **Activity Period**: Specify the number of days pilots have to meet activity requirements.
- **Grace Period**: Specify extra days given to meet activity requirements if not met initially.
- **Rejected PIREPs Count**: Toggle to include rejected PIREPs in activity requirements.
- **Invalidated PIREPs Count**: Toggle to include invalidated PIREPs in activity requirements.

### Initial Activity Settings
- **Enable Initial Activity Requirements**: Toggle to enable initial activity requirements for new pilots. Additional settings become visible when enabled.
- **Initial Activity Type**: Choose whether initial pilot activity is based on PIREPs or hours flown.
- **Initial Activity Amount**: Specify the number of PIREPs or hours required to meet initial activity requirements.
- **Initial Activity Period**: Specify the number of days new pilots have to meet initial activity requirements.
- **Initial Activity Reminder**: Specify after how many days a reminder is sent if initial activity requirements are not met.

### Holiday Settings
- **Enable Holidays**: Toggle to allow pilots to take holidays, pausing ongoing activity requirements.
- **Holiday Allowance**: Specify the number of holiday days a pilot can take per year. Changing this resets the holiday allowance for all pilots.
- **Pilot Account Age Requirement**: Specify how old a pilot account must be before the pilot can start taking holidays.

For a detailed explanation of pilot activity, see the [Activity](/concepts/activity) concept page.

## Booking Settings

Configurations for booking settings within your VA.

- **OFP Format**: Select the Operational Flight Plan (OFP) format generated by SimBrief. This provides a default for aircraft and fleets.
- **Pilot OFP Format Override**: Toggle to allow pilots to select their preferred OFP format, which will be used instead of the default.
- **Online Network Remarks**: Add remarks sent to Online Network Prefile. Maximum length is 100 characters.
- **Jumpseat System**: Allow pilots to jumpseat to another airport within the route network of their current location.
    - **Jumpseat+ Enable Jumpseat to Bases**: Allow jumpseat to bases outside of the available route network. Visible only if Jumpseat System is enabled.
    - **Jumpseat Anywhere**: Allow pilots to jumpseat to any airport in the entire network. Visible only if Jumpseat System is enabled.
- **Highlight Booked Aircraft**: In flight dispatch, aircraft which are booked in other bookings will be highlighted.


## PIREP Settings

Settings related to Pilot Reports (PIREPs).

- **Taxi Time Awarded**: Toggle to include taxi time in PIREPs, counting towards rank.
- **Claims System**: Toggle to allow pilots to submit a claim for hours and points if they were unable to track/file their flight/PIREP.

### Points and Hours Settings
- **Repositioning Flight Points**: Toggle to award points to PIREPs flown via Repositioning Route Type.
- **Training Flight Points**: Toggle to award points to PIREPs flown via Training Route Type.
- **Charter Flight Points**: Toggle to award points to PIREPs flown via Charter Route Type.
- **Repositioning Flight Hours**: Toggle to award hours to PIREPs flown via Repositioning Route Type.
- **Training Flight Hours**: Toggle to award hours to PIREPs flown via Training Route Type.
- **Charter Flight Hours**: Toggle to award hours to PIREPs flown via Charter Route Type.

### Appeal Settings
- **Rejected PIREP Appeal Offsite**: Toggle to disable commenting on rejected PIREPs and show a link to file an appeal instead.
- **Invalidated PIREP Appeal Offsite**: Toggle to disable commenting on invalidated PIREPs and show a link to file an appeal instead.
- **Appeal URL**: Enter the URL for pilots to find the appeal procedure or form. Required if either appeal toggle is enabled.