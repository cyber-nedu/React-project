import { useEffect } from "react";

function ContactPage() {
    useEffect(() => {
      document.title = 'Register - Contact'
    })

  return (
    <>
      <h1>This is the Contact page</h1>
    </>
  );
}

export default ContactPage;