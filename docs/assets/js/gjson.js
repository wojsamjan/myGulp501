var manila =
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [120.98, 14.59]
        },
        "properties": {
            "name": "Manila"
        }
    };

var bangkok =
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [100.49, 13.76]
        },
        "properties": {
            "name": "Bangkok"
        }
    };

var manila_bangkok =
    {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [120.98, 14.59], [100.49, 13.76]
            ]
        },
        "properties": {
            "name": "From Manila to Bangkok"
        }
    };

var luzon =
    {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [ [120.0, 14.50], [121.50, 14.50], [121.50, 16.20],
                [120.0, 16.20], [120.0, 14.50] ]
            ]
        },
        "properties": {
            "name": "Central Luzon Philippines"
        }
    };