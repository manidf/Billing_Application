(function ($) {

    //objec declarations go here
    $(document).ready(function () {


        //start application code here

        //Define Model
        var InvoiceItemModel = Backbone.Model.extend({
            //set defaults
            defaults: {
                price: 0,
                quantity: 0
            },          
            //calculate amount
            calculateAmount: function () {
                return this.get('price') * this.get('quantity');
            }
        });

        //Create Model Instance
        var invoiceItemModel = new InvoiceItemModel({
            price: 2,
            quantity: 3
        });


    });

})(jQuery);