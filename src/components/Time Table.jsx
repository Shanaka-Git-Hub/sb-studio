import React from 'react'

export default function TimeTable() {
    return (
        <div className='container-fluid d-flex align-items-center jutify-content-center'
            style={{ height: 'auto' }} >
            <table className='table table-hover mt-5 ms-5 '>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Open</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sunday</td>
                        <td>8.00am</td>
                        <td>5.00pm</td>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>8.00am</td>
                        <td>5.00pm</td>
                    </tr>
                    <tr>
                        <td>Thuseday</td>
                        <td>8.00am</td>
                        <td>5.00pm</td>
                    </tr>

                    <tr>
                        <td>Wendsday</td>
                        <td>8.00am</td>
                        <td>5.00pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>8.00am</td>
                        <td>5.00pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>8.00am</td>
                        <td>5.00pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>8.00am</td>
                        <td>5.00pm</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
