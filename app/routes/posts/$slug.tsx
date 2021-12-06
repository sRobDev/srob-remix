export default function Post({slug} : { slug: string}) {
  return (
    <div>
      this is an individual post
      {slug}
    </div>
  )
}