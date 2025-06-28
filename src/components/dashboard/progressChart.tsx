import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PROGRES_DATA } from '@/data/dashboard/stats-page-data';

const Y_AXIS_MIN = 50;

const ProgressChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Progress Over Time</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[400px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={PROGRES_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis domain={[Y_AXIS_MIN, 100]} />
							<Tooltip />
							<Legend />
							<Line
								type="monotone"
								dataKey="score"
								name="Average Score"
								stroke="#7C3AED"
								strokeWidth={2}
								dot={{ r: 5 }}
								activeDot={{ r: 8 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default ProgressChart;
