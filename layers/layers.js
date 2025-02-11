var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Barrios_1 = new ol.format.GeoJSON();
var features_Barrios_1 = format_Barrios_1.readFeatures(json_Barrios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_1.addFeatures(features_Barrios_1);
var lyr_Barrios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_1, 
                style: style_Barrios_1,
                popuplayertitle: 'Barrios',
                interactive: true,
                title: '<img src="styles/legend/Barrios_1.png" /> Barrios'
            });
var format_EspaciosverdesZonasur_2 = new ol.format.GeoJSON();
var features_EspaciosverdesZonasur_2 = format_EspaciosverdesZonasur_2.readFeatures(json_EspaciosverdesZonasur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspaciosverdesZonasur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspaciosverdesZonasur_2.addFeatures(features_EspaciosverdesZonasur_2);
var lyr_EspaciosverdesZonasur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspaciosverdesZonasur_2, 
                style: style_EspaciosverdesZonasur_2,
                popuplayertitle: 'Espacios verdes - Zona sur',
                interactive: true,
                title: '<img src="styles/legend/EspaciosverdesZonasur_2.png" /> Espacios verdes - Zona sur'
            });
var format_EspaciosverdesZonanorte_3 = new ol.format.GeoJSON();
var features_EspaciosverdesZonanorte_3 = format_EspaciosverdesZonanorte_3.readFeatures(json_EspaciosverdesZonanorte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspaciosverdesZonanorte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspaciosverdesZonanorte_3.addFeatures(features_EspaciosverdesZonanorte_3);
var lyr_EspaciosverdesZonanorte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspaciosverdesZonanorte_3, 
                style: style_EspaciosverdesZonanorte_3,
                popuplayertitle: 'Espacios verdes - Zona norte',
                interactive: true,
                title: '<img src="styles/legend/EspaciosverdesZonanorte_3.png" /> Espacios verdes - Zona norte'
            });
var format_PlayonesdeportivosSinttico_4 = new ol.format.GeoJSON();
var features_PlayonesdeportivosSinttico_4 = format_PlayonesdeportivosSinttico_4.readFeatures(json_PlayonesdeportivosSinttico_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlayonesdeportivosSinttico_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlayonesdeportivosSinttico_4.addFeatures(features_PlayonesdeportivosSinttico_4);
var lyr_PlayonesdeportivosSinttico_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlayonesdeportivosSinttico_4, 
                style: style_PlayonesdeportivosSinttico_4,
                popuplayertitle: 'Playones deportivos - Sintético',
                interactive: true,
                title: '<img src="styles/legend/PlayonesdeportivosSinttico_4.png" /> Playones deportivos - Sintético'
            });
var format_PlayonesdeportivosHormign_5 = new ol.format.GeoJSON();
var features_PlayonesdeportivosHormign_5 = format_PlayonesdeportivosHormign_5.readFeatures(json_PlayonesdeportivosHormign_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlayonesdeportivosHormign_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlayonesdeportivosHormign_5.addFeatures(features_PlayonesdeportivosHormign_5);
var lyr_PlayonesdeportivosHormign_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlayonesdeportivosHormign_5, 
                style: style_PlayonesdeportivosHormign_5,
                popuplayertitle: 'Playones deportivos - Hormigón',
                interactive: true,
                title: '<img src="styles/legend/PlayonesdeportivosHormign_5.png" /> Playones deportivos - Hormigón'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Barrios_1.setVisible(true);lyr_EspaciosverdesZonasur_2.setVisible(true);lyr_EspaciosverdesZonanorte_3.setVisible(true);lyr_PlayonesdeportivosSinttico_4.setVisible(true);lyr_PlayonesdeportivosHormign_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Barrios_1,lyr_EspaciosverdesZonasur_2,lyr_EspaciosverdesZonanorte_3,lyr_PlayonesdeportivosSinttico_4,lyr_PlayonesdeportivosHormign_5];
lyr_Barrios_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'circun': 'circun', 'sector': 'sector', });
lyr_EspaciosverdesZonasur_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_EspaciosverdesZonanorte_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_PlayonesdeportivosSinttico_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PlayonesdeportivosHormign_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Barrios_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'circun': 'TextEdit', 'sector': 'TextEdit', });
lyr_EspaciosverdesZonasur_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_EspaciosverdesZonanorte_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_PlayonesdeportivosSinttico_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PlayonesdeportivosHormign_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Barrios_1.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'circun': 'no label', 'sector': 'no label', });
lyr_EspaciosverdesZonasur_2.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_EspaciosverdesZonanorte_3.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PlayonesdeportivosSinttico_4.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PlayonesdeportivosHormign_5.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PlayonesdeportivosHormign_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});