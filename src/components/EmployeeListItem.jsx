

function EmployeeListItem(props){
    return(
        <>
            {/* <img src="https://via.placeholder.com/150" alt="profile picture"></img> */}
            <img src="https://via.placeholder.com/150" alt="profile picture">{props.img}</img>
            <h3 >{props.name}</h3>
            <p>{props.title}</p>
    
        </>
    )
    }
    
    
    export default EmployeeListItem