import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import CustomNav from '../components/CustomNav'
import TableTemplate from '../components/TableTemplate'
import { getData } from '../redux/actions/data'

const DataDashboard = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getData())
    }, [state.data])

    return (
        <div
            style={{
                width: '100%',
                alignSelf: 'flex-start',
            }}>
            <CustomNav />
            <TableTemplate
                rows={[
                    {
                        "id": 1,
                        "2000": 'Washing items',
                        "2001": 'Adding items',
                        "2002": "Having them washed"
                    },
                    {
                        "id": 2,
                        "2000": 'Washing items',
                        "2001": 'Adding items',
                        "2002": "Having them washed"
                    },
                    {
                        "id": 3,
                        "2000": 'Washing items',
                        "2001": 'Adding items',
                        "2002": "Having them washed"
                    },
                    {
                        "id": 4,
                        "2000": 'Washing items',
                        "2001": 'Adding items',
                        "2002": "Having them washed"
                    },
                    {
                        "id": 5,
                        "2000": 'Washing items',
                        "2001": 'Adding items',
                        "2002": "Having them washed"
                    },
                    {
                        "id": 6,
                        "2000": 'Washing items',
                        "2001": 'Adding items',
                        "2002": "Having them washed"
                    },

                ]}
                columns={["2000", "2001", "2002"]}
            />
        </div>
    )
}

export default DataDashboard