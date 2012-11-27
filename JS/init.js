function init () {	
	
	

	paper = Raphael("authentification", 400, 400);	
	rect_main = paper.rect(20, 20, 360, 360).attr({fill: "white", stroke: "white"});
	rect_NW = paper.rect(20, 20, 20, 20).attr({fill: "red",cursor: "move", opacity: 0.7});
	rect_NE = paper.rect(360, 20, 20, 20).attr({fill: "#0080ff",cursor: "move", opacity: 0.7});
	rect_SW = paper.rect(20, 360, 20, 20).attr({fill: "#ffae00",cursor: "move", opacity: 0.7});
	rect_SE = paper.rect(360, 360, 20, 20).attr({fill: "#87ff00",cursor: "move", opacity: 0.7});
	
	tab_drag = [0,0,0,0];	
	tab_final = [ [0,0,0,0], [0,0,0,0] , [0,0,0,0] , [0,0,0,0] ];	
	colors = ["white","red","#0080ff","#ffae00","#87ff00"];
		
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
		
		rect_NW.attr({opacity: 0.8});
	
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
						
			if( ( width_NW == 10) || ( height_NW == 10) ) { this.attr({width: 20, height:20});this.toFront();}
			else{
				this.attr({width: width_NW, height: height_NW});
				this.toFront();
				tab_fill(width_NW,height_NW,'NW');
			}			
			
			
			rect_NW.undrag();
			rect_NW.attr({cursor: "default"});
			rect_NW.attr({opacity: 1});
			
			tab_drag[0] = 1;
			to_front(1);to_front(2);to_front(3);
			checktab(0);
			
		}
	
	paper.set(rect_NW).drag(onmove, onstart, onend);


}

function init_event_NE(){

	var onstart = function (){
		this.width = this.attr("width");
		this.height = this.attr("height");
		
		this.x = this.attr("x");
		this.y = this.attr("y");
		
		rect_NE.attr({opacity: 0.8});
	
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
						
			if( ( width_NE == 10) || ( height_NE == 10) ) { this.attr({x : 360, y : 20,width: 20, height:20});}
			else{
				this.attr({x : (380 - width_NE), width: width_NE, height: height_NE});
				this.toFront();
				tab_fill(width_NE,height_NE,'NE');
			}			
			
			rect_NE.undrag();
			rect_NE.attr({cursor: "default"});
			rect_NE.attr({opacity: 1});
						
			tab_drag[1] = 1;
			to_front(0);to_front(2);to_front(3);
			checktab(1);
			
		}
	
	paper.set(rect_NE).drag(onmove, onstart, onend);

}

function init_event_SW(){

	var onstart = function (){
		this.width = this.attr("width");
		this.height = this.attr("height");
		
		this.x = this.attr("x");
		this.y = this.attr("y");
		
		rect_SW.attr({opacity: 0.8});
	
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
						
			if( ( width_SW == 10) || ( height_SW == 10) ) { this.attr({x : 20, y : 360,width: 20, height:20});}
			else{
				this.attr({y : (380 - height_SW), width: width_SW, height: height_SW});
				this.toFront();
				tab_fill(width_SW,height_SW,'SW');
			}	

			
			rect_SW.undrag();
			rect_SW.attr({cursor: "default"});
			rect_SW.attr({opacity: 1});
			
			
			tab_drag[2] = 1;
			to_front(0);to_front(1);to_front(3);
			checktab(2);
			
		}
	
	paper.set(rect_SW).drag(onmove, onstart, onend);

}

function init_event_SE(){

	var onstart = function (){
		this.width = this.attr("width");
		this.height = this.attr("height");
		
		this.x = this.attr("x");
		this.y = this.attr("y");
		
		rect_SE.attr({opacity: 0.8});
	
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
						
			if( ( width_SE == 10) || ( height_SE == 10) ) { this.attr({x : 360, y : 360,width: 20, height:20});}
			else{
				this.attr({x : (380 - width_SE), y : (380 - height_SE), width: width_SE, height: height_SE});
				this.toFront();
				tab_fill(width_SE,height_SE,'SE');
			}			
			
			
			rect_SE.undrag();
			rect_SE.attr({cursor: "default"});
			rect_SE.attr({opacity: 1});
			
			
			tab_drag[3] = 1;
			to_front(0);to_front(1);to_front(2);
			checktab(3);
			
			
		}
	
	paper.set(rect_SE).drag(onmove, onstart, onend);

}

