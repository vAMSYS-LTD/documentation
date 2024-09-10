---
title: Managing Pages in vAMSYS
nextjs:  
    metadata:  
        title: Managing Pages in vAMSYS  
        description: Comprehensive guide to creating, managing, and configuring pages in vAMSYS, including page types, categories, and content.
---
{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

Pages in vAMSYS allow VAs to create and manage custom content, which can be displayed in various sections of the VA's interface based on the page category.

## Pages List
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Pages
*  {% align="center" %}
* Can Manage Pages {% align="right" %}
{% /table %}

Navigating to **Orwell -> Pages** displays the Pages List, which includes:

- **Title**: The page title.
- **Category**: The category of the page, displayed as a badge.
- **Enabled**: Indicates if the page is active.
- **External**: Indicates if the page links to an external URL.
- **Hidden**: Indicates if the page is visible in navigation menu.
- **URL**: The URL of the page.

### Actions
- **View in Phoenix**: Opens the page in the Phoenix interface.
- **Edit**: Opens the page in the editor.
- **Delete**: Deletes the page (note: special pages cannot be deleted).

### Filters
- **Page Status**: Filter pages by their enabled status.
- **Category**: Filter pages by category.

## Creating or Editing a Page

### Page Details
- **Page Title**: Enter the title of the page (max 200 characters). This will be shown in the navigation.
- **Category**: Select the category for the page. Options include Documents, Resources, Standalone, and Special Page.
- **Enabled**: Toggle to determine if the page is visible to pilots.
- **External URL**: Toggle to specify if the page links to an external URL.
- **Page Hidden**: Toggle to specify if the page is visible in navigation.
- **URL**: Enter the URL of the page. If linking to an external URL, skip "https://" as it is automatically included.
- **Icon**: (For standalone pages) Enter the icon name from FontAwesome Light set for the navigation icon.

### Page Content
For pages that are not external URLs, you can build the content using various components:

- **Text Panels**: Add text content using a rich text editor.
- **Images**: Upload images and optionally link them to a URL.
- **Buttons**: Add buttons with text and links.
- **Internal Buttons**: Add buttons with text and links to other non-external Pages in your VA.
- **Alerts**: Create alert messages with different styles.
- **YouTube Videos**: Embed YouTube videos by specifying the video ID.
- **Untitled Panel**: A panel component with a background and heading.
- **Headless Panel**: A panel component without a background or heading.

All components have a width section where a width can be specified from 1 to 12 in a bootstrap-like column fashion to determine how much space the component takes up.

We have made a short video explaining rows and columns. [You can check it out here.](https://vamsys-internal.ams3.digitaloceanspaces.com/tutorial-videos/Pages%20-%20Rows%20and%20Columns.mp4)

### Special Pages

Special pages are pre-configured pages like the Pegasus ACARS page. These pages have predefined content and functionality and cannot be deleted.

#### Editing the ACARS Page
The Pegasus ACARS page can be edited and serves as an excellent example of how to set up a page using most of the available components. Review and modify this page to suit your VA's needs.

#### Restoring the ACARS Page
If the Pegasus ACARS page is deleted, you can restore it by selecting the "Restore ACARS Page" action in the Pages List. This will recreate the page with its default content and place it in the Resources category.

## Deleting a Page
To delete a page, select the delete option from the actions menu. Note that this action is irreversible, and special pages cannot be deleted.

## Editing a Page
Editing a page allows you to modify its content, settings, and URL. Be cautious when making significant changes to avoid confusion for pilots who have accessed the page previously.

By following this guide, you can effectively manage the custom pages in vAMSYS, ensuring your Virtual Airline's content is organized and accessible to your pilots.