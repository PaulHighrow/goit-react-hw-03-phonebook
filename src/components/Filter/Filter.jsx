import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled";

export const Filter = ({ filter, onFilterInput }) => (
  <Label htmlFor="">
    Find contacts by name:
    <Input type="text" value={filter} onChange={onFilterInput} />
  </Label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterInput: PropTypes.func.isRequired,
}
