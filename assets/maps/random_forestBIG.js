var maps = {}
maps.getTiles= function() {
   _tiles=[];
   for(x=0;x<100;x+=1) {
      for(y=0;y<400;y+=1) {
        
        var random = parseInt(Math.random()*20);
        if( random>18) {
			
            _tiles.push({
              "_yindex": y,
              "_xindex": x,
              "_floorid": 1,
              "_itemid":2
             });
        } else {
          _tiles.push({
            "_yindex": y,
            "_xindex": x,
            "_floorid": 1
           });
        }
      }   
  }
  return _tiles;
}
maps.forest = {
	"image":"assets/maps/graphics/simpleGarden.png",
	"tileWidth":32,
	"rows":100,
	"cols":100,
    "enterTiles": [],
    "slices": [{
        "_h": 16,
        "_w": 32,
        "_y": 0,
        "_bmp": null,
        "_oy": 0,
        "_id": 0,
        "_x": 0,
        "_ox": 0,
        "_type": 0
    },
    {
        "_h": 16,
        "_w": 32,
        "_y": 17,
        "_bmp": null,
        "_oy": 0,
        "_id": 1,
        "_x": 0,
        "_ox": 0,
        "_type": 0
    },
    {
        "_h": 16,
        "_w": 32,
        "_y": 34,
        "_bmp": null,
        "_oy": 0,
        "_id": 2,
        "_x": 0,
        "_ox": 0,
        "_type": 0
    },
    {
        "_h": 16,
        "_w": 32,
        "_y": 0,
        "_bmp": null,
        "_oy": 0,
        "_id": 3,
        "_x": 34,
        "_ox": 0,
        "_type": 0
    }],
    "actions": [],
    "tiles": maps.getTiles()
}