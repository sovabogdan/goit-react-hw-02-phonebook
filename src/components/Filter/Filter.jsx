import {Container,Label, FilterInput} from './Filter.styled'
export const Filter = ({ filter, onFilter }) => {
  return (
    <Container>
       <Label htmlFor="filter">
      Find contact
      </Label>
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={onFilter}
            placeholder='Enter contact name'
          />
    </Container>

        
  );
};