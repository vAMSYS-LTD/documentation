---
title: Scoring Groups
nextjs:  
   metadata:  
      title: Scoring Groups  
      description: Detailed guide to managing scoring groups in vAMSYS using the Orwell interface.
---
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Settings -> Scoring Groups
*  {% align="center" %}
* Can Manage Score and Preset Settings {% align="right" %}
{% /table %}

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

In vAMSYS, Scoring Groups allow you to define different scoring rules for various fleets within your VA. This enables a more tailored scoring system for different types of aircraft, ensuring that pilots are evaluated fairly based on the specific aircraft they are flying.

## Scoring Groups
The purpose of Scoring Groups is to assign them to Fleets. Each rule in the scoring group will be evaluated against PIREPs (Pilot Reports) flown using an aircraft in that fleet, and based on the rules enabled, points will be awarded.

### Creating and Managing Scoring Groups

1. **Access the Scoring Groups Section**: Navigate to the Scoring Groups section under Settings.
2. **Create a New Scoring Group**: Click on the 'New Scoring Group' button to open the creation form.

#### New Scoring Group:
- **Group Name**: Enter a name for the scoring group. This name will be displayed in the Phoenix Scores page.
- **Applicable Fleets**: Select the fleets (aircraft types) that will be included in this scoring group. Only aircraft types not currently assigned to another scoring group will be available for selection.

#### Edit Scoring Group:
- **Group Name**: You can edit the name of the scoring group.
- **Applicable Fleets**: You can update the fleets included in this scoring group. Fleets that are currently associated with other scoring groups can be reassigned.

### Viewing and Editing Scoring Groups

- **View Scoring Groups**: The table displays all the scoring groups for your airline, including the group name, applicable fleets, and the number of enabled scoring rules.
- **Edit Scoring Groups**: Click on the 'Edit Group' action to open the edit form where you can update the group name and applicable fleets.
- **Delete Scoring Groups**: You can delete a scoring group by confirming the deletion. This will disassociate all fleets from the scoring group and remove the group.

### Copying Scoring Rules Between Groups

The Copy Scorers feature allows you to copy scoring rules from one scoring group to another.

1. **Select Origin and Destination Groups**: Use the dropdowns to select the 'From' and 'To' scoring groups.
2. **Copy Scorers**: Click the 'Copy' button to copy the scoring rules. Note that this action will permanently remove any existing scoring rules in the destination group before copying the new ones.

## Scoring Rules

The scoring rules define how flights are evaluated and scored within each scoring group. These rules are specific to the types of aircraft in the group and can be customized to reflect different performance metrics.

#### Available Scoring Rules:

1. **Engine Started**: Evaluates the engine start sequence.
    - **Any Engine Started**: Engine Start Sequence
    - **Engine 3 first, then 4, then 2, then 1**
    - **Engine Sequence 1,2,3,4**
    - **Engine 2 Started First**
    - **Engine 4 first, then 2, then 1, then 3**
    - **Engine 4 first, then 3, then 1 and 2 or 2 and 1**
    - **Engines 4, 3 or 3, 4 started first, then 1 and 2 or 2 and 1**
    - **Engine 4 first, then 3, then 2, then 1**
    - **Engine 3 first, then 2, then 1**
    - **Engine 1 first, then 2, then 3**
    - **Engine 1 first, then 3, then 2**
    - **Engine 1 first, then 2, then 4 and 3**
    - **Engine 1 Started First**
    - **Engines 2, 3 or 3, 2 started first, then 4 and 1 or 1 and 4**
    - **Engine 2 first, then 3 then 1 then 4**
    - **Engine 3 first, then 4, then 2 and 1 or 1 and 2**
2. **Engines Shutdown**: Engines must be shut down before filing a PIREP.
3. **Correct Engines Used For Taxi**: Evaluates the engines used during taxi.
    - **Selected Engine Taxi Out**: Correct Engines Used For Taxi (Departure)
    - **Selected Engine Taxi In**: Correct Engines Used For Taxi (Arrival)
4. **Engines Warmed Up**: Ensures engines are warmed up before takeoff.
    - **Engines Not Warmed Up**: Whether the specified time has elapsed between engines on and takeoff.
5. **Engines Cooled Down**: Ensures engines are cooled down before shutdown.
    - **Engines Not Cooled Down**: Whether the specified time has elapsed between landing and engines off.
6. **Flaps Configuration**: Evaluates the flap settings during different phases of flight.
    - **Flaps Retracted**: Flaps retracted before parking.
    - **Flaps Not Retracted**: Flaps not retracted before parking.
    - **Flaps Set**: Flaps set before takeoff.
    - **Flaps Not Set**: Flaps not set before takeoff.
7. **Fuel Management**: Evaluates fuel levels at different phases of flight.
    - **Landing with too little Fuel**: Insufficient fuel at landing.
    - **Landing with too much Fuel**: Excessive fuel at landing.
    - **Pushback with too little Fuel**: Insufficient fuel at pushback.
    - **Pushback with too much Fuel**: Excessive fuel at pushback.
8. **Flight Length**: Measures the total flight time.
    - **Preparation Time**: Time taken for pre-flight preparation.
    - **Flight Length**: Overall duration of the flight.
9. **Landing Performance**: Evaluates various aspects of the landing.
    - **Graduated Landing**: Landing performance based on set criteria.
    - **Landed Away from Destination**: Diversion point reducer based on distance.
10. **Speed Compliance**: Ensures adherence to speed limits.
    - **Overspeed**: Points for structural overspeed, applied per second after buffer time.
11. **Social Engagement**: Rewards social flying activities.
    - **Shared Cockpit**: Points for shared cockpit flights.
    - **Group Flight**: Points for flying with friends.
12. **Network Connectivity**: Awards points for online connectivity.
    - **Connected to network (VATSIM or IVAO)**: Award points for the percentage of the flight completed online. Please see advanced scorer documentation before implementing this functionality.

### Managing Scoring Rules for a Group

1. **View and Edit Scoring Rules**: Click on the 'Edit Scorers' action to manage the scoring rules for a group. The table displays all the enabled scoring rules for the selected group, including the scorer name, UI name, system name, category, and points.
2. **Add New Scoring Rule**: Click on 'Add New Scoring Rule' to open the creation form.

#### New Scoring Rule Form Fields:
- **Scorer Name**: Select the scoring rule from the available options.
- **Name**: Enter a name for the rule as it will appear in the PIREP Scorer if triggered.
- **UI Name**: Enter a UI name for the rule as it will appear in the Phoenix Scoring Page. If left empty, the same as `Name` will be shown.
- **Points**: Specify the points awarded or deducted if the scorer is triggered.
- **Rule Parameters**: Depending on the selected rule, additional parameters may be required, such as minimum/maximum flap values, engine sequences, fuel thresholds, time buffers, etc.

#### Editing an Existing Scoring Rule:
- **Name**: Update the name of the rule as it appears in the PIREP Scorer.
- **UI Name**: Update the UI name of the rule as it appears in the Phoenix Scoring Page.
- **Points**: Update the points awarded or deducted if the scorer is triggered.
- **Rule Parameters**: Update any additional parameters required for the rule.

### Deleting a Scoring Rule
- **Warning**: Deleting a rule will not remove points from existing PIREPs, but it will not be scored in future PIREPs.
- **Confirmation**: Confirm your intention to delete to prevent any unintended consequences.

### Note
Scoring rules are not retroactive. Any changes made to scoring rules or groups themselves will have no effect on PIREPs which have already been filed and processed - they will not be rescored to comply with edited rules.