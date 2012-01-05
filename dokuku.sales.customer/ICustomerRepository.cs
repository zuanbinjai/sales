﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace dokuku.sales.customer
{
    public interface ICustomerRepository
    {
        void Save(Customer cs);
        Customer Get(Guid id);
        void Delete(Guid id);
        IEnumerable<Customer> AllCustomers();
    }
}