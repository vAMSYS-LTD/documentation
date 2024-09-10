---
title: AutoReject Rules
nextjs:  
    metadata:  
        title: AutoReject Rules  
        description: Comprehensive guide to managing PIREP AutoReject rules in vAMSYS using the Orwell interface.
---
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Settings -> AutoReject
*  {% align="center" %}
* Can Manage Score and Preset Settings {% align="right" %}
{% /table %}

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

AutoRejects are a collection of options allowing for automatic rejection or invalidation of PIREPs. This ensures that PIREPs that do not meet certain criteria are handled automatically, saving staff time and maintaining the quality of PIREPs.

## AutoReject Rule Outcomes

- **Failed**: PIREP is sent to Staff Review.
- **Rejected**: PIREP is rejected with no points awarded, but hours still credited to the Pilot.
- **Invalidated**: PIREP is invalidated - no points and no hours are awarded to the Pilot for this PIREP.

## Managing AutoReject Rules

1. **Access the AutoReject Rules Section**: Navigate to the AutoReject section under Settings.
2. **Create a New AutoReject Rule**: Click on the 'New AutoReject Rule' button to open the creation form.

#### New AutoReject Rule Form Fields:
- **Failure Rule**: Select the failure rule from the available options.
- **Rule Name**: Enter a name for the rule as it will appear in the PIREP Scorer if triggered.
- **Action**: Select the action (Failed, Rejected, Invalidated).
- **Reply Needed**: Toggle to require a reply from the pilot before the PIREP is processed further. Only visible if the action is set to 'Failed'.
- **Rule Parameters**: Depending on the selected rule, additional parameters may be required, such as time limits, coefficients, weight thresholds, etc.

## Viewing and Editing AutoReject Rules

- **View AutoReject Rules**: The table displays all the enabled AutoReject rules for your airline, including the rule name, category, action, and whether a pilot reply is required.
- **Edit AutoReject Rules**: Click on the 'Edit Rule' action to open the edit form where you can update the rule name, action, and parameters.
- **Delete AutoReject Rules**: You can delete an AutoReject rule by confirming the deletion. This will not affect existing PIREPs but will not be applied to future ones.

## Available AutoReject Rules

The following are the available AutoReject rules that a VA can enable:

### Livery Rules
1. **Livery Name**: Flags new liveries for review by marking the PIREP as Failed.
2. **Rejected Livery Rejector**: Automatically rejects PIREPs using a rejected livery.

### Flight Length and Taxi Rules
3. **Excessive Taxi In**: Flags PIREPs with longer than expected taxi-in times.
4. **Excessive Taxi Out**: Flags PIREPs with longer than expected taxi-out times.
5. **Excessive Total Taxi Time**: Flags PIREPs exceeding combined taxi times.
6. **Excessive Flight Length (Scheduled)**: Rejects PIREPs for flights exceeding scheduled length by a set coefficient or time.
7. **Excessive Flight Length (Average)**: Rejects PIREPs for flights exceeding average length by a set coefficient or time.

### Fuel and Landing Rules
8. **Fuel Increase In Air**: Rejects PIREPs if mid-air refueling is detected.
9. **Excessive Landing**: Rejects PIREPs exceeding a set FPM value.
10. **Excessive Landing 2**: Provides an additional layer for setting a stricter FPM threshold.
11. **Soft Landing**: Rejects PIREPs landing softer than a set FPM value.
12. **Soft Landing 2**: Provides an additional layer for setting a stricter soft landing threshold.
13. **Negative Points**: Rejects PIREPs with a negative point total.

### Mandatory and Miscellaneous Rules
14. **Landing Away From Destination**: Automatically fails PIREPs detected as diversions (enabled by default).
15. **Multiple Landings**: Automatically fails PIREPs with multiple landings (enabled by default).
16. **Forced Scheduled Flight PIREP Review**: Requires PIREPs to be reviewed if they are scheduled flights.
17. **Forced Scheduled Empty Flight PIREP Review Only**: Requires review for empty flight PIREPs.
18. **Forced Repositioning Flight PIREP Review**: Requires review for repositioning flight PIREPs.
19. **Time Acceleration Use**: Rejects PIREPs if time acceleration is detected.
20. **Paused during Flight**: Flags PIREPs with excessive pauses during the flight.

## Managing Rule Parameters

Each AutoReject rule may have specific parameters that need to be configured. These parameters ensure that the rule accurately reflects your VA's standards and policies.

#### Common Rule Parameters:
- **Silent Rule**: Determines if the rule is hidden from scorer/comments if triggered.
- **Maximum Time**: Sets the inclusive maximum time for specific rules.
- **Coefficient**: Adjusts the anticipated or scheduled times by a specific fraction.
- **Weight Thresholds**: Sets the weight limits for specific rules.
- **Buffer Times**: Specifies buffer periods before the rule is triggered.

### Detailed Descriptions and Context for Specific Rules

#### Livery Name AutoReject
- **Description**: Detects new liveries flown for your VA. Each time a new livery is detected, the PIREP is marked as Failed for review.

#### Rejected Livery Rejector
- **Description**: Automatically rejects PIREPs using a livery that has been marked as rejected in your VA.

#### Excessive Taxi In/Out/Total AutoRejects
- **Description**: Flags PIREPs with longer than expected taxi times.
- **Context**: These settings are most beneficial when taxi time is included in the total flight time. Maximum Time is the upper limit for taxi times, while Coefficient allows for some leeway.

#### Excessive Flight Length (Scheduled/Average)
- **Description**: Rejects PIREPs for flights exceeding scheduled or average length by a set coefficient or additional time.
- **Context**: Coefficient should be set as a fraction to allow leeway. Maximum Time provides a safeguard against false positives.

#### Fuel Increase In Air
- **Description**: Rejects PIREPs if mid-air refueling is detected, indicating an unrealistic fuel increase during flight.

#### Landing Away From Destination and Multiple Landings
- **Description**: Automatically fails PIREPs detected as diversions or with multiple landings. These rules are crucial for some vAMSYS functionality and cannot be disabled.

#### Paused during Flight
- **Description**: Flags PIREPs with excessive pauses during flight time, ensuring flight continuity.

### Best Practices

1. **Regularly Review Rules**: Ensure your AutoReject rules align with your current VA policies and operational standards.
2. **Communicate with Pilots**: Make sure pilots are aware of the AutoReject criteria to avoid unnecessary rejections and frustrations.
3. **Test New Rules**: Before fully implementing new rules, test them to ensure they work as intended without causing false positives.
4. **Keep Rules Updated**: Update the rules periodically to reflect any changes in VA policies or operational procedures.

