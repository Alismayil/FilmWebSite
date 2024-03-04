import React from 'react'
import ChartAdmin from '../../components/ChartAdmin'
import NotMeanBoxPart2 from '../../components/NotMeanBoxPart2'
import Dashboard from '../../layout/Dashboard'
import './ChartPageAdmin.scss'

function ChartPageAdmin() {
    return (
            <div style={{ display: 'flex' }}>
                <NotMeanBoxPart2 />
                <div id='chartPageAdmin'>
                    <Dashboard />
                    <ChartAdmin/>
                </div>
            </div>
    )
}

export default ChartPageAdmin