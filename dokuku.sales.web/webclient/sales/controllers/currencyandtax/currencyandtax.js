steal('jquery/controller', 'jquery/view/ejs',
 'sales/controllers/currencyandtax/currencyandtax.css',
 'sales/controllers/tax',
 'sales/controllers/currency'
 )
	.then('./views/listcurrencyandtax.ejs', function ($) {

	    /**
	    * @class Sales.Controllers.Currencyandtax
	    */
	    $.Controller('Sales.Controllers.Currencyandtax',
	    /** @Static */
{
defaults: {}
},
	    /** @Prototype */
{
    init: function () {
        this.element.html(this.view('//sales/controllers/currencyandtax/views/listcurrencyandtax.ejs'));
       
    },
    load: function () {
        this.element.html(this.view('//sales/controllers/currencyandtax/views/listcurrencyandtax.ejs'));
    },
    '#img-currency click': function () {
          this.ClearContain();
         $("#body").sales_currency('load')
    },
     '#currencyLink click': function () {
          this.ClearContain();
        $("#body").sales_currency('load')
     
    },
    '#img-tax click': function () {
          this.ClearContain();
         $("#body").sales_tax('load')
    },
     '#taxLink click': function () {
          this.ClearContain();
         $("#body").sales_tax('load')
    },
    '#btn-add-tax click': function(){
        this.ClearContain();
        $("#body").sales_tax('viewAddTax');
    },   
    
     ClearContain: function () {
                $("#body").empty();
     },

})
});