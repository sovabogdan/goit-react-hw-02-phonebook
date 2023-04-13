import { ContactItem } from '../Item/ContactItem';
import {Title} from './ContactList.styled'

export default function ContactList({ contactsInfo, deleteContact }) {
  return (
    <div>
      <Title>Contacts list</Title>
      <ul>
        {contactsInfo.map(item => (
          <ContactItem
            item={item}
            key={item.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
}