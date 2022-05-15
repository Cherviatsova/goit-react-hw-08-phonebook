import { Container, ContactForm, Label, Input, ErrorText, SubmitBtn} from './Form.styled'
import toast from 'react-hot-toast'
import { useAddContactMutation, useGetContactsQuery } from 'redux/contacts/contacts-slice';
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

function Form({closeModal, isOpenModal}) {
 const [addItem] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();
  
     const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
    
    const onSubmit = ({ name, phone }) => {
      if (contacts.some(contact => contact.name === name)) {
        toast.error(`${name} is already in contacts`);
      } else {
        addItem({ name, phone });
        isOpenModal && closeModal()
      }
    reset();
    };
    
    return (
        <Container>
            <ContactForm  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Label>
                    Name
                    <Input
                    type="text"
            {...register('name', {
              required: '❌ The field cannot be empty!',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/gi,
                message:
                  "❌ Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
              },
              minLength: {
                value: 2,
                message:  '❌ Name must contain 2 letters minimum',
              },
            })}
                    />
                </Label>
                  <div>
          {errors?.name && (
            <ErrorText>
              {errors?.name.message || 'An error has occurred...'}
            </ErrorText>
          )}
        </div>
                

                <Label>
                    Phone number
                    <Input
                     type="tel"
            {...register('phone', {
              required: '❌ The field cannot be empty!',
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
                message:
                  '❌ Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              },
              minLength: {
                value: 5,
                message: '❌ Phone number must contain 5 digits minimum',
              },
            })}
                    />
                </Label>
                <div>
          {errors?.number && (
            <ErrorText>
              {errors?.number.message || 'An error has occurred...'}
            </ErrorText>
          )}
                </div>
                <SubmitBtn type="submit" disabled={!isValid}>Add contact</SubmitBtn>
               
</ContactForm>
        </Container>
    )
}

Form.propTypes = {
  closeModal: PropTypes.func,
  isOpenModal: PropTypes.bool,
}

export default Form;