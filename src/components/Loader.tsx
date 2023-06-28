import { ThreeDots } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-300 bg-opacity-50">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="violet"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  )
}

export default Loader
