---
title: Enabling Hangar
nextjs:
  metadata:
    title: Enabling Hangar
    description: Learn how to enable Hangar in vAMSYS, including settings for airline and staff permissions, logo configuration, and sync details.
---

## Overview

Enabling Hangar is straightforward, providing Virtual Airlines with a robust file management system for staff and pilots. This guide will walk you through the necessary steps and settings.

{% callout title="Beta" %}
Whilst ready for production use, Hangar is still in Beta / Early Access state - there will be changes and improvements as we journey towards v1.0.0 release.  
Please report bugs and improvements on our Discord in #v5-beta-bugs-and-improvements channel.
{% /callout %}

## vAMSYS Settings

Hangar can be enabled in vAMSYS v5. Below are the relevant settings for each version.

### Enabling Hangar in v3

Managing Hangar via vAMSYS v3 is not possible as of Hangar v0.9.4 

### Configuring Hangar Logo

Hangar displays your Virtual Airline’s logo in the header.

**Path:** Orwell -> Design -> Logos

Upload your logo in both "Logo for Bright Backgrounds" and "Logo for Dark Backgrounds" sections, then click save.

{% callout title="Note" %}
v5 Beta login information is available for VA Owners in our Discord, owner-announcements channel. These details can be shared with Virtual Airline Staff, but it must not be shared with your Pilots.
{% /callout %}

### Enabling Hangar

The airline and staff settings in v5 are linked to those in v3. Changes in v3 will reflect in v5 and vice-versa. Here are the steps to enable Hangar in vAMSYS v5.

Please ensure you have the logo set up before enabling Hangar.

**Path:** Orwell -> Settings -> Airline -> Modules

- **Enable Hangar:** Enables Hangar. Once enabled, Virtual Airline Staff will be able to access it and start setting it up.
- **Make Hangar Public:** Makes Hangar accessible to pilots; updates Phoenix navigation accordingly.
- **Hangar Name:** Sets the navigation name for Hangar. The default is Hangar, but you can customize it.


### Staff Permissions

Additional permissions are required for non-VA owners to access Hangar.

**Path:** Orwell -> Staff -> Subsystem Access

- **Can Access Hangar:** Grants access to Hangar Admin and file management.

## Synchronization and Activation
Hangar v0.9.4 added almost instantaneous synchronisation between vAMSYS and Hangar.  
Enable Hangar, Make Hangar Public, Hangar name, as well as Design, Staff and Rank changes will be synced within a minute.

Should something not update, please report it to us on Discord in #v5-beta-bugs-and-improvements channel with details of what you have changed and what failed to sync.
We perform scheduled syncs every 30 minutes - any missed changes will be synced then, but reports will help us iron out any issues. 