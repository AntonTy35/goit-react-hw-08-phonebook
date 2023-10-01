import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled, FilterTitle } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterStyled>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      ></input>
    </FilterStyled>
  );
};
