---
title: Liveries and PIREPs
nextjs:  
    metadata:  
        title: Liveries and PIREPs
        description: Comprehensive guide to managing liveries and PIREPs in vAMSYS, including review and management.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

Livery management in vAMSYS ensures that pilots use the correct liveries for their flights. Pegasus, our ACARS system, detects and records livery names from the simulator's configuration files. This helps in maintaining consistency and preventing misuse, such as flying the wrong aircraft or using multiple VA liveries simultaneously.

## Pilot Notes
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Liveries & PIREPs -> Pilot Notes
* {% align="center" %}
* Can Review PIREPs & Claims {% align="right" %}
{% /table %}

This section allows the Staff to add a custom Internal Pilot Notes, which are visible only to other Staff members. These notes can for example include information about disciplinary actions, or other information relevant to the Staff about a specific pilot.

### New Pilot Note fields
- **Pilot**: Pilot ID (RYRxxxx)
- **Internal Pilot Note**: Field for the relevant note

### Table Columns

- **Username**: Pilot ID (RYRxxxx)
- **Name**: Name of the pilot
- **Note**: Note itself
- **Entered By**: Name of the Staff member who created the note
- **Entered On**: Date and time when the Note has been created

## PIREP Comments
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Liveries & PIREPs -> PIREP Comments
* {% align="center" %}
* Can Review PIREPs & Claims {% align="right" %}
{% /table %}

This section will allow you to see all comments which were posted in the PIREPs, including automatic comments made by vAMSYS Robot based on the Auto-Reject Rules.

### Filtering

The filter will allow you to filter-out the Comment Type

- **All Comments**: All comments posted
- **Only Pilots**: Only comments made by the Pilot
- **Only Robot**: Only comments made by the vAMSYS Robot during the validation based on the Auto-Reject Rules

### Table Columns

- **Username**: Pilot ID (RYRxxxx)
- **Name**: Name of the pilot
- **PIREP**: PIREP ID
- **Comment**: Comment added
- **Entered On**: Date and time when the Note has been created

## Livery Review
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Liveries & PIREPs -> Livery Review
* {% align="center" %}
* Can Review Liveries {% align="right" %}
{% /table %}

The Livery Review section allows VAs to review newly detected liveries. This feature, which can be enabled or disabled, is primarily used to prevent pilots from flying incorrect aircraft or liveries. We recommend enabling Livery Review for all your fleets by adding 'Livery Name' AutoReject to your VA.

### Table Columns

- **Livery Name**: The livery name reported by the simulator.
- **Fleet Name & Code**: The name and code of the fleet.
- **Callsign & Flight #**: The callsign and flight number.
- **Registration Booked**: The registration number and name of the aircraft booked.
- **Pilot**: The username and full name of the pilot.
- **PIREP ID**: The PIREP ID of the booking.
- **Route ID**: The Route ID of the booking.

### Actions

Accessible via the 3-dot menu on each row:

- **View PIREP**: Opens the PIREP view page in a new tab.
- **View Route**: Opens the route in VDS.
- **Accept**: Marks the livery as accepted. Future uses of this livery will not trigger livery review. Pending PIREPs with this livery will be approved if that is the only reason they are pending review.
- **Reject Livery Only**: Marks the livery as rejected without affecting pending PIREPs. AutoReject rules will determine what happens when this livery is flown next time.
- **Reject with PIREPs**: Marks the livery as rejected and rejects pending PIREPs. AutoReject rules will determine what happens when this livery is flown next time.
- **Reject and Invalidate**: Marks the livery as rejected and invalidates pending PIREPs. AutoReject rules will determine what happens when this livery is flown next time.
- **Ignore Livery**: Ignores the livery for future reviews without affecting pending PIREPs. Future uses of this livery will automatically put the PIREP for Staff Review without triggering a new livery review.

## Livery List
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Liveries & PIREPs -> Livery List
* {% align="center" %}
* Can See All Liveries {% align="right" %}
{% /table %}

The Livery List contains all liveries used in your VA.

### Table Columns

- **Livery Name**: The livery name reported by the simulator.
- **Fleet Name**: The name of the fleet.
- **Fleet Code**: The code of the fleet.
- **Accepted**: Indicates if the livery is accepted.
- **Rejected**: Indicates if the livery is rejected.
- **Ignored**: Indicates if the livery is ignored.
- **Last Changed By**: The user who last changed the livery status.
- **Last Changed At**: The date and time of the last status change.

### Actions

Accessible via the 3-dot menu on each row:

