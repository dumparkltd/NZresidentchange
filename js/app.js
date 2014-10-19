$(function(){
  L.mapbox.accessToken = 'pk.eyJ1IjoidG1mcm56IiwiYSI6IkRNZURKUHcifQ._ljgPcF75Yig1Of8adL93A';
  var map = L.map('map',{
          minZoom: 5,
          maxZoom: 12,
          maxBounds: [[-48.6619,155],[-33.2479,190]]
        }).setView([-41.20,175], 6);
  var layers = document.getElementById('menu-ui');

  var layer_young=L.mapbox.tileLayer('tmfrnz.l0ffajor'),
    layer_total=L.mapbox.tileLayer('tmfrnz.jded0a4i'),
    layer_base =L.mapbox.tileLayer('tmfrnz.pmu6jemi');

  layer_base.setZIndex(1)
      .addTo(map);

  addLayer(layer_young, 'Aged 20-34', 2);
  addLayer(layer_total, 'All ages', 3);
  
  $('.toggle-info').on('click',function(e){
	e.preventDefault();
	if ($('.information').hasClass('hidden')){
		$('.information').removeClass('hidden');
	}else{
		$('.information').addClass('hidden');
	}
	});
	
  $('.information').on('click',function(e){
	e.preventDefault();
	$('.information').addClass('hidden');
  })
  
  function addLayer(layer, name, zIndex) {
      layer.setZIndex(zIndex);

      // Create a simple layer switcher that
      // toggles layers on and off.
      var link = document.createElement('a');
          link.href = '#';
          link.innerHTML = name;

    if (name=='Aged 20-34'){
      layer.addTo(map);
      link.className = 'active';}
    else{
      link.className = ''};

      link.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();

          if (!map.hasLayer(layer)) {
        map.removeLayer(layer_young);
        map.removeLayer(layer_total);
              map.addLayer(layer);
        $('.active').removeClass('active');
              this.className = 'active';
          }
      };

      layers.appendChild(link);
  }
  
  
      
});