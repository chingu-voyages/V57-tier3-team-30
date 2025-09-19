import Image from 'next/image'

export const Footer = () =>{
return (
  <div className='flex flex-row justify-between items-start px-9 py-9 bg-primary-black-100 mt-4 gap-2'>
    <div className='logo'>
      <Image src="/logo.png" width={150} height={150} alt={'logo'}/>
      <p className='w-xs mt-2'>MergeBoard is your go to app for keeping track of you PRs</p>
    </div>
    <div className=' flex flex-col gap-2'>
      <h3>Team</h3>
      <div><a href="https://github.com/Xondacc">Ruth Igwe-Oruta</a></div>
      <div><a href="https://github.com/fmtabbara">Fouad Tabbara</a></div>
      <div><a href="https://github.com/skellynb">Bisola .S. Ogunsina</a></div>
      <div><a href="https://github.com/EslemOuederni">Isslem Ouederni</a></div>
      <div><a href="https://github.com/Shaimaa01">Shaimaa Kamel</a></div>
    </div>
    <div>
      <h3 className='mb-2'>Github Repo</h3>
      <a href="https://github.com/chingu-voyages/V57-tier3-team-30">https://github.com/chingu-voyages/V57-tier3-team-30</a>
    </div>
  </div>
)
}