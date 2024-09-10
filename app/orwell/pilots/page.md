---
title: Pilots  
nextjs:  
    metadata:  
        title: Pilots  
        description: Comprehensive guide to managing pilots in vAMSYS using the Orwell interface.
---

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

## Getting Pilots
It is crucial to understand that vAMSYS is a service provider and not an advertising platform for VAs. Many users misinterpret vAMSYS as a platform that advertises VAs or believe that creating a VA using the vAMSYS platform will gain them hundreds of active pilots overnight. This is not the case.

- **Service Provider Role:** vAMSYS provides tools and services to help you manage your VA.
- **No Advertisement or Recruitment:** vAMSYS will not advertise your VA or recruit pilots for you. This responsibility lies with you as the VA Owner and your staff.
- **VA Owner Responsibilities:** As a VA Owner, it is your job to advertise, expose your VA, and entice pilots to join your Virtual Airline.

## Pilot List
{% table %}
* Where
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pilots -> List
* Can View Pilot List {% align="right" %}
{% /table %}

The Pilot List page in Orwell provides an overview of all pilots in your VA. This page allows you to view and manage detailed information about each pilot, including their full name, Pilot ID, email, rank, and more.

### Key Features
- **Search and Filter:** Use individual and global search options to find pilots quickly.
- **Customizable Columns:** Show or hide columns based on your preferences, including full name, Pilot ID, email, rank, IVAO/VATSIM/POSCON IDs, and more.
- **Pilot Actions:** Perform various actions on pilots.

### How to Use the Pilot List
1. **Viewing Pilots:** By default, the table displays active pilots. You can use the search bar to find specific pilots or apply filters to narrow down the list based on criteria such as registration date, activity status, or pilot IDs.
2. **Customizing Columns:** Click on the column visibility button to select which columns to display. This can help you focus on the most relevant information.
3. **Performing Actions:** Use the action buttons next to each pilot's entry to perform tasks.

### Pilot Actions
- **Restore Profile:** Restores a deleted pilot profile using the same username or decide if bookings and PIREPs will be restored under the pilot account.
- **Manual Statistics Refresh:** Refreshes the pilot’s statistics manually. This might take a few minutes to update.
- **View Phoenix Profile:** Opens the pilot’s Phoenix profile in a new tab.
- **Capitalize Name:** Capitalizes the first and last letters of each word in the pilot's name.
- **Send Name for Review:** Sends the pilot’s name to Team vAMSYS for review if it is suspected to be fake.
- **Ban:** Bans a pilot from the VA. Requires a public note (visible to the pilot) and can include a private message to Team vAMSYS for a platform-wide ban review.
- **Un-Ban:** Reverses a VA-specific ban on a pilot.
- **Delete:** Deletes a pilot profile. The removal reason is not public and the pilot will not be notified if their account is deleted. You can choose to permanently remove the profile and provide a reason for deletion.

### Filters
- **IVAO Pilots:** Filters pilots based on IVAO ID presence.
- **VATSIM Pilots:** Filters pilots based on VATSIM ID presence.
- **POSCON Pilots:** Filters pilots based on POSCON ID presence.
- **Deleted Pilots:** Filters pilots based on their deletion status.
- **Frozen Pilots:** Filters pilots based on their frozen status.
- **Platform Ban:** Filters pilots based on platform ban status.
- **Airline Ban:** Filters pilots based on airline ban status.
- **Rank:** Filters pilots based on their rank.
- **Honorary Rank:** Filters pilots based on honorary rank status.
- **Registration Date:** Filters pilots based on their registration date.
- **PIREP Date:** Filters pilots based on their PIREP filing date.
- **PIREP Count:** Filters pilots based on the number of PIREPs filed.

## Pilot Bans
{% table %}
* Where
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pilots -> List
* Can View Pilot List {% align="right" %}
{% /table %}

The Pilot Bans page allows you to manage pilots who have been banned specifically by your VA. This page provides detailed information about the bans, including the reason for the ban and whether the pilot is currently banned.

### Key Features
- **Ban Management:** View and manage VA-specific bans.
- **Detailed Information:** See the full name, Pilot ID, registration date, ban status, and reasons for bans.
- **Ban Actions:** Restore profiles, initiate or reverse bans, and delete pilot profiles.

### How to Use the Pilot Bans
1. **Viewing Bans:** The table displays all removed pilots by default, including those who may not be banned. Use the filters at the bottom of the table to refine what the table shows, such as Platform Ban and Airline Ban sections.
2. **Restoring Pilots:** If a pilot's ban was a mistake or the issue has been resolved, you can restore their profile by selecting the restore option.
3. **Implementing VA Bans:** To ban a pilot, use the action button next to their profile. When banning a pilot, you will need to provide a public note, which will be visible to the pilot. This can help communicate the reason for their ban. Additionally, you can provide a private message to Team vAMSYS. This message will not be visible to the pilot and is used to provide further context for the ban if you wish to escalate it.
4. **Escalating Bans:** VA Bans can be escalated to Team vAMSYS for review. Based on the reason provided, Team vAMSYS may impose a platform-wide ban if deemed necessary.

