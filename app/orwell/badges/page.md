---
title: Managing Badges in vAMSYS
nextjs:  
    metadata:  
        title: Managing Badges in vAMSYS  
        description: Detailed guide to creating, managing, and configuring badges in vAMSYS, including rules and automatic awarding.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

Badges are awards given to pilots for achieving milestones or for participating in special activities, like rare events. They can be awarded manually or automatically by setting rules. Here is a detailed guide on how to manage badges in vAMSYS.

## Badge Management Interface
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Badges
* Enable Badges{% align="center" %}
* Can Manage Badges {% align="right" %}
{% /table %}

### Badge List
- **Image**: Displays the badge icon.
- **Name**: The name of the badge.
- **Category**: The category to which the badge belongs.
- **Description**: A brief description of the badge.
- **Recipients**: Number of pilots who have received the badge.

### Actions
- **View in Phoenix**: Opens the badge in the Phoenix interface.
- **Edit**: Allows you to edit badge details.
- **Delete**: Deletes the badge.

### Filters
- **Category**: Filter badges by category.

## Creating or Editing a Badge

### Badge Details
- **Name**: Enter the name of the badge (max 200 characters).
- **Category**: Enter the category name (max 200 characters).
- **Image**: Upload an image for the badge (max 200x200). Avoid large file sizes to ensure a smooth user experience.
- **Description**: Provide a simple and plain description for the badge.
- **Rules**: Set rules for automatic awarding.

### Page Content
- **Builder**: Add panels, headless panels, and other components to structure the badge's page content.

## Badge Rules
Badges can be awarded automatically based on the following rules, each requiring specific fields:

1. **Event Participation**
    - **Event**: Select the event from the list of ongoing or upcoming events.

2. **Length of Service**
    - **Age**: Specify the number of units.
    - **Type**: Select the unit type (days, weeks, months, years).

3. **Transport - Passengers**
    - **Amount**: Enter the number of passengers transported.

4. **Transport - Cargo**
    - **Amount**: Enter the amount of cargo transported.

5. **Flight Length - Individual**
    - **Seconds - Minimum**: Minimum duration of a flight.
    - **Seconds - Maximum**: Maximum duration of a flight.

6. **Flight Length - Total**
    - **Seconds**: Total flight duration in seconds.

7. **Flight Distance - Total**
    - **Nautical Miles**: Total distance flown in nautical miles.

8. **Points - Regular Points Total**
    - **Points**: Total regular points earned.

9. **Points - Bonus Points Total**
    - **Points**: Total bonus points earned.

10. **Points - All Points Total**
    - **Points**: Total points earned, including regular and bonus points.

11. **PIREPs - Count**
    - **PIREPs**: Number of PIREPs filed.

12. **PIREPs - Count in Fleet**
    - **Fleets**: Select fleets.
    - **PIREPs**: Number of PIREPs filed in the selected fleets.

13. **PIREPs - Landing Rate**
    - **FPM**: Landing rate in feet per minute.

14. **PIREPs - Landing Airport**
    - **Airports**: Select landing airports.

15. **PIREPs - Departing Airport**
    - **Airports**: Select departure airports.

16. **PIREPs - Arriving or Departing Airport**
    - **Airports**: Select airports for either arrival or departure.

## Awarding Badges

### Manually Awarded Badges
Manually awarded badges (badges with no Rule set) can be added to a pilot by editing their profile in Orwell.

### Automatically Awarded Badges
Badges awarded automatically are processed based on the rules set and the PIREP processing routine. For example, a badge for Length of Service will be awarded only if the pilot continues to fly.

## Editing a Badge
Editing a badge does not remove it from pilots who have already earned it. Be cautious when editing badge details, categories, or rules, as the badge will retain its status with those pilots.

## Deleting a Badge
To delete a badge, select the delete option from the actions menu. This action is irreversible, and current badge holders will lose the badge.