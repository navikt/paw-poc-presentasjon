import Head from 'next/head'
import LinkBox from '../../components/link-box'

const data = [
  {
    id: 'hurtigveileder',
    url: '/muligheter/hurtigveileder',
    title: 'Hurtigveileder',
    description: 'Gi kort og konkret veiledning til standardbrukeren'
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

export default () => {
  return (
    <>
      <Head>
        <meta name='description' content='Muligheter for team PAW' />
        <title>Muligheter</title>
      </Head>
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-semibold'>Muligheter</h1>
        <div className='flex flex-col md:flex-row justify-around'>
          {data.map(item => <LinkBox {...item} key={item.id} />)}
        </div>
      </div>
    </>
  )
}
