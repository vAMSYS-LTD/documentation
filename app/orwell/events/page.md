---
title: Managing Events in vAMSYS
nextjs:  
    metadata:  
      title: Managing Events in vAMSYS  
      description: Detailed guide to creating, managing, and configuring events in vAMSYS, covering various event types, restrictions, and point awards.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

Events are a perfect way to incentivize your pilots to fly somewhere by giving them extra points. They are great at engaging the community - be it a big event with coordinated online ATC or a Focus Airport - taking people to the lesser flown destinations - we got you covered.

## Events Table/List
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Events
* Enable Events{% align="center" %}
* Can See Events {% align="right" %}
{% /table %}

Navigating to **Orwell -> Events** presents the Events List, showing only current and future events by default. The table includes:

- **Name**: The event's name.
- **Focus Airport**: Indicates if it is a focus airport.
- **Points Awarded**: Points given for participation.
- **Start and End Dates/Times**: When the event begins and ends.
- **Hidden Event**: Indicates if the event is hidden.

The 3-dot action menu offers options to View, Edit, and Delete the event.

## Event Creation or Editing
{% table %}
* Where
* [Airline Setting](/settings/airline) {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Events
* Enable Events{% align="center" %}
* Can Create/Edit/Delete Events {% align="right" %}
{% /table %}

Creating or editing events consists of five steps:

### 1. Setup - Event Type Selection
vAMSYS has four types of events:

- **Generic Event**: This is the most common type of event. Pilots need to fly a set route or routes or arrive/depart from set airport or airports.

- **Focus Airport**: A specialized event for one airport only, meant to showcase the airport. All flights in or out of the Focus Airport will earn points for pilots. Focus airports do not have registrations or slots and have a slightly different Event Page view in Phoenix.

- **Overload**: Similar to Focus Airport, but can have multiple airports. All arrivals and departures to/from Overload Airports will earn points for pilots. Points will be added to all flights coming in or leaving the airports, even if the origin/destination airport is not an overload airport.

- **Tour**: A specialized event that allows you to set multiple legs one needs to fly to earn points under one event instead of spread out over multiple events.

#### Event Repetition
The setup section has options to specify if it's a repeating event.

- **One-off**: A custom/one-off event that does not repeat.
- **Weekly**: The event will be copied and repeated weekly.
- **Every two Weeks**: The event will be copied and repeated every other week.
- **Monthly**: The event repeats once a month, starting on the same weekday and week every month.

If the event is set to repeat, a new entry will be made by copying the 'parent' event after the event ends. All event dates and times will be offset by the set period of days.

For example, if you create a weekly event starting on January 1st and ending on 2nd, it will automatically create subsequent events for January 8th on January 2nd, January 15th on January 9th, and so on.

### 2. Event Details
Depending on the selections made in the Setup section, the options will differ. We will explain what they all are, just bear in mind that not all will be visible.

- **Event Name**: Up to 240 characters. The name of the event will show up everywhere we show the event name.
- **Event Tag**: A bit of text that will show up in the corner of event images. It could help quickly convey the type of event.
- **Hidden Event**: A toggle that lets you hide the event. It will be invisible to pilots, but they can still earn points. Hidden events are not compatible with registrations and do not have images or descriptions. The event name will show up in the PIREP Scores list if awarded, so do not put something inappropriate.
- **Image**: An image for the event, which can be shown on the Phoenix dashboard and event pages. The image will be forced into a 2:1 aspect ratio. If no image is uploaded, we will show a placeholder image. We strongly urge you to provide an event image, but also be considerate of the image size. Avoid PNGs and overly large image file sizes. Other than forcing an aspect ratio, we will not resize these images - so if you upload a 10 MB image, you will be forcing your pilots to load 10 MB every time the image is presented, severely degrading your pilot experience.
- **Description**: Event description shown on the Event page. Written in Markdown. Double space for a single new line.
- **Registration Required**: A toggle to determine if registration for the event is required to earn points. This will enable the Slot option, except for Tours - tours are not compatible with slots.
- **Require Departure Slot Booking**: Make the event require slot bookings. Slotted events should not span days - it should be limited to a few hours in one day; Slotted events should have just one departure airport to work as designed.
- **Event Start**: Date and time when the Event starts.
- **Event End**: Date and time when the Event ends.
- **Event Advertisement Start**: Date and time when the Event shows up in the event list for pilots. If left empty, the event will show up immediately.
- **Registration Start**: Date and time when registrations for the event open. If left empty, the registrations will start at the same time as event advertising.
- **Registration End**: Date and time when registrations for the event finish. If left empty, the registrations will stop at the start of the event.
- **Slot Interval**: We will generate slots for booking with one slot every minute selected. All dates and times are in UTC. The slot interval is expressed in minutes.

### 3. Event Restrictions
The third section allows you to set some restrictions on events in terms of who can participate and who will earn points.

- **Network Restrictions**: If event points should only be awarded for flying on a subset of networks. Only flights in selected networks will award points. Validation is subject to the availability of the network API. If unavailable, we will trust the pilot setting when they make the booking.
- **Rank Restrictions**: If points should only be awarded to pilots of certain ranks. Only pilots of set ranks will see the event and will be able to earn points for it.
- **Fleet Restrictions**: If event points should only be awarded for flying on a subset of fleets. Only flights done using the selected fleet will earn points.
- **Callsign Restriction**: If event points should only be awarded for flying on a subset of callsign prefixes.

### 4. Event Airports or Routes
This section allows you to set whether the event is based on Airports visited or Routes flown.

- **Departure Airports**: When entered, pilots will have to depart from any of the selected airports. If left empty, the departure airport is not taken into account for event scoring.
- **Arrival Airports**: When entered, pilots will have to land at any of the selected airports. If left empty, the arrival airport is not taken into account for event scoring.
- **Event Routes**: Route or routes to be flown to earn Event points.
- **Focus Airport**: Pilots flying in or out of the said airport will receive points.
- **Overload Airports**: Overload Airport(s). Pilots flying in or out of the said airport(s) will receive points.
- **Legs**: Departure/Arrival Airport pair or Route for the leg. You can create as many legs as you wish.

#### Tours vs. Other Event Types
- **Tours**: Tours allow you to set multiple legs that need to be flown to earn points under one event instead of spreading them out over multiple events. Each leg specifies a Departure/Arrival Airport pair or Route.
- **Other Event Types**: For Generic Events, Focus Airports, and Overload events, you can specify a combination of departure and arrival airports or specific routes.

For example:
- **Tours**: If you have a tour with three legs, pilots must complete each leg in sequence to earn points for the tour. Each leg specifies a departure and arrival airport or a specific route.
- **Generic Events**: You can specify multiple departure and arrival airports, allowing pilots to fly any route between these airports to earn points.

### 5. Event Awards
Points can be awarded on several conditions:

- **Departure**: The pilot needs to depart after the event starts and before the event ends. They can land at any time, even after the event ends.
- **Arrival**: The pilot needs to arrive after the event starts and before the event ends. They can depart outside of event time.
- **Departure and Arrival**: The pilot needs to depart after the event starts and land before the event ends.
- **Departure or Arrival**: The pilot needs to either depart or arrive between event start and end times.

- **Event Points**: How many bonus points the PIREP will earn for flying this event. It can be any positive integer for a fixed point award or a percentage figure for a proportion of regular points earned. For example, if the regular scorer awarded the pilot 150 points and you enter 100%, the pilot will receive 150 bonus points; 200% would result in 300 bonus points, and 50% would result in 75 bonus points.
## Examples
To give you a better understanding, we have prepared some examples of the most common events you may encounter and what options are best suited to them.

### City Pair
Points are awarded to flights departing from Airport A and arriving at Airport B.
- Event Type: Generic Event
- Departure Airports: Airport A
- Arrival Airports: Airport B
  Or
- Route: HTA100 from Airport A to Airport B

### Multi-Airport
Points are awarded to flights departing from Airports A, B, and C and arriving at Airports D, E, F.
- Event Type: Generic Event
- Departure Airports: Airport A, Airport B, Airport C
- Arrival Airports: Airport D, Airport E, Airport F
  Or
- Route: HTA100 from Airport A to Airport D, HTA101 A to E, HTA102 C to F etc.

Route setup is very self-explanatory - the specific route has to be flown. The Airport setup, especially with multiple departure and arrival airports, can seem daunting at first. In a setup like this, a flight must depart from the three airports listed and land at the three airports listed. Whether it's A to F or C to D or A to E - does not matter and they would all be valid flights. D to C, E to A etc - flights in reverse - are not considered to be taking part in the event.

### Roundtrip
Points are awarded to flights departing Airport A, arriving at B, or departing B and arriving at A.
- Event Type: Generic Event
- Departure Airports: Airport A, Airport B
- Arrival Airports: Airport A, Airport B
  Or
- Route: HTA100 from Airport A to Airport B, HTA101 B to A.

### Focus Airport
All flights arriving or departing from Airport A are awarded.
- Event Type: Focus Airport
- Focus Airport: Airport A

### City/Area Overload
Points are awarded for all flights to and from a group of airports A, B, and C.
- Event Type: Overload
- Overload Airports: Airport A, Airport B, and Airport C.

Items to note: Flights like A to Z and Z to B are valid for the event, as would be a flight between A and B, A and C, B and C etc.

### Arrival Mini-Overload
Points are awarded for arriving at an airport or a group of airports, but not awarded for departure.
- Event Type: Generic Event
- Departure Airports: None
- Arrival Airports: Airport A, Airport B etc

### Departure Mini-Overload
Points are awarded for departing from an airport or a group of airports, but not awarded for arrival.
- Event Type: Generic Event
- Departure Airports: Airport A, Airport B etc
- Arrival Airports: None

### Tour
Points are awarded for completing multiple legs in sequence.
- Event Type: Tour
- Legs:
    - Leg 1: Airport A to Airport B
    - Leg 2: Airport B to Airport C
    - Leg 3: Airport C to Airport D