function to_front(corner){
	if((corner == 0) && (tab_drag[corner] == 0)){rect_NW.toFront();}
	if((corner == 1) && (tab_drag[corner] == 0)){rect_NE.toFront();}
	if((corner == 2) && (tab_drag[corner] == 0)){rect_SW.toFront();}
	if((corner == 3) && (tab_drag[corner] == 0)){rect_SE.toFront();}
}


function checktab(corner){

	var test = 0;
	
	for(i=0;i<4;i++){
	
		test = test + tab_drag[i];
	
	}
	
	if(test == 4){
	
		paper.rect(20, 20, 360, 360).attr({stroke: "black"});
	
		var data = [[0,""],[0,""],[0,""],[0,""],[0,""]];	
	
		for(k = 0; k < 4; k++){
		
			for(l = 0; l < 4; l++){
			
				data[tab_final[k][l]][0]++;

			}
		
		}
		
		for(j = 0; j < 5; j++){
		
			data[j][1] = colors[j];
		
		}
		
		data.sort(function(b, a) { return (a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0)); });
	
		var auth = d3.select("#authentification");
		auth.classed("unvisibility",true);	
		
		setTimeout(function(){

			d3.select("svg").remove(); 
			
			auth.style("width", "800px");
			
			auth.classed("unvisibility",false);
			auth.style("opacity", 1);
			
			
			auth.append("p").text("SUCCESSFUL AUTHENTIFICATION").property("className","message");
			auth.append("div").attr("id","feedback");
			auth.append("p").text("DATA COLORS - FREQUENCY").property("className","message");
			
			
			
			var chart = auth.append("div").attr("class","chart");
						
			chart.selectAll("div").data(data).enter().append("div").style("background-color",function(d){return(d[1]);}).style("border",function(d){if(d[1] == "white"){return "1px solid #7c7c7c";}else{return "none";}}).style("color",function(d){if(d[1] == "white"){return "#7c7c7c";}else{return "white";}}).style("width", 0 + "px").text(function(d) { return d[0]; });
			
			
			chart.selectAll("div").transition().delay(200).duration(1000).style("width", function(d) { if(d[0] == 0){return 6 + "px";}else{ if(d[1] == "white"){return d[0] * 50 + "px"; }else{return d[0] * 50 + 2 + "px";}}});
			// chart.selectAll("div").style("background-color","black");
						
			init_bis();

		},300);	
		
	
	}


}

function cut(x){

		if ( x < 45){ return 10;}
		else if( (45 < x) && ( x < 135)){ return 90;}
		else if( (135 < x) && ( x < 225)){ return 180;}
		else if( (225 < x) && ( x < 315)){ return 270;}
		else if( (315 < x) && ( x < 360)){ return 360;}
		else{ return 360; }
	

}

function init_lines(type){

	for(k = 0; k < 3; k++){
	
		l = 110 + k * 90;
		i = 20;
	
		while(i < 380){		
		
			j = i + 10;

			path(i,l,j,l);
			path(l,i,l,j);		

			i = i + 10;
			
		}
	}	

}

function path(x_start, y_start, x_end, y_end){

		paper.path("M" + x_start +" " + y_start + "L" + x_end + " " + y_end).attr({opacity: 1});

}


function tab_fill(width,height,corner){

	var x = width / 90;
	var y = height / 90;

	if(corner == 'NW'){
	
		for(i = 0; i < x; i++){

			for(j = 0; j < y; j++){
			
				tab_final[j][i] = 1;
			
			}
			
		}
	
	
	}else if(corner == 'NE'){
	
		for(i = 0; i < x; i++){

			for(j = 0; j < y; j++){
			
				tab_final[j][3 - i] = 2;
			
			}
			
		}
	
	}else if(corner == 'SW'){
	
		for(i = 0; i < x; i++){

			for(j = 0; j < y; j++){
			
				tab_final[3 - j][i] = 3;
			
			}
			
		}
	
	
	}else if(corner == 'SE'){
	
		for(i = 0; i < x; i++){

			for(j = 0; j < y; j++){
			
				tab_final[3 - j][3 - i] = 4;
			
			}
			
		}
		
	}


}


function init_bis(){

	paper = Raphael("feedback", 180, 180);
	
	
	var value ="";
	
	
	
	for(k = 0; k < 4; k++){
		
			for(l = 0; l < 4; l++){
			
				value = tab_final[k][l];
				paper.rect(l*45,k*45, 45, 45).attr({fill: colors[value],stroke:colors[value]});				

			}	
		}
	
	 paper.rect(0, 0, 180, 180).attr({stroke: "black"});

	 d3.select("svg").attr("class","visibility");

}
