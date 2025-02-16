var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
var storage = new Map(); 
var output = new Map();

fs.readFile('data.xml', "utf-8", function(err, data) {
    parser.parseString(data, function (err, result) {
        if(result == undefined) {
            console.warn("[prop-xml-extractor] data.xml is empty / do not exist.")
            return;
        }

        const Items = result.CMapTypes.archetypes[0].Item;
        var index = 0;
        Items.forEach((Item) => {
            // Props
            if(Item.name[0] != undefined) storage.set((index += 1), Item.name[0]);

            // Extensions Props
            const Props = Item.extensions[0].Item;
            if(Props != undefined) {
                Props.forEach((prop) => { 
                    if(prop.spawnType != undefined) storage.set((index += 1), prop.spawnType[0]);
                });
            };

            // Entities Props
            if(Item.entities != undefined) {
                const Entities = Item.entities[0].Item;
                Entities.forEach((entity) => { 
                    if(entity.archetypeName != undefined) storage.set((index += 1), entity.archetypeName[0]);
                })
            };

            // Entities Sets Props
            if (Item.entitySets != undefined) {
                const EntitySetsItems = Item.entitySets[0].Item;
                EntitySetsItems.forEach((item) => {
                    const Entities = item.entities[0].Item;
                    Entities.forEach((object) => {
                        if(object.archetypeName != undefined) storage.set((index += 1), object.archetypeName[0]);
                    });
                });
            };
        });

        storage.forEach((item) => {
            if (!output.has(item)) {
                output.set(item, undefined);
            };
        });

        var json = JSON.stringify([...output.keys()], null, 1).replaceAll('[', '').replaceAll('"', '').replaceAll(',', '').replaceAll(']', '').replaceAll(' ', ''); // How regex works???
        fs.writeFile('result.txt', json, err => {});
        console.log(`[prop-xml-extractor] Done, got ${output.size} props !`);
    });
});