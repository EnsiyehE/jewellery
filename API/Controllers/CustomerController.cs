using WebAPI.Models;
using WebAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace WebAPI.Controllers;

[ApiController]
[Route("[controller]")]
[EnableCors("AllowLocalhost")]
public class CustomerController : ControllerBase
{
    public CustomerController()
    {
    }
    // Important for CORS
    [HttpOptions]
    public IActionResult Options()
    {
        return Ok();
    }
    // GET all action
    [HttpGet]
    public ActionResult<List<Customer>> GetAll() =>
    CustomerService.GetAll();

    // GET by Id action
    [HttpGet("{id}")]
    public ActionResult<Customer> Get(int id)
    {
        var pizza = CustomerService.Get(id);

        if (pizza == null)
            return NotFound();

        return pizza;
    }

    // POST action
    [HttpPost]
    public IActionResult Create([FromBody] Customer customer)
    {
        // This code will save the customer and return a result
        CustomerService.Add(customer);
        return CreatedAtAction(nameof(Get), new { id = customer.Id }, customer);
    }

    // PUT action
    [HttpPut("{id}")]
    public IActionResult Update(int id, Customer customer)
    {
        // This code will update the customer and return a result
        if (id != customer.Id)
            return BadRequest();

        var existingCustomer = CustomerService.Get(id);
        if (existingCustomer is null)
            return NotFound();

        CustomerService.Update(customer);

        return NoContent();
    }

    // DELETE action
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        // This code will delete the customer and return a result
        var customer = CustomerService.Get(id);

        if (customer is null)
            return NotFound();

        CustomerService.Delete(id);

        return NoContent();
    }
}