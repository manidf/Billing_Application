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

        //Define the view that will render teh model
        var PreviewInvoiceItemView = Backbone.View.extend({

            //define template using template engine from underscore.js
            template: _.template('\
              Price: <%= price %>.\
              Quantity: <%= quantity %>.\
              Amount: <%= amount %>.\
            '),

            //render view
            render: function () {

                //generate HTML by rendering the template.
                var html = this.template({

                    //Pass model properties to the template.
                    price: this.model.get('price'),
                    quantity: this.model.get('quantity'),

                    //calculate amount and pass it to the template.
                    amount: this.model.calculateAmount()
                });

                //set html for the view element using jQuery.
                $(this.el).html(html);
            }
        });

    });
    $(document).ready(function () {
        //Create Model Instance
        var invoiceItemModel = new InvoiceItemModel({
            price: 2,
            quantity: 3
        });

        var previewInvoiceItemView = new PreviewInvoiceItemView({
            model: invoiceItemModel,
            el: 'body'
        });

        previewInvoiceItemView.render();

    });
    

})(jQuery);