import Button from "../Button/Button"
import "./Title.css"


function Title() {
  return (
    <main className="title">
        <h1 className='user-page-title'>POWER TRACKS</h1>
            <div className='user-page-subtitle'>
                    <p className='text-center '>Power Tracks is known in the market as the leading solar home power system</p>
                    <p className='text-center'>provider in all over India.</p>
                    {/* <p className='text-3xl text-center'>book your tickets in seconds...</p> */}
            </div>

            <div className='flex items-center justify-around my-32'>
                <Button text="Discover more" className='title-btn' />

                {/* <button className='py-4 px-8 bg-rose-600 rounded-xl font-bold text-white transition-all hover:scale-110 hover:bg-rose-500' >Book tickets</button> */}
            </div>
    </main>
  )
}

export default Title