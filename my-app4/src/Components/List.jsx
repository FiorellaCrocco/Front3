/* eslint-disable react/prop-types */
function List(props) {
    console.log(props);
    return (
        <ul>
            {props.children}
        </ul> 
    );
  }
  
  export default List;