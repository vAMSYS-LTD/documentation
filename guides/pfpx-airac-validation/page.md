---
title: Semi-automatic AIRAC validation of VA routes
nextjs:
  metadata:
    title: Semi-automatic AIRAC validation of VA routes
    description: Semi-automatic AIRAC validation of VA routes
---

{% table %}
* Author {% align="right" %}
---
* Jan Podlipský (TVS32) - jan.podlipsky@sw-virtual.eu
{% /table %} 
 
This is a community guide and not part of official vAMSYS documentation.

## Prerequisites
- Own a copy of [PFPX](http://flightsimsoft.com/) (Download edition is enough, there is no need for a server subscription)
- Have a latest AIRAC installed in the PFPX (via Navigraph)
- I also recommend, in case you will be also creating routes in Europe with it, to install the [RAD](https://forum.aerosoft.com/index.php?/files/file/6626-pfpx-version-2-rad-restrictions-and-directs-2409/) for your AIRAC as well

## Guide

### Download your routes in the PFPX format
- Download the routes via the vAMSYS PFPX Exporter in Orwell -> Data -> Export -> Routes - PFPX

### Import the exported TXT file into PFPX
- Open the PFPX, click on the globe -> Route Data -> Route Database
![Step 2-1](/guides/pfpx-airac-validation/step2-1.png)
- Select Import  

![Step 2-2](/guides/pfpx-airac-validation/step2-2.png)  

- Import the saved .TXT file
- PFPX will then start the import of the routes, and will highlight any invalid routes  

![Step 2-3](/guides/pfpx-airac-validation/step2-3.png)  

- After the import is done, you can filter the Invalid routes  

![Step 2-4](/guides/pfpx-airac-validation/step2-4.png)  

### Remove the valid routes
- We can then get rid of the valid routes, because we don't need those. Simply select filter "Valid", then you should have all the valid routes selected, and just delete them  

![Step 3-1](/guides/pfpx-airac-validation/step3-1.png)  

- Now, when you switch into the filter "All", you can see all the invalid routes
### Update the routes right in this menu
- You can either just write down the invalid ones, and then generate new, however, you can also generate a new route right now in this window. SImply double-click on an invalid route  

![Step 4-1](/guides/pfpx-airac-validation/step4-1.png)  

- Then click on Build, and it will rewrite the route. Then alick on Apply, and it will update the route on the Import page

![Step 4-1](/guides/pfpx-airac-validation/step4-2.png)  

- You may also export the finished routes in the Route databse, which will give you the routes in a text format, which may be further processed