import { Link, LoaderFunction, useLoaderData } from "remix";

interface Post {
  title: string,
  slug?: string,
  link?: string
}

export const loader: LoaderFunction = () => {
  const posts: Post[] = [
    {
      title: 'Adding Tailwind CSS to Remix',
      slug: null,
      link: 'https://www.better.dev/adding-tailwind-css-to-remix'
    },
    {
      title: 'Introduction to React Prop-Types',
      slug: null,
      link: 'https://srobdev.hashnode.dev/introduction-to-react-prop-types',
    },
    {
      title: 'TailwindCSS: The Very Basics (Installation + Intellisense)',
      slug: null,
      link: 'https://srobdev.hashnode.dev/tailwindcss-the-very-basics-installation-intellisense'
    }
  ]
  return posts;
}

export default function PostsIndex() {
  const posts: any = useLoaderData<Post[]>();
  console.log('Turbo Console Log ~ file: index.tsx ~ line 25 ~ PostsIndex ~ posts', posts);
  return (
    <div>
      <h2>posts</h2>
      <ul>
        {posts.map((post: Post) => 
          <li key={post.title}>
            {post.slug ? 
              <Link to={post.slug}>{post.title}</Link> :
              <a href={post.link}>{post.title}</a>}
          </li>
        )}
      </ul>
    </div>
  )
}