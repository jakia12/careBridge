import PageBanner from "@/components/shared/PageBanner";
import BlogGrid from "./components/BlogGrid";

const BlogPage = () => {
  return (
    <div>
      <PageBanner title="Recent Blogs" />
      <BlogGrid />
    </div>
  );
};

export default BlogPage;
