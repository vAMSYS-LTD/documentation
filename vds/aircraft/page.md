---
title: Aircraft Management in VDS
nextjs:
  metadata:
  title: Aircraft Management in VDS
  description: Detailed guide to managing aircraft and fleets in VDS, including creating, editing, and configuring fleets and individual aircraft.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}
Aircraft Management in VDS includes two main sub-pages:

**Fleets**: Groups of aircraft sharing common parameters, assigned to routes.  
**Aircraft**: Individual aircraft belonging to fleets, inheriting or overriding fleet parameters.

## Fleet List

- **ID**: Unique identifier for the fleet.
- **Name**: Name of the fleet.
- **Type Code**: ICAO type designator.
- **Aircraft**: Number of aircraft in the fleet.
- **Liveries Recorded**: Count of recorded liveries (click to view the Livery Table).
- **Accepted Liveries**: Count of accepted liveries (click to view the Livery Table).
- **Rejected Liveries**: Count of rejected liveries (click to view the Livery Table).
- **Ignored Liveries**: Count of ignored liveries (click to view the Livery Table).

## Aircraft List

- **Name**: Name of the aircraft.
- **Registration**: Aircraft registration number.
- **Fleet Name**: Associated fleet name.
- **Fleet Code**: Type code of the associated fleet.

## Creating / Editing Fleet and Aircraft

### General Information

#### Applicable to Both
- **Name**: Name of the fleet or aircraft.

#### Fleet Only
- **Type Code**: ICAO type designator of the aircraft.
- **Type**: Category (Passenger, Cargo, etc.).
- **Allowed Prefixes**: Configurable prefixes for the fleet.

#### Aircraft Only
- **Registration**: Aircraft registration number.
- **SELCAL, Fin Number, Hex Code**: Additional aircraft identifiers.
- **Fleet**: Fleet the aircraft belongs to.
- **Passengers**: Number of passenger seats (inherited from fleet if not specified).
- **Freight**: Freight capacity in kilograms (inherited from fleet if not specified).
- **Container Units**: Number of container units (inherited from fleet if not specified).

#### Special Considerations
- **Type Code**: Use real [type designators](https://en.wikipedia.org/wiki/List_of_aircraft_type_designators) to ensure compatibility with SimBrief, which lists its [supported aircraft](https://www.simbrief.com/home/?page=aircraft) and codes.
- **Type**: Determines what can be loaded into the aircraft (passengers, freight, or containers). Some fields may not be available depending on the type.

### Additional Data
- **Max Passengers**: Number of passenger seats (Fleet Only).
- **Max Freight**: Freight capacity in kilograms (Fleet Only).
- **Container Units**: Number of container units (Fleet Only).
- **SimBrief Airframe ID**: Used for overriding or approximating parameters in SimBrief.
- **OFP Format**: Operational Flight Plan format.
- **Category (CAT)**: ICAO aircraft category.
- **Equipment**: Avionics and equipment codes.
- **Transponder**: Transponder code.
- **PBN**: Performance-based navigation codes.
- **Remarks**: Additional remarks.
- **OEW**: Operating Empty Weight (thousands of pounds).
- **MZFW**: Maximum Zero Fuel Weight (thousands of pounds).
- **MTOW**: Maximum Takeoff Weight (thousands of pounds).
- **MLW**: Maximum Landing Weight (thousands of pounds).
- **Max Fuel**: Maximum fuel capacity (thousands of pounds).
- **Performance Category**: Aircraft performance category.
- **Passenger Weight**: Average passenger weight (pounds).
- **Baggage Weight**: Average baggage weight (pounds).
- **Climb Profile**: Climb speed profile.
- **Cruise Profile**: Cruise speed profile.
- **Descent Profile**: Descent speed profile.
- **ETOPS**: Extended-range twin-engine operational performance standards.
- **Fuel Factor**: Fuel factor for adjustments.
- **Cont Fuel**: Contingency fuel.
- **Reserve Fuel**: Reserve fuel (minutes).
- **Block Fuel**: Minimum block fuel.
- **Block Fuel Units**: Units for block fuel (weight or minutes).
- **Arrival Fuel**: Minimum arrival fuel.
- **Arrival Fuel Units**: Units for arrival fuel (weight or minutes).
- **MEL Fuel**: Minimum Equipment List fuel.
- **MEL Fuel Units**: Units for MEL fuel (weight or minutes).
- **ATC Fuel**: Air Traffic Control fuel.
- **ATC Fuel Units**: Units for ATC fuel (weight or minutes).
- **WXX Fuel**: Weather fuel.
- **WXX Fuel Units**: Units for weather fuel (weight or minutes).
- **Tankering**: Tankering fuel.
- **Tankering Units**: Units for tankering fuel (weight or minutes).
- **Extra Fuel Label**: Label for extra fuel.

### Image

vAMSYS will attempt to provide a default image for an aircraft whenever possible. The aircraft image is shown in the Flight Map and Aircraft Resource pages in Phoenix.  
Default images come from Planespotters and are based on aircraft registration.  
Relation and dependency of the image shown are as follows: Aircraft Custom Image -> Fleet Custom Image -> Planespotters image based on registration.

- **Aircraft Image**: Custom image for the fleet or aircraft, shown in the Flight Map (live flights) and Aircraft Resource page in Phoenix.
- **Image Attribution**: Author or attribution of the image.
- **LinkBack URL**: URL linking back to the image source.

## Deleting Fleet
Please note that deleting a fleet will also delete all assigned aircraft as well as routes this fleet is assigned to, even if there are other fleets available for the route. Please carefully review your aircraft and fleet assignments to avoid unintended consequences when deleting a fleet.