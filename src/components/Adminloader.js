import { Audio,Blocks,TailSpin } from 'react-loader-spinner';

const Adminloader=()=>{
    return(
        <>
        <div className='loader1'>
        <Audio
        height={80}
        width={80}
        radius={9}
        color={["blue"]}
        ariaLabel="loading"
      
        />
           
  
        </div>

        
        </>
    )
}  
export default Adminloader;  