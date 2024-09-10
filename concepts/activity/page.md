---
title: Activity Requirements
nextjs:  
    metadata:  
        title: Activity Requirements  
        description: Detailed explanation of how Activity Requirements work in vAMSYS, including settings, holiday management, and examples.
---
Activity Requirements in vAMSYS allow VAs to automatically manage pilot activity, ensuring consistent engagement. Pilots can also take holidays, pausing their activity requirements for a set period.

The two Activity Options (Ongoing and Initial) provide flexibility in how you set them up for your Virtual Airline. Both options are optional, allowing VAs to tailor the system to their needs.

## Activity Requirement Types

### PIREPs or Hours

Activity requirements can be based on the count of PIREPs or the number of hours flown. Both types require an amount to determine whether the activity requirement has been met.

- **PIREPs**: The number of PIREPs that need to be filed and accepted within the specified period.
- **Hours**: The number of hours that need to be flown and recorded within the specified period.

### Additional Options

- **Rejected PIREPs Count**: Include PIREPs with the status 'rejected' in activity requirements.
- **Invalidated PIREPs Count**: Include PIREPs with the status 'invalidated' in activity requirements.

These settings apply to both ongoing and initial activity requirements equally.

## Activity Period

### Ongoing Activity Requirement

The Activity Period for ongoing requirements is a rolling period of days during which the set activity requirement must be met. Activity checks take place daily at 16:00 UTC.

For example:
- **Current Date**: January 1st
- **Activity Period**: 14 days
- **Type**: Based on PIREPs
- **Amount**: 1 PIREP

If the last accepted PIREP is dated December 30th, the pilot meets the activity requirement from January 1st to January 14th. On January 15th, if no new PIREP is filed in the preceding 14 days (in this case Jan 1 16:00 to Jan 15 16:00), the pilot no longer meets the activity requirements, and the grace period begins (if set). An automated email will warn the pilot.

### Initial Activity Requirement

Initial Activity Requirements apply to new pilots, requiring them to file a PIREP or fly for a set number of hours within a certain number of days of joining the VA. Initial activity checks occur daily at 16:15 UTC.

For example:
- **Initial Activity Period**: 7 days
- **Type**: Based on PIREPs
- **Amount**: 1 PIREP

A new pilot must file at least one accepted PIREP within 7 days of joining to meet the initial activity requirement.

#### Initial Activity Reminder

When Initial Activity Requirements are enabled, the Initial Activity Reminder option becomes available. This option specifies how many days after a pilot's registration, if activity requirements are not met, a reminder will be sent. The Initial Activity Reminder period must be shorter than the Initial Activity Period.

## Grace Period

The Grace Period gives pilots extra days to meet ongoing activity requirements after being flagged for non-compliance. At the start of the grace period, the pilot will receive an automated email warning and a notice will be placed on the Phoenix Dashboard.

If a pilot does not meet the activity requirement by the end of the grace period, they are removed from the VA. VA Owners and Staff are automatically exempt from activity requirements. Additionally, pilots can be added to the activity-ignore list, and activity requirements will not apply to them.

**Note**: The Grace Period does not apply to Initial Activity Requirements.

## Holiday Management

Holidays allow pilots to pause activity requirements for a set period. During holidays, pilots cannot access the VA, book flights, or file PIREPs. If a pilot performs any of these actions, the holiday ends early, and unused days are returned to their allowance.

### Holiday Settings

- **Enable Holidays**: Allow pilots to take holidays.
- **Holiday Allowance**: Number of holiday days per year.
- **Pilot Account Age Requirement**: Number of days a pilot must be a member before taking holidays.

For example:
- **Holiday Allowance**: 90 days
- **Account Age Requirement**: 30 days

Pilots can take up to 90 days of holidays per year after being a member for 30 days. The holiday allowance resets on their yearly membership anniversary.

**Tip**: If initial activity requirements are enabled, it's best to set the Pilot Account Age Requirement to exceed the initial activity period.

## Important Notes

### Non-Retroactive Initial Activity Requirements

Initial Activity Requirements apply only to pilots who registered within the specified period before the current date. The target date range for monitoring adjusts daily based on the set period.

For example:
- **Current Date**: January 1, 2024
- **Initial Activity Period**: 7 days

On January 1, 2024, the system monitors pilots who registered on or after December 25, 2023. On January 2, 2024, it monitors those who registered on or after December 26, 2023, and so on.

This rolling window ensures that only recently registered pilots are subject to the initial activity requirements, while pilots who registered before the specified period are not affected.

### Automation and Exemptions

- **Automation**: Activity checks and notifications are automated, ensuring timely management of pilot activity.
- **Exemptions**: VA Owners and Staff are exempt from activity requirements. Additionally, specific pilots can be added to an activity-ignore list, exempting them from these requirements.

By setting up Activity Requirements, VAs can ensure consistent pilot engagement and manage pilot activity efficiently. For detailed settings, refer to the [Airline Settings](/settings/airline#activity-settings) page.