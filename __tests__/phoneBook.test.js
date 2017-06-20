import PhoneBook from '../code/phoneBook';

let phoneBook;

beforeEach(() => phoneBook = new PhoneBook());

test('the phoneBook should exist when initialized', () => {
  expect(phoneBook).toBeDefined();
});

test('add a contact to the phonebook', () => {
  phoneBook.add({ name: 'Juan', phone: 401 });
  expect(phoneBook.contacts.has('Juan')).toBeTruthy();
});

test('add phone to an existent contact', () => {
  phoneBook.add({ name: 'Juan', phone: 401 });
  phoneBook.add({ name: 'Juan', phone: 501 });
  expect(phoneBook.contacts.get('Juan').length).toBe(2);
});

test('delete contact', () => {
  phoneBook.add({ name: 'Juan', phone: 401 });

  phoneBook.delete('Juan');
  expect(phoneBook.contacts.size).toBe(0);
});
