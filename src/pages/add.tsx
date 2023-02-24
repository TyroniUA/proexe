import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { User } from '../types/types';
import { addUser } from '@/store/userSlice';
import { v4 as uuidv4 } from "uuid";
import { StyledForm, StyledDiv, AddButton, StyledCancelButton } from '@/constants/constants';

interface AddProps {
  users: User[];
}

const Add: React.FC<AddProps> = ({ users }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>();
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = (data: User) => {
    const newUser = {
      id: uuidv4(),
      name: data.name,
      username: data.username,
      address: {
        city: data.city,
        country: "N/D"
      },
      email: data.email
    }
    dispatch(addUser(newUser));
    // Add new user to users arra
    router.push('/home');
  };

  return (
    <StyledForm>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <StyledDiv>
          <label htmlFor="name">Name:</label>
          <input type="text" {...register("name")} />
          {errors.name && <p>Name is required</p>}
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="username">Username:</label>
          <input type="text" {...register("username")} />
          {errors.username && <p>Username is required</p>}
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="city">City:</label>
          <input type="text" {...register("city")} />
          {errors.city && <p>City is required</p>}
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="email">Email:</label>
          <input type="text" {...register("email")} />
          {errors.email && <p>A valid email is required</p>}
        </StyledDiv>
        <AddButton type="submit">Add User</AddButton>
        <Link href="/home">
          <StyledCancelButton>
            Cancel
          </StyledCancelButton>
        </Link>
      </form>
    </StyledForm>
  );
};

export default Add;