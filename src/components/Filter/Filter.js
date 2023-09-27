import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <p>Find contacts by name</p>
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
