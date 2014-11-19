using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Todos.Web.Controllers
{
    public class TodosController : Controller
    {
        public static IDictionary<Guid, Todo> registry;

        static TodosController()
        {
            var todo1 = new Todo { Id = Guid.NewGuid(), Description = "Todo 1" };
            var todo2 = new Todo { Id = Guid.NewGuid(), Description = "Todo 2" };

            registry = new Dictionary<Guid, Todo>
            {
                { todo1.Id, todo1 },
                { todo2.Id, todo2 },
            };
        }

        public ActionResult GetAll()
        {
            return this.Json(new { Todos = registry.Select(x => x.Value) }, JsonRequestBehavior.AllowGet);
        }

        public void Add(Todo value)
        {
            registry.Add(value.Id, value);
        }

        public void Delete(Todo value)
        {
            registry.Remove(value.Id);
        }

        public void Update(Todo value)
        {
            registry[value.Id] = value;
        }

        public void Complete(Todo value)
        {
            registry[value.Id].IsCompleted = true;
        }

        public ActionResult NextId()
        {
            return this.Json(new { NextId = Guid.NewGuid() }, JsonRequestBehavior.AllowGet);
        }
	}
}