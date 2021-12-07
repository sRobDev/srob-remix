import { Link, LoaderFunction, useLoaderData } from "remix";

interface Post {
  title: string,
  slug?: string,
  link?: string
}

export const loader: LoaderFunction = () => {
  const posts: Post[] = [
    {
      title: 'Adding Sass to Remix',
      link: 'https://www.better.dev/adding-sass-to-remix'
    },
    {
      title: 'Adding Tailwind CSS to Remix',
      link: 'https://www.better.dev/adding-tailwind-css-to-remix'
    },
    {
      title: 'Introduction to React Prop-Types',
      link: 'https://srobdev.hashnode.dev/introduction-to-react-prop-types',
    },
    {
      title: 'TailwindCSS: The Very Basics (Installation + Intellisense)',
      link: 'https://srobdev.hashnode.dev/tailwindcss-the-very-basics-installation-intellisense'
    }
  ]
  return posts;
}

export default function PostsIndex() {
  const posts: any = useLoaderData<Post[]>();
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