- **Accept**: Marks the livery as accepted. Future uses of this livery will not trigger the Livery Name or Livery Rejector AutoReject rules.
- **Reject**: Marks the livery as rejected. AutoReject rules will determine what happens to the PIREPs who fly this livery in the future.
- **Ignore**: Marks the livery as ignored. Future uses of this livery will automatically put the PIREP for Staff Review without triggering a new livery review.

These actions do not retroactively affect PIREPs or those pending in the review queue.

## Best Practices for Liveries

- **Enable Livery Review**: For all fleets to maintain consistency and prevent misuse.
- **Regularly Update**: Review the Livery List and update statuses to reflect current usage and policies.
- **Use AutoReject Rules**: To automate the livery management process and ensure compliance with VA policies.

By effectively managing liveries, VAs can ensure a high standard of operation and consistency within their fleet, providing a better experience for pilots and staff alike.

## PIREP Review
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Liveries & PIREPs -> PIREP Review
* {% align="center" %}
* Can Review PIREPs & Claims {% align="right" %}
{% /table %}

PIREP Review section is a queue of PIREPs waiting for Staff review, based on triggered PIREP Auto-Reject rules. When you click on the PIREP Review menu option, it will automatically take you to the first PIREP in Queue, which needs review.

### Actions

Actions you can perform on the PIREP

- **Accept PIREP**: Sets an Accepted status to the PIREP (Awarded points, awarded hours)
- **Reject PIREP**: Sets a Rejected status to the PIREP (No points, awarded hours)
- **Invalidate PIREP**: Sets an Invalidated status to the PIREP (No points, no hours)
- **Set as Reply Needed**: Sets a Reply Needed state, meaning the Pilot has to react to the PIREP before being able to book or start logging any flight. **In that case, it is needed to leave a comment, so the Pilot knows what to reply to.**
- **PIREP List for Pilot**: Shows a list of Pilot's PIREPs

### Other sections
- **Internal Pilot & PIREP Notes**: All internal Pilot and submitted PIREP Notes will be visible here. These notes are not visible to the Pilot.
- **PIREP Comments**: All comments from the vAMSYS Robot and the Staff can be visible there. These comments are visible to the Pilot.
- **PIREP Details**: All the details regarding the booked flight major logged data are visible here
- **Flight Details**: All the logged flight details are visible here. All the times are Zulu (UTC) times
- **PIREP AutoReject**: List of PIREP AutoReject rules which were triggered by the PIREP
- **Points**: The awarded/deducted points from the Scoring groups
- **Route**: Pilot route, which the pilot had filed during the booking, and a Company Route (if filed in the VDS), which is the route from the VDS. Calllsign, Flight Number, Cost Index, and Flight Level correlate to the values set in the VDS to the booked route
- **Weather**: Logged METARs from the time of departure and arrival.
- **Compare**: Statistics of average values for other PIREPs between relevant citypair.
- **Data Log**: Log output from Pegasus

## PIREP List
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Liveries & PIREPs -> PIREP List
* {% align="center" %}
* Can See All PIREPs & Claims {% align="right" %}
{% /table %}

This page allows you to view all the PIREPs in your VA. You can view any PIREP by clicking on an eye icon in the PIREP List, and the interface of the PIREP is the same as in the PIREP Review section.

### Filtering
- **Departure**: Departure Airport Name/IATA/ICAO Code
- **Arrival**: Arrival Airport Name/IATA/ICAO Code
- **Fleet**: Fleet ID / Name
- **PIREP Type**: Type of PIREP/Flight
- **Reply Needed**: Whether the PIREP is or is not in the Reply Needed state
- **PIREP Status**: Status of the PIREP
- **Regular Points**: Awarded Regular Points range
- **Bonus Points**: Awarded Bonus Points range
- **FPM**: Logged landing rate in feet/min
- **Filed At**: PIREP filing date
- **Time**: PIREP filing time
- **Username**: Pilot ID (RYRxxxx) of the pilot who filed the PIREP

### Table Columns
- **ID**: PIREP ID
- **Pilot**: Pilot ID (RYRxxxx) and Name
- **Callsign**: Filed Callsign from the booking
- **Departure**: Departure Airport Name/IATA/ICAO Code
- **Arrival**: Arrival Airport Name/IATA/ICAO Code
- **Aircraft**: Aircraft registration and a Fleet used
- **Type**: Type of PIREP/Flight
- **FPM**: Logged landing rate in feet/min
- **Time**: Logged flight time
- **R-Pts**: Logged Regular points
- **B-Pts**: Logged Bonus points
- **Rply**: Reply Needed status
- **Status**: PIREP status and a timestamp of when the status was assigned
- **Network**: Logged online network
- **Sim**: Logged flight simulator
