steal('jquery/controller',
      'jquery/view/ejs',
      'jquery/controller/view',
      './ItemsCreate.css',
      'sales/scripts/ModalDialog.js',
      'sales/styles/ModalDialog.css')
.then('./views/createTaxDialog.ejs',
      './views/init.ejs', function ($) {
          $.Controller('sales.Controllers.items.create',
        {
            defaults: ($this = null)
            //    onDocument: true
        },
        {
            init: function () {
                $this = this;
                this.element.html(this.view("//sales/controllers/items/create/views/init.ejs"));

            },
            load: function () {
                $this = this;
                this.element.html(this.view("//sales/controllers/items/create/views/init.ejs"));
            },
            "#createTaxLink click": function (el, ev) {
                this.createTaxDialog();
                ev.preventDefault();
                this.triggerNewEvent();
            },
            createTaxDialog: function () {
                new ModalDialog("Pajak Baru");
                $("#dialogContent").html(this.view("//sales/controllers/items/create/views/createTaxDialog.ejs"));
            },
            triggerNewEvent: function () {
                $(".submitTax").click(this.submitTax);
                $("#cancelCreateTax").click(this.cancelCreateTaxClick);
                $("#taxName").keypress(this.taxNameKeypress);
                $("#percentTax").keypress(this.percentTaxKeypress);
            },
            "#createItemsForm submit": function (el, ev) {
                var form = $("#createItemsForm");
                $.ajax({
                    type: "POST",
                    url: "/createnewitem",
                    data: form.serialize(),
                    dataType: "json",
                    success: function (data) {
                        if (data.error) {
                            $this.onErrorRequestData(data.message);
                            return;
                        }
                        $("#body").sales_items_list("load");
                    }

                });
                ev.preventDefault();

            },
            onErrorRequestData: function (msg) {
                var err = $("#errorCreateItemDiv");
                err.empty();
                $('<li>', { text: msg }).appendTo(err.show());
            },
            submitTax: function (el, ev) {
                var form = $("#taxForm");
                var err = $("#errorCreateTaxDiv");
                var defaults = {
                    name: $("#taxName").val(),
                    percent: $("#percentTax").val()
                };
                err.empty();
                if (defaults.name !== "" && defaults.percent != 0)
                    form.submit();
                if (defaults.name == "")
                    $('<li>', { 'class': 'name', text: "Nama Pajak harus di isi" }).appendTo(err.show());
                if (defaults.percent == "")
                    $('<li>', { 'class': 'percenttax', text: "Persentase Pajak harus di diisi" }).appendTo(err.show());
                if (defaults.percent <= 0)
                    $('<li>', { 'class': 'percenttax', text: "Persentase Pajak harus lebih besar dari nol" }).appendTo(err.show());
                ev.preventDefault();
                return;
            },
            taxNameKeypress: function () {
                $('li.name').remove();
                if ($("#errorCreateTaxDiv").is(':empty'))
                    $("#errorCreateTaxDiv").hide();
            },
            percentTaxKeypress: function () {
                $('li.percenttax').remove();
                if ($("#errorCreateTaxDiv").is(':empty'))
                    $("#errorCreateTaxDiv").hide();
            },
            cancelCreateTaxClick: function () {
                $("#taxName").val("");
                $("#percentTax").val("");
                $(".ModalDialog").remove();
            },
            "#cancelCreateItem click": function () {
                $("#itemName").val("");
                $("#description").val("");
                $("#itemPrice").val("");
                $("#tax").val("");
            },
            "#itemCode blur": function () {
                $.ajax({
                    type: 'GET',
                    url: '/isCodeIsExist',
                    dataType: 'json',
                    success: function (data) {
                        var messageArea = $(".messageVerify"),
                        imgVerify = null,
                        message = null;
                        if (data) {
                            imgVerify = $('<img>', { 'class': 'exist' });
                            message = $('<span>', { 'class': 'existMessage' });
                        }
                    }
                });
            }
        })
      });