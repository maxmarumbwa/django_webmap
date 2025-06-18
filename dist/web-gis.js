    // View full screen
    mapId = document.getElementById('map');
    function fullScreenview() {
        mapId.requestFullscreen()
    }

        // Print map
    $('.print-map').click(function () {
        window.print();
    })

    // L.control.browserPrint().addTo(map);
    // L.control.browserPrint({ position: 'topleft', title: 'Print ...' }).addTo(map);
    map.printControl = L.control.browserPrint({
        position: 'topleft',
        title: 'Farai Print map view',
        printModes: ["Portrait", "Landscape", "Auto", "Custom"]
    }).addTo(map);

        // Leaflet search
    new L.Control.Geocoder().addTo(map);

    // Zoom to layer
    $('.zoom-to-layer').click(function () {
        map.setView([-17.853657, 31.03434], 9);
    });







    
