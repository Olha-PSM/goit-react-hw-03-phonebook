import { List, Item } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>

          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};
