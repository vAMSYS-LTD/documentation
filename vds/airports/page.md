---
title: Airport Management in VDS
nextjs:
  metadata:
  title: Airport Management in VDS
  description: Guide to managing airports in VDS, including adding, editing, and configuring airport details, load management, hubs, scenery, and stands.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}
Virtual Airlines need to add and manage airports for their operations in VDS. Airports determine where routes start and terminate, and the starting locations pilots can choose to begin their journey.

vAMSYS maintains a list of airports via OurAirports.com, syncing frequently with each AIRAC update. Do not add every airport; only those relevant to your VA. If an airport code has changed or cannot be added, verify and suggest changes on OurAirports.com.

## Creating / Editing Airport

### General Information

- **Name**: Name of the airport as it will be displayed.
- **Base**: Toggle to mark this airport as a base on maps.
- **Category**: Optional category for organizing airports.
- **Airport Code**: ICAO or IATA code (must be a real-world airport).
- **Airport Briefing**: Markdown area for operational information, threat management, winter ops, etc.
- **Airport Information**: Markdown area for links to charts, handler information, and other relevant details.

### Airport Managers

Airport Managers are responsible for airport and route editing, limiting which staff members can edit routes from the airport. There is an additional toggle to enable editing inbound routes to the airport.

### Load Management

Assign default Load Factor Profiles for Passenger, Luggage, Cargo (Weight), and Cargo (Volume) to the airport. These will be the default load factors for routes arriving at the airport, but can be overridden by individual routes.

The containers select field allows selection of default containers available from this airport, which can also be overridden by individual routes.

## Deleting Airport

When an airport is deleted, all routes to and from the airport will be deleted. All pilots currently located at the airport will have their location reset and will have to pick a new destination.

## Hubs

Hubs function as a community feature with their own leaderboards and statistics. They also determine locations a pilot can choose to start their journey with your Virtual Airline.

### Creating / Editing Hub

- **Name**: Name of the Hub shown in the selection, leaderboards, etc.
- **Default Hub**: If ticked, all new Pilots will join this hub automatically.
- **Airports**: Select airports that belong to this hub. Can be one or many.

### Deleting Hub

When hubs are deleted, pilots who have selected this hub as a 'home' will have it unassigned. Deleting hubs does not delete airports or relocate pilots.

## Scenery

With flight simulators continually improving, custom scenery may one day become obsolete. Until then, vAMSYS provides a page to list and manage recommended airport sceneries for your pilots. These sceneries appear on the Airport Resource page in Phoenix.

### Adding / Editing Scenery

- **Airport**: Select an airport from your list.
- **URL**: Link to the website where the scenery can be downloaded (must start with https://).
- **Developer**: Name or company of the developer.
- **Type**: Type of scenery (Freeware, Payware, Abandonware).
- **Simulator**: Simulator for which the scenery is designed.

## Stands

When dispatching a flight, pilots will be prompted to pick what aircraft stand/gate they are departing from and arriving at.

Stands are grouped by airport, and you can see a list of your airports when visiting VDS -> Airport Management -> Stands. The table lists airport details, Stand Groups you have created, and Departure Routes from the airport.

Stand groups allow you to limit what stands are available for arriving/departing flights, adding realism to your Virtual Airline. If an airport has no stand groups defined, pilots can pick from all the stands in the database.

### Airport Stands Page

This page contains an overview of defined stand groups for the airport, listing their name, whether it is the default group, and the stands assigned to the group. A map of the airport with all known stand locations is displayed on the left. At the bottom is a list of stands known to vAMSYS or created by you, listing the name, latitude, longitude, and assigned groups.

### Creating / Editing Stand Group

- **Name**: Public name of the stand group, visible to Pilots in the Airport Resource page.
- **Default**: Indicates if this is the default stand group used for departing routes if no override is provided.
- **Stand Items**: Select stands belonging to this stand group.

### Creating / Editing Stand

You can add or edit stands if vAMSYS lacks complete information or if there are missing stands at an airport.

- **Name**: Name/Label of the stand.
- **Latitude**: Latitude of the stand (number with 7 digits of precision).
- **Longitude**: Longitude of the stand (number with 7 digits of precision).