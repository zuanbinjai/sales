﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Machine.Specifications;
using dokuku.sales.payment.domain;
namespace dokuku.sales.payment.fixture
{
    [Subject("Bayar invoice")]
    public class When_pay_invoice_full
    {
        static InvoicePayment payment;
        Establish context = () => {
            payment = new InvoicePayment(Guid.NewGuid(),"oetawan",new Invoice(Guid.NewGuid(), "INV-1", 10000000), Guid.NewGuid());
        };

        Because of = () =>
        {
            PaymentRecord pr = PaymentRecord.
                AmountPaid(10000000).
                BankCharge(100000).
                PaymentDate(new DateTime(2012, 1, 20)).
                PaymentMode(new PaymentMode("Cash")).
                Reference("#001002").
                Notes("test full payment");

            payment.Pay(pr);
        };

        It has_outstanding_should_be_false = () =>
        {
            payment.HasOutstanding().ShouldBeFalse();
        };
    }
}