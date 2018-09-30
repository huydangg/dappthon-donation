import * as React from 'react'
import { Link } from 'react-router-dom'


const Event = (props) => {
  return (
    <tbody>
    <tr>
        <td><span className="text-muted">001401</span></td>
        <td>{props.name}</td>
        <td>
          {props.company}</td>
        <td>
          {props.created}</td>
        <td>
          {props.expire}</td>
        <td>
          <span className="status-icon bg-success"></span> {props.status} </td>
        <td>${props.target}</td>
        <td>${props.balance}</td>
        <td className="text-right">
          <Link to={`/events/${props.id}`} className="btn btn-secondary btn-sm">Detail</Link>
        </td>
      </tr>
    </tbody>
  )
}

export default Event;