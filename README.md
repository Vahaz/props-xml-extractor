> [!IMPORTANT]
> A much better version of this exist. Available on [ook_3D](https://www.youtube.com/@ook_3D) youtube, and it is available on [this video](https://youtu.be/iYEhrOtWorA?si=Qj1TvBvABC6Q_WNA) [(download)](https://drive.google.com/file/d/1AXGpq3E2QVC-aVw6YU2AV2kUA_CfEKGA/view).

# `Props-XML-Extractor`

> [!IMPORTANT]
> `props-xml-extractor` is archived and use `Node.JS v23.10.0`. Unexpected updates may occur. This `ONLY` works with `.YTYP` files converted in `.XML` format from `CODEWALKER`.

This project started as a small Node.JS app for a friend. The use case was to retrieve all props / rooms used in a building/interior on GtaV.
You retrieve a `.ytyp` file converted into `.xml` with `CodeWalker` who contains all `props / rooms` used by a building/interior.
This helps to get props to import them in **Blender** to modify the building.

## USAGE

1. In **CodeWalker**, extract a .ytyp file in .xml format, should get something like '[file_name].ytyp.xml'.
2. Add the .xml files to the "input" folder.
3. Run the `main.js` file using `Node.JS v23.10.0` OR run the `props-xml-extractor.exe` with the "node_modules" folder. (Won't work otherwise)
4. Read the **created** '[file_name].ytyp.xml-**result.txt**' file in the result folder, containing all not-duplicated props/rooms used in the .ytyp file.

- If you use the .EXE file, you should have:
```bash
- [Your_Folder]
--- [node_modules]
--- [input]
------ your_file.ytyp.xml
--- [result]
------ your_file.ytyp.xml-result.txt
--- props-xml-extractor.exe
```

## TOOLS

- Visual Studio Code
- Node.JS v23.10.0
- Module@node-xml-stream
- Module@postject@1.0.0-alpha.6
- SEA - [Single executable applications](https://nodejs.org/api/single-executable-applications.html)

## SEA - HOW TO BUILD YOURSELF

Use in a console (credits: [Single executable applications](https://nodejs.org/api/single-executable-applications.html) from nodejs.org)
1. Generate the `sea.blob`
```bash 
node --experimental-sea-config sea-config.json
```
2. Generate the .exe file named `props-xml-extractor.exe`
```bash 
node -e "require('fs').copyFileSync(process.execPath, 'props-xml-extractor.exe')"
```
3. Inject the .blob into the .exe
```bash 
npx postject props-xml-extractor.exe NODE_SEA_BLOB sea.blob ` --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
```

You will notice that to work, the executable need the "node_modules" folder from the source code. Because "SEA" can not add external modules to the executable.

## UPDATES

- **1.4.0**
    - Update README.md
    - Changed from xml2js → node-xml-stream
    - Update to Node.JS v23.10.0
    - Added an input/result folder.
    - Can manage multiples inputs files at once.

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
