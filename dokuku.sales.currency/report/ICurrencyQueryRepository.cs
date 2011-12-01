﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using dokuku.sales.currency.model;

namespace dokuku.sales.currency.report
{
    public interface ICurrencyQueryRepository
    {
        IEnumerable<Currencies> GetAllTaxes(string ownerId);
    }
}
