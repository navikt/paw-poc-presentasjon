import Head from 'next/head'

const data = [
  {
    id: 'maal',
    url: '/maal',
    title: 'Mål',
    description: ''
  },
  {
    id: 'muligheter',
    url: '/muligheter',
    title: 'Muligheter',
    description: ''
  },
  {
    id: 'tanker',
    url: '/tanker',
    title: 'Tanker',
    description: ''
  },
  {
    id: 'aarsrapport',
    url: '/aarsrapport',
    title: 'Årsrapport',
    description: ''
  },
  {
    id: 'teamet',
    url: '/teamet',
    title: 'Teamet',
    description: ''
  }
]

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

function Home () {
  return (
    <>
      <Head>
        <meta name='description' content='Tanker, ord og handlinger fra team PAW' />
        <title>Team PAW</title>
      </Head>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-semibold'>Team PAW</h1>
        <div className='flex flex-col md:flex-row justify-between'>
          {data.map(item => <Box {...item} key={item.id} />)}
        </div>
      </div>
    </>
  )
}

export default Home
