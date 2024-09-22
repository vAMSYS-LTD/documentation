---
title: v5 - Go-Live Plan
nextjs:
  metadata:
    title: v5 - Go-Live Plan
    description: vAMSYS v5 Go-Live confirmed for September 26th with key changeover details and preparation steps for a smooth transition.
---

## v5 Go-Live Confirmed for September 26th
We’ve got an update on the v5 launch—**vAMSYS v5 will now go live on September 26th!**

### Why the date change?
We’re really sorry for the two-day delay from the original date of September 24th. Last week, we were working flat out to get v5 polished up and ready to ship, but our snag list (all the rough edges and little tweaks left to fix) ended up growing more than we anticipated. We want to make sure vAMSYS v5 launches as smoothly as possible, so we’ll be using those extra days to tackle everything on the list and avoid a chaotic day-1 patch situation. The extra time will also allow us to get ahead on some changeover tasks, meaning less stress when it’s go time!

### Changeover plan
- **September 24th** v3 VDS and Importers disabled; Data transfer from v3 to v5 begins.
- **September 26th, 01:00z:** vAMSYS goes offline for the changeover.
    - All existing pilot bookings, pairs, and routes from v3 will be canceled and closed out.
    - Any flights in progress will be lost and **cannot** be filed once v5 is live, so please plan accordingly.
- **v5 codebase replaces v3** on vAMSYS.io.
- vAMSYS relaunches with **v5 fully up and running**. Pilots can immediately start making new bookings and fly the routes [you've set up](/migration/checklist) in preparation for the migration.

We’re estimating the changeover process to take about **one hour** to complete.

### Behind the Scenes
Starting September 25th, we’ll begin migrating all PIREPs and associated data to the v5 format. A heads-up: any PIREPs from **smartCARS or Pegasus 1.3 (or earlier)** will become legacy PIREPs, meaning the PIREP details won’t be viewable once we switch over to v5.

### Steps for You
Whilst Team vAMSYS handles the v5 changeover on our end, you need to [ensure your VA is ready for v5](/migration/checklist) on yours.