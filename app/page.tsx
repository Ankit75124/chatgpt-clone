import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
function HomePage() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen px-2 text-white ">
        <h1 className="text-5xl font-bold mb-20">Chat GPT </h1>

        <div className='flex space-x-2 text-center'>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Icons */}
              <SunIcon className="h-8 w-8 "/>
              <h2>Examples</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">"Explain Something to me"</p>
              <p className="infoText">"One Piece or Naruto which will you choose?" </p>
              <p className="infoText">"What do you know about Python"</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Icons */}
              <BoltIcon className="h-8 w-8 "/>
              <h2>Capabilities</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">Remembers what user said earlier in the conversation</p>
              <p className="infoText">Allows user to provide follow-up corrections </p>
              <p className="infoText">Trained to decline inappropriate requests
</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Icons */}
              <ExclamationTriangleIcon className="h-8 w-8 "/>
              <h2>Limitations</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">May occasionally generate incorrect information</p>
              <p className="infoText">May occasionally produce harmful instructions or biased content</p>
              <p className="infoText">Limited knowledge of world and events after 2021</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default HomePage