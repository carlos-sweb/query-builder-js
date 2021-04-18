var PuntosDeVenta = [

	{
	nombre:"Cafeteria Alma Café",
	direccion:"Av. Francisco Bilbao 2985",
	comuna:"Providencia",
	instagram:"https://www.instagram.com/cafeteria.almacafe/",
	atencion:"Lunes a Viernes",
	mapslink:""
	},


	{
	nombre:"Bosquecito de Pirque",
	direccion:"Calle Nueva Parcela 8 C, El Principal",
	comuna:"Pirque",
	instagram:"https://www.instagram.com/bosquecitodepirque/",
	atencion:"Lunes a Domingo",
	mapslink:""
	},

	{
	nombre:"Bopan",
	direccion:"Av. San Carlos 505, Local 1	",
	comuna:"Puente Alto",
	instagram:"https://www.instagram.com/bopan.cl/",
	atencion:"Lunes a Domingo",
	mapslink:""
	},

    {
    nombre:"Café Primmo",
    direccion:"Moneda 1412",
    comuna:"Santiago Centro",
    instagram:"https://www.instagram.com/cafeprimmo/",
    atencion:"Lunes a Viernes",
    mapslink:""
    },

    {
    nombre:"Don Bono Coffee and Bakery",
    direccion:"Av. Los Leones 712",
    comuna:"Providencia",
    instagram:"https://www.instagram.com/donbonocoffeebakery/",
    atencion:"Lunes a Domingo",
    mapslink:""
    },
    

    {
    nombre:"Mago Market",
    direccion:"Emilio Vaisse 586",
    comuna:"Providencia",
    instagram:"https://www.instagram.com/magomarkett/",
    atencion:"Lunes a Domingo",
    mapslink:""
    },

    {
    nombre:"Bricafe Boutique",
    direccion:"Av. Macul 2363",
    comuna:"Macul",
    instagram:"https://www.instagram.com/bricafeboutique/",
    atencion:"Lunes a Domingo",
    mapslink:""
    },

    {
    nombre:"Almacen Gourmet",
    direccion:"Montenegro 1764",
    comuna:"Ñuñoa",
    instagram:null,
    atencion:"Lunes a Domingo",
    mapslink:""
    },

    {
    nombre:"Emporio Frutteto",
    direccion:"Cueto 1207",
    comuna:"Santiago Centro",
    instagram:"https://www.instagram.com/emporiofrutteto/",
    atencion:"Lunes a Domingo",
    mapslink:""
    },

	{
	nombre:"Minimarket Be y So",
	direccion:"Miraflores 449	Peñaflor ",
	comuna:"Malloco	",
	instagram:"https://www.instagram.com/minimarket.beyso/",
	atencion:"Lunes a Domingo",
	mapslink:""
	},

	{
	nombre:"Impulso Natural",
	direccion:"Capitan Orella 2513",
	comuna:"Ñuñoa",
	instagram:"https://www.instagram.com/impulsonaturaltienda/",
	atencion:"Lunes a Domingo",
	mapslink:""
	},

	{
	nombre:"Colegio Colonial de Pirque",
	direccion:"Concha y Toro SN parcela 44",
	comuna:"Pirque",
	instagram:null,
	atencion:"Lunes a Viernes",
	mapslink:""
	},

	{
	nombre:"Feria Verde Colegio Colonial de Pirque",
	direccion:"Concha y Toro SN parcela 44",
	comuna:"Pirque",
	instagram:null,
	atencion:"Solo los viernes",
	mapslink:""
	}

]

document.addEventListener("DOMContentLoaded", function(event) {
 
	var app = new Vue({
	  el: '#app',
	  data: {
	    pv:PuntosDeVenta
	  }
	})

});
