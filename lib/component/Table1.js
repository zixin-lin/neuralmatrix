export default function Getdata(props) {
    // console to check data props is available or not
    console.log(props.data)
    console.log(123456789)
    console.log(props)
    //destructuring data from props
    const data = props
    const res = data.props
    //console.log('testcode')
    
    //Iterating array using map function
   
    const stock = res.map( d =>
      <tr key = {d}>
        <td>{d.Date}</td>
        <td>{d.Symbol}</td>
        <td>{d.Exchange}</td>
        <td>{d.Close}</td>
        <td>{d.Open}</td>
        <td>{d.High}</td>
        <td>{d.Low}</td>
        <td>{d.Volume}</td>
      </tr>
      
    )
  
    return (
      <div>
        <table>
          <thead>
            <th>DATE</th>
            <th>SYMBOL</th>
            <th>EXCHANGE</th>
            <th>CLOSE</th>
            <th>OPEN</th>
            <th>HIGH</th>
            <th>LOW</th>
            <th>VOLUME</th>
          </thead>
          <tbody>
            {stock}
          </tbody>
        </table>
      </div>
    )
  }