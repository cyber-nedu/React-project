import { useEffect } from "react";
import './Blog.css'


const posts = [
  {
    id: 1,
    title: "Understanding React Hooks: useState vs. useReducer",
    excerpt: "A deep dive into managing state in functional components. Learn when to choose the simplicity of useState and when to leverage the power of useReducer.",
    author: "Alex J.",
    date: "Dec 10, 2025",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1593720216719-c60395c898b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHx8fHx8fHx8fDE2NzUwNzE5NTI&ixlib=rb-4.0.3&q=80&w=600"
  },
  {
    id: 2,
    title: "Optimizing Database Queries with SQL Indexing",
    excerpt: "Boost your application's performance by mastering the art of indexing. We cover B-tree indexes, composite indexes, and common pitfalls.",
    author: "Maria K.",
    date: "Dec 05, 2025",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHx8fHx8fHx8fDE2NzUwNzE5NTI&ixlib=rb-4.0.3&q=80&w=400"
  },
  {
    id: 3,
    title: "The Future of Web Dev: WebAssembly (Wasm) Explained",
    excerpt: "WebAssembly is changing the game. Discover how to run high-performance code in the browser and what it means for JavaScript.",
    author: "Zane T.",
    date: "Nov 28, 2025",
    category: "Future Tech",
    image: "https://images.unsplash.com/photo-1627398242475-4309c622956f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHx8fHx8fHx8fDE2NzUwNzE5NTI&ixlib=rb-4.0.3&q=80&w=400"
  },
];

// Helper components
const PostCard = ({ post }) => (
  <div className="post-card">
      <img className="card-img" src="/images/card.jpg" alt="" /><br />
    
    <span className="post-card-category">
      {post.category}
    </span>
    <h3 className="post-card-title">
      {post.title}
    </h3>
    <p className="post-card-excerpt">
      {post.excerpt}
    </p>
    <div className="post-card-meta">
      <span>By {post.author}</span>
      <span>{post.date}</span>
    </div>
  </div>
);


const Sidebar = () => (
  <aside className="blog-sidebar">
    <div className="sidebar-section search-section">
      <h4 className="sidebar-title">Search Articles</h4>
      <input
        type="text"
        placeholder="e.g., React Hooks, Javascript"
        className="sidebar-search-input"
      />
    </div>

    <div className="sidebar-section categories-section">
      <h4 className="sidebar-title">Categories</h4>
      <ul className="categories-list">
        {['Frontend', 'Backend', 'DevOps', 'Cloud', 'AI/ML', 'Future Tech', 'Website'].map(cat => (
          <li key={cat}>
            <a href={`/blog/category/${cat.toLowerCase()}`} className="category-link">
              {cat}
              <span className="category-count">3</span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="sidebar-section newsletter-section">
      <h4 className="sidebar-title">Newsletter</h4>
      <p className="newsletter-text">Get the latest code insights directly in your inbox.</p>
      <input
        type="email"
        placeholder="Your email address"
        className="sidebar-newsletter-input"
      />
      <button className="sidebar-subscribe-button">
        Subscribe
      </button>
    </div>
  </aside>
);

function BlogPage() {
  useEffect(() => {
    document.title = 'CodeLab - Blog';
  });

  const featuredPost = posts[0];

  const blogWord = { title: 'The action of making the best or most effective use of a situation or resource. (Perfect for performance or SQL content).' };

  return (
    <div className="blog-page-container">

      {/* --- Main Content Layout --- */}
      <main className="main-content-wrapper">

        {/* --- Header Section --- */}
        <header className="blog-header">
          <h1 className="header-title">
            CodeLab <span className="header-highlight">Blog</span>
          </h1>
          <p className="header-subtitle">
            Your source for modern web development, deep tech dives, and coding best practices.
          </p>
        </header>

        {/* --- Featured Post Section --- */}
        <section className="featured-section">
          <h2 className="section-title featured-title">Featured Article</h2>
          <div className="featured-article">
            <div className="featured-article-image-wrapper">
              <h1>Relevance Optimization</h1>
              <small>{blogWord.title}</small>
              <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis similique debitis aspernatur error aliquid? Blanditiis quasi dolore modi, nemo ex ipsam labore voluptatum incidunt et. Fugit ducimus harum expedita animi, delectus vero at aperiam iste commodi magni? Eveniet eligendi fuga facere doloribus, provident repudiandae sequi temporibus laboriosam asperiores neque. Quibusdam.</small>
            </div>
            <div className="featured-article-content">
              <span className="featured-meta">
                {featuredPost.category} | {featuredPost.date}
              </span>
              <h3 className="featured-post-title">
                {featuredPost.title}
              </h3>
              <p className="featured-excerpt">
                {featuredPost.excerpt}
              </p>
              <div className="featured-author-info">
                <span className="featured-author">By {featuredPost.author}</span>
              </div>
              <a href={`/blog/${featuredPost.id}`} className="featured-read-more">
                Read Full Article
                <svg className="read-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
        </section>

        {/* --- Main Blog Grid & Sidebar --- */}
        <div className="main-content-grid">

          {/* Main Articles Grid */}
          <div className="articles-area">
            <h2 className="section-title latest-posts-title">Latest Posts</h2>
            <div className="posts-grid">
              {posts.slice(1).map(post => (
                <PostCard key={post.id} post={post} />
              ))}
  
              <PostCard post={{ id: 4, title: "Next.js 14 Server Components Deep Dive", excerpt: "Exploring the new paradigm shift in rendering and data fetching with React.", author: "Ella P.", date: "Nov 20, 2025", category: "Frameworks" }} />
              <PostCard post={{ id: 5, title: "CI/CD Pipeline with GitHub Actions", excerpt: "Automate your deployments and testing with this powerful integrated tool.", author: "Chen W.", date: "Nov 15, 2025", category: "DevOps", image: "https://images.unsplash.com/photo-1510915364890-a7d4a2592780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyMzF8MHwxfGFsbHx8fHx8fHx8fDE2NzUwNzE5NTI&ixlib=rb-4.0.3&q=80&w=400" }} />
            </div>

            {/* Pagination Placeholder */}
            <div className="pagination-area">
              <button className="load-more-button">Load More Articles</button>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />

        </div>

      </main>

    </div>
  );
}

export default BlogPage;