---
title: Managing Ranks in vAMSYS
nextjs:  
    metadata:  
      title: Managing Ranks in vAMSYS  
      description: Detailed guide to creating, managing, and configuring ranks in vAMSYS, including requirements and honorary ranks.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}
The Ranks component in vAMSYS allows VA owners to create and manage ranks awarded to pilots based on flight time and points. This guide provides detailed instructions on how to use the Rank management interface.

## Rank Management Interface
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Ranks
*  {% align="center" %}
* Can Manage Ranks {% align="right" %}
{% /table %}

### Rank List
The rank list displays the ranks for the airline along with key information:

- **Image**: Rank icon.
- **Name**: The name of the rank.
- **Abbreviation**: Short form of the rank (e.g., FO, CPT).
- **Hours**: Number of flight hours required for the rank.
- **Points**: Number of points required for the rank.
- **B-Pts**: Number of bonus points required for the rank.
- **Pilots**: Number of pilots holding the rank. Clickable to see a list of pilots with this rank.
- **Honorary**: Indicates if the rank is honorary.

### Actions
- **Create Rank**: Add a new rank by providing the necessary details and configuring the requirements.
- **Edit**: Modify rank details and requirements.
- **Delete**: Remove a rank.

## Awarding Ranks

### Regular Ranks

Non-Honorary (Regular) ranks are assigned to pilots automatically as part of the Pilot Statistics Update routine. This process is triggered after a PIREP is scored or its Accept/Reject status changes. Regular ranks cannot be manually assigned; the system handles this automatically based on pilot performance.

### Honorary Ranks

Honorary ranks can be manually assigned to pilots via the [Pilot List](/orwell/pilots#list). Note that a pilot can hold one regular rank and one honorary rank simultaneously.

## Creating or Editing a Rank

### Rank Details
- **Name**: Enter the name of the rank (required).
- **Abbreviation**: Enter the abbreviation for the rank (required).
- **Hours**: Number of flight hours required for the rank. Enter 0 if no requirement (required).
- **Points**: Number of points required for the rank. Enter 0 if no requirement (required).
- **B-Pts**: Number of bonus points required for the rank. Enter 0 if no requirement (required).
- **Honorary Rank**: Toggle to mark the rank as honorary, which is awarded manually.
- **Rank Icon**: Upload an image for the rank. Recommended size is 85x37 pixels.

### Reordering Ranks
Ranks can be reordered using the move up and move down actions. Entry rank and the first non-entry rank cannot be reordered. The order is crucial not only for display purposes but also for rank calculations, awarding, and showing pilots their progress towards the next rank. Each subsequent rank must be harder to attain.

### Deleting a Rank
To delete a rank, select the delete option from the actions menu. Pilots with the deleted rank will be reassigned to the entry rank. Honorary ranks cannot be deleted if they are set as the staff rank.

## Entry Rank and Staff Team Rank
The entry rank and staff team rank are automatically created when the VA is created. These ranks cannot and must not be deleted, only edited.

- **Entry Rank**
    - **Name**: Cadet
    - **Abbreviation**: Cdt
    - **Hours**: 0
    - **Points**: 0
    - **Bonus Points**: 0
    - **Honorary**: False
- **Staff Team Rank**
    - **Name**: Staff Team
    - **Abbreviation**: ST
    - **Hours**: 0
    - **Points**: 0
    - **Bonus Points**: 0
    - **Honorary**: True

## Example Ranks

{% table %}
* Name
* Abbreviation
* Hours
* Points
---
* Second Officer
* 2/0
* 1
* 100
---
* First Officer
* FO
* 120
* 13,500
---
* Type Rating Instructor
* TRI
* 310
* 34,100
--- 
* Captain
* CPT
* 660
* 66,000
---
* Line Training Captain
* LTC
* 850
* 93,500
---
* Type Rating Examiner
* TRE
* 1,200
* 132,000
{% /table %}

## Example Epaulettes 

Feel free to use or edit them for your ranks.

{% table %}
---
* ![trainee](/ranks/trainee.gif)
* ![pilot](/ranks/pilot.gif)
* 
---
* ![second_c](/ranks/second_c.gif)
* ![second_b](/ranks/second_b.gif)
* ![second_a](/ranks/second_a.gif)
---
* ![first_c](/ranks/first_c.gif)
* ![first_b](/ranks/first_b.gif)
* ![first_a](/ranks/first_a.gif)
---
* ![captain_c](/ranks/captain_c.gif)
* ![captain_b](/ranks/captain_b.gif)
* ![captain_a](/ranks/captain_a.gif)
---
* 
* ![senior_captain_b](/ranks/senior_captain_b.gif)
* ![senior_captain_a](/ranks/senior_captain_a.gif)
---
* ![am_team](/ranks/am_team.gif)
* ![route](/ranks/route.gif)
* ![staff](/ranks/staff.gif)
{% /table %}