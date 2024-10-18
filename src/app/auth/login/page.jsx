// pages/index.js
import Layout from "@/components/LoginLayout";
import SignupFormDemo from "@/components/example/signup-form-demo";

const Login = () => {
  return (
    <>
    <section className="h-[150vh] flex items-center justifh-center">
        <SignupFormDemo />  
    </section>
    </>
  );
};

Login.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Login;