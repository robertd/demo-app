
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(()  => {
      return Promise.all([
        // Inserts seed entries
        knex('contacts').insert({ 
          first_name: 'John', 
          last_name: 'Doe', 
          email: 'john_doe@acme.net', 
          address: '123 Maple Street',
          phone: '720-123-4567',
          city: 'Denver',
          state: 'Colorado'
        }),
        knex('contacts').insert({ 
          first_name: 'Jane', 
          last_name: 'Doe', 
          email: 'jane_doe@acme.net', 
          address: '123 Apple Street',
          phone: '720-123-4321',
          city: 'Denver',
          state: 'Colorado'
        }),
        knex('contacts').insert({ 
          first_name: 'Jake', 
          last_name: 'Doe', 
          email: 'jake_doe@acme.net', 
          address: '123 Oak Street',
          phone: '720-123-0000',
          city: 'Denver',
          state: 'Colorado'
        })
      ]);
    });
};
