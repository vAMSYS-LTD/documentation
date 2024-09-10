---
title: Announcements 
nextjs:  
  metadata:  
    title: Announcements  
    description: Comprehensive guide to managing pilot announcements in vAMSYS using the Orwell interface.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

This section provides an overview of how to manage pilot announcements within your VA using vAMSYS. Announcements can be in the form of Alerts or NOTAMs, which can be displayed on the Phoenix Dashboard and Pegasus Dashboard. These tools ensure that important information is delivered promptly and effectively.

## Alerts
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Announcements -> Alerts
*  {% align="center" %}
* Can View Alerts {% align="right" %}
{% /table %}

Alerts are temporary, quick messages shown to pilots to convey important information concisely. They are usually no more than a line or two long and are intended for quick updates or reminders.

### Key Features
- **Create, Edit, and Delete Alerts**: Manage alerts through a user-friendly interface.
- **Markdown Support**: Write alert content using Markdown for formatting.
- **Scheduled Display**: Set start and end times for when alerts should be shown.
- **Display Configuration**: Alerts can be configured to be displayed on the Phoenix Dashboard and Pegasus.
- **Reorderable Alerts**: Alerts can be reordered to show in the specified order in Orwell.

### How to Use Alerts

1. **Viewing Alerts**: The Alerts table shows all current alerts for your VA, including their start and end times, titles, and content.
2. **Creating an Alert**:
   - Click on the "New Alert" button.
   - Fill in the form with the following fields:
      - **Title**: The title of the alert, shown in bold (max 255 characters).
      - **Content**: The alert content, written in Markdown.
      - **Type**: The style of the alert (Success, Danger, Warning, Info, Secondary).
      - **Start Showing**: The date and time when the alert should start showing.
      - **Stop Showing**: The date and time when the alert should stop showing. If left empty, it will be treated as a permanent alert.
3. **Editing an Alert**:
   - Click on the "Edit" button next to the alert you want to modify.
   - Update the necessary fields in the form.
4. **Deleting an Alert**:
   - Click on the "Remove from History" button next to the alert you want to delete.
   - Confirm the deletion in the modal that appears.

## NOTAMs
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Announcements -> NOTAMs
* Enable NOTAMs{% align="center" %}
* Can View NOTAMs {% align="right" %}
{% /table %}

NOTAMs (Notices to Airmen) are more detailed, long-form content pieces that provide essential information to pilots, such as changes in routes, updates, or special instructions.

### Key Features
- **Create, Edit, and Delete NOTAMs**: Manage NOTAMs through a user-friendly interface.
- **Rich Text Support**: Write NOTAM content using a rich text editor.
- **Scheduled Display and Priority**: Set start and end times, and assign priority levels to NOTAMs.
- **Mandatory Acknowledgement**: Require pilots to acknowledge the NOTAM before proceeding with bookings.
- **Display Configuration**: NOTAMs can be shown on the Dashboard and have a dedicated page in Phoenix.

### How to Use NOTAMs

1. **Viewing NOTAMs**: The NOTAMs table shows all current NOTAMs for your VA, including their start and end times, titles, tags, types, and priorities.
2. **Creating a NOTAM**:
   - Click on the "New NOTAM" button.
   - Fill in the form with the following fields:
      - **Title**: The title of the NOTAM (max 255 characters).
      - **Content**: The NOTAM content written in the rich text editor.
      - **Type**: The style of the NOTAM (Success, Danger, Warning, Info, Secondary).
      - **Priority**: The priority level of the NOTAM (Low, Medium, High).
      - **Must Read**: If enabled, pilots must acknowledge the NOTAM before booking and flying.
      - **Tag**: Informational tag to help organize your NOTAMs.
      - **URL**: Redirects pilots to a specified page.
      - **Start Showing**: The date and time when the NOTAM should start showing.
      - **Stop Showing**: The date and time when the NOTAM should stop showing. If left empty, it will be treated as a permanent NOTAM.
3. **Editing a NOTAM**:
   - Click on the "Edit" button next to the NOTAM you want to modify.
   - Update the necessary fields in the form.
4. **Deleting a NOTAM**:
   - Click on the "Remove from History" button next to the NOTAM you want to delete.
   - Confirm the deletion in the modal that appears.

## Maintenance and Best Practices
It's important to maintain and regularly review your NOTAMs, especially those marked as must-read. Use timed NOTAMs to prevent a backlog of outdated information. Avoid overwhelming new pilots with numerous old must-read NOTAMs by regularly unmarking irrelevant ones.
