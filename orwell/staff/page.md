---
title: Managing Staff in vAMSYS
nextjs:  
    metadata:  
        title: Managing Staff in vAMSYS  
        description: Detailed guide to managing staff and permissions in vAMSYS, including creating, editing, and configuring staff roles and access.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

The Staff component in vAMSYS allows VA owners to manage their staff, assign roles, and configure permissions. This guide provides detailed instructions on how to use the Staff management interface.

## Staff Management Interface
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Staff
* {% align="center" %}
* VA Owner OR Can See Staff {% align="right" %}
{% /table %}

### Staff List
The staff list displays current and past staff members along with key information:

- **Image**: Staff avatar.
- **Name & Title**: Staff member's full name and title.
- **Staff & User Email**: Staff-specific email and the associated user email.
- **Orwell Access**: Indicates if the staff member has access to Orwell.
- **VDS Access**: Indicates if the staff member has access to VDS.
- **Staff Since**: Date when the staff member was added.
- **Staff Till**: Date when the staff member was removed (if applicable).
- **Hidden**: Indicates if the staff member is hidden from the public team page.

### Actions
- **Create Staff**: Add a new staff member by providing their email and configuring their permissions.
- **Edit**: Modify staff details and permissions.
- **Delete**: Remove a staff member.
- **Restore**: Restore a previously deleted staff member.

## Creating or Editing a Staff Member
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Staff
* {% align="center" %}
* VA Owner OR Can Manage Staff {% align="right" %}
{% /table %}

### Basic Details
- **Title**: The title of the staff member, shown on the Phoenix Team Page.
- **Staff Email**: Email shown on the Phoenix Team Page.
- **Hidden**: Whether the staff member is hidden from the Team Page.
- **Staff Avatar**: Upload an image for the staff member. Recommended size is 300x300 pixels with a 1:1 aspect ratio.

### Subsystem Access
Configure access to various subsystems of vAMSYS:

- **Can Access Orwell**: Grants access to Orwell.
- **Can Access VDS**: Grants access to VDS.
- **Can Access Hangar**: Grants access to Hangar.

### Pilot Actions
Settings related to managing pilot accounts:

- **Can View Pilot List**: Allows viewing the pilot list, registration, and transfer review pages.
- **Can View Pilot Profile**: Allows viewing and performing actions on pilot profiles.
- **Can Delete Pilots**: Allows deleting pilot accounts.
- **Can Restore Pilots**: Allows restoring deleted pilot accounts.

### Pilot Announcement Settings
Settings related to managing pilot announcements:

- **Can View Alerts**: Allows viewing alerts.
- **Can View NOTAMs**: Allows viewing NOTAMs.
- **Can Create Alerts**: Allows creating alerts.
- **Can Create NOTAMs**: Allows creating NOTAMs.
- **Can Edit Alerts**: Allows editing alerts.
- **Can Edit NOTAMs**: Allows editing NOTAMs.
- **Can Delete Alerts**: Allows deleting alerts.
- **Can Delete NOTAMs**: Allows deleting NOTAMs.

### PIREP and Livery Settings
Settings related to reviewing PIREPs and liveries:

- **Can Review Liveries**: Allows reviewing liveries.
- **Can See All Liveries**: Allows viewing all liveries.
- **Can Review PIREPs & Claims**: Allows reviewing PIREPs and claims.
- **Can See All PIREPs & Claims**: Allows viewing all PIREPs and claims.

### Event Settings
Settings related to managing events:

- **Can See Events**: Allows viewing events.
- **Can Create Events**: Allows creating events.
- **Can Edit Events**: Allows editing events.
- **Can Delete Events**: Allows deleting events.

### VDS Settings
Settings related to managing VDS:

- **Can Manage Aircraft**: Allows managing aircraft and fleets.
- **Can Manage Airports**: Allows managing airports.
- **Can Manage Scenery**: Allows managing scenery.
- **Can Manage Stands**: Allows managing stands and stand groups.
- **Can Manage Routes**: Allows managing routes.

### Airline Settings
Settings related to accessing and managing airline settings:

- **Can See Orwell - Settings Menu**: Grants visibility to the settings menu in Orwell.
- **Can Manage Airline Settings**: Allows managing airline settings.
- **Can Manage Design Settings**: Allows managing design settings.
- **Can Manage Score and Preset Settings**: Allows managing scores, autorejects, points, and comment presets.
- **Can Manage ACARS Settings**: Allows managing ACARS settings.
- **Can Manage Discord Integration Settings**: Allows managing Discord integration settings.
- **Can Manage VDS Settings**: Allows managing VDS settings.
- **Can Manage Airline Share Settings**: Allows managing share agreements.
- **Can Manage API Settings**: Allows managing API settings.

### Data Settings
Settings related to Imports and Exports

- **Can See Export**: Allows creating Export requests.
- **Can See Import**: Allows submitting Importer requests.

### Other Settings
Other settings related to managing various components:

- **Can Manage Ranks**: Allows managing ranks.
- **Can Manage Pages**: Allows managing pages.
- **Can See Staff**: Allows viewing the staff page.
- **Can Manage Staff**: Allows adding, updating, or removing staff.
- **Can Manage Badges**: Allows managing badges.

## Additional Considerations

### Visibility on Phoenix
Staff members who are not hidden will appear on the **Phoenix -> Community -> Team** page, displaying their image, name, title, and staff email. They will be listed in the order shown in Orwell, which can be rearranged as needed.

### VA Ownership
The VA Owner cannot be deleted and is the only person with access to the Billing page. VA ownership can be transferred by sending a support ticket to Team vAMSYS.

### Staff Permissions
Staff members with the **Can Manage Staff** permission can edit and assign all permissions, including those they do not possess. Be mindful when assigning this permission to avoid unintended access rights.

### vAMSYS Staff
vAMSYS staff members have full access to your VA for support purposes. They cannot be removed but can be hidden or given specific titles and emails.

### Restoring Deleted Staff
Deleted staff members can be restored using the restore action.