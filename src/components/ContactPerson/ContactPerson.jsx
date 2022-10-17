import PropTypes from 'prop-types';
import { DeleteButton, PersonStyled } from './ContactPerson.styled';

export const ContactPerson = ({ name, number, id, deleteContact }) => {
  return (
    <PersonStyled>
      <span>
        {name}: {number}
      </span>
      <DeleteButton
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </DeleteButton>
    </PersonStyled>
  );
};

ContactPerson.propTypes = {
  deleteContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
