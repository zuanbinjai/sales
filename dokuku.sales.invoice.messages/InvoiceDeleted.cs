﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NServiceBus;
namespace dokuku.sales.invoice.messages
{
    [Serializable]
    public class InvoiceDeleted : IMessage
    {
        public Guid Id { get; set; }
        public string OwnerId { get; set; }
    }
}