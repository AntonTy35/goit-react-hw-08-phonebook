import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { useFormik } from 'formik';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const formik = useFormik({
    initialValues: {
      filter: '',
    },
  });

  return (
    <Box bg="white" p={6} rounded="md">
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <Input
            id="filter"
            name="filter"
            type="email"
            onChange={event => dispatch(setFilter(event.target.value.trim()))}
            value={filter}
            variant="filled"
            focusBorderColor="blue.200"
            color="teal"
            placeholder="Find contact by name"
          />

          <Button type="submit" colorScheme="teal" width="full">
            Find
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
