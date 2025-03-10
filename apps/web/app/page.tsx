import {client} from '@repo/db/client';

export default  async function Home() {

   const lung =  await client.user.findFirst()
  return <div>
   {lung?.name};
   <br />
    hello ji 
    <br />
    {lung?.username};
  </div>
}
