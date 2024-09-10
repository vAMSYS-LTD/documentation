---
title: VDS Settings
nextjs:  
  metadata:  
    title: VDS Settings  
    description: Detailed guide to managing VDS settings in vAMSYS using the Orwell interface.
---
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Settings -> VDS
*  {% align="center" %}
* Can Manage VDS Settings {% align="right" %}
{% /table %}

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

The VDS (Virtual Dispatch System) Settings section in vAMSYS allows VA owners and staff to configure specific aspects of their airline's operations related to airport manager rewards and airline callsign parameters.

## Airport Manager Rewards

The Airport Manager Rewards section allows you to reward your airport managers with bonus points for each PIREP (Pilot Report) they file.

- **Enable Airport Manager Rewards**: Toggle to enable awarding bonus points to airport managers.
- **Bonus Point Amount**: Set the number of bonus points awarded to airport managers for each PIREP they file. This field becomes visible only when Airport Manager Rewards are enabled.

## Airline Callsign Parameters

The Airline Callsign Parameters section is used to set which ICAO and IATA codes will be available for your VA. This simplifies the process of creating routes and assigning fleets while ensuring that unrealistic VA conglomerates are not created and 'protected' callsigns remain protected.

### Purpose
- **Callsign Protection**: VAs who joined vAMSYS when we set out to make vAMSYS available to more than 1 Virtual Airline were guaranteed that their callsign and VA would not be created by someone else, ensuring there would be only one of them. This protection is no longer offered to new Virtual Airlines.
- **Callsign Applications**: Applications for a protected callsign will be sent for review to the 'owner' of the callsign. It will be up to the owner to accept or reject the application. Team vAMSYS will not interfere in this process.
- **Releasing Protected Callsigns**: VAs with protected callsigns can choose to remove the protection and release the callsign. **Note: Once a callsign is released, it cannot be protected again in the future.**
- **Automatic Approval**: The primary ICAO and IATA code provided during the VA creation process will be automatically registered and approved within 24 hours. Subsequent callsign requests that are not protected will be automatically approved. Team vAMSYS monitors all parameter applications and can disable auto-approval if abuse is suspected.

### Creating a New Callsign Parameter
1. **Access the Callsign Parameters Section**: Navigate to the Airline Callsign Parameters section under VDS Settings.
2. **Click on 'New Parameter'**: Begin the process of adding a new callsign parameter.
3. **Fill Out the Form**: All fields are mandatory.
    - **ICAO Code**: Enter the 3-character code for your airline (e.g., HTA for our fantasy VA).
    - **IATA Code**: Enter the 2-character code used in flight plans.
    - **Reason**: If applying for a protected callsign, a Reason field will appear. Provide a detailed reason for your request.
4. **Submit the Form**: If the callsign is not protected, the request will be automatically approved. For protected callsigns, the request will be sent to the callsign owner for review.

### Applying for a Protected Callsign
- **Reason Field**: When applying for a protected callsign, you must fill out the Reason field explaining why you need this callsign.
- **Review Process**: The request will be sent to the 'owner' of the protected callsign. It will be up to them to accept or reject the application. Team vAMSYS will not interfere in this process.

### Notes on Callsign Management
- **Initial Callsign Approval**: The primary ICAO and IATA codes provided during the VA creation process will be automatically approved within 24 hours.
- **Automatic Approval for Non-Protected Callsigns**: Subsequent non-protected callsign requests will be automatically approved unless abuse is suspected, in which case Team vAMSYS will intervene.
- **Unrealistic Conglomerates**: Creating a VA that simulates all airlines from one country or an alliance like OneWorld is generally not accepted within vAMSYS.

### Deleting a Callsign Parameter
- **Warning**: Deleting a parameter will result in the permanent removal of all associated fleets and routes. Ensure no items are currently using this parameter before proceeding.
- **Confirmation**: Confirm your intention to delete to prevent any unintended consequences.

## Parameter Requests

This section deals with requests for protected callsigns from other Virtual Airlines. If your VA has protected callsigns, you will need to review and manage these requests.

### Reviewing Parameter Requests
1. **Access the Parameter Requests Section**: Navigate to the Parameter Requests section under VDS Settings.
2. **View Pending Requests**: This section will display all pending requests for your protected callsigns.
3. **Review Requests**: Each request includes details such as the requesting VA's identifier, requested ICAO and IATA codes, the request reason, and the contact email.
4. **Actions**: You can either accept or reject the request.
    - **Accept**: Approves the request, allowing the requesting VA to use the callsign.
    - **Reject**: Denies the request and deletes it from the list.

### Notes on Reviewing Requests
- **Protected Callsigns**: Your VA has one or more protected callsigns as a legacy commitment made by vAMSYS. You can choose to remove this protection at any time.
- **Removal of Protection**: Once protection is removed from a callsign, it cannot be protected again in the future.
- **Parameter Review Process**: All new parameter requests will not be protected in the same fashion. Team vAMSYS monitors these requests to prevent abuse.