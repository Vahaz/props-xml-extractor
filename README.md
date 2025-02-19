# `Props-XML-Extractor`

> [!IMPORTANT]
> `props-xml-extractor` is archived and use `Node.JS v22.11.0`. Unexpected updates may occur. This `ONLY` works with `.YTYP` files converted in `.XML` format from `CODEWALKER`.

This project started as a small Node.JS app for a friend. The use case was to retrieve all props used in a building on GtaV.
You retrieve a `.ytyp` file converted into `.xml` with `CodeWalker` who contains all `props` used by the building.
This helps to get props to import them in **Blender** to modify the building.

## USAGE

1. In **CodeWalker**, extract a .ytyp file in .xml format, should get something like '[file_name].ytyp.xml'.
2. Rename the .xml file to 'data.xml' and add it to the main folder.
3. Run the `main.js` file using `Node.JS v22.11.0` OR run the `props-xml-extractor.exe` with the "node_modules" folder.
4. Read the **created** 'result.txt' file in the folder, containing all not-duplicated props used in the .ytyp file.

- If you use the .EXE file, you should have:
```
- [Your_Folder]
--- [node_modules]
--- props-xml-extractor.exe
--- data.xml
--- result.txt
```

## TOOLS

- Visual Studio Code
- Node.JS v22.11.0
- Module@xml2js
- Module@xmlbuilder
- SEA - [Single executable applications](https://nodejs.org/api/single-executable-applications.html)

## SEA - HOW TO BUILD YOURSELF

Use in a console (credits: [Single executable applications](https://nodejs.org/api/single-executable-applications.html) from nodejs.org)
1. ```node --experimental-sea-config sea-config.json``` to generate the `sea.blob`
2. ```node -e "require('fs').copyFileSync(process.execPath, 'props-xml-extractor.exe')"``` to generate the .exe file named `props-xml-extractor.exe` to generate the `props-xml-extractor.exe`
3. ```npx postject props-xml-extractor.exe NODE_SEA_BLOB sea.blob ` --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2``` to inject the .blob into the .exe

## UPDATES

- **1.3.0**
    - Update console logs / warn text.
    - Update README.md
    - Added .EXE thanks to SEA from Node.JS

- **1.2.0**
    - added props from entity sets.
    - update readme.
    - update package version / description.
    - update console log messages.

- **1.1.0**
    - syntax update in the code.
    - update readme.
    - remove unused "require".

- **1.0.0**
    - initial release.