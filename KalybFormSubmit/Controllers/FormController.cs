using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace KalybFormSubmit.Controllers
{
    [ApiController]
    [Route("/form")]
    public class FormController : Controller
    {
        [HttpPost]
        public void MakeFile([FromForm] string form)
        {
            string path = @"c:\temp\form.txt";
            try
            {
                StreamWriter sw = new StreamWriter(path);
                sw.WriteLine(form);
                sw.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine("oops got to the exception");
                Console.WriteLine(ex.ToString());
            }
        }
    }
}
