/*
    scrollPage 
	@author : Dayvson Vinicius    

*/

/*Vars*/

var scrollPage = 
{

	config :
	{
		title 	: ' - '+document.title // Estilo do titulo padrão [' - '+document.title]
		,attr_title : 'title' // nome do atributo que será o titulo Bonitinho Com acento.
		,page 	: '.spages' // está classe fica em todas as paginas que tem id, serve para que o plugin identifique o local exato do elemento
		,classlnk 	: '.sp-link' // está class fica no link a ser clicado para chamar a pagina
		,lnks 	: '.sp-link' // está class fica no link a ser clicado para chamar a pagina
		,hash 	: '!/'//opções 'false -> nao mostra' ou Personalize
		,total 	: 0 // é a variavel do total de paginas com a class '.spages'
		,name 	: [] // Array dos id das paginas
		,top 		: [] // Array do topo de cada pagina
		,height : [] // Array do tamanho das paginas.
		,parentMenu : 'menu' // Id do pai que ficará fixo.
		,afterFix : 'inicio' // depois de que pagina ele ficara fixo? ou false ele nao faz nada
		,classFix : 'fix' // Class que vai adicionar no menu para ficar fixo.
		,classActive : 'nav-active' // class 'active' do menu
		,data_atribute : 'data-name' // Atributo que fica no link a ser Clicado, indica pra qual id 
		,duration : '500' // Duração da animação Scrolling.
	},

  init : function(userConfig) 
  {
    	scrollPage.hasHash();

    	if(userConfig) {
			for(var key in userConfig) {
				if(scrollPage.config.hasOwnProperty(key)) {
					scrollPage.config[key] = userConfig[key];
				}
			}
		}

		scrollPage.config.lnks = document.querySelectorAll(scrollPage.config.classlnk);
		
    	scrollPage.onScroll();

        var pages = document.querySelectorAll(scrollPage.config.page);

        scrollPage.config.total = pages.length

		/*param1 = key in param2[param1] = value*/
		for(i=0; i < scrollPage.config.total ; i++) {
			
	   		scrollPage.config.name[i] = pages[i].id;//Pega o nome a pagina
	  		
	   		scrollPage.config.top[i] = pages[i].offsetTop;//Pega a posição "Top" relacionada a pagina
	  		
	  		scrollPage.config.height[i] = pages[i].offsetHeight;//Pega o tamanho do elemento			

		}

		scrollPage.click();

    scrollPage.loadPage();
  },

  onScroll : function(){

		window.onscroll = function(){
			scrollPage.loadPage();
		}
  },

	loadPage : function()
	{
		spScroll = document.body.scrollTop;

       for(var i=0;i < scrollPage.config.total; i++){
				if( spScroll+1 > scrollPage.config.top[i] && spScroll < scrollPage.config.top[i] + scrollPage.config.height[i]){

			    scrollPage.hash(scrollPage.config.name[i]);
        		scrollPage.titlePage(scrollPage.config.name[i]);
	  			scrollPage.menufix(scrollPage.config.name[i])
	  			scrollPage.active(scrollPage.config.name[i])
			}
		}  
	},

	hash : function(name)
	{
		if(scrollPage.config.hash)
	  	document.location.hash = scrollPage.config.hash+name;
	},

	titlePage : function(name){
		var title = document.querySelector(scrollPage.config.classlnk+'['+scrollPage.config.data_atribute+'='+name+']').getAttribute(scrollPage.config.attr_title);
	  document.title = title + scrollPage.config.title;
	},

	goTo : function(name)
	{
		positionPage = document.getElementById(name).offsetTop;
				
		scrollPage.scrollto(positionPage);  		
	},

	click : function()
	{
		for (var i = 0; i < scrollPage.config.lnks.length; i++) {

			scrollPage.config.lnks[i].onclick = function(){
				scrollPage.goTo(this.getAttribute(scrollPage.config.data_atribute));
				return false;
			}
		};
	},

	hasHash : function (){
	  var Hash = document.location.hash;

	  if(Hash !== ''){
	  	scrollPage.goTo(Hash.substring(3,Hash.length));
	  }
	},


	scrollto : function (target, duration) 
	{
	    var timer, start, factor;
		
	    var offset = window.pageYOffset,
	    delta  = target - window.pageYOffset; // Y-offset difference
	    duration = scrollPage.config.duration || 1000;              // default 1 sec animation
	    start = Date.now();                       // get start time
	    factor = 0;

	    if( timer ) {
	      clearInterval(timer); // stop any running animation
	    }

	    function step() {
	      var y;
	      factor = (Date.now() - start) / scrollPage.config.duration; // get interpolation factor
	      if( factor >= 1 ) {
	        clearInterval(timer); // stop animation
	        factor = 1;           // clip to max 1.0
	      } 
	      y = factor * delta + offset;
	      window.scrollBy(0, y - window.pageYOffset);
	    }

	    timer = setInterval(step, 10);
	    return timer; // return the interval timer, so you can clear it elsewhere		 
	},

	menufix : function(name){
		if(scrollPage.config.afterFix){

			var menu = document.getElementById(scrollPage.config.parentMenu);
			var pageAfter = document.getElementById(scrollPage.config.afterFix);

			if(name != scrollPage.config.afterFix){ classie.add(menu,scrollPage.config.classFix); pageAfter.style.marginTop = (menu.offsetHeight+1)+'px'; }else{ classie.remove(menu,scrollPage.config.classFix); pageAfter.style.marginTop = 0;}
		
		}
	},
	
	active : function(name){

		for (var i = 0; i < scrollPage.config.lnks.length; i++) {
			
			classie.remove(scrollPage.config.lnks[i],scrollPage.config.classActive)			

			if(name == scrollPage.config.lnks[i].getAttribute(scrollPage.config.data_atribute)){

				classie.add(scrollPage.config.lnks[i],scrollPage.config.classActive)
			}
		};
	}
	

};




