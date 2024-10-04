---
title: Route Management in VDS
nextjs:
  metadata:
    title: Route Management in VDS
    description: Comprehensive guide to managing routes and airports in VDS, including creating, editing, and configuring routes and airport settings.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

A route in VDS is a set of data that pilots can convert into a booking, explaining how to get from Airport A to Airport B. This data includes departure and arrival airports, flight numbers, flight durations, aircraft types, and more.

Route Management in VDS includes two main pages: **Airports** and **Routes**.

## Airports Page

The Airports page provides an overview of airports with various route statistics. Columns are clickable, allowing you to filter routes based on selected criteria.

### Airport Table Columns

- **Name**: Airport name.
- **ICAO**: ICAO code.
- **IATA**: IATA code.
- **Deps**: Number of departure routes.
- **Active**: Number of active routes.
- **Pending**: Number of pending routes.
- **Starting**: Routes starting in the next 14 days.
- **Ending**: Routes ending in the next 14 days.
- **Empty**: Routes with no provided route.
- **Arrs**: Number of arrival routes.
- **Active**: Number of active arrival routes.
- **Pending**: Number of pending arrival routes.
- **Starting**: Arrival routes starting in the next 14 days.
- **Ending**: Arrival routes ending in the next 14 days.
- **Empty**: Arrival routes with no provided route.

### Filters

- **Your Airports**: Filters airports managed by the logged-in user.

## Routes Page

The Routes page provides a detailed view of routes with various options for filtering, editing, and creating routes.

### Route Table Columns

- **#**: Route ID.
- **Departure**: Departure airport.
- **Arrival**: Arrival airport.
- **C/S & Flight #**: Callsign and flight number.
- **Time**: Flight duration.
- **Distance**: Flight distance.
- **Hidden**: Indicates if route is hidden from Pilots.
- **Type**: Route type (e.g., Scheduled, Cargo).
- **Tag**: Route tag.
- **Start/End**: Start and end dates of the route.
- **Fleets**: Fleets assigned to the route.

### Filters

- **Departure**: Filters routes by departure airport.
- **Arrival**: Filters routes by arrival airport.
- **Fleet**: Filters routes by fleet.
- **Type**: Filters routes by type.
- **Hidden**: Filters hidden routes.
- **Empty Routes**: Filters routes with or without a defined route.
- **Start Date**: Filters routes by start date.
- **End Date**: Filters routes by end date.

### Actions

- **Quick Edit**: Edit route details quickly.
- **Copy & Edit**: Copy an existing route and edit it.
- **End Today**: Set the route's end date to today.
- **Remove End Date**: Remove the route's end date.
- **Delete**: Delete the route.

### Bulk Actions

- **Bulk Full Edit**: Perform a full edit on multiple routes.
- **Bulk Edit**: Edit multiple routes.
- **Remove End Date**: Remove the end date from multiple routes.
- **End Today**: Set the end date for multiple routes to today.
- **Delete**: Delete multiple routes.

## Route Types

### Scheduled
Most predominant route type - meant to signal a scheduled passenger flight. All fields are enabled.

### Cargo
Cargo only operation. When dispatching these flights, no option to load passengers will be provided.

### Charter
Same as Scheduled currently. Will take on significance with Charter Flight Feature in the future.

### Training
A Training flight. Training flights have no pax or cargo.

### VFR
Type of route for flights under Visual Flight Rules. Disables 'RTE' field processing, so you can put VFR route containing visual landmarks and other non-airac related navigation information.

### Repositioning
Similar to training flights, just under a different label. Disables pax/cargo loading.

### Jumpseat
A special route type to create custom jumpseats if automated [jumpseats are disabled](/settings/airline#booking-settings). Does not have CS, FLTNO, RTE and other unnecessary fields.

## Creating / Editing Route

### General Info

- **Type**: Select the route type (Scheduled, Cargo, Charter, Training, VFR, Repositioning, Jumpseat).
- **DEP**: Select the departure airport.
- **ARR**: Select the arrival airport.
- **START**: Route start date. Can be empty.
- **END**: Route end date. Can be empty. Cannot be before the start date.
- **T/DEP**: Route departure time. Can be empty. Enter time in HH:MM format via dropdown.
- **T/ARR**: Route arrival time. Can be empty. Enter time in HH:MM format via dropdown.
- **CS**: Route callsign. Must start with approved ICAO callsign prefix (further details [here](/settings/vds#airline-callsign-parameters)) and be between 4 and 8 characters in length. Example: HTA49LJ. Mandatory field.
- **FLTNO**: Flight number. Must start with approved IATA callsign prefix (further details [here](/settings/vds#airline-callsign-parameters)) and be between 3 and 7 characters in length. Example: HA1249. Mandatory field.
- **FL/ALT**: Flight level/altitude. Can be null. Do not enter 0. Acceptable formats are 360, FL360, and 36000. The backend will convert it to 36000.
- **CI**: Cost index. Can be null. If null, the system converts it to AUTO. Otherwise, a number from 0 to 999.
- **ETE**: Estimated time en route. Can be null. If left null, vAMSYS calculates ETE using the average speed of an A320. If T/DEP and T/ARR are entered, the ETE field is calculated using them. If ETE is then edited, T/ARR will be adjusted accordingly.
- **DIST**: Flight distance. Can be null. If left null, vAMSYS calculates the great circle distance.
- **RTE**: Route. Processed by vAMSYS to ensure it contains valid airways, waypoints, and navaids, except for VFR route types.
- **OPNOTE**: Operational notes. Enter any notes you want. Visible to pilots on the dispatch and booking page.
- **TAGS**: Tags for the route. Visible to pilots and filterable.

### SimBrief Fields

- **Minimum Block Fuel**: Amount and units of minimum block fuel.
- **Minimum Arrival Fuel**: Amount and units of minimum arrival fuel.
- **MEL Fuel**: Amount and units of Minimum Equipment List fuel.
- **ATC Fuel**: Amount and units of Air Traffic Control fuel.
- **WXX Fuel**: Amount and units of weather fuel.
- **Extra Fuel**: Amount and units of extra fuel.
- **Tankering**: Amount and units of tankering fuel.
- **Extra Fuel Label**: Label for extra fuel.
- **Flight Rules**: IFR, VFR, etc.
- **Flight Type**: Scheduled, Non-scheduled, etc.

### Fleet

- **Fleet Types**: Select fleets for the route. Fleets must be configured to be used on specified CS and FLTNO.

### Load Management

- **Passenger Load Factor**: Load factor for passengers.
- **Luggage Load Factor**: Load factor for luggage.
- **Cargo Load Factor**: Load factor for cargo weight.
- **Cargo Volume Load Factor**: Load factor for cargo volume.
- **Containers**: Containers that can be loaded on this route.

## Bulk Editing Routes

Bulk editing allows for editing multiple routes simultaneously with similar options as individual route editing. This is useful for making consistent changes across multiple routes.

By using this detailed guide, you can efficiently manage your routes and airports in VDS, ensuring your Virtual Airline operates smoothly and realistically.

## Route Activation / Deactivation
vAMSYS checks for routes to be activated/deactivated every 2 minutes.

Routes which have start date and time less or equal to the time when the Activator is run will be made bookable/jumpseatable/repositionable/trainable;

Reverse happens when end date and time is less or equal to time when Activator is run. Routes which reach the End Date will become deactivated and removed from VDS.