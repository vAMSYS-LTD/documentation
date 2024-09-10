---
title: Exporters
nextjs:  
    metadata:  
    title: Exporters  
    description: Overview of available exporters in vAMSYS and their respective columns.
---

{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Data -> Exporters
*  {% align="center" %}
* Can See Export {% align="right" %}
{% /table %}

vAMSYS provides several exporters to help you manage and analyze your Virtual Airline data. For a general overview of using exporters, please refer to the [Introduction](/data).

## Aircraft Exporter

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 123456
---
* Name
* Aircraft name
* Flight of Fancy
---
* Registration
* Aircraft registration number
* G-LUJA
---
* Selcal
* SELCAL code
* AC- BD
---
* Fin Number
* Aircraft fin number
* G-LUJA
---
* Hexcode
* Hexadecimal code
* AE586C
---
* Fleet Type
* Associated fleet type ID
* 6
---
* PAX
* Passenger capacity
* 180
---
* Freight
* Freight capacity
* 0
---
* Container Units
* Number of container units
* 0
---
* SimBrief Airframe ID
* SimBrief airframe ID
* 349674_1719351837546
---
* SB OFP Format
* SimBrief OFP format
* lido
---
* Cat
* Aircraft category
* M
---
* Equipment
* Equipment codes
* SDFGHIJ1RWY
---
* Transponder
* Transponder code
* LB1V1
---
* PBN
* Performance-based navigation codes
* A1B1C1D1L1O1S2T1
---
* Remarks
* Additional remarks
* COM/CPDLC DAT/VM RVR/075 OPR/LULU PER/C RMK/ACASII EQUIPPED CALLSIGN LULU TCAS
---
* OEW
* Operating empty weight
* 93.500
---
* MZFW
* Maximum zero fuel weight
* 134.482
---
* MTOW
* Maximum takeoff weight
* 162.040
---
* MLW
* Maximum landing weight
* 142.198
---
* Max Fuel
* Maximum fuel capacity
* 41.897
---
* Performance
* Performance category
* C
---
* Paxwgt
* Average passenger weight
* 163
---
* Bagwgt
* Average baggage weight
* 33
---
* Climb Profile
* Climb speed profile
* 250/300/84
---
* Cruise Profile
* Cruise speed profile
* 78/250/250
---
* Descent Profile
* Descent speed profile
* 84/290/250
---
* ETOPS
* Extended-range twin-engine operational performance standards
* 120
---
* Fuel Factor
* Fuel factor for adjustments
* P02
---
* Contpct
* Contingency fuel percentage
* 5
---
* Resvrule
* Reserve fuel rule
* 30
---
* Minfob
* Minimum block fuel
* 0
---
* Minfob Units
* Units for minimum block fuel
* min
---
* Minfod
* Minimum arrival fuel
* 1500
---
* Minfod Units
* Units for minimum arrival fuel
* wgt
---
* Melfuel
* MEL fuel amount
* 0
---
* Melfuel Units
* Units for MEL fuel
* min
---
* Delete
* Placeholder for delete action
{% /table %}

## Airport Exporter

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 123456
---
* Name
* Airport name
* London Stansted
---
* World Airport ID
* World airport ID
* 5678
---
* ICAO
* ICAO code
* EGSS
---
* IATA
* IATA code
* STN
---
* Base
* Indicates if the airport is a base
* 1
---
* Category
* Airport category
* Cat A
---
* PAX LF
* Passenger load factor ID
* 15
---
* Luggage LF
* Luggage load factor ID
* 16
---
* Cargo (Weight) LF
* Cargo weight load factor ID
* 17
---
* Cargo (Volume) LF
* Cargo volume load factor ID
* 20
---
* Containerss
* Associated container IDs
* 8, 16, 3, 18, 35, 658, 78, 35168
---
* Taxi In Minutes
* Average taxi-in time in minutes
* 5
---
* Taxi Out Minutes
* Average taxi-out time in minutes
* 7
---
* Delete
* Placeholder for delete action
{% /table %}

## Container Exporter

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 658
---
* Name
* Container name
* Mail
---
* Type
* Container type
* ULD-40
---
* Size
* Container size
* 1
---
* Weight
* Container weight
* 200
---
* Notes
* Additional notes
* Royal Mail
---
* Incompatible Containers
* IDs of incompatible containers
* 6558, 6559
---
* Delete
* Placeholder for delete action
{% /table %}

## Fleet Exporter

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 55
---
* Fleet Name
* Name of the fleet
* My Fleet
---
* Fleet Code
* Code for the fleet
* B737
---
* Fleet Type
* Type of fleet
* pax-cargo
---
* Callsign Parameters
* Associated callsign parameter IDs
* 15, 23, 86
---
* Scoring Group
* Scoring group ID
* 15
---
* Max Pax
* Maximum passenger capacity
* 183
---
* Max Freight
* Maximum freight capacity
* 0
---
* Container Units
* Number of container units
* 0
---
* SimBrief Airframe ID
* SimBrief airframe ID
* 349674_1719351837546
---
* SB OFP Format
* SimBrief OFP format
* lido
---
* Cat
* Aircraft category
* M
---
* Equipment
* Equipment codes
* SDFGHIJ1RWY
---
* Transponder
* Transponder code
* LB1V1
---
* PBN
* Performance-based navigation codes
* A1B1C1D1L1O1S2T1
---
* Remarks
* Additional remarks
* COM/CPDLC DAT/VM RVR/075 OPR/LULU PER/C RMK/ACASII EQUIPPED CALLSIGN LULU TCAS
---
* OEW
* Operating empty weight
* 93.500
---
* MZFW
* Maximum zero fuel weight
* 134.482
---
* MTOW
* Maximum takeoff weight
* 162.040
---
* MLW
* Maximum landing weight
* 142.198
---
* Max Fuel
* Maximum fuel capacity
* 41.897
---
* Performance
* Performance category
* C
---
* Paxwgt
* Average passenger weight
* 163
---
* Bagwgt
* Average baggage weight
* 33
---
* Climb Profile
* Climb speed profile
* 250/300/84
---
* Cruise Profile
* Cruise speed profile
* 78/250/250
---
* Descent Profile
* Descent speed profile
* 84/290/250
---
* ETOPS
* Extended-range twin-engine operational performance standards
* 120
---
* Fuel Factor
* Fuel factor for adjustments
* P02
---
* Contpct
* Contingency fuel percentage
* 5
---
* Resvrule
* Reserve fuel rule
* 30
---
* Minfob
* Minimum block fuel
* 0
---
* Minfob Units
* Units for minimum block fuel
* min
---
* Minfod
* Minimum arrival fuel
* 1500
---
* Minfod Units
* Units for minimum arrival fuel
* wgt
---
* Melfuel
* MEL fuel amount
* 0
---
* Melfuel Units
* Units for MEL fuel
* min
---
* Delete
* Placeholder for delete action
{% /table %}

## Hub Exporter

{% table %}
* Column
* Description
---
* ID
* Unique identifier
* 12345
---
* Name
* Hub name
* London
---
* Default
* Indicates if the hub is the default
* 1
---
* Airports
* Associated airport IDs
* 123456
---
* Delete
* Placeholder for delete action
{% /table %}

## Load Factor Exporter

{% table %}
* Column
* Description
---
* ID
* Unique identifier
* 123456
---
* Name
* Load factor name
* Passenger - Summer
---
* Type
* Load factor type
* pax
---
* Default
* Indicates if it is the default load factor
* 0
---
* Min
* Minimum load factor percentage
* 80
---
* Max
* Maximum load factor percentage
* 100
---
* Bias
* Load factor bias
* 0.8
---
* Deviation
* Standard deviation of the load factor
* 0.1
---
* Delete
* Placeholder for delete action
{% /table %}

## Route Exporter

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 988
---
* Departure ID
* Departure airport ID
* 182803
---
* Departure Code
* Departure airport code
* EGSS
---
* Arrival ID
* Arrival airport ID
* 183136
---
* Arrival Code
* Arrival airport code
* EHAM
---
* Callsign
* Route callsign
* HTA16H
---
* Flight Number
* Route flight number
* HT1141
---
* Fleets
* Associated fleet IDs
* 88,322,6
---
* Altitude
* Cruising altitude
* 
---
* CI
* Cost index
* AUTO
---
* Route
* Route details
* 
---
* Departure Time
* Scheduled departure time
* 
---
* Arrival Time
* Scheduled arrival time
* 
---
* Flight Length
* Estimated flight time
* 01:15
---
* Flight Distance
* Flight distance (nm)
* 256
---
* Start Date
* Route start date
* 2024-07-18 14:50
---
* End Date
* Route end date
* 
---
* Remarks
* Additional remarks
* 
---
* Type
* Route type
* scheduled
---
* Tag
* Route tags
* Summer 2024, Winter 2024
---
* Departure Stand Group
* Associated departure stand group
* 
---
* Arrival Stand Group
* Associated arrival stand group
* 
---
* PAX LF
* Passenger load factor ID
* 15
---
* Luggage LF
* Luggage load factor ID
* 16
---
* Cargo (Weight) LF
* Cargo weight load factor ID
* 17
---
* Cargo (Volume) LF
* Cargo volume load factor ID
* 18
---
* Containers
* Associated container IDs
* 
---
* Flightrules
* Flight rules
* i
---
* Flighttype
* Flight type
* s
---
* Contpct
* Contingency fuel percentage
* 
---
* Resvrule
* Reserve fuel rule
* 
---
* Taxifuel
* Taxi fuel amount
* 
---
* Minfob
* Minimum block fuel
* 
---
* Minfod
* Minimum arrival fuel
* 
---
* Melfuel
* MEL fuel amount
* 
---
* Atcfuel
* ATC fuel amount
* 
---
* Wxxfuel
* Weather fuel amount
* 
---
* Addedfuel
* Additional fuel amount
* 
---
* Tankering
* Tankering fuel amount
* 
---
* Minfob Units
* Units for minimum block fuel
* min
---
* Minfod Units
* Units for minimum arrival fuel
* min
---
* Melfuel Units
* Units for MEL fuel
* min
---
* Atcfuel Units
* Units for ATC fuel
* min
---
* Wxxfuel Units
* Units for weather fuel
* min
---
* Addedfuel Units
* Units for additional fuel
* min
---
* Tankering Units
* Units for tankering fuel
* min
---
* Addedfuel Label
* Label for additional fuel
* hold
---
* Delete
* Placeholder for delete action
{% /table %}

## Scenery Exporter

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 123456
---
* Airport
* Associated airport ID
* 56
---
* Type
* Type of scenery
* Payware
---
* Simulator
* Simulator compatibility
* MSFS2024
---
* Developer
* Scenery developer name
* In-House
---
* URL
* Download link for the scenery
* hangar.to
---
* Delete
* Placeholder for delete action
{% /table %}

## Stand Exporter

The Stands exporter includes an option to 'Exclude Global Stands provided by vAMSYS,' enabled by default. This exports only VA Custom Stands. Disabling it will include the full vAMSYS Stand database, resulting in over 63,000 rows.

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 123456
---
* World Airport ID
* World airport ID
* 123456
---
* Name
* Stand name
* A1
---
* Latitude
* Latitude of the stand
* 120.000000
---
* Longitude
* Longitude of the stand
* 80.0000000
---
* Custom
* Indicates if the stand is custom (Yes/No)
* Yes
---
* Delete
* Placeholder for delete action
{% /table %}

## Stand Group Exporter

{% table %}
* Column
* Description
* Example
---
* ID
* Unique identifier
* 123
---
* Airport ID
* Associated airport ID
* 123456
---
* Name
* Stand group name
* Widebody
---
* Default
* Indicates if it is the default stand group
* 0
---
* Stands
* Associated stand IDs
* 18, 23, 58, 88, 65, 125, 135, 156
---
* Delete
* Placeholder for delete action
{% /table %}

## Changelog
{% table %}
* Date
* Notes
---
* 2024-07-18
* Initial Release
  {% /table %}