[Archived] A small project for a friend. 

This tool extract all props and items used in a .xml file from CodeWalker / GTA V. (Mostly used for FiveM)
It is used to know which props are used in a mapping (to import them later) so you do not have to import every props in blender (or other software).

The project will be ARCHIVED on release.

## USAGE

1. In CodeWalker, extract a .ytyp file in .xml format, should get something like '[file_name].ytyp.xml'. 
2. Rename the .xml file to 'data.xml' and add it to the folder.
3. Run the main.js file using Node.JS (node .)
4. Read the created 'result.txt' file in the folder, containing all not-duplicated props used in the .ytyp file.

## TOOLS

- Visual Studio Code
- Node.JS
- @xml2js
- @xmlbuilder

## UPDATES

- 1.2.0
- - added props from entity sets.
- - update readme.
- - update package version / description.
- - update console log messages.

- 1.1.0
- - syntax update in the code.
- - update readme.
- - remove unused "require".

- 1.0.0
- - initial release.
