import PropTypes from 'prop-types';
import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { ListContacts } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => (
        <ContactPerson
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
