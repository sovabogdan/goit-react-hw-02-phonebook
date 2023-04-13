import {Item, Info,DeleteButton} from './ContactItem.styled'

export const ContactItem = ({ item, deleteContact }) => {
  return (
    <Item>
      <Info>Name: {item.name}</Info>
      <Info>Number: {item.number}</Info>
      <DeleteButton type="button" onClick={() => deleteContact(item.id)}>
        Delete
      </DeleteButton>
    </Item>
  );
};