import { useEffect } from "react";

function BlogPage() {

  useEffect(() => {
    document.title = 'Register - Blog'
  })
  return (
    <>
      <h1>This is the BLog page</h1>
    </>
  );
}

export default BlogPage;