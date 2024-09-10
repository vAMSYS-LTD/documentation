---
title: v3 to v5 - Major Changes
nextjs:
  metadata:
    title: v5 Major Changes
    description: Notes on the biggest changes from vAMSYS version 3 to version 5.
---

vAMSYS v5 is a complete rewrite from the ground up, enabling us to introduce several significant changes to the platform's core functionality. This document outlines the most impactful differences between vAMSYS v3 and v5.

## VDS
### Routes Take Center Stage
One of the most substantial changes in v5 is the elimination of the "Pairs" concept. In v3, routes were structured as airport pairs (connections between two airports), with each pair containing multiple routes. In v5, the focus shifts entirely to routes, which now define both the connection and routing between airports.

#### Repositioning Flights
Repositioning flights are no longer automatically generated in v5. If you wish to include repositioning or transfer flights, you'll need to manually create a new route using the "[Repositioning](/vds/routes#repositioning)" type between the desired airports.

#### Manual Route Creation
With the removal of pairs, vAMSYS v5 no longer automatically generates routes. If you need a new route, you’ll need to create it manually. However, this provides greater control and customization over your routes, allowing you to create routes with specific start dates.

#### Expanded Route Types
v5 introduces new route types, offering greater flexibility. For example, you can now create "[Jumpseat](/vds/routes#jumpseat)" routes or designate routes for training or VFR (Visual Flight Rules). There’s also native support for routes that start and end at the same airport.

#### Real-Time Updates
Routes in v5 are not cached, meaning changes go live almost immediately. This contrasts with v3, where route changes could take up to 10 minutes to activate. Scheduled future routes are checked and activated every two minutes..

### Introduction of Hubs
In v5, the concept of "Bases" has been expanded. While bases still signify the home airports of your Virtual Airline, they now feature prominently as hubs within the system. Hubs can contain multiple airports and offer additional features, such as their own leaderboards and the ability to set a default hub for new pilots.

### Enhanced Functionality
v5 introduces several quality-of-life improvements, making it easier to manage routes and other VDS elements:

- **Bulk Edits & Copying Routes:** Streamline route management with bulk editing and duplication features.
- **Tags:** Apply custom tags to routes (e.g., "Monday," "Historic") to filter and manage them more effectively.
- **Stands Management:** The new map-based interface simplifies the management of airport stands.
- **Advanced Cargo System:** Container management is now more powerful, with options for "incompatible containers."

### Integration of Optional Features
Features like Stands and the Advanced Cargo System, previously optional in v3, are now part of the core functionality in v5, simplifying the overall user experience.

### Fleets Over Aircraft Types
In v5, "Aircraft Types" have evolved into "Fleets." This change reflects the modern needs of Virtual Airlines (VAs), which often operate multiple fleets of the same aircraft model. Fleets can now be managed with a range of new options, including assigning specific routes and callsigns. This streamlines aircraft management and reduces errors, such as pilots booking routes without available aircraft.

### Retirement of Areas and Area Managers
vAMSYS v5 no longer has Areas or Area Managers. Instead, airports can have Airport Managers assigned to them. Staff Members without the Can Manage All Routes permission will only be able to interact with routes to/from that airport only.
Please note that that functionality is still work in progress - we expect it to be complete on v5 launch. Currently all Staff Members with VDS access can edit all routes. 

## Orwell
### PIREP Scoring & AutoRejects
PIREP scoring has been significantly enhanced in v5. Scoring is now based on Scoring Groups, which can be assigned to specific fleets. This allows for more granular control over scoring criteria. AutoRejects have also been improved, with fewer mandatory rejections and the option to disable certain features like livery management.

### Improved Pilot Management
Pilot management in v5 has been overhauled, making it easier to manage pilot activities, award ranks or badges, and review registrations. The new system offers better insights into pilot activity, holidays, and bans.

### Events
vAMSYS v5 introduces multi-leg events and tours, with numerous enhancements. Events can now repeat and have restrictions based on network, rank, fleet, or callsign. Additionally, event registrations can be managed through Orwell. However, the slot feature from v3 has been temporarily removed and is expected to be revisited post-launch.

### Badges
v5 introduces the Badges feature, allowing VAs to award pilots with badges based on various criteria, such as participation in events or the number of passengers carried.

### Emails
v5 now requires VAs to have a public support email. While vAMSYS continues to send emails on behalf of VAs (e.g., registration, activity warnings), the reply-to address will be your support email. Additionally, VAs can now edit the content of these emails.

### Improved Exporters & Importers
v5 has a new set of exporters and importers. They are designed to be non-blocking, faster and more intuitive. Importers will now collate failure reasons for each line and we removed importer limits. Check out the [Documentation](/data) for more.

## Phoenix
### Manual PIREPs
v5 has forgotten all about the Manual PIREPs of v3. The claims system is the new default and replaces the manual PIREP functionality.

### Resource Pages
v5 offers greater control over resource pages:

- **Pegasus ACARS:** The Pegasus ACARS page is now fully customizable, allowing you to adjust the layout and add content as needed.
- **Airport and Aircraft Resources:** All airports and aircraft are listed in the resources pages, with detailed information available for each. Pilots can "favorite" specific airports and aircraft, prioritizing them when booking flights.

### Style Customizations
In addition to CSS overrides, v5 allows for quick and easy color customizations, enabling VAs to personalize the look and feel of Phoenix.

### Custom Dashboard
Phoenix's dashboard is now customizable, allowing VAs to arrange and prioritize the available building blocks to suit their needs. The range of customizable options will continue to expand in the future.

## General
### Sessions
v5 tracks which VA you are logged in. Opening a new browser tab and switching to a different VA will invalidate the previously opened vAMSYS instances.

### Speed and Performance
Some thought and care went into making vAMSYS performant and not bog down under load - you probably have already seen these improvements in v3 as well. v5 takes it a step further and in addition to database optimisations which affected v3 further tweaks how we deal with data. 

### New Maps
v5 maps now use globe projection across all our maps. Our testing has shown that we also resolved all instances of lines jumping across the map for antimeridian crossings - something sure to make a lot of people happy. Globe projection also allows to visualise routes more clearly - please be aware that polar crossings above 85N or S may have some issues - unfortunately it's the issue with the mapping tech we use - it's not fully there yet for polar crossings and the lines may look odd. However, the overall improvement warranted the change, despite this one drawback.