const sea = require("node:sea");
if (sea.isSea()) {
    const { createRequire } = require("node:module");
    require = createRequire(__filename);
}

const fs = require("fs"),
    path = require("path"),
    Parser = require("node-xml-stream"),
    resultDirectory = __dirname + "/result",
    inputDirectory = __dirname + "/input";

if(!fs.existsSync(resultDirectory)) { 
    fs.mkdirSync(resultDirectory, {recursive: false});
    console.warn("[prop-xml-extractor] Warn: No result folder found. Creating it...");
};

if(!fs.existsSync(inputDirectory)) { 
    fs.mkdirSync(inputDirectory, {recursive: false});
    console.warn("[prop-xml-extractor] Warn: No input folder found. Creating it...");
    console.warn("[prop-xml-extractor] Warn: Place .xml files in input folder and retry !");
    return;
};

try { var inputFiles = fs.readdirSync(inputDirectory, "utf-8"); } 
catch(err) { console.error("[prop-xml-extractor]", err); return; }

const xmlFiles = inputFiles.filter((file) => path.extname(file) === ".xml");
if(xmlFiles.length === 0) { console.warn("[prop-xml-extractor] Warn: No .xml files found in input folder. Please check input folder and retry."); return; };
xmlFiles.forEach((file) => {
    const parser = new Parser(),
        filePath = path.join(inputDirectory, file);
    var index = 0,
        storage = new Map(),
        output = new Map(),
        tagName, prop;

    parser.on("opentag", (name, attrs) => { if(name == "name") { tagName = name; }});
    parser.on("closetag", name => { if(name == "name") { storage.set(index++, prop); }});
    parser.on("text", text => { if (tagName === "name") { prop = text; } });
    parser.on('error', err => { console.error("[prop-xml-extractor]", err); return; });
    parser.on('finish', () => {
        storage.forEach((item) => { if (!output.has(item)) { output.set(item, undefined); }});
        var json = JSON.stringify([...output.keys()], null, 1).replaceAll(/[\[\]", ]/g, '').trim();
        fs.writeFile(`result/${file}-result.txt`, json, err => {if (err) {console.error("[prop-xml-extractor]", err); return; }})
        console.log(`[prop-xml-extractor] Result: Done, for ${file} got ${output.size} items !`);
    });

    let stream = fs.createReadStream(filePath, 'UTF-8');
    stream.pipe(parser);
});