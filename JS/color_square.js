function init () {
	
	tab_drag = [0,0,0,0];

	paper = Raphael("authentification", 400, 400);
	
	rect_main = paper.rect(20, 20, 360, 360).attr({fill: "white"});
	rect_NW = paper.rect(20, 20, 10, 10).attr({fill: "red",cursor: "move", opacity: 1});
	rect_NE = paper.rect(370, 20, 10, 10).attr({fill: "blue",cursor: "move", opacity: 1});
	rect_SW = paper.rect(20, 370, 10, 10).attr({fill: "yellow",cursor: "move", opacity: 1});
	rect_SE = paper.rect(370, 370, 10, 10).attr({fill: "purple",cursor: "move", opacity: 1});
	
	init_lines();
	init_event_NW();
	init_event_NE();
	init_event_SW();
	init_event_SE();
	
}

function init_event_NW(){

	var onstart = function (){
		this.width = this.attr("width");
		this.height = this.attr("height");
		
		this.x = this.attr("x");
		this.y = this.attr("y");
	
	}
	
	var onmove = function (dx, dy) {
       
			if( ( this.width + dx > 10) && ( this.height + dy > 10) && ( this.width + dx < 720) && ( this.height + dy < 720)){
				this.attr({width: this.width + dx, height: this.height + dy});
				this.toFront();
			}
        }
		
	var onend = function () {
	
			var width_NW = cut(rect_NW.attr("width"));
			var height_NW = cut(rect_NW.attr("height"));
						
			if( ( width_NW == 10) || ( height_NW == 10) ) { this.attr({width: 10, height:10});this.toFront();init_lines();}
			else{
				this.attr({width: width_NW, height: height_NW});
				this.toFront();
				init_lines();
			}			
			
			tab_drag[0] = 1;
			checktab();
			
		}
	
	paper.set(rect_NW).drag(onmove, onstart, onend);


}

function init_event_NE(){

	var onstart = function (){
		this.width = this.attr("width");
		this.height = this.attr("height");
		
		this.x = this.attr("x");
		this.y = this.attr("y");
	
	}
	
	var onmove = function (dx, dy) {
       
			if( ( this.width - dx > 10) && ( this.height + dy > 10) && ( this.width - dx < 720) && ( this.height + dy < 720)){
				this.attr({x: this.x + dx, width: this.width - dx, height: this.height + dy});
				this.toFront();
			}
        }
		
	var onend = function () {
	
			
			var width_NE = cut(rect_NE.attr("width"));
			var height_NE = cut(rect_NE.attr("height"));
						
			if( ( width_NE == 10) || ( height_NE == 10) ) { this.attr({x : 370, y : 20,width: 10, height:10});init_lines();}
			else{
				this.attr({x : (380 - width_NE), width: width_NE, height: height_NE});
				this.toFront();
				init_lines();
			}			
			
			tab_drag[1] = 1;
			checktab();
			
		}
	
	paper.set(rect_NE).drag(onmove, onstart, onend);

}

function init_event_SW(){

	var onstart = function (){
		this.width = this.attr("width");
		this.height = this.attr("height");
		
		this.x = this.attr("x");
		this.y = this.attr("y");
	
	}
	
	var onmove = function (dx, dy) {
       
			if( ( this.width + dx > 10) && ( this.height - dy > 10) && ( this.width + dx < 720) && ( this.height - dy < 720)){
				this.attr({y: this.y + dy, width: this.width + dx, height: this.height - dy});
				this.toFront();
			}
        }
		
	var onend = function () {
				
			var width_SW = cut(rect_SW.attr("width"));
			var height_SW = cut(rect_SW.attr("height"));
						
			if( ( width_SW == 10) || ( height_SW == 10) ) { this.attr({x : 20, y : 370,width: 10, height:10});init_lines();}
			else{
				this.attr({y : (380 - height_SW), width: width_SW, height: height_SW});
				this.toFront();
				init_lines();
			}			
			
			tab_drag[2] = 1;
			checktab();
			
		}
	
	paper.set(rect_SW).drag(onmove, onstart, onend);

}

function init_event_SE(){

	var onstart = function (){
		this.width = this.attr("width");
		this.height = this.attr("height");
		
		this.x = this.attr("x");
		this.y = this.attr("y");
	
	}
	
	var onmove = function (dx, dy) {
       
			if( ( this.width - dx > 10) && ( this.height - dy > 10) && ( this.width - dx < 720) && ( this.height - dy < 720)){
				this.attr({x: this.x + dx, y: this.y + dy, width: this.width - dx, height: this.height - dy});
				this.toFront();
			}
        }
		
	var onend = function () {
				
			var width_SE = cut(rect_SE.attr("width"));
			var height_SE = cut(rect_SE.attr("height"));
						
			if( ( width_SE == 10) || ( height_SE == 10) ) { this.attr({x : 370, y : 370,width: 10, height:10});init_lines();}
			else{
				this.attr({x : (380 - width_SE), y : (380 - height_SE), width: width_SE, height: height_SE});
				this.toFront();
				init_lines();
			}			
			
			tab_drag[3] = 1;
			checktab();
			
		}
	
	paper.set(rect_SE).drag(onmove, onstart, onend);

}

function checktab(){

	var test = 0;
	
	for(i=0;i<4;i++){
	
		test = test + tab_drag[i];
	
	}
	
	if(test == 4){
			
		var rect_validation = paper.rect(200, 200, 10, 10).attr({fill: "green"});
            rect_validation.animate({x: 20, y: 20, width : 360, height : 360}, 750, babar);
	
	
	}


}

function babar(){

	paper.text(200, 200, "Successfull Login").attr({"font-size": 40, fill: "white"});

}

function cut(x){

		if ( x < 45){ return 10;}
		else if( (45 < x) && ( x < 135)){ return 90;}
		else if( (135 < x) && ( x < 225)){ return 180;}
		else if( (225 < x) && ( x < 315)){ return 270;}
		else if( (315 < x) && ( x < 360)){ return 360;}
		else{ return 360; }
	

}

function init_lines(){

	for(k = 0; k < 3; k++){
	
		l = 110 + k * 90;
		i = 20;
	
		while(i < 380){		
		
			j = i + 10;
		
			path(i,l,j,l);
			path(l,i,l,j);		

			i = i + 20;
			
		}
	}	

}

function path(x_start, y_start, x_end, y_end){

	paper.path("M" + x_start +" " + y_start + "L" + x_end + " " + y_end);

}
