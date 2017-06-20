class PhoneBook {
  constructor() {
    this.contacts = new Map();
  }

  add(data) {
    if (this.contacts.has(data.name)) {
      this.contacts.get(data.name).push(data.phone);
    } else {
      this.contacts.set(data.name, [data.phone]);
    }
  }

  delete(contact) {
    if (this.contacts.has(contact)) {
      this.contacts.delete(contact);
    }
  }
}

export default PhoneBook;
