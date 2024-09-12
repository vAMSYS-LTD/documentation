---
title: v3 to v5 - Migration Checklist
nextjs:
  metadata:
    title: Migration Checklist
    description: Steps to take and things to check for v3 to v5 Migration.
---

vAMSYS v5 has reached a stable phase, allowing Virtual Airlines (VAs) to begin configuring new settings and utilizing the enhanced features to prepare for the upcoming launch. It is crucial to follow the checklist provided—failure to complete these steps will result in your VA being non-operational on the v5 launch day, and your pilots will be unable to access or perform any activities within your Virtual Airline.

We anticipate v5 will go live on September 24, 2024. While we don’t have a detailed play-by-play for that day yet, expect a few hours of downtime as we transition from v3 to v5. A more precise schedule for September 24th will be communicated closer to the launch date.

To ensure a smooth and unrushed migration, we’ve outlined a series of milestones to be completed over the four weeks leading up to the launch. These milestones are grouped by week:

- **Week 1**: August 26th - September 1st
- **Week 2**: September 2nd - September 8th
- **Week 3**: September 9th - September 15th
- **Week 4**: September 16th - September 22nd

This checklist covers most vAMSYS functionalities and will also serve as a refresher if you haven’t reviewed the settings pages recently. By following this guide, you'll ensure a seamless transition to v5 for your Virtual Airline.

If you haven't yet, please check [Major Changes](/migration) to see what's new to v5.

## v5 DO NOT items:
- Create or Delete Aircraft, Fleets or Airports
- Create or Edit Events
- Accept/Reject Liveries
- Accept/Reject/Invalidate PIREPs
- Ban Pilots
- Use Pilot Invite

To prevent unintended consequences, some features of v5 are temporarily disabled - namely - importers for Creating/Deleting Aircraft, Fleet and Airports (editing is OK); Autorejects; Livery and PIREP review and others.

