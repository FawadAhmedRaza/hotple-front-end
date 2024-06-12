import AuthGuard from "@/guard/AuthGuard";



const AuthenticatedLayout = ({ children }) => {
  return (
    <AuthGuard>
      {children}
    </AuthGuard>

  );
};

export default AuthenticatedLayout;