### Ban Actions
- **Restore Profile:** Restores a deleted pilot profile.
- **Ban:** Bans a pilot from the VA. Requires a public note (visible to the pilot) and can include a private message to Team vAMSYS for a platform-wide ban review.
- **Un-Ban:** Reverses a VA-specific ban on a pilot.
- **Delete:** Deletes a pilot profile. You can choose to permanently remove the profile and provide a reason for deletion.

### Filters
- **Deleted Pilots:** Filters pilots based on their deletion status.
- **Platform Ban:** Filters pilots based on platform ban status.
- **Airline Ban:** Filters pilots based on airline ban status.
- **Registration Date:** Filters pilots based on their registration date.
- **Deletion Date:** Filters pilots based on their deletion date.

## Registration Review
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pilots -> Registration Review
* Review Registrations {% align="center" %}
* Can View Pilot List {% align="right" %}
{% /table %}

The Registration Review page is used to manage and review pending pilot registration requests. This section allows you to accept or reject applications, ensuring that only approved pilots can join your VA.

### Key Features
- **Pending Registrations:** View and manage all pending registration requests.
- **Detailed Application Info:** See full names, emails, registration routes, submission dates, and pilot IDs.
- **Application Actions:** Accept or reject applications with detailed reasons.

### How to Use the Registration Review
1. **Viewing Applications:** The table displays all pending registration requests. Click on a request to view detailed information about the applicant.
2. **Accepting Applications:** To accept an application, click the accept button. The pilot will be added to your VA.
3. **Rejecting Applications:** To reject an application, click the reject button and provide the reason for rejection. You can also send a detailed rejection email if needed.

### Application Actions
- **Accept:** Approves the registration request and adds the pilot to the VA.
- **Reject:** Rejects the registration request. Requires a reason for internal purposes and an optional rejection email to the pilot.

### Filters
- **Applications:** Filters applications based on their status (Processed or Pending).

## Transfer Requests
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pilots -> Transfer Requests
* Enable Rank Transfer {% align="center" %}
* Can View Pilot List {% align="right" %}
{% /table %}

The Transfer Requests page allows you to review and process transfer requests from pilots who wish to transfer their hours or status from another VA. This page provides detailed information about each transfer request and allows you to approve or reject them.

{% callout title="Note" %}
Internal transfers are automatically approved, while external transfers require review and are not automatically approved.
{% /callout %}

### Key Features
- **Transfer Management:** View and manage all transfer requests.
- **Detailed Information:** See pilot usernames, full names, type and status of transfer, hours claimed, and submission dates.
- **Transfer Actions:** Review details, approve or reject transfers.

### How to Use the Transfer Requests
1. **Viewing Transfer Requests:** The table displays all transfer requests, with filters to view only pending, accepted, or rejected requests.
2. **Reviewing Requests:** Click on a request to view detailed information, including the hours claimed and URLs provided for verification.
3. **Approving or Rejecting Requests:** Use the action buttons to approve or reject the transfer. Provide necessary details and reasons for your decision.

### Transfer Actions
- **Review:** Opens a modal to review the transfer request in detail. Allows you to approve or reject the transfer.
- **Accept:** Approves the transfer request and updates the pilot’s status.
- **Reject:** Rejects the transfer request with an option to provide a reason for the decision.

### Filters
- **Type:** Filters transfer requests based on their type (External or Internal).
- **Status:** Filters transfer requests based on their status (Pending, Accepted, or Rejected).

## Pilot Merges
{% table %}
* Where
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pilots -> List
* Can View Pilot List {% align="right" %}
{% /table %}

The Pilot Merges page is designed to manage pilot account merges. This is useful for combining two accounts into one, ensuring that all data is accurately merged and managed.

### Key Features
- **Merge Management:** View and manage all pilot account merges.
- **Detailed Information:** See the primary and secondary pilot details, merge dates, and whether the merge was initiated by staff.

### How to Use the Pilot Merges
1. **Viewing Merges:** The table displays all pilot merges, showing details about the primary and secondary accounts involved in each merge.
2. **Managing Merges:** Ensure that merges are accurately recorded and that any issues are resolved. Note that merges require secondary accounts to have been merged into primary accounts.

### Merge Actions
- **View Details:** Provides detailed information about the merge, including which accounts were merged and the date of the merge.

## Holidays
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pilots -> Holidays
* Enable Holidays {% align="center" %}
* Can View Pilot List {% align="right" %}
{% /table %}

