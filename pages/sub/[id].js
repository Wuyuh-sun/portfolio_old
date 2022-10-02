import {useRouter} from 'next/router';

export default function SubID() {
  const router = useRouter();

  return(
    <>
      <h1>{router.query.id}</h1>
    </>
  )
}
