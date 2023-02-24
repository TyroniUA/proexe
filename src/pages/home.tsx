import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { User } from '@/types/types';
import styled from "styled-components";
import { openModal } from '@/store/modalSlice';
import Modal from '@/components/modal';
import { RootState } from '@/store/store';
import { fetchUsers, setUsers } from '@/store/userSlice';
import { StyledTable, StyledTd, StyledTh, HomePage,
  EditButton, StyledButton, AddButton, } from '@/constants/constants';


interface HomeProps {
  users: User[];
}

const Home: React.FC<HomeProps> = () => {
  // const [sortedUsers, setSortedUsers] = useState(users);
  const dispatch = useDispatch();
  const router = useRouter();
  const { users } = useSelector((state: RootState) => state.user);
  const handleSort = () => {
    const array = [...users];
    const sorted = array.sort((a, b) => {
      if (a.username < b.username) {
        return -1;
      }
      if (a.username > b.username) {
        return 1;
      }
      return 0;
    });
    dispatch(setUsers(sorted))
    // setSortedUsers(sorted);
  };

  useEffect(() => {
    if(users.length <= 0){
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  const handleDeleteUser = (user: User) => {
    dispatch(openModal(user));
  };
  const handleEditUser = (user: User) => {
    router.push(`/edit/${user.id}`);
  };

  return (
    <HomePage>
      <h1>User List</h1>
      <Link href="/add">
        <AddButton>
          Add User
        </AddButton>
      </Link>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Name</StyledTh>
            <StyledTh>
              <div
                style={{ cursor: "pointer" }}
                onClick={handleSort}
              >
                Username

              </div>
            </StyledTh>
            <StyledTh>City</StyledTh>
            <StyledTh>Email</StyledTh>
            <StyledTh>Edit</StyledTh>
            <StyledTh>Delete</StyledTh>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <StyledTd>{user.id}</StyledTd>
              <StyledTd>{user.name}</StyledTd>
              <StyledTd>{user.username}</StyledTd>
              <StyledTd>{user.address.city}</StyledTd>
              <StyledTd>{user.email}</StyledTd>
              <StyledTd>
                <EditButton onClick={() => handleEditUser(user)}>
                  Edit
                </EditButton>
              </StyledTd>
              <StyledTd>
                <StyledButton onClick={() => handleDeleteUser(user)}>
                  Delete
                </StyledButton>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Modal />
    </HomePage>
  );
};

export default Home;