The Holidays page allows you to manage pilot holidays, where pilots can be marked as on holiday, affecting their activity requirements and availability.

### Key Features
- **Holiday Management:** View and manage all pilot holidays.
- **Detailed Information:** See pilot names, usernames, holiday start and end dates, number of holiday days, and whether it counts against their allowance.
- **Holiday Actions:** Create, edit, and delete holiday entries.

### How to Use the Holidays
1. **Viewing Holidays:** The table displays all holidays, with filters to view current, future, or past holidays.
2. **Creating Holidays:** Use the create action to add a new holiday for a pilot. Provide details such as the start and end dates, and whether the holiday counts against their allowance.
3. **Managing Holidays:** Edit or delete existing holiday entries as needed. Ensure that holidays are accurately recorded and reflected in the pilot's activity status.

### Holiday Actions
- **Create Holiday:** Adds a new holiday entry for a pilot. Requires details such as the start and end dates, and whether the holiday counts against their allowance.
- **Edit Holiday:** Modifies an existing holiday entry.
- **Delete Holiday:** Removes a holiday entry.

### Filters
- **Holiday Status:** Filters holidays based on their status (Current, Future, Past, All).

## Invites
{% table %}
* Where
* Requirements {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pilots -> Invites
* Support Email and Login/Register Slug {% align="center" %}
* Can View Pilot List {% align="right" %}
{% /table %}

The **Pilot Invite** feature is primarily used to add staff to your VA during the trial period when registrations are suspended. Other use cases include operating an invite-only VA, migrating from another VA Management System, or awarding extra hours and points via a 'Transfer' PIREP.

### Creating a Pilot Invite

Pilot invites can be created at **Orwell -> Pilots -> Invite**. To use this feature, ensure that your VA has:

1. Set up the [Login/Register Link Modifier](/settings/airline#general-settings).
2. Provided a [Pilot Support Email](/settings/airline#general-settings).
3. Configured the [Registration Complete Email](/orwell/design#emails).

Invites will bypass the [Registration Review](/settings/airline#pilot-settings) if enabled. Only users who are not banned can be invited. If a user has or had a pilot account already, it cannot be permanently removed, the VA needs to allow rejoins, and the user cannot be VA banned. In such cases, the invite status will change to 'Pilot exception'.

### Invite Form

In the invite form, fill in the user's first and last name and their email address. Additionally, provide details for the Transfer PIREP, including hours, points, and bonus points to be awarded.

### Consent and Abuse Prevention

You may only invite pilots to your VA if you have their permission. Abuse of this system is not tolerated and may result in your VA being removed for breaking vAMSYS Terms of Service.

### Invite Processing

Once submitted, the invite will enter a queue. For the first 15-20 minutes, you can delete the invite. If deleted before processing starts, no action will be taken. After processing, vAMSYS will check if the user account exists. If it does, a new pilot account will be created, and your VA's [Registration Complete Email](/orwell/design#emails) will be sent. If the user is not registered with vAMSYS, a new account will be created, followed by the pilot account.

If the pilot account exists, a Transfer PIREP will be generated using the provided hours, points, and bonus points and added to their account.

### Email to New Users

New users will receive the following email before your Registration Complete Email:
```text
Hi FirstName,
VAName has made a vAMSYS account for you and added you to their Virtual Airline.
Please find your login details:
Email: Your email address.
Password: 123456789

Upon logging in, we strongly advise you change the password.

If you did not request this, please forward this email to /vAMSYS Support Email/ for us to investigate and inform the sending party of their error.

Anything else?

Check your inbox for additional e-mail with more information from the virtual airline.
```

## Activity Whitelist
Activity Whitelist page, available if activity requirements are enabled, lists all your Pilots who are whitelisted from activity requirements.
Whitelisted meaning they are not subject to activity requirements and will never be removed for not meeting the activity requirements set by the VA.

You may interact with each line in the table and remove the user from whitelist by clicking 'Remove From Whitelist'.
Additionally, you may quickly add a user to the whitelist by clicking 'Add to Whitelist' button at the top of the table. In the modal you can search for the pilot you want to add by their username.

## Unmet Initial Activity
Unmet Initial Activity table, available if initial activity requirements are enabled, lists all your Pilots who are yet to meet your initial activity requirements.
Table lists the Users name, Pilot ID (username), Registration date and has a button to add the Pilot to activity whitelist, making them immune from all activity requirements.

## Activity Grace
Activity Grace table, available if activity requitements are enabled, lists all your Pilots who are currently on Activity Grace period and close to having their accounts removed.
Table lists the Users name, Pilot ID (username), Registration date, Date when the Grace Period started and a button to add the Pilot to activity whitelist, making them immune from all activity requirements.