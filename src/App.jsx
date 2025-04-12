import { useState } from "react";

export default function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newContact, setNewContact] = useState({ name: "", phone: "", email: "" });

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && newContact.email) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: "", phone: "", email: "" });
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Manager</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          className="p-2 rounded bg-gray-800 w-full"
        />
        <input
          type="text"
          placeholder="Phone"
          value={newContact.phone}
          onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
          className="p-2 rounded bg-gray-800 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
          className="p-2 rounded bg-gray-800 w-full"
        />
        <button
          onClick={handleAddContact}
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded bg-gray-800 w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-3">{contact.name}</td>
                  <td className="p-3">{contact.phone}</td>
                  <td className="p-3">{contact.email}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDeleteContact(index)}
                      className="bg-red-600 hover:bg-red-700 p-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-center" colSpan="4">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
