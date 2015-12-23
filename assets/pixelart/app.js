var body = document.getElementsByTagName('body')[0];
var colorRow = document.createElement('div');
colorRow.className = 'colorRow';
var myDivs = [];
var arrayOfColors = [];
var GLOBALCOLOR;

function setSize(tmp){
	tmp.style.height = '18px';
	tmp.style.width = '1.5%';
	tmp.style.float = 'left';
	tmp.style.border = '1px solid black';
	tmp.style.margin = '2px'
}

function randomHex(){
	return '#' + (Math.floor(Math.random() * 900000) + Math.floor(Math.random() * 10))
}


for (var i = 0; i < (52 * 33); i++) {
	var tmp = document.createElement('div');
	setSize(tmp);
	tmp.addEventListener('click', function(e){
	e.target.style.background = GLOBALCOLOR;
	console.log(e);
	});
	body.appendChild(tmp);
};

for(var j = 0; j < 52; j++){
	var colorDivs = document.createElement('div');
	setSize(colorDivs);
	colorDivs.style.background = randomHex();
	colorRow.appendChild(colorDivs);
	arrayOfColors.push(colorDivs);
	colorDivs.addEventListener('click', function(e){
		GLOBALCOLOR = e.target.style.background;
	});
}





body.appendChild(colorRow);
