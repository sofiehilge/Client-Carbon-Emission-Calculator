const ProgressBar = ({bgcolor,progress,height}) => {
    
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 40,
        margin: 50
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
     
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
       
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
 
export default ProgressBar;

//here is the link to a progressbas:https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/?ref=gcse