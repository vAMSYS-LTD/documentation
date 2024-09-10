---
title: Hangar Settings
nextjs:
  metadata:
    title: Hangar Settings
    description: Overview of available Hangar Settings
---

## Settings set in v5
As discussed in [Enabling Hangar](/hangar/enabling-hangar), critical settings are handled via Orwell in vAMSYS. These settings are:

- Logos
- Hangar Name
- Hangar Enabled/Disabled state
- Hangar Public/Staff Only state
- Staff Permissions

## Color Overrides
Starting with 0.11.0 of Hangar, Staff with the permission to [access and manage Hangar](/orwell/staff#subsystem-access) can also change the 6 colors used in Hangar.to for their Virtual Airline.

These colors are:
- Gray - various shades used for header, navigation and background. Default - Gray
- Primary - various shades used for buttons, active and hover classes for navigation. Default - Indigo
- Info - various shades used for badges & buttons. Default - Blue
- Success - various shades used for badges & buttons. Default - Emerald
- Warning - various shades used for badges & buttons. Default - Orange
- Danger - various shades used for badges & buttons. Default - Rose

The available color options are from Tailwind CSS [Default Color Pallete](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)