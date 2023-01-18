import PropTypes from 'prop-types';
import { Text, Button } from "./Contact.styled";

export const Contact = ({ contact: { id, name, number }, onDelete }) => (
  <>
    <Text>
      {name}: {number}
    </Text>
    <Button type="button" onClick={() => onDelete(id)}>
      Delete
    </Button>
  </>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}