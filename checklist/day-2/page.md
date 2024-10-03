---
title: Day Two
nextjs:  
    metadata:  
        title: Day 2 - Building up on yesterday
        description: Day 2 checklist for new VAs where we will build on Day 1 and explore different vAMSYS Features
---

Day two builds on what you did in Day 1. We will use the fleets you created to set up PIREP Scoring and delve into other vAMSYS features.

By the end of today you will have completed all the starting steps needed to run a VA on vAMSYS, leaving only routes for Day 3.

vAMSYS has a feature allowing you to configure automatic actions taken on PIREPs based on certain rules and has ability to add/remove points. We will explore them now.

First - permissions. Grant yourself the following:
- **Pilot Announcement Settings**
  - Enable all 8 options
- **PIREP and Livery Settings**
  - Enable all 4 options
- **Settings**
  - Can Manage Score and Preset Settings
  - Can Manage ACARS Settings
- **VDS Settings**
  - Can Manage Routes
  - Can Manage All Routes

Click Save changes and then press `F5` or `Command+R` on your keyboard to reload vAMSYS with your new permissions.

## Orwell
### Settings -> AutoReject
Autorejects are actions performed automatically on every PIREP filed using Pegasus.

They are designed to give you the tools to flag undesirable PIREPs or pilot activity - like long pauses, harsh landings and more.

We explain AutoReject options [here](/settings/autoreject). Consider adding AutoRejects which suit your Virtual Airline needs.

### Settings -> Scoring Groups
Pilots like to be rewarded with points - PIREP Scoring groups allow for that.

Scoring groups apply to Fleets of aircraft (that's why we created them yesterday) - create scoring group or groups encompassing all your fleets [using this guide](/settings/scores).

### Settings -> ACARS
Check the [ACARS](/settings/acars) section - you may not have anything to do there now, but it's good to know you have the option in the future.

### Settings -> Presets
There are [Point Presets](/settings/point-presets) and [Comment Presets](/settings/comment-presets) - again, you probably won't need to do anything there yet, but bear in mind this option exists if you find yourself sending the same comment over and over - or manually applying same points for some reason.

### Announcements
vAMSYS has Alerts (which show on Phoenix and Pegasus Dashboards) and NOTAMs - notices to your pilots.

Please read more about [Alerts](/orwell/announcements#alerts) and [Notices](/orwell/announcements#notams).

If you would like to use Notices, please enable NOTAM in Orwell -> Settings -> Airline -> Modules.

## VDS
### Load Management -> Load Factors
vAMSYS uses Load Factor profiles to determine what is being loaded into your virtual planes - be it passengers, luggage, freight or containers.

Load factor documentation is [here](/vds/load-management#load-factor-profiles) - if you are not happy with default profile - make your sets. You can then set them as default or apply to your Airports or, tomorrow - routes.

### Load Management -> Containers
If, when creating your fleets, you opted to create fleets carrying cargo containers - check the documentation [here](/vds/load-management#containers) on how to create them. Just like Load Factor Profiles, containers will need to be assigned to airports or routes.

### Airport Management -> Airports
It's time to create your remaining airports, now that you have Load Factors created and perhaps even invited few members of your team.

Quick note on [Airport Managers](/vds/airports#airport-managers) - if they do not have the VDS Permission to edit all routes - they will be limited to seeing and creating routes to/from airports they are Airport Managers of. This option is to limit access to all your routes in cases where the person is responsible for only a limited subset.

### Aircraft Management -> Aircraft
We made Fleets yesterday, but they do not have any aircraft - [add](/vds/aircraft#creating-editing-fleet-and-aircraft) at least one aircraft to each fleet.

## Day 3
Before proceeding to Day 3, just like yesterday - revise the actions of today. Tons of configuration can be made using Load Factors; You can also use the time before Routes unlock to start creating Airport Briefings or Airport information; Check out [Scenery](/vds/airports#scenery) and [Stand](/vds/airports#stands) options if you think your VA would like to use them.

Once 3 days (72 hours) have passed since your VA was created - proceed to [Day 3](/checklist/day-1)