import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUser } from '../../store/userSlice';
import { RootState } from '../../store/store';
import { User } from '../../types/types';
import { StyledForm, StyledDiv, AddButton, } from '@/constants/constants';
interface FormData {
  name: string;
  username: string;
  city: string;
  email: string;
}

export default function EditUser() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.user);
  const user = users.find((u: User) => u.id === Number(id));

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: user?.name || '',
      username: user?.username || '',
      city: user?.address?.city || '',
      email: user?.email || '',
    },
  });

  const onSubmit = (data: FormData) => {
    if (user) {
      const updatedUser: User = {
        ...user,
        name: data.name,
        username: data.username,
        address: {
          city: data.city,
          country: "N/D"
        },
        email: data.email
      };
      dispatch(updateUser(updatedUser));
      router.push('/home');
    }
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledDiv>
          <label>
            Name:
            <input type="text" {...register("name")} />
            {errors.name && <span>This field is required</span>}
          </label>
        </StyledDiv>

        <StyledDiv>
          <label>
            Username:
            <input type="text" {...register("username")} />
            {errors.username && <span>This field is required</span>}
          </label>
        </StyledDiv>
        <StyledDiv>
          <label>
            City:
            <input type="text" {...register("city")} />
            {errors.city && <span>This field is required</span>}
          </label>
        </StyledDiv>
        <StyledDiv>
          <label>
            Email:
            <input type="text" {...register("email")} />
            {errors.email && <span>This field is required</span>}
          </label>
        </StyledDiv>

        <AddButton type="submit">Save</AddButton>
        <button type="button" onClick={() => router.push('/home')}>
          Cancel
        </button>
      </form>
    </StyledForm>
  );
}