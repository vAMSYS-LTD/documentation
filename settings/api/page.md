---
title: API
nextjs:  
  metadata:  
    title: API  
    description: Detailed guide to managing API tokens in vAMSYS using the Orwell interface.
---
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Settings -> API
*  {% align="center" %}
* Can Manage API Settings {% align="right" %}
{% /table %}

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

The API settings section in vAMSYS allows VA owners and staff to manage API tokens, which can be used to integrate with the vAMSYS system programmatically. This section provides tools to create, view, and delete API tokens, ensuring secure access to your airline's data.

API tokens allow secure programmatic access to your airline's data and operations on vAMSYS. They are essential for integrating external systems and automating tasks.

## Viewing and Managing API Tokens

- **View Tokens**: The table displays all the API tokens you have created, including their name, creation date, and usage statistics (API calls today, this week, this month, and last month).
- **Delete Tokens**: Tokens can be deleted by confirming the deletion action. Once deleted, tokens cannot be recovered.

## Creating a New API Token

1. **Click on 'Create New Token'**: Open the creation form to generate a new API token.

### Create Token Form Fields:

- **Token Name**: Enter a friendly name for the token to help you remember its purpose.

2. **Generate Token**: After filling out the form, click the 'Create' button to generate the token.

## Viewing Your Token

- **Token Display**: After creating a token, it will be displayed in a panel. Ensure you copy and save the token in a secure location as it will not be displayed again.

## Important Notes

- **Secure Storage**: API tokens are sensitive information and should be stored securely. If you lose access to a token, you will need to create a new one.
- **Usage Statistics**: The table provides statistics on API calls made using each token, helping you monitor and manage their usage.
- **Documentation**: For more detailed information on using the API, refer to the [Protocol API Docs](https://protocol.vamsys.dev/).