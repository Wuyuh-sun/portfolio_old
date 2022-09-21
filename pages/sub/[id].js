import {useRouter} from 'next/router';

export default function subID() {
  const router = useRouter();

  return(
    <>
      <h1>{router.query.id}</h1>
    </>
  )
}
