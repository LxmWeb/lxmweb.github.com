var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.143051, 30.246092);
map.centerAndZoom(point, 15);  

map.addControl(new BMap.NavigationControl());  
map.addControl(new BMap.ScaleControl());   
map.addControl(new BMap.OverviewMapControl());  
map.addControl(new BMap.MapTypeControl()); 

var local = new BMap.LocalSearch(map, {
  pageCapacity: 8,
  renderOptions: {
    map: map,
    panel: "result",
  }
});
local.search("宾馆");

map.addEventListener("click", function func(e){    
  var myGeo = new BMap.Geocoder();
// 根据坐标得到地址描述    
myGeo.getLocation(new BMap.Point(e.point.lng,e.point.lat), function(result) {
  if (result) {
    map.centerAndZoom(new BMap.Point(120.143051, 30.246092), 14);
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result"
  }
});
transit.search("杭州师范大学仓前校区",result.address); 
  }
});
map.removeEventListener("click",func)
});
//10秒后跳转为杭州师范大学仓前校区
window.setTimeout(function() {
	var hznu = new BMap.Point(120.01588,30.295589);
    map.centerAndZoom(hznu, 18);
  map.panTo(new BMap.Point(120.01588,30.295589));
}, 10000);

var dinningroom = new BMap.Marker(new BMap.Point(120.018647,30.295718));// 创建标注    
map.addOverlay(dinningroom);
dinningroom.addEventListener("click",function(){
			var opts = {
				width: 220,     
				height: 100,   
				title: "杭州师范大学仓前校区食堂"
			}
			var infoWindow = new BMap.InfoWindow("<b>挺好吃的</b>", opts);   
			map.openInfoWindow(infoWindow, new BMap.Point(120.018647,30.295718));
		});
var dormitory = new BMap.Marker(new BMap.Point(120.016248,30.295874));
		map.addOverlay(dormitory);
		dormitory.addEventListener("click",function(){
			var opts = {
				width: 260,     
				height: 100,   
				title: "杭州师范大学仓前校区博文苑6号楼"
			}
			var infoWindow = new BMap.InfoWindow("<b>男生寝室</b>", opts);   
			map.openInfoWindow(infoWindow, new BMap.Point(120.016248,30.295874));
		});
		
var library = new BMap.Marker(new BMap.Point(120.01694,30.297682));
		map.addOverlay(library);
		library.addEventListener("click",function(){
			var opts = {
				width: 220,     
				height: 100,   
				title: "杭州师范大学仓前校区图书馆"
			}
			var infoWindow = new BMap.InfoWindow("<b>书多多的仓前图书馆，学习的好地方</b>", opts);   
			map.openInfoWindow(infoWindow, new BMap.Point(120.01694,30.297682));
		});
		
var supermarket = new BMap.Marker(new BMap.Point(120.016976,30.295383));
		map.addOverlay(supermarket);
		supermarket.addEventListener("click",function(){
			var opts = {
				width: 220,     
				height: 100,   
				title: "杭州师范大学仓前校区超市"
			}
			var infoWindow = new BMap.InfoWindow("<b>零食多多，价格优惠</b>", opts);   
			map.openInfoWindow(infoWindow, new BMap.Point(120.016976,30.295383));
		});
		
var playground = new BMap.Marker(new BMap.Point(120.014295,30.295137));
		map.addOverlay(playground);
		playground.addEventListener("click",function(){
			var opts = {
				width: 220,     
				height: 100,   
				title: "杭州师范大学仓前校区操场"
			}
			var infoWindow = new BMap.InfoWindow("<b>可以踢足球，跑步锻炼身体</b>", opts);   
			map.openInfoWindow(infoWindow, new BMap.Point(120.014295,30.295137));
		});