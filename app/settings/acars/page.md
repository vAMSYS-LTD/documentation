---
title: ACARS
nextjs:  
  metadata:  
    title: ACARS  
    description: Detailed guide to managing ACARS settings in vAMSYS using the Orwell interface.
---
{% table %}
* Where
*  {% align="center" %}
* [Permission](/orwell/staff#creating-or-editing-a-staff-member) {% align="right" %}
---
* Orwell -> Settings -> ACARS
*  {% align="center" %}
* Can Manage ACARS Settings {% align="right" %}
{% /table %}

{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

The ACARS (Aircraft Communications Addressing and Reporting System) settings in vAMSYS allow VA owners and staff to manage the sounds played by Pegasus, the ACARS tracker, during various stages of flight. This helps create a more immersive and realistic experience for pilots.

## Pegasus Sounds

Pegasus sounds are audio files that are triggered at different phases of a flight. You can customize these sounds to fit the theme or specific needs of your Virtual Airline. The sounds can be uploaded and managed through the ACARS settings page.

#### Managing Pegasus Sounds

1. **Access the ACARS Settings**: Navigate to the ACARS section under Settings.
2. **Upload Sound Files**: Use the file upload fields to upload audio files for each flight phase.

## Sound Files

The following sound files can be uploaded and customized:

- **Boarding Sound**: Plays at the start of flight tracking.
- **Pushback Sound**: Plays during pushback.
- **Taxi Sound**: Plays during the taxi phase.
- **Climb Sound**: Plays at 10,000 feet.
- **Cruise Sound**: Plays during the cruise phase.
- **Descent Sound**: Plays during the descent phase.
- **Approach Sound**: Plays during the approach phase.
- **Landing Sound**: Plays during the landing phase.
- **Unloading Sound**: Plays during the taxi-in phase after landing.

## Uploading and Managing Sound Files

1. **Upload Sound Files**: Each upload field accepts audio files (e.g., MP3, WAV). Click the upload button and select the audio file you want to use for the specific flight phase.
2. **Maximum File Sizes**: Each uploaded file can be no larger than 100 megabytes.
3. **Accepted File Types**: Ensure the uploaded files are audio files (e.g., MP3, WAV). Accepted file types include `audio/*`.

## Example Configuration

Here’s how you might configure some of the sounds:

- **Boarding Sound**: Upload an audio file that welcomes passengers and provides initial safety information.
- **Pushback Sound**: Upload an audio file with sounds of ground crew communication or pushback operations.
- **Taxi Sound**: Upload an audio file with a safety briefing that plays during taxi.
- **Climb Sound**: Upload an audio file indicating the aircraft has reached 10,000 feet and passengers can use approved electronic devices.
- **Cruise Sound**: Upload an audio file that announces the aircraft has reached cruising altitude and provides information about the flight.

## Finalizing the Settings

After uploading and configuring the sounds:

1. **Save Changes**: Click the save button to update the ACARS settings.
2. **Notification**: A success notification will confirm that the ACARS settings have been updated.