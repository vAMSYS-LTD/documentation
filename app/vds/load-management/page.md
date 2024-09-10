---
title: Load Management in VDS
nextjs:
  metadata:
  title: Load Management in VDS
  description: Guide to managing load factors and containers in VDS, including creating and editing load factor profiles and container configurations.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}
vAMSYS provides tools to determine load amounts for aircraft through Load Factors and Containers.

## Load Factor Profiles

Load Factor Profiles use a mathematical formula to determine generated Passenger, Freight, Cargo, and Cargo Volume amounts when pilots dispatch a flight. You can edit all parameters of the formula:

```php
$mean = $min + ($max - $min) * $bias;
$deviation = ($max - $min) * $deviation;
$rand1 = (float) mt_rand() / (float) getrandmax();
$rand2 = (float) mt_rand() / (float) getrandmax();
$gaussNum = sqrt(-2 * log($rand1)) * cos(2 * M_PI * $rand2);
$gaussNum = $mean + $deviation * $gaussNum;
$loadFactor = min(max($gaussNum, $min), $max);
```

### Creating and Editing Load Factor Profiles

- **Type**: Choose from Passenger (People), Passenger (Hold Luggage), Cargo (Weight), or Cargo (Volume).
- **Name**: A friendly name for the profile to recognize it when assigning to routes or aircraft.
- **Min**: Minimum load factor in %.
- **Max**: Maximum load factor in %.
- **Bias**: Skewness of the generated numbers towards minimum or maximum, with 0.5 being even.
- **Deviation**: Degree of dispersion in the distribution of generated numbers, with a higher value indicating a wider spread.
- **Set as Default Profile**: Makes it default for routes with no profile selected.

### Load Factor Calculator
A Load Factor Calculator is available to test variables and see potential outcomes.

### Default Load Factor Profile
If no load factor profiles are created, vAMSYS uses the following default values:
- **Min**: 80%
- **Max**: 100%
- **Bias**: 0.9
- **Deviation**: 0.2

## Containers

Containers can be loaded onto aircraft whose fleet supports them.

### Creating / Editing Containers

- **Name**: Friendly name shown in container assignment and loading pages in VDS and Phoenix.
- **Type**: Container type, such as Pallet or LD-4 container, with auto-completion suggestions based on previous entries.
- **Unit Size**: Space taken by the container in an aircraft, defined in Container Units.
- **Weight**: Weight of the loaded container in kilograms.
- **Notes**: Any notes visible to pilots.
- **Incompatible Containers**: Containers that cannot be loaded simultaneously with this container.