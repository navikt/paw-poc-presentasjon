const Box = props => {
  const { url, title, description } = props
  return (
    <a href={url} className='flex-grow'>
      <div className='bg-white p-4 m-1 border border-navGra40'>
        <h2 className='text-center text-2xl font-semibold'>{title}</h2>
        <p>
          {description}
        </p>
      </div>
    </a>
  )
}

export default Box
