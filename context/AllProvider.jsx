import UserProvider from "./UserContext";
import CategoryProvider from "./CategoryContext";
import StoreProvider from "./StoreContext";

const AllProvider = ({ children }) => {
  return (
    <UserProvider>
      <StoreProvider>
        <CategoryProvider>
          {children}
        </CategoryProvider>
      </StoreProvider>
    </UserProvider>
  );
};

export default AllProvider;