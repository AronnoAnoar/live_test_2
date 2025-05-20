import 'package:flutter/material.dart';

void main() {
  runApp(ContactApp());
}

class ContactApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Contact List',
      home: ContactListPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class Contact {
  final String name;
  final String number;

  Contact(this.name, this.number);
}

class ContactListPage extends StatefulWidget {
  @override
  _ContactListPageState createState() => _ContactListPageState();
}

class _ContactListPageState extends State<ContactListPage> {
  final _nameController = TextEditingController();
  final _numberController = TextEditingController();
  final List<Contact> _contacts = [];

  void _addContact() {
    final name = _nameController.text.trim();
    final number = _numberController.text.trim();

    if (name.isNotEmpty && number.isNotEmpty) {
      setState(() {
        _contacts.add(Contact(name, number));
        _nameController.clear();
        _numberController.clear();
      });
    }
  }

  void _deleteContact(int index) {
    setState(() {
      _contacts.removeAt(index);
    });
  }

  void _showDeleteConfirmation(int index) {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text('Confirmation'),
        content: Text('Are you sure for Delete?'),
        actions: [
          IconButton(
            icon: Icon(Icons.cancel),
            onPressed: () => Navigator.of(ctx).pop(),
          ),
          IconButton(
            icon: Icon(Icons.delete),
            onPressed: () {
              _deleteContact(index);
              Navigator.of(ctx).pop();
            },
          ),
        ],
      ),
    );
  }

  Widget _buildContactTile(Contact contact, int index) {
    return ListTile(
      leading: Icon(Icons.person),
      title: Text(
        contact.name,
        style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold),
      ),
      subtitle: Text(contact.number),
      trailing: Icon(Icons.phone, color: Colors.blue),
      onLongPress: () => _showDeleteConfirmation(index),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Contact List'),
        backgroundColor: Colors.blueGrey,
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            TextField(
              controller: _nameController,
              decoration: InputDecoration(labelText: 'Name'),
            ),
            TextField(
              controller: _numberController,
              decoration: InputDecoration(labelText: 'Number'),
              keyboardType: TextInputType.phone,
            ),
            SizedBox(height: 10),
            ElevatedButton(
              onPressed: _addContact,
              child: Text('Add'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.blueGrey),
            ),
            SizedBox(height: 10),
            Expanded(
              child: _contacts.isEmpty
                  ? Center(child: Text('No contacts added yet.'))
                  : ListView.builder(
                      itemCount: _contacts.length,
                      itemBuilder: (ctx, index) =>
                          _buildContactTile(_contacts[index], index),
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
