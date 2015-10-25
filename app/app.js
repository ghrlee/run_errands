(function(){

	
	var app = angular.module('runErrands', []);

	app.controller('DriverController', function(){
		this.vols = drivers;
	});

	app.controller('ClientController', function(){
		this.user = drivers;
	});

	app.controller('LocationController', function(){
		this.locale = locations;
	});

	app.controller('AdminController', function(){
		this.adm = clients;
	});

	var drivers= [

	{	firstName: 'Jim',
		lastName: 'Nelson' ,
		status: 'available' ,
		location: 'home' ,
		isADA:	false,
		isClient: false,
		description:'I enjoy helping people'
		
	},
	{	firstName: 'Reggie',
		lastName: 'Hammond',
		status:'busy' ,
		location: 'unknown' ,
		isADA: true	,
		isClient: false
		
	},
	{
			firstName:'Ethel',
			lastName: 'Waters',
			is_ADA: true,
			location: '7140 S. Honore, Chicago, Il 60636',
			description:'I like to see the world',
			stars: 4,
			isClient: true
		}

	];

	var clients=[]
  
})();
  

