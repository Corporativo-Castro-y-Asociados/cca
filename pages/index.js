import Link from 'next/link'
export default () => (
  <div>
    Hola Mundo.{' '}
    <Link href='/about' as={process.env.BACKEND_URL + '/about'}>
      <a>Acerca</a>
    </Link>
  </div>
)
