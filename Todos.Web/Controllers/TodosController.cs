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

        public ActionResult GetAll(string filter)
        {
            if (filter.Equals("ACTIVE", StringComparison.OrdinalIgnoreCase))
            {
                return this.Json(new { Todos = registry.Where(x => !x.Value.IsCompleted).Select(x => x.Value) }, JsonRequestBehavior.AllowGet);
            }

            if (filter.Equals("COMPLETED", StringComparison.OrdinalIgnoreCase))
            {
                return this.Json(new { Todos = registry.Where(x => x.Value.IsCompleted).Select(x => x.Value) }, JsonRequestBehavior.AllowGet);
            }

            return this.Json(new { Todos = registry.Select(x => x.Value) }, JsonRequestBehavior.AllowGet);
        }

        public void Add(Todo value)
        {
            registry.Add(value.Id, value);
        }

        public void Delete(Guid id)
        {
            registry.Remove(id);
        }

        public void Update(Todo value)
        {
            registry[value.Id] = value;
        }

        public void Complete(Guid id)
        {
            registry[id].IsCompleted = true;
        }

        public ActionResult NextId()
        {
            return this.Json(new { NextId = Guid.NewGuid() }, JsonRequestBehavior.AllowGet);
        }
	}
}