using WebAPI.Models;
using System.Xml.Linq;

namespace WebAPI.Services;

public static class CustomerService
{
    static List<Customer> Customers { get; }
    static int nextId = 3;
    static CustomerService()
    {
        Customers = new List<Customer>
        {
            new Customer { Id = 1, Name = "Classic Italian" },
            new Customer { Id = 2, Name = "Veggie" }
        };
    }

    public static List<Customer> GetAll() => Customers;

    public static Customer? Get(int id) => Customers.FirstOrDefault(p => p.Id == id);

    public static void Add(Customer customer)
    {
        customer.Id = nextId++;
        Customers.Add(customer);
    }

    public static void Delete(int id)
    {
        var pizza = Get(id);
        if (pizza is null)
            return;

        Customers.Remove(pizza);
    }

    public static void Update(Customer customer)
    {
        var index = Customers.FindIndex(p => p.Id == customer.Id);
        if (index == -1)
            return;

        Customers[index] = customer;
    }
}