## I need help / I have encountered a bug
vAMSYS v5 is still work in progress, so things may change or you may come across a bug during the migration.
Our [Discord](/starter#join-our-discord) is open, with #v5-migration-chat dedicated to migration questions and discussion.

For bug reporting [Vision](https://vamsys.vision) is now open.

Our official support is always open - details for which you can find in your Orwell Dashboard in v3 and v5.

## Changelog
Instructions and steps might change between now and the go-live-date. We will note changes here, so you can revisit the sections you have completed already.
#### 2024-09-11
- Changes to Phoenix Dashboard -> Boxes Component  
To implement an improvement request where Boxes should be of even size - they are now arranged in grids of up to 12 items. If you have set up the boxes previously, they may now be too small and you will need to adjust and make additional box components as necessary.

- Changes to Pages - Addition of Rank Restrictions  
Pages can now have rank restrictions. Not a breaking change and existing pages will work fine - noting it down in case it's a feature you want to use for your upcoming v5 pages.
#### 2024-08-30
- Changes to Logos  
Changed as to where logos are shown. To accommodate customisations of color, where Light Background logo is suitable on Phoenix, but not suitable on Orwell or VDS, one logo is now used exclusively for Phoenix whilst the other is used everywhere else.

#### 2024-08-29
- Changes to Documents and Resources Pages URL Structure  
If you made some pages and linked them elsewhere, the URL structure has now changed from /phoenix/documents/custom/[your URL] to /phoenix/documents/[your URL]. Please change your links as needed.
#### 2024-08-26
- Added ACARS Resource Page section.  
If you have created/edited ACARS page, you need to restore new version. You will know you have correct version if the page contains 3 download links - one for windows, 2 for apple.
#### 2024-08-24
- Week 4: Added Style section

## Note on Importers & Already completed items
[Importers and Exporters](/data) remain an advanced feature and is not suitable for everyone. We do not mention them in this migration checklist as all the actions are achievable without them, but you can use them where available, suitable to your needs.

If you were an active participant in v5 beta and v5 sandbox, odds are you may have already completed some of the steps - that is not a problem at all, consider these steps done and dusted, but - if we may - it's always worth double-checking your setup.

## How to Access v5?
Check your Orwell dashboard for the link.

## Week 1 - Initial Settings and Orwell Setup
Week 1 is all about setting up the initial settings in Orwell and making adjustments to the look and feel of the VA, as well as your emails.

### Setting Up Staff
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Staff
* [Here](/orwell/staff) {% align="right" %}
{% /table %}

This step needs to be completed by VA Owner.

v5 has different permission settings than v3. v3 permissions do not carry over to v5 and v5 permissions have no effect on v3. Do note that Staff Title, Email and Hidden flags are shared with v3. Please set up the permissions of your staff, including your own, by enabling desired sub-systems and relevant settings for each member of your team.

### Airline Settings
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Airline
* [Here](/settings/airline#general-settings) {% align="right" %}
{% /table %}

Check and update your Slogan, Website, Login/Register Modifier as needed. Pay special attention to Pilot Support Email - it is mandatory in v5 and you must enter it. It will serve as reply-to email for emails we send to your pilots on your behalf. General > Basic Settings are shared with v3 and changes there will be reflected in v3 as well, including a change in Login/Register Link Modifier.

In Modules section, enable the vAMSYS sub-systems you intend to use. If you were user of the community forums in v3, please check [Hangar](/hangar) documentation and migrate your files over. Community Forums will be retired on v5 launch. 

### Pilot Settings
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Airline
* [Here](/settings/airline#pilot-settings) {% align="right" %}
{% /table %}

Review settings related to pilot account, enable Review Registrations if needed. Settings are shared with v3, functionality introduced in v5, such as registration reviews, will only work in v5 and have no effect in v3.

### Rank & Transfer Settings
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Airline
* [Here](/settings/airline#rank-and-transfer-settings) {% align="right" %}
{% /table %}

Review settings related to ranks and transfer. Settings are shared with v3, functionality introduced in v5, such as external transfers, will only work in v5 and have no effect in v3.

### Activity Settings
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Airline
* [Here](/settings/airline#activity-settings) {% align="right" %}
{% /table %}

Review settings related to pilot activity. Settings are not shared with v3 and will have no effect until v5 go-live-day.

### Booking Settings
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Airline
* [Here](/settings/airline#booking-settings) {% align="right" %}
{% /table %}

Review settings related to bookings. Settings are shared with v3, functionality introduced in v5 will only work in v5 and have no effect in v3. Please note that OFP Format is stored differently from v3 and is a v5 independent setting.

### PIREP Settings
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Airline
* [Here](/settings/airline#pirep-settings) {% align="right" %}
{% /table %}

Review settings related to PIREPs. Settings are shared with v3, functionality introduced in v5 will only work in v5 and have no effect in v3.

### VDS Settings
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> VDS
* [Here](/settings/vds) {% align="right" %}
{% /table %}

Review settings related to VDS. Options have been greatly streamlined compared to v3. Departure and Arrival times as well as Route Tags are enabled by default - if you do not wish to use these features, disable them here.
Airport Manager Rewards settings are shared with v3.

### Share Agreements
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Share Agreements
* [Here](/settings/share-agreements) {% align="right" %}
{% /table %}

Pilot Sharing Agreements are dealt with differently in v5 and are not carried over from v3. You will need to re-enter into agreements.

### Rank Setup
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Ranks
* [Here](/orwell/ranks) {% align="right" %}
{% /table %}

1. Re-upload all rank images. You will know it's done if when editing a rank the 'Rank Icon' field contains an image and not a 'Browse' button. You are more than welcome to use v3 images or any image from our [rank gallery](https://docs.vamsys.dev/orwell/ranks#example-epaulettes).
2. Add Abbreviation - a new v5 only field for rank abbreviation.

Rank edits such as name, hours, points and rank icon will be reflected in v3.

### Logo
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Design -> Logo
* [Here](/orwell/design#logos) {% align="right" %}
{% /table %}

Add your Logo for light and dark backgrounds. These settings are not shared with v3.
Additionally, you can add some background images for your login/register pages.

### Phoenix Dashboard
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Design -> Phoenix Dashboard
* [Here](/orwell/design#phoenix-dashboard) {% align="right" %}
{% /table %}

Set up your Phoenix Dashboard. Default dashboard can be created by clicking 'Default Config' button.

### Social Icons
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Design -> Social Icons
* [Here](/orwell/design#social-icons) {% align="right" %}
{% /table %}

Social icons in v3 are not shared with v5 - you can create them here.

### Emails
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Design -> Emails
* [Here](/orwell/design#emails) {% align="right" %}
{% /table %}

Emails are now editable in v5 - based on the settings you enabled earlier, you will need to set up registration and activity related emails.

### ACARS Sounds
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> ACARS
* [Here](/settings/acars) {% align="right" %}
{% /table %}

If you are using custom Pegasus Sounds, you must reupload them in v5.

## Week 2 - Moving to VDS and Resources
This week we are moving to VDS, where we will complete the pre-requisite setup actions. Once done, we will have a look at the Airport and Aircraft Resource pages and Pages in general. 

### Fleets & Aircraft
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Aircraft Management
* [Here](/vds/aircraft) {% align="right" %}
{% /table %}

Fleets and Aircraft are shared with v3. v5 can read v3 aircraft types and aircraft, but v3 cannot do the same in reverse - you should not create or delete Fleets or Aircraft in v5 - you run a high risk of damaging your v3.
If you wish to reorganise your fleets, this needs to be done in v3 in tandem with route/pair update to keep your v3 functioning.

You do need to update your Fleets in v5:
1. Fleet Name and Type Code settings are shared with v3 and will be reflected there.
2. Fleet Type - select the applicable option. Has no effect to v3.
3. Allowed Prefixes - select the prefixes this fleet operates under. Has no effect to v3.
4. Additional Data - enter desired fields. Shared with v3.
5. Upload custom Image - optional. Has no effect to v3.

Once fleets are edited, there should be no need to work with individual aircraft, however you can edit aircraft and provide overrides where the aircraft deviates from the fleet setting (i.e. different PAX or cargo capacity, different image etc) or if you wish to enter SELCAL, Fin Number or Hex Code.

### Load Factors
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Load Management -> Load Factors
* [Here](/vds/load-management#load-factor-profiles) {% align="right" %}
{% /table %}

v5 introduced load factors not only for containers and cargo aircraft, but for passenger operations as well.
Load Factors are optional, but should you wish - you can create profiles as per documentation.

For large VAs with many Airports skipping this step and setting up your Load Factors after v5 go-live may be a more prudent choice at this time. Airports, other than default LF, are the best place to set your Load Factors. When Airport importers are enabled, you will be able to very quickly assign Load Factors to them.

### Containers
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Airport Management -> Airports
* [Here](/vds/load-management#containers) {% align="right" %}
{% /table %}

Containers are not carried over from v3 and you will need to create new set. Please follow documentation for further guidance.

### Airports
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Airport Management -> Airports
* [Here](/vds/airports) {% align="right" %}
{% /table %}

Shared with v3, including name and base status. 
You may enter Airport Briefing and Airport Information which will show up in Airport Resource Page in Phoenix for your pilots to see.
You can change taxi times - setting shared with v3, set up airport managers and load factors/containers.

### Hubs
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Airport Management -> Hubs
* [Here](/vds/airports#hubs) {% align="right" %}
{% /table %}

Please check [Pilot Movement](/concepts/users-and-pilots#pilot-movement) Concept page for more information.
You must set up at least 1 Hub, or your new pilots will be stuck in limbo.

### Scenery
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Airport Management -> Scenery
* [Here](/vds/airports#scenery) {% align="right" %}
{% /table %}

Optional, but you can set up your preferred sceneries for the airports you operate from.

### Stands
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Airport Management -> Stands
* [Here](/vds/airports#stands) {% align="right" %}
{% /table %}

Inherited from v3.
Optional, but if you have not used Stands system before, you can set up stand groups now.

### Airport and Aircraft Resources
{% table %}
* Where
* Manual {% align="right" %}
---
* Phoenix -> Resources
* None {% align="right" %}
{% /table %}

The data you entered in VDS for Aircraft and Airports will be shown in Resource page for each Airport and Aircraft.

### Pages
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Pages
* [Here](/orwell/pages) {% align="right" %}
{% /table %}

Pages in v5 are treated differently from v3. We made pages easier to create and edit - you should migrate your pages from v3 to v5. Please note that there should be no need for Fleet or Airport pages as we probably already do what you used to do in your custom pages via Airport or Aircraft Resource.

### ACARS Resource Page
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Pages
* [Here](/orwell/pages) {% align="right" %}
{% /table %}

The Pegasus ACARS Resource page is now fully customizable, allowing you to adjust the layout and add content as needed.
We have provided a default you can quickly create by clicking on 3 dots next to Create Page and selecting Restore ACARS Page.
You can customise the page to your liking, including adding any additional information you want.

## Week 3 - Continue with Resources and Pages, Finish Orwell Setup
Airport Information and Briefings, Stand Groups and Pages should keep you plenty busy - you should carry on adding information this week too if you were unable to finish it previous week.

If you haven't already set up [Hangar](/hangar), it's time to consider doing so - especially if you used the community forums in the past to manage your downloads for liveries, checklists etc.

### Alerts and NOTAMs
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Announcements
* [Here](/orwell/announcements) {% align="right" %}
{% /table %}

We have tweaked how NOTAMs work in v5 - not all NOTAMs are 'must read'. It might be a good time to clean-up and edit your alerts and NOTAMs. Please keep in mind that they are shared with v3 and changes will be reflected there.

### Point Presets
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Point Presets
* [Here](/settings/point-presets) {% align="right" %}
{% /table %}

Inherited from v3. Changes here will be reflected in v3 as well.

### Comment Presets
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Comment Presets
* [Here](/settings/comment-presets) {% align="right" %}
{% /table %}

Inherited from v3. Changes here will be reflected in v3 as well.

### AutoReject
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> AutoReject
* [Here](/settings/autoreject) {% align="right" %}
{% /table %}

AutoReject settings in v5 are inherited from v3 and are in sync. You should, under no circumstance, edit autorejects in v5.

### Scoring Groups
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Settings -> Scoring Groups
* [Here](/settings/scores) {% align="right" %}
{% /table %}

PIREP Scoring rules are independent from v3 and you need to create new scoring groups. Please check the manual for steps.

## Week 4 - Consolidation and Routes.
As we enter last week of migration, you should double-check everything above and ensure you are happy with your settings. If you are joining the migration party late, you will need to carefully and meticulously blitz through the previous weeks of migration.

### Style
{% table %}
* Where
* Manual {% align="right" %}
---
* Orwell -> Design -> Style
* [Here](/orwell/design#style) {% align="right" %}
{% /table %}

Tweak colors or upload custom CSS. Does nothing in v3 and stylesheets used in v3 will not work in v5.

### Routes
{% table %}
* Where
* Manual {% align="right" %}
---
* VDS -> Route Management -> Routes
* [Here](/vds/routes) {% align="right" %}
{% /table %}

We are leaving Routes as the last migration item for a reason. Routes in v3 are not synced to v5 and routes entered in v5 are not visible in v3. We imagine there would have been at least one route change between week 1 and now - hence it makes sense to add routes last. Routes you will add now will be the routes available to pilots when v5 goes live.
We have prepared [Route](/vds/routes) manual explaining how routes work in v5.