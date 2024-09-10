---
title: Liveries
nextjs:  
    metadata:  
        title: Liveries  
        description: Comprehensive guide to managing liveries in vAMSYS, including review and list management.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

Livery management in vAMSYS ensures that pilots use the correct liveries for their flights. Pegasus, our ACARS system, detects and records livery names from the simulator's configuration files. This helps in maintaining consistency and preventing misuse, such as flying the wrong aircraft or using multiple VA liveries simultaneously.

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

## Best Practices

- **Enable Livery Review**: For all fleets to maintain consistency and prevent misuse.
- **Regularly Update**: Review the Livery List and update statuses to reflect current usage and policies.
- **Use AutoReject Rules**: To automate the livery management process and ensure compliance with VA policies.

By effectively managing liveries, VAs can ensure a high standard of operation and consistency within their fleet, providing a better experience for pilots and staff alike.