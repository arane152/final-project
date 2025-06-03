import UserProvider from "./UserContext";
import CategoryProvider from "./CategoryContext";
import StoreProvider from "./StoreContext";
import PostProvider from "./PostContext.jsx";

const AllProvider = ({ children }) => {
  return (
    <UserProvider>
      <PostProvider>
        <StoreProvider>
          <CategoryProvider>
            {children}
          </CategoryProvider>
        </StoreProvider>
      </PostProvider>
    </UserProvider>
  );
};

export default AllProvider;