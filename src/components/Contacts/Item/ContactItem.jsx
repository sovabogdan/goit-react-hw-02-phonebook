import {Item, Info,DeleteButton} from './ContactItem.styled'

export const ContactItem = ({ item, deleteContact }) => {
  const { name, number, id } = item;
  return (
    <Item>
      <Info>Name: {name}</Info>
      <Info>Number: {number}</Info>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteButton>
    </Item>
  );
};