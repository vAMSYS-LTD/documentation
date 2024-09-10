---
title: Hangar Components
nextjs:
  metadata:
    title: Hangar Components
    description: Explore the various components of Hangar, including subpages and models used for file management, authorship attribution, grouping, and version control.
---

## Overview

This page details the various components of Hangar, including the subpages and models used by the system. Understanding these components is essential for effectively managing and utilizing Hangar's capabilities.

## Attribution
Hangar includes attribution features, allowing Versions to be attributed to Authors or Sources. This helps maintain clear authorship and sourcing for all Files.

### Authors
Authors can be individuals or companies responsible for creating a Version of a File. Each Author has the following fields:

- **Name:** The name of the Author. This is a required field.
- **Email:** The email address of the Author. This field is optional and not currently displayed.
- **Website:** The website of the Author. This field is optional and not currently displayed.

### Sources

Sources refer to third parties providing a Version of a File, especially when it is hosted externally. Each Source has the following fields:

- **Name:** The name of the Source. This is a required field.
- **Website:** The homepage of the Source. This is a required field.

## Organizational Units
Hangar uses Categories, Simulators and Addons to organize Files for easier retrieval and management.

### Categories
Categories are used to group similar Files, such as checklists, liveries, and sounds. Categories have the following fields:

- **Name:** The name of the Category. This is a required field.

- **Parent:** An optional parent Category. Categories can have up to two levels (parent and child).

{% callout title="Note" %}
If a parent Category has child Categories, Files should not be assigned to the parent Category as they will not be visible to pilots. For example, Files assigned to a "Boeing" subcategory will be visible, but Files assigned to a "Liveries" parent category will not.
{% /callout %}

### Simulators
Simulators are hardcoded and limited to:

- Microsoft Flight Simulator (2020) - MSFS (2020)
- Microsoft Flight Simulator 95 - FS95
- Microsoft Flight Simulator X - FSX
- Prepar3D v1 - P3D v1
- Prepar3D v2 - P3D v2
- Prepar3D v3 - P3D v3
- Prepar3D v4 - P3D v4
- Prepar3D v5 - P3D v5
- Prepar3D v6 - P3D v6
- X-Plane 11 - XP11
- X-Plane 12 - XP12

### Addons
Addons provide an additional filter related to Simulators. Addons represent 'DLCs' or 'expansions', such as the PMDG 737 for Microsoft Flight Simulator 2022. Addons have the following fields:

- **Name:** The name of the Addon. This is a required field.
- **Simulator:** The Simulator associated with the Addon. This is a required field.

## File Management
Downloads is the core section of Hangar where all File management occurs.

### Packs
Packs allow you to group multiple Files into a single downloadable unit. Packs have the following fields:

- **Name:** The name of the Pack. This is a required field.
- **Image:** At least one image representing the Pack. More images can be added, with the first image shown as the main image.
- **Description:** A description of the Pack.

### Files
Files are the primary elements in Hangar, containing the actual content to be managed. Each File has the following fields:

- **Name:** The title of the File. This is a required field.
- **Published:** Indicates whether the File is published and visible to pilots.
- **Categories:** The Category or Categories to which the File belongs. This is a required field.
- **Packs:** Optional Packs to which the File belongs.
- **Simulators:** The Simulators for which this File is intended. This field is optional.
- **Addons:** Specific Addons associated with the File, visible when Simulators are selected. This field is optional.
- **Images:** At least one image is required. Additional images can be added and rearranged; the first image is displayed as the main image.
- **Description:** A markdown description of the File, including details such as installation instructions or other relevant information. This is a required field.

### Versions
Versions represent the actual file contents, such as ZIPs, PDFs, etc. Each Version has the following fields:

- **Version Number:** The version identifier (e.g., v1, v1.0.0). This is a required field.
- **External:** Indicates whether the file is hosted externally.
- **Changelog:** Details of what has changed in this Version. This is a required field.
- **Sources and Authors:** Attribution fields for the Version.
- **File or Link:** The file upload or full link to an external resource. Uploaded files must be under 1GB and uploaded within 15 minutes. Accepted formats include images, PDFs, RARs, or ZIPs, with a preference for ZIP files.

### Downloads
Downloads store the download information. They are automatically generated when a user downloads a file and are attributed to a File, Version, and Airline.

Users or staff can set a Download as 'Ignored' - for end-users, when viewing the File, it will appear as if the Download never happened.