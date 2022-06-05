# FolderListGetter

![](img/01-01_outline.jpg)

# Table of Contents

- [FolderListGetter](#folderlistgetter)
- [Table of Contents](#table-of-contents)
- [What are Functions](#what-are-functions)
  - [`getFolderListInFolder`](#getfolderlistinfolder)
  - [`getFileListInFolder`](#getfilelistinfolder)
  - [`copyFileToTargetFolder`](#copyfiletotargetfolder)
  - [`renameFiles`](#renamefiles)
- [Operation](#operation)

# What are Functions

`FolderListGetter` has multi functions.

- getFolderListInFolder
- getFileListInFolder
- copyFileToTargetFolder
- renameFiles

## `getFolderListInFolder`

Gets following information of folders in Root folder.

- Name
- ID
- URL
- Size

![](./img/02-01_getFolderListInFolder.jpg)

## `getFileListInFolder`

Gets following information of files in the folder whose ID is `B1` cell's value.

- Name
- ID
- URL

![](./img/02-02_getFileListInFolder.jpg)

## `copyFileToTargetFolder`

Copies file to the folder whose ID is `K4` cell's value.

Can set following property of copied files.

- Prefix
- Number of files

![](./img/02-03_copyFileToTargetFolder.jpg)

## `renameFiles`

Renames files whose ID is `N` column's values.

Must set new file name in `M` column.

![](./img/02-04_renameFiles.jpg)

# Operation

You can execute above-mentioned functions at custom menu after you finish those settings.

![](img/03-01_executes.jpg)
