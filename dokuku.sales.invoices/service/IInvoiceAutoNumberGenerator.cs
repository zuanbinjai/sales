﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using dokuku.sales.invoices.model;
namespace dokuku.sales.invoices.service
{
    public interface IInvoiceAutoNumberGenerator
    {
        string GenerateInvoiceNumberDraft(string companyId);
        string GenerateInvoiceNumber(DateTime transactionDate, string companyId);
        void SetupInvoiceAutoMumber(AutoNumberMode mode, string prefix);
        InvoiceAutoNumberConfig GetInvoiceAutoNumberConfig(string companyId);
    }
}