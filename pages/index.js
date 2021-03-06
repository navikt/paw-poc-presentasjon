import Head from 'next/head'
import LinkBox from '../components/link-box'

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
    description: 'Eksperimenter og andre aktiviteter på jakt etter innsikt'
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

function Home () {
  return (
    <>
      <Head>
        <meta name='description' content='Tanker, ord og handlinger fra team PAW' />
        <title>Team PAW</title>
      </Head>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-semibold'>Team PAW</h1>
        <div className='flex flex-col md:flex-row justify-around'>
          {data.map(item => <LinkBox {...item} key={item.id} />)}
        </div>
      </div>
    </>
  )
}

export default Home
