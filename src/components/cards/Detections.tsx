import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Panel } from '../../data/constants';

interface Props {
    panels: Panel[]
    color: string
}

const Detections = (props:Props) => {
    return (
        <div className="card">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={window.innerWidth < 600 ? window.innerWidth*1.5: window.innerWidth < 900 ? window.innerWidth: window.innerWidth/1.6}
                    height={window.innerHeight < 600 ? 6 * 25: window.innerHeight < 600 ? 6 * 40: 6 * 50}
                    data={props.panels}
                    layout="vertical"
                    margin={{
                    top: 20,
                    right: 40,
                    left: 45,
                    bottom: 5,
                    }}
                >
                    <XAxis type="number" tickCount={0}/>
                    <YAxis type="category" 
                                dataKey="name"
                                width={window.innerHeight/6}
                                fontWeight={'bold'} 
                                fontSize={window.innerWidth < 600 ? window.innerWidth/50: window.innerWidth < 900 ? window.innerWidth/50: window.innerWidth/200} 
                                />
                    <Tooltip />
                    <Bar dataKey="Detections" fill={props.color} label={{ fill: 'black', position: 'right' }} maxBarSize={window.innerHeight/75}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Detections