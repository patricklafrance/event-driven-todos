using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Todos.Web.Controllers
{
    public class ApplicationController : Controller
    {
        public ActionResult Index()
        {
            return this.View("Index");
        }
	}
}