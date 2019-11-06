//Inicializacao, visao e zoom inicial
var map = L.map( 'map', {
    center: [-22.918373, -43.212655],
    minZoom: 2,
    zoom: 16
});


//mapa de fundo
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );


//Criando um grupo para os marcadores
var grupo = new L.featureGroup();
for (var i = 0; i < marcadores.length; i++) {
    L.marker([marcadores[i].lat, marcadores[i].lng]).addTo(grupo);
}

// Adicinando o grupo ao mapa
grupo.addTo(map);

//Calculando limites e dando padding nos pontos para torná-los visíveis
map.fitBounds(grupo.getBounds().pad(0.1));