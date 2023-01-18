import PropTypes from 'prop-types';
import { List, Item } from './ContactsList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map((contact, idx) => (
        <Item key={idx}>
          <Contact contact={contact} onDelete={onDelete} />
        </Item>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
