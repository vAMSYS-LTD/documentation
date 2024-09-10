---
title: Data Management via Importers and Exporters
nextjs:
  metadata:
    title: Data Management
    description: Introduction to managing data through importers and exporters, including best practices and necessary skills.
---

While VDS is designed to be user-friendly and efficient, sometimes you just can't beat a CSV import. vAMSYS provides Importers and Exporters to streamline data management.

## Exporters

Exporters are simple tools for extracting data from vAMSYS for analysis or preparing for imports. All you need is a CSV reader, like Google Sheets, OpenOffice, or Microsoft Office. Even text editors like Notepad or Notepad++ can suffice.

## Importers: Proceed with Extreme Caution

Importers are advanced tools requiring meticulous attention. Mismanaging imports can severely damage your VA data, and Team vAMSYS **will not be able to restore it**. Use VDS for data management unless you're absolutely confident in your abilities.

### Required Skills for Importers

If you choose to use importers, you must be comfortable and proficient with:

- **CSV Files and Structure**: Full understanding of CSV files and their layout.
- **Spreadsheet Editors**: Access to and ease with using spreadsheet software. While not mandatory, it often simplifies the process.
- **Text Encapsulation**: Knowledge of text encapsulation in the context of CSV files.

### Critical Considerations

- **File Integrity**: Never import files blindly. Always follow documentation instructions to ensure a successful import.
- **CSV Format Only**: Only import comma-separated CSV files. Importing other formats like PDF, XLS, or XLSX will result in errors.
- **Third-Party Files**: Files from VASchedules or other third-party providers are **not compatible** with vAMSYS importers.
- **Job Management**: Avoid stacking import jobs where subsequent import relies on data (for example airports) being present. Running multiple imports simultaneously can cause issues.
- **Error Handling**: If an import gets stuck, do not re-upload the same file. It likely contains errors. Seek community help and share your CSV for assistance.

#### Key Messages

- Importers are powerful but must be used with precision. Missteps can cause severe, irreparable issues.
- Always ensure your CSV files are correctly formatted and validated before importing.
- Utilize community support when in doubt to prevent data mishandling.

Importers are the most complex aspect of data management in vAMSYS. When in doubt, use VDS to handle your data and avoid the complications and risks associated with imports.