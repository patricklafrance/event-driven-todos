using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Todos.Web
{
    public class Todo
    {
        public Guid Id { get; set; }

        public string Description { get; set; }

        public bool IsCompleted { get; set; }
    }
}