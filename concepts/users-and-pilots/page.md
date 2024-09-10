---
title: Users and Pilots
nextjs:  
    metadata:  
        title: Users and Pilots  
        description: Understanding the distinction and management of Users and Pilots within the vAMSYS platform.
---

vAMSYS is a multi-tenant application, meaning each VA operates independently within the system. Each VA has its own settings and data, ensuring privacy and separation of information between VAs.

## User Accounts

User accounts are centrally managed by vAMSYS, with vAMSYS LTD acting as the data controller. Personal information such as name and email is provided to fulfill the user's request to register with your VA.

### Editing User Account

- **Protection**: User information is protected against unauthorized disclosure and editing. Only Team vAMSYS or the user can edit user account details.
- **Name Capitalization**: The only exception is the name capitalization action in the pilot list, which standardizes the format of user names (e.g., john doe to John Doe).

### Flagging Suspicious Names

[vAMSYS ToS](https://vamsys.io/legal) requires users to provide their real names and forbids multiple accounts. VA Owners and Staff can flag suspicious names for Team vAMSYS to review. If a name is deemed suspicious, the account is locked until the name is updated.

## Pilot Accounts

When users register with your VA, a new Pilot Account is created and linked to the user. This account allows you to see user information and manage their participation in your VA.

### Registration Review

You can enable [Registration Review](/settings/airline#pilot-settings) to manually approve new registrations. This process includes reviewing the user's name, email, and online network IDs. Pilots see a message set in the 'Review Page Message for Pilots' section of [Pilot Settings](/settings/airline#pilot-settings).

### Pilot Usernames

Pilot usernames are assigned incrementally:
- **Format**: Start with your VA’s ICAO prefix followed by a four-digit number (e.g., HTA0002).
- **Exceptions**: Team vAMSYS members have usernames suffixed by their names (e.g., HTA-Lukas).

vAMSYS Robot will always have 0001 suffix, the person creating the VA will be assigned 0002 and so on.

Pilot usernames can not be edited or swapped or otherwise reassigned.

### Pilot Account Removal

Pilot accounts can be deleted manually via the [Pilot Table](/orwell/pilots#pilot-list), through [Activity Requirements](/settings/airline#activity-settings), or due to [VA or Platform Ban](/orwell/pilots#pilot-bans). Manually removed pilots are not notified.

### Pilot Freezing

Pilots can freeze their accounts, putting them on hold for 60 days. If they do not log in during this period or are not removed for another reason, the account is deleted.

### Pilots Rejoining

All deletions, except manual ones, apply a permanent removal flag preventing re-registration. You can remove this flag to allow rejoining.

#### Rejoin Reuse

Allows pilots to reuse their previous username when rejoining. For example, a pilot with HTA1249 can regain the same username upon rejoining instead of getting new username of HTA2358 for example.

#### Rejoin Restore

Restores previous bookings and PIREPs. When rejoining, the pilot’s old PIREPs can be reactivated, even if it's a new pilot account.

## Pilot Movement

### Setting Up Airports and Hubs

As part of the setup process, a VA must set up some airports and at least one hub. Detailed documentation on how to do this is available [here](/vds/airports).

### Pilot Starting Location

When a pilot joins a VA, they are prompted to select their starting location. The following message is presented to them:

"You have no location set. Let\'s get you on the ground!  
Simply pick a hub and the airport you would like to start your journey from.  
Selecting a hub and starting airport **does not** limit you to flying to/from that hub or airport only.  
You can explore our entire network of routes from day one and even change your Hub in the future."

### Full Network Access

In vAMSYS, pilots have the ability to book any flight within your VA. The system does not support rank restrictions, fleet qualifications, or exclusive airports—pilots have unrestricted access to the entire route network.

### Jumpseating

If jumpseats are enabled (see [Booking Settings](/settings/airline#booking-settings)) or custom jumpseat routes are created (see [Jumpseat Routes](/vds/routes#jumpseat)), pilots can jumpseat around the route network. This effectively allows pilots to change their "current location" to a new airport.